"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import ReactLenis, { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";

export default function SmoothScrolling({ children }: PropsWithChildren) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{ autoRaf: false }}
      ref={lenisRef}
      className="lenis"
    >
      {children}
    </ReactLenis>
  );
}
