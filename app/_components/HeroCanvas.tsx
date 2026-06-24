"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./Avatar"; // Adjust path as needed
import { ThemeColors } from "@/types/hero.types";

interface HeroCanvasProps {
  C: ThemeColors;
}

export function HeroCanvas({ C }: HeroCanvasProps) {
  return (
    <div className="absolute inset-0 lg:left-[40%] lg:w-[60%] h-full z-0 pointer-events-none lg:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#06b6d4" />

        <Avatar />
      </Canvas>

      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background: `linear-gradient(to right, ${C.bg} 0%, transparent 25%)`,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none block lg:hidden"
        style={{
          background: `linear-gradient(to bottom, ${C.bg} 0%, ${C.bg}DD 30%, transparent 80%)`,
        }}
      />
    </div>
  );
}
