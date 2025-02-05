"use client";

import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  // Memoize textures
  const earthTexture = useTexture({
    map: "/earth-texture.webp",
    bumpMap: "/earth-bump.webp",
    specularMap: "/earth-specular.webp",
  });

  // Use RAF callback for smoother animation
  useFrame(
    useCallback(() => {
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.005;
      }
    }, [])
  );

  // Memoize geometry and material
  const sphereGeometry = useMemo(
    () => new THREE.SphereGeometry(2.5, 32, 32),
    []
  ); // Reduced segments
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: earthTexture.map,
        bumpMap: earthTexture.bumpMap,
        bumpScale: 0.12,
        metalness: 0.15,
        roughness: 0.7,
      }),
    [earthTexture]
  );

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
      <mesh geometry={sphereGeometry} material={material} />
    </group>
  );
}

interface ThreeDModelProps {
  className?: string;
}
export default function ThreeDModel({ className }: ThreeDModelProps) {
  const [cameraPosition, setCameraPosition] = useState(10);

  useEffect(() => {
    // Update camera position based on window width after component mounts
    setCameraPosition(window.innerWidth < 768 ? 12 : 10);

    // Optional: Add resize listener
    const handleResize = () => {
      setCameraPosition(window.innerWidth < 768 ? 12 : 10);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article className={cn(className)}>
      <div className=" w-[95%] mx-auto md:w-[80%] md:min-w-[400px] h-[300px]  flex items-center justify-center">
        <Canvas
          camera={{
            position: [0, 0, cameraPosition],
            fov: 45,
            near: 0.1,
            far: 1000,
          }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          gl={{
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true,
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </article>
  );
}
