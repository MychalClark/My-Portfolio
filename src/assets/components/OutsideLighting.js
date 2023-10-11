import { Environment, useEnvironment } from "@react-three/drei";
function OutsideLighting() {
  const envMap = useEnvironment({ files: "/models/background.hdr" });
  return (
    <group>
      <directionalLight
        intensity={0.5}
        position={[-1, 2, 4]}
        color={new THREE.Color("white")}
      />
      <pointLight
        intensity={0.5}
        position={[3, -1, 0]}
        color={new THREE.Color("white")}
      />
      <ambientLight intensity={0.6} />
      <Environment map={envMap} background />
    </group>
  );
}
export default OutsideLighting;
