import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Suspense, useMemo } from "react";

function Icosahedron({ color }: { color: string }) {
  return (
    <mesh>
      <icosahedronGeometry args={[1.1, 0]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.6} />
    </mesh>
  );
}

export function HeroScene() {
  const colors = useMemo(() => ["#7C3AED", "#22D3EE", "#60A5FA"], []);
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 4, 2]} intensity={0.8} />
      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
          <Icosahedron color={colors[0]} />
        </Float>
        <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.4}>
          <mesh position={[2, -0.4, -1]}>
            <torusKnotGeometry args={[0.6, 0.18, 120, 12]} />
            <meshStandardMaterial color={colors[1]} roughness={0.1} metalness={0.8} />
          </mesh>
        </Float>
        <Float speed={1.1} rotationIntensity={0.7} floatIntensity={1.1}>
          <mesh position={[-2, 0.2, -0.6]}>
            <dodecahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial color={colors[2]} roughness={0.3} metalness={0.5} />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  );
}
