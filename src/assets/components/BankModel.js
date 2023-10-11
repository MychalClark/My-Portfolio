import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BankModel(props) {
  const { nodes, materials } = useGLTF("/models/Bank.glb");
  const scale = 0.2;
  const groupScale = [scale, scale, scale];

  return (
    <group
      position={[-8, 0.15, 0]}
      scale={groupScale}
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.green}
        position={[1.1, 6.48, 1.31]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.74, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.white}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials.orange}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_3.geometry}
        material={materials.brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_4.geometry}
        material={materials.orange}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_5.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_6.geometry}
        material={materials["dark blue"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_7.geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.brown}
        position={[-1.86, 6.42, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.brown}
        position={[-0.62, -1.2, 0]}
        scale={[2.85, 0.17, 4.62]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.brown}
        position={[-0.62, 2.06, 0]}
        scale={[2.85, 0.17, 4.62]}
      />
    </group>
  );
}

useGLTF.preload("/Bank.glb");

export default BankModel;
