import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

export function JailInside({ props, openAbout, isMusicPlaying }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/JailInside.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animationAction = actions.Game_engineAction;
    animationAction.play();
  }, [actions.Game_engineAction]);

  const aboutRef = useRef();
  const audio = new Audio("/audio/posterHover.mp3");
  const paperAudio = new Audio("/audio/pageFlip.mp3");

  const [isAboutHovered, setAboutHovered] = useState(false);

  const handleAboutHover = (hover) => {
    setAboutHovered(hover);
  };

  useFrame(() => {
    if (isAboutHovered === true) {
      if (aboutRef.current.scale.y < 0.25) {
        aboutRef.current.scale.y += 0.01;
      }

      if (isMusicPlaying && audio.paused) {
        try {
          audio.play();
        } catch (error) {
          console.error("An error occurred while playing the audio:", error);
        }
      }
    }
    if (isAboutHovered === false) {
      if (aboutRef.current.scale.y > 0.21) {
        aboutRef.current.scale.y -= 0.01;
      }
    }
  });

  function aboutClicked() {
    openAbout();
    if (isMusicPlaying && paperAudio.paused) {
      try {
        paperAudio.play();
      } catch (error) {
        console.error("An error occurred while playing the audio:", error);
      }
    }
  }
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["table wood"]}
          scale={9.219}
        />
        <group
          name="GateDoor001"
          position={[2.264, -0.989, -0.037]}
          scale={[0.363, 0.522, 0.013]}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Green board.004"]}
          position={[0, 1.967, 0]}
          scale={2.569}
        />
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Steel bar"]}
          position={[-0.06, 1.015, 0]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[2.151, 1.701, 2.741]}
        />
        <group
          name="bookdoor"
          position={[1.515, 0.431, -1.12]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.433, 0.093, 0.023]}
        >
          <mesh
            name="Cube015"
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={materials["smooth wood.008"]}
          />
          <mesh
            name="Cube015_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_1.geometry}
            material={materials["Green board.003"]}
          />
          <mesh
            name="Cube015_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_2.geometry}
            material={materials["book color 2.003"]}
          />
          <mesh
            name="Cube015_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_3.geometry}
            material={materials["book color 1.007"]}
          />
          <mesh
            name="Cube015_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_4.geometry}
            material={materials["book color 1.006"]}
          />
        </group>
        <mesh
          name="Polr"
          castShadow
          receiveShadow
          geometry={nodes.Polr.geometry}
          material={materials.floor}
          position={[2.47, 1.782, -0.83]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.066, 0.06, 0.066]}
        />
        <group
          name="GateDoor002"
          position={[-1.893, 0.34, 1.836]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <group
          name="GateDoor004"
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["table wood"]}
          position={[-0.83, 1.015, -2.523]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[2.151, 1.701, 2.741]}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Steel bar.002"]}
          position={[5.611, 1.015, -2.523]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[2.151, 1.701, 2.741]}
        />
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Green board"]}
          position={[5.051, 1.961, 0]}
          scale={2.569}
        />
        <mesh
          name="Text002"
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials["lightup board"]}
          position={[2.432, 0.508, -0.726]}
          rotation={[Math.PI / 2, 0, 0.335]}
          scale={0.421}
        />
        <mesh
          name="GateDoor010"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor010.geometry}
          material={materials["smooth wood"]}
          position={[2.264, -0.989, -0.037]}
          scale={[0.363, 0.522, 0.013]}
        />
        <mesh
          name="GateDoor011"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor011.geometry}
          material={materials["smooth wood"]}
          position={[2.264, -0.989, -0.037]}
          scale={[0.363, 0.522, 0.013]}
        />
        <mesh
          name="GateDoor012"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor012.geometry}
          material={materials["smooth wood"]}
          position={[2.264, -0.989, -0.037]}
          scale={[0.363, 0.522, 0.013]}
        />
        <mesh
          name="GateDoor013"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor013.geometry}
          material={materials["smooth wood"]}
          position={[2.264, -0.989, -0.037]}
          scale={[0.363, 0.522, 0.013]}
        />
        <mesh
          name="GateDoor014"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor014.geometry}
          material={materials["smooth wood"]}
          position={[2.264, -0.989, -0.037]}
          scale={[0.363, 0.522, 0.013]}
        />
        <mesh
          name="GateDoor015"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor015.geometry}
          material={materials["smooth wood"]}
          position={[2.264, -0.989, -0.037]}
          scale={[0.363, 0.522, 0.013]}
        />
        <group
          name="GateDoor017"
          position={[1.724, -3.516, -0.037]}
          scale={[0.832, 1.256, 0.014]}
        >
          <mesh
            name="Cube030"
            castShadow
            receiveShadow
            geometry={nodes.Cube030.geometry}
            material={materials["Steel bar"]}
          />
          <mesh
            name="Cube030_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube030_1.geometry}
            material={materials["Steel bar"]}
          />
        </group>
        <mesh
          name="GateDoor018"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor018.geometry}
          material={materials["smooth wood.005"]}
          position={[-0.54, 0.077, -0.913]}
          scale={[0.743, 0.081, 0.056]}
        />
        <group
          name="GateDoor009"
          position={[2.953, -3.46, -0.042]}
          rotation={[-Math.PI, 1.552, -Math.PI]}
          scale={[0.832, 1.256, 0.014]}
        >
          <mesh
            name="Cube033"
            castShadow
            receiveShadow
            geometry={nodes.Cube033.geometry}
            material={materials["Steel bar"]}
          />
          <mesh
            name="Cube033_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube033_1.geometry}
            material={materials["Steel bar"]}
          />
        </group>
        <group
          name="GateDoor016"
          position={[3.005, -3.481, 1.239]}
          rotation={[-Math.PI, 1.552, -Math.PI]}
          scale={[0.832, 1.256, 0.014]}
        >
          <mesh
            name="Cube034"
            castShadow
            receiveShadow
            geometry={nodes.Cube034.geometry}
            material={materials["Steel bar"]}
          />
          <mesh
            name="Cube034_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube034_1.geometry}
            material={materials["Steel bar"]}
          />
        </group>
        <group
          name="bookdoor002"
          position={[4.152, -0.024, -1.129]}
          rotation={[-1.568, -0.005, -3.129]}
          scale={[-1.244, -1.153, -0.057]}
        >
          <mesh
            name="Cube035"
            castShadow
            receiveShadow
            geometry={nodes.Cube035.geometry}
            material={materials["Steel bar"]}
          />
          <mesh
            name="Cube035_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube035_1.geometry}
            material={materials["Green board.007"]}
          />
          <mesh
            name="Cube035_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube035_2.geometry}
            material={materials["book color 2.007"]}
          />
          <mesh
            name="Cube035_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube035_3.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cube035_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube035_4.geometry}
            material={materials["Steel bar"]}
          />
        </group>
        <group
          name="GateDoor019"
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor021"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor021.geometry}
          material={materials["smooth wood.016"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor022"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor022.geometry}
          material={materials["smooth wood.016"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor023"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor023.geometry}
          material={materials["smooth wood.016"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor024"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor024.geometry}
          material={materials["smooth wood.016"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor025"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor025.geometry}
          material={materials["smooth wood.016"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor026"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor026.geometry}
          material={materials["smooth wood.016"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor027"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor027.geometry}
          material={materials["smooth wood.016"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor028"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor028.geometry}
          material={materials["smooth wood.016"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor030"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor030.geometry}
          material={materials["smooth wood.017"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor031"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor031.geometry}
          material={materials["smooth wood.017"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor032"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor032.geometry}
          material={materials["smooth wood.017"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor033"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor033.geometry}
          material={materials["smooth wood.017"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor034"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor034.geometry}
          material={materials["smooth wood.017"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor035"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor035.geometry}
          material={materials["smooth wood.017"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor036"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor036.geometry}
          material={materials["smooth wood.017"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor037"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor037.geometry}
          material={materials["smooth wood.017"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor039"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor039.geometry}
          material={materials["table wood"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor040"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor040.geometry}
          material={materials["table wood"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor041"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor041.geometry}
          material={materials["table wood"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor042"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor042.geometry}
          material={materials["table wood"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor043"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor043.geometry}
          material={materials["table wood"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor044"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor044.geometry}
          material={materials["table wood"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor045"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor045.geometry}
          material={materials["table wood"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor046"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor046.geometry}
          material={materials["table wood"]}
          position={[-1.893, 0.34, -0.754]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor006"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor006.geometry}
          material={materials["table wood.001"]}
          position={[-0.353, 0.004, -2.494]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="GateDoor020"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor020.geometry}
          material={materials["smooth wood.002"]}
          position={[-1.266, 0.077, -0.913]}
          scale={[0.743, 0.081, 0.056]}
        />
        <mesh
          name="GateDoor029"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor029.geometry}
          material={materials["Steel bar.003"]}
          position={[3.093, 1.24, -2.486]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.363, 0.363, 0.013]}
        />
        <mesh
          name="Plane006"
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["table wood"]}
          position={[0.121, 1.015, -2.523]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[2.151, 1.701, 2.741]}
        />
        <mesh
          name="hat"
          castShadow
          receiveShadow
          geometry={nodes.hat.geometry}
          material={materials["Material.001"]}
          position={[1.946, 0.451, -0.885]}
          rotation={[Math.PI / 2, 0, -0.603]}
          scale={0.015}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["smooth wood.003"]}
          position={[1.569, 0.482, -1.517]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.06}
        />
        <mesh
          name="Plane007"
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["Steel bar.002"]}
          position={[5.611, 1.015, -2.523]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[2.151, 1.701, 2.741]}
        />
        <mesh
          name="GateDoor038"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor038.geometry}
          material={materials["Steel bar.003"]}
          position={[0.809, 0.344, -2.452]}
          scale={[0.033, 0.173, 0.013]}
        />
        <group
          ref={aboutRef}
          name="AboutButton"
          position={[2.463, 1.252, -0.719]}
          rotation={[0, -0.327, 0]}
          scale={[0.26, 0.216, 0.006]}
          onPointerOver={() => handleAboutHover(true)}
          onPointerOut={() => handleAboutHover(false)}
          onClick={aboutClicked}
        >
          <mesh
            name="Cube016"
            castShadow
            receiveShadow
            geometry={nodes.Cube016.geometry}
            material={materials["smooth wood.005"]}
          />
          <mesh
            name="Cube016_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_1.geometry}
            material={materials["smooth wood.014"]}
          />
          <mesh
            name="Cube016_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_2.geometry}
            material={materials["lightup board"]}
          />
        </group>
        <mesh
          name="GateDoor051"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor051.geometry}
          material={materials["smooth wood.014"]}
          position={[1.622, 1.319, -2.322]}
          rotation={[0.013, -0.05, 0.838]}
          scale={[0.26, 0.216, 0.006]}
        />
        <mesh
          name="GateDoor052"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor052.geometry}
          material={materials["smooth wood.014"]}
          position={[1.458, 1.744, -2.286]}
          rotation={[0.217, -0.011, -0.052]}
          scale={[0.26, 0.216, 0.006]}
        />
        <mesh
          name="GateDoor053"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor053.geometry}
          material={materials["smooth wood.014"]}
          position={[2.297, 1.676, -2.37]}
          rotation={[0.055, -0.168, -0.754]}
          scale={[0.26, 0.216, 0.006]}
        />
        <mesh
          name="GateDoor054"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor054.geometry}
          material={materials["smooth wood.014"]}
          position={[2.428, 1.232, -2.144]}
          rotation={[0.092, -0.127, -0.526]}
          scale={[0.18, 0.15, 0.004]}
        />
        <group
          name="Game_engine"
          position={[1.573, 0.181, -1.188]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.006}
        >
          <skinnedMesh
            name="afro01Mesh"
            geometry={nodes.afro01Mesh.geometry}
            material={materials.afro01}
            skeleton={nodes.afro01Mesh.skeleton}
          />
          <skinnedMesh
            name="cheifman1Mesh"
            geometry={nodes.cheifman1Mesh.geometry}
            material={materials.cheifman1}
            skeleton={nodes.cheifman1Mesh.skeleton}
          />
          <skinnedMesh
            name="high-polyMesh"
            geometry={nodes["high-polyMesh"].geometry}
            material={materials["high-poly"]}
            skeleton={nodes["high-polyMesh"].skeleton}
          />
          <skinnedMesh
            name="male_casualsuit01Mesh"
            geometry={nodes.male_casualsuit01Mesh.geometry}
            material={materials.male_casualsuit01}
            skeleton={nodes.male_casualsuit01Mesh.skeleton}
          />
          <skinnedMesh
            name="shoes01Mesh"
            geometry={nodes.shoes01Mesh.geometry}
            material={materials.shoes01}
            skeleton={nodes.shoes01Mesh.skeleton}
          />
          <primitive object={nodes.Root} />
        </group>
        <mesh
          name="GateDoor049"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor049.geometry}
          material={materials["smooth wood.014"]}
          position={[1.584, 0.447, -0.782]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[0.26, 0.216, 0.006]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("JailInside.glb");
export default JailInside;
