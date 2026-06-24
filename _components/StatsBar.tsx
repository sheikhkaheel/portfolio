"use client";

import React from "react";
import { FadeUp } from "./FadeUp"; // Adjust path as needed
import { C } from "@/contants";

const STATS = [
  { value: "6+", label: "Years experience" },
  { value: "40+", label: "Projects shipped" },
  { value: "12+", label: "Happy clients" },
  { value: "∞", label: "Coffees consumed" },
];

export function StatsBar() {
  return (
    <div
      className="py-12 px-6"
      style={{
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.08} className="text-center">
            <p
              className="font-black text-3xl mb-1 text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(135deg, ${C.emerald}, ${C.cyan})`,
                WebkitBackgroundClip: "text",
              }}
            >
              {s.value}
            </p>
            <p className="text-xs font-medium" style={{ color: C.muted }}>
              {s.label}
            </p>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
