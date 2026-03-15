"use client"

import { PanelHeader, SlantedLinesSubPanel, SubPanel } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter(){
    return(
      <div>
        <PanelHeader className="p-3 text-md md:text-lg font-bold">
          Newsletter
        </PanelHeader>
        <SubPanel>
          <SlantedLinesSubPanel className="p-7">
            <div className="flex flex-col sm:flex-row gap-5">
              <Input placeholder="Enter your email"/>
              <div className="w-fit ml-auto rounded-md ring ring-border ring-offset-2 ring-offset-background bg-muted">
                <Button variant="default" className="group px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </SlantedLinesSubPanel>
        </SubPanel>
      </div>
    )
}