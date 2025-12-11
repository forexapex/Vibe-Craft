import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function Stars(props: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00ffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
    const groupRef = useRef<any>(null);
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.x = Math.cos(t / 4) / 2;
            groupRef.current.rotation.y = Math.sin(t / 4) / 2;
            groupRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[1, 0.5, -1]}>
                    <icosahedronGeometry args={[0.2, 0]} />
                    <meshStandardMaterial color="#00ffff" wireframe />
                </mesh>
            </Float>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
                <mesh position={[-1, -0.5, -0.5]}>
                    <octahedronGeometry args={[0.2, 0]} />
                    <meshStandardMaterial color="#ff00ff" wireframe />
                </mesh>
            </Float>
        </group>
    );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <Stars />
        <FloatingShapes />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />
    </div>
  );
}