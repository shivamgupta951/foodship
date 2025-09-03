"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "../lib/utils";

export function Button({
  borderRadius = 20,
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        "relative h-12 w-24 overflow-hidden bg-transparent p-[3px] text-xl",
        containerClassName
      )}
      style={{
        borderRadius: `${borderRadius}px`,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `${borderRadius * 0.96}px` }}
      >
        <MovingBorder duration={duration} borderRadius={borderRadius}>
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className
        )}
        style={{
          borderRadius: `${borderRadius * 0.96}px`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  borderRadius = 20,
  ...otherProps
}) => {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const path = pathRef.current;
    if (!path) return; // ✅ Skip when unmounted
    try {
      const length = path.getTotalLength();
      if (length > 0) {
        const pxPerMillisecond = length / duration;
        progress.set((time * pxPerMillisecond) % length);
      }
    } catch (e) {
      // ✅ Prevent crash if element is not rendered
      return;
    }
  });

  const x = useTransform(progress, (val) => {
    const path = pathRef.current;
    if (!path) return 0;
    try {
      return path.getPointAtLength(val)?.x ?? 0;
    } catch {
      return 0;
    }
  });

  const y = useTransform(progress, (val) => {
    const path = pathRef.current;
    if (!path) return 0;
    try {
      return path.getPointAtLength(val)?.y ?? 0;
    } catch {
      return 0;
    }
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          ref={pathRef}
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx={Number(borderRadius) || 0}
          ry={Number(borderRadius) || 0}
          fill="none"
          stroke="transparent"
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
