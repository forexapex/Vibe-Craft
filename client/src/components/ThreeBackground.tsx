import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
// @ts-ignore
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
  
  const shapes = useMemo(() => [
    { type: 'icosahedron', position: [1, 0.5, -1] as [number, number, number], color: '#00ffff', scale: 0.2 },
    { type: 'octahedron', position: [-1, -0.5, -0.5] as [number, number, number], color: '#ff00ff', scale: 0.2 },
    { type: 'tetrahedron', position: [0.5, -0.8, -0.8] as [number, number, number], color: '#ffff00', scale: 0.15 },
    { type: 'dodecahedron', position: [-0.8, 0.8, -1.2] as [number, number, number], color: '#ff0080', scale: 0.18 },
  ], []);
  
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
      {shapes.map((shape, i) => (
        <Float key={i} speed={1.5 + i * 0.5} rotationIntensity={1 + i * 0.3} floatIntensity={2 - i * 0.2}>
          <mesh position={shape.position}>
            {shape.type === 'icosahedron' && <icosahedronGeometry args={[shape.scale, 0]} />}
            {shape.type === 'octahedron' && <octahedronGeometry args={[shape.scale, 0]} />}
            {shape.type === 'tetrahedron' && <tetrahedronGeometry args={[shape.scale, 0]} />}
            {shape.type === 'dodecahedron' && <dodecahedronGeometry args={[shape.scale, 0]} />}
            <meshStandardMaterial color={shape.color} wireframe emissive={shape.color} emissiveIntensity={0.5} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function GamingOrb() {
  const orbRef = useRef<any>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (orbRef.current) {
      orbRef.current.rotation.x = Math.sin(t / 3) * 0.3;
      orbRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={orbRef} position={[0, 0, -2]}>
        <Sphere args={[0.5, 64, 64]}>
          <MeshDistortMaterial
            color="#8000ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive="#4000ff"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function EnergyGrid() {
  const gridRef = useRef<any>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1 - 1;
    }
  });

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, -3]}>
      <planeGeometry args={[10, 10, 20, 20]} />
      <meshBasicMaterial 
        color="#00ffff" 
        wireframe 
        transparent 
        opacity={0.1}
      />
    </mesh>
  );
}

function FallbackBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/20" />
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />
    </div>
  );
}

export default function ThreeBackground() {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
      }
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  if (!webGLSupported) {
    return <FallbackBackground />;
  }

  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <Canvas 
        camera={{ position: [0, 0, 1], fov: 75 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000');
        }}
        onError={() => setWebGLSupported(false)}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        <Stars />
        <FloatingShapes />
        <GamingOrb />
        <EnergyGrid />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 pointer-events-none" />
    </div>
  );
}
