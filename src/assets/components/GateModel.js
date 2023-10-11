import { useGLTF } from "@react-three/drei";

export function GateModel(props) {
  const { nodes, materials } = useGLTF("/models/gate.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.brown}
      />
    </group>
  );
}

useGLTF.preload("/gate.glb");
export default GateModel;
