"use client";

import React from "react";
import { motion } from "framer-motion";
import { C } from "@/contants";

export function Marquee() {
  const words: string[] = [
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Drizzle",
    "Hono",
    "TypeScript",
    "React Native",
    "Expo",
    "Express",
    "JavaScript",
  ];

  return (
    <div
      className="py-6 overflow-hidden"
      style={{
        background: `${C.emerald}12`,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 whitespace-nowrap"
      >
        {[...words, ...words].map((w, i) => (
          <span
            key={i}
            className="text-xs font-mono font-semibold uppercase tracking-widest"
            style={{ color: `${C.emerald}99` }}
          >
            {w} <span style={{ color: `${C.emerald}44` }}>●</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
