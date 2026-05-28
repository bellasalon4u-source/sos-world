"use client";

import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function GlobeSphere() {
  const globeRef = useRef<Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
      globeRef.current.rotation.x = -0.15;
    }
  });

  return (
    <group>
      <mesh ref={globeRef}>
        <sphereGeometry args={[2.25, 96, 96]} />
        <meshStandardMaterial
          color="#0b4f8a"
          roughness={0.42}
          metalness={0.2}
          emissive="#052a4d"
          emissiveIntensity={0.45}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.28, 96, 96]} />
        <meshBasicMaterial color="#67e8f9" wireframe transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

function CrisisPoint({
  position,
  color = "#ff3b30",
  size = 0.08
}: {
  position: [number, number, number];
  color?: string;
  size?: number;
}) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[size, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.8} />
      </mesh>

      <mesh>
        <sphereGeometry args={[size * 2.4, 24, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export default function SosGlobe() {
  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-[2rem] bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(103,232,249,0.22),transparent_42%),radial-gradient(circle_at_70%_70%,rgba(255,59,48,0.12),transparent_38%)]" />

      <Canvas camera={{ position: [0, 0, 6.2], fov: 43 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[4, 4, 5]} intensity={2.3} />
        <pointLight position={[-5, -2, 3]} intensity={0.8} color="#ff3b30" />

        <Stars radius={90} depth={45} count={2200} factor={3.2} fade speed={0.7} />

        <GlobeSphere />

        <CrisisPoint position={[-1.25, 0.75, 1.72]} color="#ff3b30" size={0.09} />
        <CrisisPoint position={[1.12, 0.04, 1.9]} color="#ffd60a" size={0.08} />
        <CrisisPoint position={[0.18, -1.05, 1.86]} color="#ff3b30" size={0.075} />
        <CrisisPoint position={[-0.75, -0.25, 2.08]} color="#00c2ff" size={0.065} />
        <CrisisPoint position={[0.55, 1.05, 1.72]} color="#ff3b30" size={0.055} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.9}
        />
      </Canvas>

      <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs font-bold text-cyan-100 backdrop-blur">
        Live crisis hotspots • verified humanitarian cases
      </div>
    </div>
  );
}
