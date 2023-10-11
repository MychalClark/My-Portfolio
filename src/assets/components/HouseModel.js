import { useGLTF } from "@react-three/drei";

export function HouseModel(props) {
  const { nodes, materials } = useGLTF("/models/house.glb");
  const scale = 0.13;
  const groupScale = [scale, scale, scale];
  return (
    <group {...props} dispose={null} scale={groupScale}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.brown}
        position={[-1.793, 6.656, 0]}
        scale={[1.1, 1, 1.06]}
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
        material={materials.brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_3.geometry}
        material={materials.orange}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_4.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_5.geometry}
        material={materials.black}
      />
    </group>
  );
}

useGLTF.preload("/house.glb");

export default HouseModel;
