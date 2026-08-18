"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function NeuralMesh() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particleCount = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, [particleCount]);

  useFrame((_, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.2;
      outerRef.current.rotation.y += delta * 0.3;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.4;
      innerRef.current.rotation.y += delta * 0.2;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group>
      {/* Outer Wireframe Emerald Icosahedron */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2, 2]} />
        <meshBasicMaterial
          wireframe
          color="#22c55e"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner Glowing Crystal Core */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#15803d"
          emissive="#22c55e"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Ambient Neural Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#4ade80"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function NeuralCore() {
  const [mounted, setMounted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || hasError) {
    return (
      <div className="w-full h-[350px] md:h-[500px] flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-green-primary/30 bg-green-primary/5 flex items-center justify-center animate-pulse">
          <div className="w-24 h-24 rounded-full border border-green-primary/50 bg-green-primary/10" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[350px] md:h-[500px] relative flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            setHasError(true);
          });
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#4ade80" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#16a34a" />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
          <NeuralMesh />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
