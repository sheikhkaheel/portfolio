"use client";

import { Canvas } from "@react-three/fiber";
import { Avatar } from "./Avatar";

export function Scene() {
  return (
    <div className="h-full">
      <Canvas>
        <Avatar />
      </Canvas>
    </div>
  );
}
