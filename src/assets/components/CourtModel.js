import { useGLTF } from "@react-three/drei";

export function CourtModel(props) {
  const { nodes, materials } = useGLTF("/models/Court.glb");
  const scale = 0.2;
  const groupScale = [scale, scale, scale];
  return (
    <group
      position={[-7.8, 0.25, -6]}
      rotation={[0, 0, 0]}
      {...props}
      dispose={null}
      scale={groupScale}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.white}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["brown.002"]}
        position={[0.825, 3.954, 0]}
        scale={[1.25, 0.06, 1.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["brown.001"]}
        position={[1.084, 1.686, 0]}
        scale={[1.3, 0.06, 1.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.brown}
        position={[1.084, 4.547, 0]}
        scale={[1.3, 0.06, 1.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["brown.002"]}
        position={[1.084, 4.241, 0]}
        scale={[1.3, 0.06, 1.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.006"]}
        position={[1.084, 2.57, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-1.3, -0.01, -1.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["brown.002"]}
        position={[1.084, -1.238, 0]}
        scale={[1.3, 0.06, 1.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["brown.002"]}
        position={[1.648, -1.529, 0]}
        scale={[1.48, 0.06, 1.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["brown.002"]}
        position={[1.931, -1.809, 0]}
        scale={[1.55, 0.06, 1.55]}
      />
    </group>
  );
}

useGLTF.preload("/Court.glb");
export default CourtModel;
