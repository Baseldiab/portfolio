"use client";

// components/RotatingEarth.tsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Earth: React.FC = () => {
  // Specify the correct type for the ref
  const earthRef = useRef<THREE.Mesh>(null);

  // Update the path to point to the correct location of your earth.glb file
  const { scene } = useGLTF("/models/earth.glb");

  // Rotate the Earth
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001; // Adjust speed here
    }
  });

  // Clone the scene to avoid sharing issues
  const clonedScene = scene.clone();

  return <primitive ref={earthRef} object={clonedScene} />;
};

const RotatingEarth: React.FC = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} />
      <Earth />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
};

export default RotatingEarth;
