"use client";
import { ReactLenis } from "lenis/react";
import { useMemo } from "react";

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  const isDev = false;
  
  const options = useMemo(() => ({
    lerp: isDev ? 0.05 : 0.1, // Reduced smoothing in dev
    duration: isDev ? 1.0 : 1.5, // Shorter duration in dev
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
    frameRate: isDev ? 30 : 60, // Lower frame rate in dev
  }), [isDev]);

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;