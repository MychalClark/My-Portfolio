import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function AnimatedBox() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // Rotate around the X-axis
      meshRef.current.rotation.y += 0.01; // Rotate around the Y-axis
      meshRef.current.rotation.z += 0.01; // Rotate around the Z-axis
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default AnimatedBox;
