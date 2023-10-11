import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MountainFloor(props) {
  const { nodes, materials } = useGLTF("/models/mountainfloor.glb");
  const scale = 0.1;
  const groupScale = [scale, scale, scale];
  return (
    <group
      scale={groupScale}
      position={[-4.6, -0.14, -4]}
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object.geometry}
        material={materials.Material}
        position={[0, 0.19, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.sand}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape004.geometry}
        material={materials["sand.002"]}
        position={[-32.99, 0.15, 117.67]}
        scale={1.79}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape010.geometry}
        material={materials.cliff}
        position={[-382.78, -1.02, 22.49]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape001.geometry}
        material={materials.cliff}
        position={[0, -1.7, 500.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape012.geometry}
        material={materials.cliff}
        position={[151.34, 0, -552.3]}
        rotation={[0, -0.14, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape002.geometry}
        material={materials.cliff}
        position={[615.12, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload("/mountainfloor.glb");

export default MountainFloor;
