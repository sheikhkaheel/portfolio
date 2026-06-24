"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { HeroCanvas } from "./HeroCanvas";
import { HeroContent } from "./HeroContent";
import { HeroProps } from "@/types/hero.types";

export default function Hero({ C, SP, ALL_TAGS, TerminalLine }: HeroProps) {
  // Explicitly type the ref to target the wrapping section element
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-[100svh] w-full flex items-center overflow-hidden"
      style={{ background: C.bg }}
    >
      {/* Background Grid Accent */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* 3D Scene Isolation */}
      <HeroCanvas C={C} />

      {/* Animated Content Isolation */}
      <HeroContent
        y={y}
        opacity={opacity}
        C={C}
        SP={SP}
        ALL_TAGS={ALL_TAGS}
        TerminalLine={TerminalLine}
      />
    </section>
  );
}
