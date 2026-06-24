"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

export function TiltCard({
  children,
  intensity = 10,
  className = "",
}: TiltCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
