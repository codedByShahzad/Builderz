"use client";

import Image from "next/image";
import clsx from "clsx";

type MovingEdgeProps = {
  imageSrc: string;
  alt?: string;
  position?: "top" | "bottom";
  speed?: "slow" | "normal" | "fast";
  height?: number;
  className?: string;
};

const speedClasses = {
  slow: "animate-edge-scroll-slow",
  normal: "animate-edge-scroll",
  fast: "animate-edge-scroll-fast",
};

export default function MovingEdge({
  imageSrc,
  alt = "decorative edge",
  position = "top",
  speed = "normal",
  height = 34,
  className,
}: MovingEdgeProps) {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute left-0 z-[2] w-full overflow-hidden",
        position === "top" ? "top-0" : "bottom-0",
        className
      )}
      style={{ height }}
    >
      <div
        className={clsx(
          "flex w-max",
          speedClasses[speed],
          position === "bottom" && "scale-y-[-1]"
        )}
        style={{ height }}
      >
        {/* copy 1 */}
        <div className="flex shrink-0">
          <div className="relative h-full w-[1200px] sm:w-[1400px] lg:w-[1600px] xl:w-[1800px] 2xl:w-[2000px]">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              sizes="(max-width: 640px) 1200px, (max-width: 1024px) 1600px, 2000px"
              className="object-cover"
            />
          </div>
        </div>

        {/* copy 2 */}
        <div className="flex shrink-0">
          <div className="relative h-full w-[1200px] sm:w-[1400px] lg:w-[1600px] xl:w-[1800px] 2xl:w-[2000px]">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              sizes="(max-width: 640px) 1200px, (max-width: 1024px) 1600px, 2000px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}