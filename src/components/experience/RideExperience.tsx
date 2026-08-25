"use client";

import { useEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Sparkles } from "@react-three/drei";

// Hunter 350-inspired visual language: compact roadster proportions, round lamp,
// teardrop tank, upright stance and short exhaust. No manufacturer logos/assets.
const checkpoints = [
  { at: 0.02, id: "01", label: "RIDER", sub: "IDENTITY" },
  { at: 0.2, id: "02", label: "ENGINE", sub: "SYSTEMS" },
  { at: 0.42, id: "03", label: "GARAGE", sub: "EXPERIENCE" },
  { at: 0.62, id: "04", label: "TRACK", sub: "PROJECTS" },
  { at: 0.86, id: "05", label: "FINISH", sub: "CONTACT" },
];

type ProgressRef = MutableRefObject<number>;

function Road({ progress }: { progress: ProgressRef }) {
  const group = useRef<THREE.Group>(null);
  const markers = useMemo(() => Array.from({ length: 36 }, (_, i) => i), []);

  useFrame((_, delta) => {
    if (!group.current) return;
    const p = progress.current;
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, -p * 9, delta * 2.5);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(p * Math.PI * 4) * 0.02, delta * 2);
  });

  return (
    <group ref={group}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.04, -28]}>
        <planeGeometry args={[16, 130]} />
        <meshStandardMaterial color="#080a09" roughness={0.88} metalness={0.16} />
      </mesh>
      {markers.map((i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, -i * 3.8]}>
          <planeGeometry args={[0.14, 1.45]} />
          <meshBasicMaterial color="#d8e8dd" transparent opacity={0.62} />
        </mesh>
      ))}
      {[-6.2, 6.2].map((x) => (
        <mesh key={x} rotation={[-Math.PI / 2, 0, 0]} position={[x, -1, -28]}>
          <planeGeometry args={[0.045, 125]} />
          <meshBasicMaterial color="#2ddc73" transparent opacity={0.26} />
        </mesh>
      ))}
    </group>
  );
}

function Bike({ progress }: { progress: ProgressRef }) {
  const group = useRef<THREE.Group>(null);
  const frontWheel = useRef<THREE.Group>(null);
  const rearWheel = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    const p = progress.current;
    const speed = 0.45 + p * 2.0;
    const lean = Math.sin(p * Math.PI * 4.2) * 0.13;
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, lean, delta * 4);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(p * Math.PI * 2.3) * 0.1, delta * 2);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -0.28 + Math.sin(p * Math.PI * 9) * 0.014 * speed, delta * 5);
    if (frontWheel.current) frontWheel.current.rotation.x -= delta * 10 * speed;
    if (rearWheel.current) rearWheel.current.rotation.x -= delta * 10 * speed;
  });

  const tire = <meshStandardMaterial color="#050605" roughness={0.62} metalness={0.72} />;
  const chrome = <meshStandardMaterial color="#aab6ad" roughness={0.2} metalness={0.94} />;
  const black = <meshStandardMaterial color="#101512" roughness={0.28} metalness={0.76} />;
  const green = <meshStandardMaterial color="#4df28a" emissive="#0a8b3e" emissiveIntensity={2.7} roughness={0.18} metalness={0.72} />;
  const lamp = <meshStandardMaterial color="#f5fff8" emissive="#d7ffe4" emissiveIntensity={5} roughness={0.08} metalness={0.25} />;

  const Wheel = ({ front = false }: { front?: boolean }) => (
    <group ref={front ? frontWheel : rearWheel} position={[0, 0.05, front ? 1.48 : -1.2]} rotation={[0, 0, Math.PI / 2]}>
      <mesh>
        <torusGeometry args={[0.59, 0.095, 14, 40]} />
        {tire}
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.48, 0.48, 0.14, 24]} />
        {black}
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.31, 0.028, 8, 28]} />
        {chrome}
      </mesh>
    </group>
  );

  return (
    <group ref={group} position={[0, -0.25, 0.8]} scale={0.9}>
      <Wheel />
      <Wheel front />

      {/* Compact frame */}
      <mesh position={[0, 0.48, -0.1]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.54, 0.055, 10, 24, Math.PI * 1.35]} />
        {chrome}
      </mesh>
      <mesh position={[0, 0.48, -0.1]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[0.16, 0.82, 1.35]} />
        {chrome}
      </mesh>

      {/* Teardrop roadster tank */}
      <mesh position={[0, 0.78, -0.12]} scale={[0.78, 0.46, 0.88]}>
        <sphereGeometry args={[0.72, 24, 16]} />
        {green}
      </mesh>
      <mesh position={[0, 0.9, -0.38]} scale={[0.42, 0.16, 0.55]}>
        <sphereGeometry args={[0.72, 20, 12]} />
        {black}
      </mesh>

      {/* Upright seat */}
      <mesh position={[0, 0.92, -0.95]} rotation={[0.03, 0, 0]} scale={[0.55, 0.16, 0.9]}>
        <boxGeometry args={[1, 0.5, 1]} />
        {black}
      </mesh>

      {/* Engine block */}
      <mesh position={[0, 0.24, -0.15]} scale={[0.62, 0.58, 0.54]}>
        <boxGeometry args={[1, 1, 1]} />
        {chrome}
      </mesh>
      <mesh position={[0, 0.18, -0.15]} scale={[0.38, 0.44, 0.46]}>
        <boxGeometry args={[1, 1, 1]} />
        {black}
      </mesh>

      {/* Front forks */}
      <mesh position={[0, 0.77, 0.75]} rotation={[0.18, 0, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 1.4, 12]} />
        {chrome}
      </mesh>
      <mesh position={[0, 0.77, 0.95]} rotation={[0.18, 0, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 1.25, 12]} />
        {chrome}
      </mesh>

      {/* Iconic round headlamp */}
      <mesh position={[0, 1.08, 1.27]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 0.18, 32]} />
        {chrome}
      </mesh>
      <mesh position={[0, 1.08, 1.38]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.04, 32]} />
        {lamp}
      </mesh>

      {/* Handlebar */}
      <mesh position={[0, 1.42, 0.92]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 1.1, 12]} />
        {chrome}
      </mesh>

      {/* Short exhaust */}
      <mesh position={[0.56, 0.18, -0.76]} rotation={[0, 0.1, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.12, 1.05, 16]} />
        {chrome}
      </mesh>
      <mesh position={[0.56, 0.18, -1.31]} rotation={[0, 0.1, Math.PI / 2]}>
        <cylinderGeometry args={[0.13, 0.13, 0.14, 16]} />
        {black}
      </mesh>
    </group>
  );
}

function EnvironmentMotion({ progress }: { progress: ProgressRef }) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!group.current) return;
    const p = progress.current;
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, -p * 12, delta * 1.8);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, p * 0.25, delta);
  });
  return (
    <group ref={group}>
      {Array.from({ length: 24 }, (_, i) => {
        const side = i % 2 === 0 ? -1 : 1;
        return (
          <group key={i} position={[side * (4.8 + (i % 4) * 0.55), 0.4 + (i % 5) * 0.45, -i * 4.6]}>
            <mesh>
              <boxGeometry args={[0.16, 2.5 + (i % 5), 0.16]} />
              <meshStandardMaterial color="#15231b" emissive="#0a3d1c" emissiveIntensity={1.4} />
            </mesh>
            <pointLight color="#38e97b" intensity={1.1} distance={4} />
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
    const targetX = Math.sin(p * Math.PI * 3) * 0.75;
    const targetY = 1.55 + Math.sin(p * Math.PI * 2) * 0.2;
    const targetZ = 7.6 - p * 1.8;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, delta * 2.5);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, delta * 2.5);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, delta * 2.5);
    camera.lookAt(0, 0.35, 0.15);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.55, 7.6]} fov={43} />
      <ambientLight intensity={0.18} />
      <spotLight position={[0, 5, 3]} intensity={13} angle={0.5} penumbra={1} color="#d8ffe4" />
      <pointLight position={[0, 0.4, 3]} intensity={4.5} distance={9} color="#24d66c" />
      <Environment preset="night" background={false} />
      <Road progress={progress} />
      <EnvironmentMotion progress={progress} />
      <Bike progress={progress} />
      <Sparkles count={150} scale={[12, 6, 26]} size={1.15} speed={0.48} opacity={0.42} color="#b9ffd0" />
    </>
  );
}

export default function RideExperience() {
  const progress = useRef(0);
  const target = useRef(0);
  const [active, setActive] = useState(checkpoints[0]);
  const [speed, setSpeed] = useState(38);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      target.current = Math.min(1, Math.max(0, window.scrollY / max));
      setSpeed(Math.round(38 + target.current * 127));
      const next = [...checkpoints].reverse().find((checkpoint) => target.current >= checkpoint.at) ?? checkpoints[0];
      setActive(next);
    };
    const tick = () => {
      progress.current = THREE.MathUtils.damp(progress.current, target.current, 5.2, 1 / 60);
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
        <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
          <Scene progress={progress} />
        </Canvas>
      </div>
      <div className="ride-vignette" />
      <div className="ride-scanlines" />
      <div className="ride-hud ride-hud-top">
        <div className="ride-brand">NY<span>//H350</span></div>
        <div className="ride-status"><i /> ROADSTER SYSTEM ONLINE</div>
      </div>
      <div className="ride-hud ride-hud-left">
        <div className="ride-kicker">CURRENT SECTOR</div>
        <div className="ride-sector">{active.id} / {active.label}</div>
        <div className="ride-sub">{active.sub}</div>
        <div className="ride-progress"><span style={{ width: `${target.current * 100}%` }} /></div>
      </div>
      <div className="ride-hud ride-hud-right">
        <div className="ride-speed">{speed}<span>KM/H</span></div>
        <div className="ride-mini">SCROLL // RIDE FORWARD</div>
      </div>
      <div className="ride-route">
        {checkpoints.map((checkpoint) => (
          <span key={checkpoint.id} className={checkpoint.id === active.id ? "is-active" : ""} />
        ))}
      </div>
      <div className="ride-bottom-note">HUNTER 350 INSPIRED · AI / ML SYSTEMS ENGINEER · NEW DELHI</div>
    </div>
  );
}
