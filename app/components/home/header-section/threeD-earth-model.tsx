"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  // Load Earth texture
  const earthTexture = useTexture({
    map: "/earth-texture.jpg",
    bumpMap: "/earth-bump.jpg",
    specularMap: "/earth-specular.jpg",
  });

  // Increase rotation speed
  const rotationSpeed = 0.2;
  useFrame(() => {
    if (groupRef.current) {
      // Make rotation continuous
      groupRef.current.rotation.y += rotationSpeed * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.0} />{" "}
      {/* Increased from 0.8 for more overall brightness */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5} // Increased from 1.2 for brighter highlights
        castShadow={false}
        color="#ffffff"
      />
      <mesh rotation={[0, -Math.PI / 2, 0]}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture.map}
          bumpMap={earthTexture.bumpMap}
          bumpScale={0.12} // Slightly reduced for less harsh shadows
          metalness={0.15} // Increased for more reflectivity
          roughness={0.7} // Reduced for more shine
          emissive="#1a365d" // Lighter blue tint
          emissiveIntensity={0.02} // Reduced emission for lighter appearance
        />
      </mesh>
    </group>
  );
}

export default function ThreeDModel() {
  return (
    <div className="w-[95%] mx-auto md:w-[80%] md:min-w-[400px] md:h-[500px] h-[300px] sm:h-[400px] flex items-center justify-center">
      <Canvas
        camera={{
          position: [0, 0, window.innerWidth < 500 ? 12 : 10],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true, // Added for better rendering
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
