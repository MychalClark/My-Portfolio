import { useGLTF } from "@react-three/drei";

export function SheriffModel(props) {
  const { nodes, materials } = useGLTF("/models/Sheriff.glb");
  const scale = 0.3;
  const groupScale = [scale, scale, scale];
  return (
    <group
      rotation={[0, 1.5, 0]}
      position={[-4, -0.1, 5]}
      {...props}
      dispose={null}
      scale={groupScale}
    >
      <group position={[0, 2.425, 0]} scale={[3.39, 2.46, 2.34]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials["brown.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_3.geometry}
          material={materials["dark green"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_4.geometry}
          material={materials["yellow.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_5.geometry}
          material={materials["black.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials["yellow.001"]}
        position={[3.555, 5.348, 0]}
        scale={[0.22, 0.22, 0.121]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={nodes.Text001.material}
        position={[2.424, 3.864, 1.649]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("/Sheriff.glb");

export default SheriffModel;
