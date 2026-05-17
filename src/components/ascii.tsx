"use client";

import React, { useEffect, useRef } from "react";

const CHAR = "`~._SINGH_.~`      `~._SINGH_.~`";
const MAX = CHAR.length * 2;

const FRAMES = 2000;
const BLUR_STEPS = 100;

const HOVER_SEQUENCE = "JASHAN";
const HOVER_FRAME_DELAY = 5;

class FrameLoop {
  frames: number;
  min: number;
  max: number;
  pingpong: boolean;
  ease: (t: number) => number;
  value: number;
  t: number;
  dir: number;

  constructor(
    frames: number,
    min: number,
    max: number,
    pingpong: boolean,
    ease: (t: number) => number
  ) {
    this.frames = frames;
    this.min = min;
    this.max = max;
    this.pingpong = pingpong;
    this.ease = ease;
    this.value = min;
    this.t = 0;
    this.dir = 1;
  }

  set(frame: number) {
    this.t = frame / this.frames;
    this.value =
      this.min + (this.max - this.min) * this.ease(this.t);
  }

  inc() {
    this.t += this.dir / this.frames;

    if (this.pingpong) {
      if (this.t > 1) {
        this.t = 1;
        this.dir = -1;
      }
      if (this.t < 0) {
        this.t = 0;
        this.dir = 1;
      }
    } else {
      if (this.t > 1) this.t = 0;
    }

    this.value =
      this.min + (this.max - this.min) * this.ease(this.t);
  }
}

const easeQuadInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const random = (max: number) => Math.random() * max;

const LiquidGlassAscii: React.FC = () => {
  const preRef = useRef<HTMLPreElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const animationRef = useRef<number>(0);

  const asciiRef = useRef<string[][]>([]);
  const waveMapRef = useRef<FrameLoop[][]>([]);
  const hoverMapRef = useRef<number[][]>([]);

  const canvasWidthRef = useRef(0);
  const canvasHeightRef = useRef(0);

  const mouseRef = useRef({
    x: -1,
    y: -1,
    active: false,
    time: 0,
  });

  const createLayer = (
    width: number,
    height: number,
    fill: string
  ) => {
    return Array.from({ length: height }, () =>
      Array.from({ length: width }, () => fill)
    );
  };

  const clearAscii = () => {
    const ascii = asciiRef.current;

    for (let y = 0; y < ascii.length; y++) {
      for (let x = 0; x < ascii[y].length; x++) {
        ascii[y][x] = " ";
      }
    }
  };

  const getCharDimensions = () => {
    const temp = document.createElement("span");

    temp.style.position = "absolute";
    temp.style.visibility = "hidden";
    temp.style.whiteSpace = "pre";
    temp.style.fontFamily = "'IBM Plex Mono', monospace";
    temp.style.fontSize = "0.72vw";
    temp.style.lineHeight = "1.05";

    temp.innerText = "@";

    document.body.appendChild(temp);

    const rect = temp.getBoundingClientRect();

    document.body.removeChild(temp);

    return {
      width: rect.width,
      height: rect.height,
    };
  };

  const setup = () => {
    const width = canvasWidthRef.current;
    const height = canvasHeightRef.current;

    asciiRef.current = createLayer(width, height, " ");

    hoverMapRef.current = Array.from({ length: height }, () =>
      new Array(width).fill(0)
    );

    let waveMap: number[][] = createLayer(
      width,
      height,
      " "
    ) as unknown as number[][];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        waveMap[y][x] = random(MAX);
      }
    }

    for (let step = 0; step < BLUR_STEPS; step++) {
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const value = waveMap[y][x];

          const left =
            waveMap[y][Math.max(0, x - 1)] ?? value;

          const right =
            waveMap[y][Math.min(width - 1, x + 1)] ??
            value;

          const top =
            waveMap[Math.max(0, y - 1)]?.[x] ?? value;

          const bottom =
            waveMap[Math.min(height - 1, y + 1)]?.[x] ??
            value;

          waveMap[y][x] =
            (value + left + right + top + bottom) / 5;
        }
      }
    }

    let valMin = Infinity;
    let valMax = -Infinity;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        valMin = Math.min(valMin, waveMap[y][x]);
        valMax = Math.max(valMax, waveMap[y][x]);
      }
    }

    const mapped: FrameLoop[][] = [];

    for (let y = 0; y < height; y++) {
      mapped[y] = [];

      for (let x = 0; x < width; x++) {
        const value =
          ((waveMap[y][x] - valMin) /
            (valMax - valMin)) *
          FRAMES;

        const loop = new FrameLoop(
          FRAMES,
          0,
          CHAR.length - 1,
          true,
          easeQuadInOut
        );

        loop.set(value);

        mapped[y][x] = loop;
      }
    }

    waveMapRef.current = mapped;
  };

  const resizeCanvas = () => {
    if (!containerRef.current) return;

    const dims = getCharDimensions();

    canvasWidthRef.current = Math.max(
      20,
      Math.floor(
        containerRef.current.clientWidth / dims.width
      )
    );

    canvasHeightRef.current = Math.max(
      10,
      Math.floor(
        containerRef.current.clientHeight / dims.height
      )
    );

    setup();
  };

  const draw = () => {
    clearAscii();

    const ascii = asciiRef.current;
    const waveMap = waveMapRef.current;
    const hoverMap = hoverMapRef.current;

    const mouse = mouseRef.current;

    mouse.time += 0.016;

    for (let y = 0; y < canvasHeightRef.current; y++) {
      for (let x = 0; x < canvasWidthRef.current; x++) {
        let idx = Math.round(waveMap[y][x].value);

        idx = idx % CHAR.length;

        if (mouse.active) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;

          const morphX =
            1 + Math.sin(mouse.time * 1.5) * 3;

          const morphY =
            1 + Math.cos(mouse.time * 1.2) * 2;

          const dist2 =
            (dx * dx) / (morphX * morphX) +
            (dy * dy) / (morphY * morphY);

          if (dist2 < 1) {
            const dist = Math.sqrt(dist2);

            const darkenStrength = Math.pow(
              1 - dist,
              1.2
            );

            idx = Math.min(
              idx + Math.round(darkenStrength * 30),
              CHAR.length - 1
            );
          }
        }

        let char = CHAR[idx];

        if (hoverMap[y][x] > 0) {
          const seqIndex =
            HOVER_SEQUENCE.length -
            Math.floor(
              hoverMap[y][x] / HOVER_FRAME_DELAY
            );

          char =
            HOVER_SEQUENCE[
              Math.min(
                seqIndex,
                HOVER_SEQUENCE.length - 1
              )
            ];

          hoverMap[y][x]--;
        }

        ascii[y][x] = char;

        waveMap[y][x].inc();
      }
    }
  };

  const renderAscii = () => {
    if (!preRef.current) return;

    preRef.current.textContent = asciiRef.current
      .map((row) => row.join(""))
      .join("\n");
  };

  const loop = () => {
    draw();
    renderAscii();

    animationRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    resizeCanvas();

    const handleResize = () => resizeCanvas();

    window.addEventListener("resize", handleResize);

    loop();

    return () => {
      cancelAnimationFrame(animationRef.current);

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLPreElement>
  ) => {
    if (!preRef.current) return;

    const rect = preRef.current.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width) *
      canvasWidthRef.current;

    const y =
      ((e.clientY - rect.top) / rect.height) *
      canvasHeightRef.current;

    mouseRef.current.x = x;
    mouseRef.current.y = y;
    mouseRef.current.active = true;

    const gx = Math.floor(x);
    const gy = Math.floor(y);

    for (let yy = gy - 1; yy <= gy + 1; yy++) {
      if (
        yy < 0 ||
        yy >= canvasHeightRef.current
      )
        continue;

      for (let xx = gx - 1; xx <= gx + 1; xx++) {
        if (
          xx < 0 ||
          xx >= canvasWidthRef.current
        )
          continue;

        const currentChar =
          CHAR[
            Math.round(
              waveMapRef.current[yy][xx].value
            )
          ];

        if (currentChar !== " ") {
          hoverMapRef.current[yy][xx] =
            HOVER_SEQUENCE.length *
            HOVER_FRAME_DELAY;
        }
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-background backdrop-blur-[2px]" />

      <pre
        ref={preRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseRef.current.active = false;
        }}
        className="
          absolute inset-0
          overflow-hidden
          whitespace-pre
          select-none
          font-mono
          text-edge
          leading-[1.05]
          tracking-[0.01em]
          font-thin
          text-[0.72vw]
          md:text-[0.7vw]
          sm:text-[1.0vw]
          pointer-events-auto
        "
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      />
    </div>
  );
};

export default LiquidGlassAscii;