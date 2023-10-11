import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function BankTitle(props) {
  const { nodes, materials } = useGLTF("/models/banktitle.glb");
  const meshRef = useRef(null);
  const scale = 0.2;
  const groupscale = [scale, scale, scale];
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <group
      {...props}
      dispose={null}
      scale={groupscale}
      ref={meshRef}
      position={[-8.5, 3, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials["Material.002"]}
        position={[0, 0.975, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.08, 1]}
      />
      <group scale={[0.1, 2.2, 2.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials["Material.002"]}
        position={[-0.176, 0.975, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 0.08, 1]}
      />
      <group
        position={[-0.176, 0, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.1, 2.2, 2.2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials["Material.004"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/banktitle.glb");
export default BankTitle;
