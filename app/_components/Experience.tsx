"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/_components/SectionLabel";
import { FadeUp } from "@/_components/FadeUp";
import { EXPERIENCE, C, SP } from "@/contants";

export function Experience() {
  // Explicitly typing state as number or null
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="py-28 px-6"
      style={{ background: C.bg }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel text="// experience" />
          <FadeUp>
            <h2
              className="font-black"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: C.white,
                letterSpacing: "-0.03em",
              }}
            >
              Where I've worked.
            </h2>
          </FadeUp>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{
              background: `linear-gradient(to bottom, ${C.emerald}44, transparent)`,
            }}
          />

          <div className="space-y-4">
            {EXPERIENCE.map((exp, i) => (
              <FadeUp key={exp.company} delay={i * 0.12}>
                <motion.div
                  onClick={() => setOpen(open === i ? null : i)}
                  className="relative pl-12 cursor-pointer"
                >
                  {/* Timeline dot */}
                  <motion.div
                    animate={{
                      scale: open === i ? 1.3 : 1,
                      background: open === i ? C.emerald : C.faint,
                    }}
                    transition={SP.snappy}
                    className="absolute left-3 top-5 w-4 h-4 rounded-full"
                    style={{
                      border: `2px solid ${open === i ? C.emerald : C.border}`,
                      transform: "translateX(-50%)",
                    }}
                  />

                  <motion.div
                    animate={{
                      borderColor: open === i ? `${C.emerald}40` : C.border,
                    }}
                    transition={SP.default}
                    className="p-6 rounded-2xl"
                    style={{
                      background: C.card,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className="font-bold text-base mb-0.5"
                          style={{ color: C.white }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="text-sm font-medium"
                          style={{ color: C.emerald }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-mono px-2 py-1 rounded-md"
                          style={{ background: C.faint, color: C.muted }}
                        >
                          {exp.period}
                        </span>
                        <motion.span
                          animate={{ rotate: open === i ? 180 : 0 }}
                          transition={SP.snappy}
                          style={{ color: C.muted, display: "inline-block" }}
                        >
                          ▾
                        </motion.span>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {open === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { ...SP.default },
                            opacity: { duration: 0.2 },
                          }}
                          className="overflow-hidden"
                        >
                          <p
                            className="text-sm leading-relaxed mt-4 mb-4"
                            style={{ color: C.muted }}
                          >
                            {exp.desc}
                          </p>
                          <div className="flex gap-2 flex-wrap">
                            {exp.tags.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded-md text-xs font-mono"
                                style={{
                                  background: `${C.emerald}10`,
                                  color: C.emerald,
                                  border: `1px solid ${C.border}`,
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
