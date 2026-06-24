"use client";

import { C } from "@/contants";

export function Footer() {
  return (
    <footer
      className="px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}
    >
      <span className="font-black text-sm" style={{ color: C.white }}>
        {"<"}
        <span style={{ color: C.emerald }}>dev</span>
        {"/>"}
        <span className="font-normal text-xs ml-2" style={{ color: C.muted }}>
          Sheikh Mohammad Kaheel
        </span>
      </span>
      <p className="text-xs" style={{ color: C.muted }}>
        Built with React, Framer Motion & ♥
      </p>
      <p className="text-xs" style={{ color: C.muted }}>
        © {new Date().getFullYear()} · All rights reserved
      </p>
    </footer>
  );
}
