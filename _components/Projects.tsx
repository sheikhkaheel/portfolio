"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "./FadeUp";
import { SectionLabel } from "./SectionLabel";
import { TiltCard } from "./TiltCard"; // Adjust path as needed
import { C, SP, PROJECTS } from "@/contants";

export function Projects() {
  // Explicitly typing the filter state
  const [filter, setFilter] = useState<string | null>(null);

  const filterTags: string[] = [
    "All",
    "Next.js",
    "React Native",
    "Expo",
    "Hono",
    "Express",
    "PostgreSQL",
    "Drizzle",
  ];

  const filtered =
    filter && filter !== "All"
      ? PROJECTS.filter((p) => p.tags.includes(filter))
      : PROJECTS;

  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ background: C.surface }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel text="// projects" />
          <FadeUp>
            <h2
              className="font-black mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: C.white,
                letterSpacing: "-0.03em",
              }}
            >
              Things I've built.
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: C.muted }}>
              A selection of full-stack projects spanning web platforms, mobile
              apps, and developer tools.
            </p>
          </FadeUp>
        </div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SP.default}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {filterTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setFilter(tag === "All" ? null : tag)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={SP.snappy}
              className="px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background:
                  filter === tag || (!filter && tag === "All")
                    ? C.emerald
                    : C.card,
                color:
                  filter === tag || (!filter && tag === "All")
                    ? "#000"
                    : C.muted,
                border: `1px solid ${
                  filter === tag || (!filter && tag === "All")
                    ? C.emerald
                    : C.border
                }`,
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ ...SP.default, delay: i * 0.08 }}
              >
                <TiltCard intensity={8} className="h-full">
                  <div
                    className="h-full p-7 rounded-2xl flex flex-col"
                    style={{
                      background: C.card,
                      border: `1px solid ${p.color}22`,
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                          style={{
                            background: `${p.color}22`,
                            color: p.accent,
                          }}
                        >
                          {p.icon}
                        </div>
                        <div>
                          <h3
                            className="font-bold text-base"
                            style={{ color: C.white }}
                          >
                            {p.title}
                          </h3>
                          <p className="text-xs" style={{ color: C.muted }}>
                            {p.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {[p.links.github, p.links.live].map((href, li) => (
                          <motion.a
                            key={li}
                            href={href}
                            whileHover={{ scale: 1.15, color: p.accent }}
                            transition={SP.snappy}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                            style={{
                              background: C.faint,
                              color: C.muted,
                              textDecoration: "none",
                            }}
                          >
                            {li === 0 ? "⌥" : "↗"}
                          </motion.a>
                        ))}
                      </div>
                    </div>

                    {/* Visual accent bar */}
                    <div
                      className="h-1 w-full rounded-full mb-5"
                      style={{
                        background: `linear-gradient(90deg, ${p.color}, ${p.accent}44)`,
                      }}
                    />

                    <p
                      className="text-sm leading-relaxed mb-5 flex-1"
                      style={{ color: C.muted }}
                    >
                      {p.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-mono"
                          style={{
                            background: `${p.color}12`,
                            color: p.accent,
                            border: `1px solid ${p.color}20`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
