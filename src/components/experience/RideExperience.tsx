"use client";

import { useEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, Sparkles } from "@react-three/drei";

const checkpoints = [
  { at: 0.02, id: "01", label: "RIDER", sub: "IDENTITY" },
  { at: 0.2, id: "02", label: "SYSTEMS", sub: "ENGINE" },
  { at: 0.42, id: "03", label: "GARAGE", sub: "EXPERIENCE" },
  { at: 0.62, id: "04", label: "PROJECTS", sub: "TRACK" },
  { at: 0.86, id: "05", label: "FINISH", sub: "CONTACT" },
];

type ProgressRef = MutableRefObject<number>;

function Road({ progress }: { progress: ProgressRef }) {
  const group = useRef<THREE.Group>(null);
  const stripes = useMemo(() => Array.from({ length: 28 }, (_, i) => i), []);

  useFrame((_, delta) => {
    if (!group.current) return;
    const p = progress.current;
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, -p * 7, delta * 2.5);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(p * Math.PI * 4) * 0.018, delta * 2);
  });

  return (
    <group ref={group}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.02, -14]}>
        <planeGeometry args={[14, 100]} />
        <meshStandardMaterial color="#070a08" roughness={0.86} metalness={0.18} />
      </mesh>
      {stripes.map((i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.99, -i * 3.6]}>
          <planeGeometry args={[0.13, 1.5]} />
          <meshBasicMaterial color="#9df7bb" transparent opacity={0.68} />
        </mesh>
      ))}
      {[-5.5, 5.5].map((x) => (
        <mesh key={x} rotation={[-Math.PI / 2, 0, 0]} position={[x, -0.985, -18]}>
          <planeGeometry args={[0.05, 80]} />
          <meshBasicMaterial color="#22c55e" transparent opacity={0.28} />
        </mesh>
      ))}
    </group>
  );
}

function Bike({ progress }: { progress: ProgressRef }) {
  const group = useRef<THREE.Group>(null);
  const wheelA = useRef<THREE.Mesh>(null);
  const wheelB = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    const p = progress.current;
    const speed = 0.35 + p * 1.65;
    const lean = Math.sin(p * Math.PI * 4.5) * 0.16;
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, lean, delta * 4);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(p * Math.PI * 2) * 0.12, delta * 2);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -0.25 + Math.sin(p * Math.PI * 8) * 0.018 * speed, delta * 4);
    if (wheelA.current) wheelA.current.rotation.x -= delta * 12 * speed;
    if (wheelB.current) wheelB.current.rotation.x -= delta * 12 * speed;
  });

  const wheelMaterial = <meshStandardMaterial color="#020302" roughness={0.5} metalness={0.85} />;
  const metalMaterial = <meshStandardMaterial color="#8ea396" roughness={0.24} metalness={0.92} />;
  const accentMaterial = <meshStandardMaterial color="#35f27b" emissive="#0b7a36" emissiveIntensity={3.5} roughness={0.2} metalness={0.7} />;

  return (
    <group ref={group} position={[0, -0.25, 1.1]} scale={0.95}>
      <mesh position={[0, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.62, 0.075, 12, 40]} />
        {wheelMaterial}
      </mesh>
      <mesh ref={wheelA} position={[0, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.48, 0.48, 0.12, 20]} />
        {wheelMaterial}
      </mesh>
      <group position={[0, 0.48, 0]}>
        <mesh scale={[1.35, 0.55, 0.55]}>
          <icosahedronGeometry args={[0.5, 1]} />
          {metalMaterial}
        </mesh>
        <mesh position={[0.02, 0.15, -0.05]} scale={[0.75, 0.24, 0.5]}>
          <boxGeometry args={[1, 0.45, 0.8]} />
          <meshStandardMaterial color="#0b110d" roughness={0.28} metalness={0.9} />
        </mesh>
        <mesh position={[0.02, 0.37, -0.12]} rotation={[0.08, 0, 0]} scale={[0.5, 0.22, 0.38]}>
          <sphereGeometry args={[0.5, 20, 12]} />
          <meshStandardMaterial color="#0d1510" roughness={0.18} metalness={0.65} />
        </mesh>
        <mesh position={[0.52, 0.32, -0.05]} rotation={[0, 0, -0.35]}>
          <boxGeometry args={[0.62, 0.09, 0.08]} />
          {accentMaterial}
        </mesh>
        <mesh position={[-0.54, 0.3, -0.04]} rotation={[0, 0, 0.35]}>
          <boxGeometry args={[0.62, 0.09, 0.08]} />
          {accentMaterial}
        </mesh>
      </group>
      <mesh position={[0, 0.15, 1.25]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.62, 0.075, 12, 40]} />
        {wheelMaterial}
      </mesh>
      <mesh ref={wheelB} position={[0, 0.15, 1.25]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.48, 0.48, 0.12, 20]} />
        {wheelMaterial}
      </mesh>
      <mesh position={[0, 0.82, 0.55]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.95, 12]} />
        {metalMaterial}
      </mesh>
      <mesh position={[0, 0.82, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.85, 12]} />
        {metalMaterial}
      </mesh>
      <mesh position={[0, 0.72, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.17, 0.17, 0.14, 16]} />
        {accentMaterial}
      </mesh>
    </group>
  );
}

function EnvironmentMotion({ progress }: { progress: ProgressRef }) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!group.current) return;
    const p = progress.current;
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, -p * 10, delta * 1.8);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, p * 0.35, delta);
  });
  return (
    <group ref={group}>
      {Array.from({ length: 18 }, (_, i) => {
        const side = i % 2 === 0 ? -1 : 1;
        return (
          <group key={i} position={[side * (4.8 + (i % 3) * 0.7), 0.6 + (i % 4) * 0.55, -i * 4.8]}>
            <mesh>
              <boxGeometry args={[0.18, 3 + (i % 4), 0.18]} />
              <meshStandardMaterial color="#122219" emissive="#0a2b17" emissiveIntensity={1.8} />
            </mesh>
            <pointLight color="#32e875" intensity={1.4} distance={4} />
          </group>
        );
      })}
    </group>
  );
}

function Scene({ progress }: { progress: ProgressRef }) {
  const { camera } = useThree();
  useFrame((_, delta) => {
    const p = progress.current;
    const targetX = Math.sin(p * Math.PI * 3) * 0.7;
    const targetY = 1.45 + Math.sin(p * Math.PI * 2) * 0.22;
    const targetZ = 7.4 - p * 1.6;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, delta * 2.4);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, delta * 2.4);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, delta * 2.4);
    camera.lookAt(0, 0.2, 0.25);
  });
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.45, 7.4]} fov={44} />
      <ambientLight intensity={0.22} />
      <spotLight position={[0, 5, 3]} intensity={15} angle={0.45} penumbra={1} color="#bfffd3" />
      <pointLight position={[0, 0.4, 3]} intensity={5} distance={8} color="#22c55e" />
      <Environment preset="night" background={false} />
      <Road progress={progress} />
      <EnvironmentMotion progress={progress} />
      <Float speed={1.2} rotationIntensity={0.03} floatIntensity={0.05}>
        <Bike progress={progress} />
      </Float>
      <Sparkles count={180} scale={[12, 6, 24]} size={1.3} speed={0.55} opacity={0.5} color="#8cffb4" />
    </>
  );
}

export default function RideExperience() {
  const progress = useRef(0);
  const target = useRef(0);
  const [active, setActive] = useState(checkpoints[0]);
  const [speed, setSpeed] = useState(42);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      target.current = Math.min(1, Math.max(0, window.scrollY / max));
      setSpeed(Math.round(42 + target.current * 138));
      const next = [...checkpoints].reverse().find((checkpoint) => target.current >= checkpoint.at) ?? checkpoints[0];
      setActive(next);
    };
    const tick = () => {
      progress.current = THREE.MathUtils.damp(progress.current, target.current, 5.5, 1 / 60);
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="ride-layer" aria-hidden="true">
      <div className="ride-canvas">
        <Canvas dpr={[1, 1.65]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
          <Scene progress={progress} />
        </Canvas>
      </div>
      <div className="ride-vignette" />
      <div className="ride-scanlines" />
      <div className="ride-hud ride-hud-top">
        <div className="ride-brand">NY<span>//RIDE</span></div>
        <div className="ride-status"><i /> SYSTEM ONLINE</div>
      </div>
      <div className="ride-hud ride-hud-left">
        <div className="ride-kicker">CURRENT SECTOR</div>
        <div className="ride-sector">{active.id} / {active.label}</div>
        <div className="ride-sub">{active.sub}</div>
        <div className="ride-progress"><span style={{ width: `${target.current * 100}%` }} /></div>
      </div>
      <div className="ride-hud ride-hud-right">
        <div className="ride-speed">{speed}<span>KM/H</span></div>
        <div className="ride-mini">SCROLL // ACCELERATE</div>
      </div>
      <div className="ride-route">
        {checkpoints.map((checkpoint) => (
          <span key={checkpoint.id} className={checkpoint.id === active.id ? "is-active" : ""} />
        ))}
      </div>
      <div className="ride-bottom-note">AI / ML SYSTEMS ENGINEER · NEW DELHI · 2026</div>
    </div>
  );
}
