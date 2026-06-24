"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "./FadeUp";
import { SectionLabel } from "./SectionLabel";
import { TiltCard } from "./TiltCard"; // Adjust path as needed
import { SP, C, TECH_GROUPS } from "@/contants";

// TypeScript interface for the internal SkillBar component
interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay: number;
}

function SkillBar({ name, level, color, delay }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ...SP.default, delay }}
      className="mb-5"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: C.white }}>
          {name}
        </span>
        <span className="text-xs font-mono" style={{ color }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: C.faint }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ ...SP.soft, delay: delay + 0.1 }}
          style={{
            height: "100%",
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            borderRadius: "99px",
            transformOrigin: "left",
          }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6" style={{ background: C.bg }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel text="// skills.json" />
          <FadeUp>
            <h2
              className="font-black"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: C.white,
                letterSpacing: "-0.03em",
              }}
            >
              The stack I live in.
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_GROUPS.map((group, gi) => (
            <TiltCard key={group.label} intensity={7}>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...SP.fluid, delay: gi * 0.1 }}
                className="h-full p-6 rounded-2xl"
                style={{
                  background: C.card,
                  border: `1px solid ${group.color}22`,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xl" style={{ color: group.color }}>
                    {group.icon}
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: C.white }}
                  >
                    {group.label}
                  </span>
                </div>
                {group.items.map((item, ii) => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    color={group.color}
                    delay={gi * 0.1 + ii * 0.06}
                  />
                ))}
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Tech logo row */}
        <FadeUp delay={0.3} className="mt-14">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "React", bg: "#0ea5e922" },
              { label: "Next.js", bg: "#ffffff11" },
              { label: "React Native", bg: "#61dafb22" },
              { label: "Expo", bg: "#000000" },
              { label: "Node.js", bg: "#22c55e22" },
              { label: "Hono", bg: "#f9731622" },
              { label: "Express", bg: "#ffffff0d" },
              { label: "PostgreSQL", bg: "#3b82f622" },
              { label: "Drizzle", bg: "#a3e63522" },
              { label: "JavaScript", bg: "#f59e0b22" },
              { label: "TypeScript", bg: "#3b82f622" },
            ].map((t) => (
              <motion.span
                key={t.label}
                whileHover={{ scale: 1.08, borderColor: C.emerald }}
                transition={SP.snappy}
                className="px-4 py-2 rounded-xl text-xs font-mono font-semibold"
                style={{
                  background: t.bg,
                  border: `1px solid ${C.border}`,
                  color: C.white,
                  cursor: "default",
                }}
              >
                {t.label}
              </motion.span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
