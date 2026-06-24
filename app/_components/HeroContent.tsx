"use client";

import React from "react";
import { motion, MotionValue, Variants } from "framer-motion";
import { HeroProps } from "@/types/hero.types";

interface HeroContentProps extends HeroProps {
  y: MotionValue<string>;
  opacity: MotionValue<number>;
}

export function HeroContent({
  y,
  opacity,
  C,
  SP,
  ALL_TAGS,
  TerminalLine,
}: HeroContentProps) {
  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: SP?.fluid || { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      style={{ y, opacity }}
      className="relative z-10 w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center min-h-[100svh] pointer-events-none py-24 lg:py-0"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-[55%] xl:w-[50%] flex flex-col items-start pointer-events-auto"
      >
        {/* Terminal badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...SP?.default, delay: 0.1 }}
          className="self-start inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl mb-6 sm:mb-8 shadow-xl backdrop-blur-md"
          style={{
            background: `${C.card}AA`,
            border: `1px solid ${C.border}`,
            fontFamily: "monospace",
          }}
        >
          <div className="hidden sm:flex gap-1.5">
            {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
              <span
                key={c}
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: c }}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm" style={{ color: C.muted }}>
            ~/portfolio
          </span>
          <span className="text-xs sm:text-sm" style={{ color: C.emerald }}>
            $
          </span>
          {TerminalLine && (
            <TerminalLine text="npm run hello-world" delay={800} />
          )}
        </motion.div>

        {/* Typography */}
        <motion.p
          variants={item}
          className="text-xs sm:text-sm font-mono mb-2 sm:mb-3 font-semibold tracking-wider"
          style={{ color: C.emerald }}
        >
          // Full Stack Developer
        </motion.p>

        <motion.h1
          variants={item}
          className="font-black leading-[1.1] mb-3 drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)]"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
            letterSpacing: "-0.04em",
            color: C.white,
          }}
        >
          Sheikh Mohammad
          <br />
          Kaheel
        </motion.h1>

        <motion.h2
          variants={item}
          className="font-black leading-tight mb-5 sm:mb-6 drop-shadow-md text-transparent bg-clip-text"
          style={{
            fontSize: "clamp(1.75rem, 4.5vw, 4rem)",
            letterSpacing: "-0.04em",
            backgroundImage: `linear-gradient(135deg, ${C.emerald}, ${C.cyan})`,
            WebkitBackgroundClip: "text",
          }}
        >
          Web & Mobile Developer
        </motion.h2>

        <motion.p
          variants={item}
          className="text-sm sm:text-base md:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed drop-shadow-md font-medium"
          style={{ color: C.muted }}
        >
          I build fast, scalable products — from pixel-perfect React interfaces
          to rock-solid Node.js APIs. React Native & Expo for mobile. PostgreSQL
          & Drizzle for data.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: `0 0 35px ${C.emerald}99` }}
            whileTap={{ scale: 0.97 }}
            transition={SP?.snappy}
            className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm font-bold shadow-lg text-center cursor-pointer"
            style={{
              background: `linear-gradient(135deg, ${C.emeraldDim}, ${C.emerald})`,
              color: "#000",
              textDecoration: "none",
            }}
          >
            View my work ↓
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.06)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={SP?.snappy}
            className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm font-semibold backdrop-blur-sm text-center cursor-pointer border"
            style={{
              background: "transparent",
              borderColor: C.border,
              color: C.white,
              textDecoration: "none",
            }}
          >
            Get in touch
          </motion.a>
        </motion.div>

        {/* Floating tech pills */}
        {ALL_TAGS && (
          <div className="mt-12 sm:mt-16 flex flex-wrap gap-2 max-w-xl">
            {ALL_TAGS.slice(0, 12).map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...SP?.default, delay: 1.2 + i * 0.04 }}
                className="px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl text-[10px] sm:text-xs font-mono backdrop-blur-sm shadow-sm"
                style={{
                  background: `${C.card}66`,
                  border: `1px solid ${C.border}`,
                  color: C.muted,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
