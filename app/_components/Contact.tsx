"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/_components/SectionLabel";
import { FadeUp } from "@/_components/FadeUp";
import { C, SP } from "@/contants";

// Creating an interface for the form data
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [sent, setSent] = useState<boolean>(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit() {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  }

  const SOCIALS = [
    { label: "GitHub", icon: "⌥", href: "#" },
    { label: "LinkedIn", icon: "◈", href: "#" },
    { label: "Twitter", icon: "⬡", href: "#" },
    { label: "Email", icon: "◎", href: "mailto:alex@example.com" },
  ];

  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: C.surface }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel text="// contact" />
          <FadeUp>
            <h2
              className="font-black mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: C.white,
                letterSpacing: "-0.03em",
              }}
            >
              Let's build something.
            </h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: C.muted }}>
              Open to full-time roles, freelance projects, and interesting
              collaborations. I respond within 24h.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <FadeUp>
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-4">
                    {[
                      {
                        key: "name" as const,
                        placeholder: "Your name",
                        type: "text",
                      },
                      {
                        key: "email" as const,
                        placeholder: "your@email.com",
                        type: "email",
                      },
                    ].map((f) => (
                      <motion.input
                        key={f.key}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, [f.key]: e.target.value }))
                        }
                        whileFocus={{
                          borderColor: C.emerald,
                          boxShadow: `0 0 0 2px ${C.emeraldGlow}`,
                        }}
                        transition={SP.snappy}
                        className="w-full px-4 py-3.5 rounded-xl text-sm outline-none"
                        style={{
                          background: C.card,
                          border: `1px solid ${C.border}`,
                          color: C.white,
                          fontFamily: "inherit",
                          transition: "border-color 0.2s",
                        }}
                      />
                    ))}
                    <motion.textarea
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      whileFocus={{
                        borderColor: C.emerald,
                        boxShadow: `0 0 0 2px ${C.emeraldGlow}`,
                      }}
                      transition={SP.snappy}
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none resize-none"
                      style={{
                        background: C.card,
                        border: `1px solid ${C.border}`,
                        color: C.white,
                        fontFamily: "inherit",
                      }}
                    />
                    <motion.button
                      onClick={handleSubmit}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: `0 0 36px ${C.emeraldGlow}`,
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={SP.snappy}
                      className="w-full py-4 rounded-xl text-sm font-bold"
                      style={{
                        background: `linear-gradient(135deg, ${C.emeraldDim}, ${C.emerald})`,
                        color: "#000",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Send message →
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={SP.fluid}
                  className="flex flex-col items-center justify-center text-center h-full min-h-64 p-10 rounded-2xl"
                  style={{
                    background: C.card,
                    border: `1px solid ${C.emerald}44`,
                  }}
                >
                  <div className="text-4xl mb-4">✓</div>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: C.emerald }}
                  >
                    Message sent!
                  </h3>
                  <p className="text-sm" style={{ color: C.muted }}>
                    I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeUp>

          {/* Info panel */}
          <FadeUp delay={0.15}>
            <div className="space-y-6">
              {/* Availability */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: C.card, border: `1px solid ${C.border}` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{ background: C.emerald }}
                  />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: C.white }}
                  >
                    Available for hire
                  </span>
                </div>
                <p className="text-sm" style={{ color: C.muted }}>
                  Currently open to full-time and contract opportunities.
                  Timezone: UTC+5:30.
                </p>
              </div>

              {/* What I do */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: C.card, border: `1px solid ${C.border}` }}
              >
                <p
                  className="text-xs font-mono mb-4"
                  style={{ color: C.emerald }}
                >
                  // services
                </p>
                {[
                  "Full-stack web development",
                  "React Native & Expo mobile apps",
                  "API design (Hono, Express, Node)",
                  "PostgreSQL schema & Drizzle ORM",
                  "Technical consulting",
                ].map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...SP.default, delay: i * 0.07 }}
                    className="flex items-center gap-3 py-2"
                    style={{
                      borderBottom: i < 4 ? `1px solid ${C.border}` : "none",
                    }}
                  >
                    <span style={{ color: C.emerald }}>→</span>
                    <span className="text-sm" style={{ color: C.muted }}>
                      {s}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Socials */}
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{
                      scale: 1.12,
                      borderColor: C.emerald,
                      color: C.emerald,
                    }}
                    transition={SP.snappy}
                    className="flex-1 py-3 rounded-xl flex items-center justify-center text-sm"
                    style={{
                      background: C.card,
                      border: `1px solid ${C.border}`,
                      color: C.muted,
                      textDecoration: "none",
                    }}
                    title={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
