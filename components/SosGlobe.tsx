"use client";

import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

function GlobeSphere() {
  const globeRef = useRef<Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0025;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2.2, 64, 64]} />
      <meshStandardMaterial
        color="#0b3b73"
        roughness={0.55}
        metalness={0.15}
        emissive="#03213f"
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}

function CrisisPoint({
  position,
  color = "#ff3b30"
}: {
  position: [number, number, number];
  color?: string;
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.07, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
      />
    </mesh>
  );
}

export default function SosGlobe() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-[2rem]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[5, 5, 5]} intensity={2} />
        <Stars radius={80} depth={40} count={1600} factor={3} fade speed={1} />

        <GlobeSphere />

        <CrisisPoint position={[-1.2, 0.8, 1.7]} />
        <CrisisPoint position={[1.1, 0.1, 1.9]} color="#ffd60a" />
        <CrisisPoint position={[0.2, -1.1, 1.85]} />
        <CrisisPoint position={[-0.6, -0.3, 2.05]} color="#00c2ff" />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
}
