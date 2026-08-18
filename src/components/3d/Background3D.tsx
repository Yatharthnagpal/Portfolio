"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Individual Floating Geometric Shape
function FloatingShape({
  position,
  rotationSpeed = 0.5,
  scale = 1,
  type = "icosahedron",
  color = "#22c55e",
  opacity = 0.25,
}: {
  position: [number, number, number];
  rotationSpeed?: number;
  scale?: number;
  type?: "icosahedron" | "octahedron" | "dodecahedron" | "torus" | "tetrahedron";
  color?: string;
  opacity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed * 0.5;
      meshRef.current.rotation.y += delta * rotationSpeed * 0.7;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1} position={position}>
      <mesh ref={meshRef} scale={scale}>
        {type === "icosahedron" && <icosahedronGeometry args={[1, 1]} />}
        {type === "octahedron" && <octahedronGeometry args={[1, 0]} />}
        {type === "dodecahedron" && <dodecahedronGeometry args={[1, 0]} />}
        {type === "tetrahedron" && <tetrahedronGeometry args={[1, 0]} />}
        {type === "torus" && <torusGeometry args={[1, 0.3, 16, 32]} />}
        <meshBasicMaterial
          wireframe
          color={color}
          transparent
          opacity={opacity}
        />
      </mesh>
    </Float>
  );
}

// 3D Particles Constellation Field
function ParticlesField({ count = 200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const emeraldColor = new THREE.Color("#4ade80");
    const deepGreenColor = new THREE.Color("#166534");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const mixColor = Math.random() > 0.5 ? emeraldColor : deepGreenColor;
      col[i * 3] = mixColor.r;
      col[i * 3 + 1] = mixColor.g;
      col[i * 3 + 2] = mixColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Camera controller reacting to scroll and mouse
function SceneController() {
  useFrame((state) => {
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const maxScroll = typeof window !== "undefined" ? document.documentElement.scrollHeight - window.innerHeight : 1;
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

    state.camera.position.y = -scrollProgress * 15;
    state.camera.position.x = state.pointer.x * 0.5;
    state.camera.lookAt(0, -scrollProgress * 15, 0);
  });

  return null;
}

export default function Background3D() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGLError, setHasWebGLError] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      // Check WebGL availability
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (gl) {
          setMounted(true);
        }
      } catch (e) {
        setHasWebGLError(true);
      }
    }
  }, []);

  if (!mounted || hasWebGLError) return null;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: false, failIfMajorPerformanceCaveat: false }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            setHasWebGLError(true);
          });
        }}
      >
        <SceneController />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} color="#4ade80" intensity={1} />

        <ParticlesField count={200} />

        {/* Floating 3D Geometries */}
        <FloatingShape position={[-6, 3, -2]} type="icosahedron" scale={1.2} color="#22c55e" opacity={0.25} />
        <FloatingShape position={[7, 1, -4]} type="octahedron" scale={1.5} color="#4ade80" opacity={0.2} />

        <FloatingShape position={[-7, -5, -3]} type="torus" scale={1.1} color="#16a34a" opacity={0.2} />
        <FloatingShape position={[6, -7, -2]} type="dodecahedron" scale={1.3} color="#22c55e" opacity={0.22} />

        <FloatingShape position={[-6, -12, -4]} type="tetrahedron" scale={1.4} color="#4ade80" opacity={0.18} />
        <FloatingShape position={[7, -15, -3]} type="icosahedron" scale={1.6} color="#15803d" opacity={0.25} />

        <FloatingShape position={[-7, -20, -2]} type="octahedron" scale={1.2} color="#22c55e" opacity={0.2} />
        <FloatingShape position={[6, -22, -4]} type="torus" scale={1.4} color="#4ade80" opacity={0.18} />
      </Canvas>
    </div>
  );
}
