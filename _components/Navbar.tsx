"use client";

import { motion } from "framer-motion";
import { C } from "@/contants";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md"
      style={{ background: `${C.bg}80`, borderBottom: `1px solid ${C.border}` }}
    >
      <span
        className="font-black text-sm tracking-tight"
        style={{ color: C.white }}
      >
        {"<"}

        <span style={{ color: C.emerald }}>dev</span>

        {"/>"}
      </span>

      <div className="flex gap-6 font-mono text-xs">
        <a href="#about" style={{ color: C.muted, textDecoration: "none" }}>
          About
        </a>

        <a href="#skills" style={{ color: C.muted, textDecoration: "none" }}>
          Skills
        </a>

        <a href="#projects" style={{ color: C.muted, textDecoration: "none" }}>
          Projects
        </a>

        <a
          href="#experience"
          style={{ color: C.muted, textDecoration: "none" }}
        >
          Experience
        </a>

        <a href="#contact" style={{ color: C.muted, textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
