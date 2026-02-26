"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from "@/components/kibo-ui/contribution-graph";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatISO, subDays } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { RiLoaderLine } from "react-icons/ri";

const MAX_LEVEL = 4;
const DEFAULT_USERNAME = "ogjash";

type ContributionsApiResponse = {
  contributions?: Array<{
    date: string;
    count: number;
    level?: number;
  }>;
  total?: Record<string, number>;
};

const Graph = ({ username = DEFAULT_USERNAME }: { username?: string }) => {
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [data]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(null);

        const today = new Date();
        const from = formatISO(subDays(today, 365), { representation: "date" });
        const to = formatISO(today, { representation: "date" });

        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(
            username
          )}?y=last`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to load GitHub contributions.");
        }

        const json: ContributionsApiResponse = await response.json();
        const allContributions = Array.isArray(json?.contributions)
          ? json.contributions
          : [];

        const contributions = allContributions.filter(
          (item) => item.date >= from && item.date <= to
        );

        const maxCount = Math.max(
          1,
          ...contributions.map((item) => item.count ?? 0)
        );

        const normalized: Activity[] = contributions.map((item) => {
          const count = item.count ?? 0;
          const level =
            typeof item.level === "number"
              ? item.level
              : Math.min(
                  MAX_LEVEL,
                  Math.max(0, Math.ceil((count / maxCount) * MAX_LEVEL))
                );

          return {
            date: item.date,
            count,
            level,
          };
        });

        setData(normalized);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError("Unable to load GitHub contributions.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchContributions();

    return () => controller.abort();
  }, [username]);

  if (loading) {
    return (
      <div className="px-3 mb-3 flex flex-col gap-2">
        <div className="w-full h-[70px] md:h-[112px]  rounded-md bg-muted animate-pulse" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <RiLoaderLine className="animate-spin size-3.5" />
            <span>Loading contributions...</span>
          </div>
          <div className="h-3 w-24 rounded bg-muted animate-pulse" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-3">
        <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2.5 text-sm text-destructive">
          <RiErrorWarningFill className="mt-0.5 size-4 shrink-0" />
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <ContributionGraph data={data} maxLevel={MAX_LEVEL} className="px-3 mb-3 w-full">
        <div ref={scrollRef} className="overflow-x-auto md:overflow-x-visible my-4 md:my-0">
          <div className="min-w-max md:min-w-0 mb-2 md:mb-0">
            <ContributionGraphCalendar>
              {({ activity, dayIndex, weekIndex }) => (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <g>
                      <ContributionGraphBlock
                        activity={activity}
                        className="cursor-pointer"
                        dayIndex={dayIndex}
                        weekIndex={weekIndex}
                      />
                    </g>
                  </TooltipTrigger>
                  <TooltipContent className="flex gap-1">
                    <p className="text-background">{activity.count} contributions on</p>
                    <p className="font-semibold text-background">{activity.date}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </ContributionGraphCalendar>
          </div>
        </div>
        <ContributionGraphFooter>
          <ContributionGraphTotalCount />
          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>
    </TooltipProvider>
  );
};

export default Graph;
