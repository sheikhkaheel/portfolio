"use client";

import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function Avatar() {
  const groupRef = useRef<THREE.Group>(null);
  const trackingRef = useRef<THREE.Group>(null);
  const spinningRef = useRef<THREE.Group>(null);
  const pupilRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Group>(null);

  const { viewport, pointer } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.12;
    }

    if (trackingRef.current) {
      const targetX = (pointer.x * viewport.width) / 5;
      const targetY = (pointer.y * viewport.height) / 5;

      trackingRef.current.rotation.y = THREE.MathUtils.lerp(
        trackingRef.current.rotation.y,
        targetX,
        0.04,
      );
      trackingRef.current.rotation.x = THREE.MathUtils.lerp(
        trackingRef.current.rotation.x,
        -targetY,
        0.04,
      );
    }

    if (spinningRef.current) {
      spinningRef.current.rotation.x = t * 0.2;
      spinningRef.current.rotation.y = t * 0.3;
    }

    if (pupilRef.current) {
      pupilRef.current.scale.setScalar(1 + Math.sin(t * 6) * 0.15);
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.003;
      particlesRef.current.rotation.x += 0.001;
    }
  });

  const particles = useMemo<[number, number, number][]>(() => {
    const temp: [number, number, number][] = [];
    for (let i = 0; i < 60; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      temp.push([x, y, z]);
    }
    return temp;
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      <group ref={trackingRef}>
        <mesh position={[0, 0, 0.5]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#0f172a" metalness={1} roughness={0.1} />
        </mesh>

        <mesh ref={pupilRef} position={[0, 0, 1.05]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#06b6d4" />
        </mesh>

        <mesh position={[0, 0, 1.0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.3, 0.02, 16, 64]} />
          <meshBasicMaterial color="#ec4899" />
        </mesh>

        <group ref={spinningRef}>
          <mesh>
            <icosahedronGeometry args={[1.3, 0]} />
            <meshBasicMaterial
              color="#8b5cf6"
              wireframe
              opacity={0.4}
              transparent
            />
          </mesh>

          <mesh>
            <icosahedronGeometry args={[1.6, 0]} />
            <meshPhysicalMaterial
              color="#06b6d4"
              transmission={1} /* Makes it look like actual glass */
              opacity={1}
              transparent
              roughness={0.1}
              metalness={0.2}
              thickness={0.5}
            />
          </mesh>

          {/* Orbiting Neon Halos */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.2, 0.015, 16, 100]} />
            <meshBasicMaterial color="#ec4899" />
          </mesh>
          <mesh rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[2.0, 0.015, 16, 100]} />
            <meshBasicMaterial color="#06b6d4" />
          </mesh>
        </group>
      </group>

      <group ref={particlesRef}>
        {particles.map((pos, idx) => (
          <mesh key={idx} position={pos}>
            {idx % 2 === 0 ? (
              <sphereGeometry args={[0.04, 8, 8]} />
            ) : (
              <tetrahedronGeometry args={[0.06]} />
            )}
            <meshBasicMaterial
              color={
                idx % 3 === 0
                  ? "#ec4899"
                  : idx % 3 === 1
                    ? "#06b6d4"
                    : "#8b5cf6"
              }
              opacity={0.6}
              transparent
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
