import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "react-three-fiber";

export function BankInside({
  props,
  openfullStackProjects,
  isMusicPlaying,
  openGameProjects,
}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/BankInside.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animationAction = actions.Game_engineAction;
    animationAction.play();
  }, [actions.Game_engineAction]);

  const fullRef = useRef();
  const gameRef = useRef();
  const audio = new Audio("/audio/posterHover.mp3");

  const [isFullstackHovered, setFullstackHovered] = useState(false);
  const [isGameHovered, setGameHovered] = useState(false);

  const handleFullstackHover = (hover) => {
    setFullstackHovered(hover);
  };
  const handleGameHover = (hover) => {
    setGameHovered(hover);
  };

  useFrame(() => {
    if (isFullstackHovered === true) {
      if (fullRef.current.scale.y < 0.25) {
        fullRef.current.scale.y += 0.01;
      }
      if (isMusicPlaying && audio.paused) {
        try {
          audio.play();
        } catch (error) {
          console.error("An error occurred while playing the audio:", error);
        }
      }
    }
    if (isFullstackHovered === false) {
      if (fullRef.current.scale.y > 0.21) {
        fullRef.current.scale.y -= 0.01;
      }
    }
  });
  useFrame(() => {
    if (isGameHovered === true) {
      if (gameRef.current.scale.y < 0.5) {
        gameRef.current.scale.y += 0.01;
      }
      if (isMusicPlaying && audio.paused) {
        try {
          audio.play();
        } catch (error) {
          console.error("An error occurred while playing the audio:", error);
        }
      }
    }
    if (isGameHovered === false) {
      if (gameRef.current.scale.y > 0.41) {
        gameRef.current.scale.y -= 0.01;
      }
    }
  });

  function fullstackClicked() {
    openfullStackProjects();
  }

  function gamesClicked() {
    openGameProjects();
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Game_engine"
          position={[1.03, 0, -1.34]}
          rotation={[Math.PI / 2, 0, -1.36]}
          scale={0.1}
        >
          <primitive object={nodes.Root} />
          <skinnedMesh
            name="eyebrow001Mesh"
            geometry={nodes.eyebrow001Mesh.geometry}
            material={materials["eyebrow001.001"]}
            skeleton={nodes.eyebrow001Mesh.skeleton}
          />
          <skinnedMesh
            name="eyelashes01Mesh"
            geometry={nodes.eyelashes01Mesh.geometry}
            material={materials.eyelashes01}
            skeleton={nodes.eyelashes01Mesh.skeleton}
          />
          <skinnedMesh
            name="high-polyMesh"
            geometry={nodes["high-polyMesh"].geometry}
            material={materials["high-poly"]}
            skeleton={nodes["high-polyMesh"].skeleton}
          />
          <skinnedMesh
            name="shoes04Mesh"
            geometry={nodes.shoes04Mesh.geometry}
            material={materials["shoes04.001"]}
            skeleton={nodes.shoes04Mesh.skeleton}
          />
          <skinnedMesh
            name="female_elegantsuit01Mesh"
            geometry={nodes.female_elegantsuit01Mesh.geometry}
            material={materials["female_elegantsuit01.001"]}
            skeleton={nodes.female_elegantsuit01Mesh.skeleton}
          />
          <skinnedMesh
            name="long01Mesh"
            geometry={nodes.long01Mesh.geometry}
            material={materials["long01.001"]}
            skeleton={nodes.long01Mesh.skeleton}
          />
          <skinnedMesh
            name="female_genericMesh"
            geometry={nodes.female_genericMesh.geometry}
            material={materials.female_generic}
            skeleton={nodes.female_genericMesh.skeleton}
          />
        </group>
        <group
          ref={gameRef}
          name="ArtWorkCLickable"
          onPointerOver={() => handleGameHover(true)}
          onPointerOut={() => handleGameHover(false)}
          position={[-1.87, 1.91, 0.88]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.41, 0.41, 0.01]}
          onClick={gamesClicked}
        >
          <mesh
            name="Cube029"
            castShadow
            receiveShadow
            geometry={nodes.Cube029.geometry}
            material={materials["table wood"]}
          />
          <mesh
            name="Cube029_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube029_1.geometry}
            material={materials.game}
          />
          <mesh
            name="Cube029_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube029_2.geometry}
            material={materials["lightup board"]}
          />
        </group>
        <group
          ref={fullRef}
          onPointerOver={() => handleFullstackHover(true)}
          onPointerOut={() => handleFullstackHover(false)}
          name="Fullstack_clickable"
          position={[1.43, 0.64, -0.01]}
          rotation={[0.03, 0.8, 1.54]}
          scale={[0.21, 0.21, 0.01]}
          onClick={fullstackClicked}
        >
          <mesh
            name="Cube028"
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={materials["table wood"]}
          />
          <mesh
            name="Cube028_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube028_1.geometry}
            material={materials.fullstackdev}
          />
          <mesh
            name="Cube028_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube028_2.geometry}
            material={materials["lightup board"]}
          />
        </group>
        <mesh
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["word coloring"]}
          position={[-1.83, 1.25, 0.97]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.41}
        />
        <mesh
          name="Text001"
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials["word coloring.001"]}
          position={[1.38, 0.26, 0.02]}
          rotation={[Math.PI / 2, 0, -0.72]}
          scale={0.22}
        />
        <mesh
          name="Text002"
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials["word coloring.002"]}
          position={[-1.87, 1.25, 0.97]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.42}
        />
        <group
          name="GateDoor005"
          position={[-0.72, 0.34, -2.55]}
          scale={[0.36, 0.36, 0.01]}
        >
          <mesh
            name="Cube014"
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials["smooth wood.007"]}
          />
          <mesh
            name="Cube014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_1.geometry}
            material={materials["smooth wood"]}
          />
          <mesh
            name="Cube014_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_2.geometry}
            material={materials["smooth wood.006"]}
          />
        </group>
        <mesh
          name="Polr"
          castShadow
          receiveShadow
          geometry={nodes.Polr.geometry}
          material={materials["smooth wood.011"]}
          position={[1.25, 0.05, -0.83]}
          scale={-0.07}
        />
        <mesh
          name="Polr001"
          castShadow
          receiveShadow
          geometry={nodes.Polr001.geometry}
          material={materials["smooth wood.012"]}
          position={[1.25, 0.05, -1.82]}
          scale={-0.07}
        />
        <group
          name="GateDoor002"
          position={[-1.89, 0.34, 1.84]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.36, 0.36, 0.01]}
        >
          <mesh
            name="Cube020"
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials["smooth wood"]}
          />
          <mesh
            name="Cube020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials["smooth wood.014"]}
          />
          <mesh
            name="Cube020_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_2.geometry}
            material={materials["smooth wood.015"]}
          />
        </group>
        <group
          name="GateDoor004"
          position={[-1.89, 0.34, -0.75]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.36, 0.36, 0.01]}
        >
          <mesh
            name="Cube021"
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials["smooth wood.016"]}
          />
          <mesh
            name="Cube021_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={materials["smooth wood.017"]}
          />
          <mesh
            name="Cube021_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_2.geometry}
            material={materials["smooth wood.018"]}
          />
        </group>
        <group
          name="GateDoor006"
          position={[-1.46, 0.34, -2.55]}
          scale={[0.36, 0.36, 0.01]}
        >
          <mesh
            name="Cube022"
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials["smooth wood.019"]}
          />
          <mesh
            name="Cube022_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube022_1.geometry}
            material={materials["smooth wood.020"]}
          />
          <mesh
            name="Cube022_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube022_2.geometry}
            material={materials["smooth wood.021"]}
          />
        </group>
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.floor}
          scale={9.22}
        />
        <mesh
          name="GateDoor007"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor007.geometry}
          material={materials["Green board"]}
          position={[0.71, 0, 0.13]}
          rotation={[Math.PI / 2, 0, 3.13]}
          scale={[-0.1, -0.08, -0.01]}
        />
        <mesh
          name="GateDoor008"
          castShadow
          receiveShadow
          geometry={nodes.GateDoor008.geometry}
          material={materials["Green board"]}
          position={[-0.93, 0, 0.13]}
          rotation={[Math.PI / 2, 0, 3.13]}
          scale={[-0.1, -0.08, -0.01]}
        />
        <group
          name="bookdoor"
          position={[1.3, 0.56, -1.3]}
          rotation={[Math.PI, Math.PI / 2, 0]}
          scale={[-0.61, -0.05, -0.01]}
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
        <group
          name="bookdoor001"
          position={[1.29, 0.34, -2.2]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.36, 0.36, 0.01]}
        >
          <mesh
            name="Cube016"
            castShadow
            receiveShadow
            geometry={nodes.Cube016.geometry}
            material={materials["smooth wood.009"]}
          />
          <mesh
            name="Cube016_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_1.geometry}
            material={materials["Green board.004"]}
          />
          <mesh
            name="Cube016_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_2.geometry}
            material={materials["book color 2.004"]}
          />
          <mesh
            name="Cube016_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_3.geometry}
            material={materials["book color 1.008"]}
          />
          <mesh
            name="Cube016_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_4.geometry}
            material={materials["book color 1.009"]}
          />
        </group>
        <group
          name="bookdoor003"
          position={[1.29, 0.34, -0.43]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.36, 0.36, 0.01]}
        >
          <mesh
            name="Cube023"
            castShadow
            receiveShadow
            geometry={nodes.Cube023.geometry}
            material={materials["smooth wood"]}
          />
          <mesh
            name="Cube023_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_1.geometry}
            material={materials["Green board.006"]}
          />
          <mesh
            name="Cube023_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_2.geometry}
            material={materials["book color 2.006"]}
          />
          <mesh
            name="Cube023_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_3.geometry}
            material={materials["book color 1.012"]}
          />
          <mesh
            name="Cube023_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_4.geometry}
            material={materials["book color 1.013"]}
          />
        </group>
        <group
          name="GateDoor001"
          position={[0.08, 0.34, -0.04]}
          scale={[0.36, 0.36, 0.01]}
        >
          <mesh
            name="Cube003"
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials["smooth wood"]}
          />
          <mesh
            name="Cube003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials["Green board"]}
          />
          <mesh
            name="Cube003_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_2.geometry}
            material={materials["book color 2"]}
          />
          <mesh
            name="Cube003_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_3.geometry}
            material={materials["book color 1.001"]}
          />
          <mesh
            name="Cube003_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_4.geometry}
            material={materials["book color 1"]}
          />
          <mesh
            name="Cube003_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_5.geometry}
            material={materials["Steel bar"]}
          />
          <mesh
            name="Cube003_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_6.geometry}
            material={materials["smooth wood.002"]}
          />
        </group>
        <group
          name="bookdoor002"
          position={[0.09, 1.61, -2.66]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.36, -0.36, -0.06]}
        >
          <mesh
            name="Cube017"
            castShadow
            receiveShadow
            geometry={nodes.Cube017.geometry}
            material={materials["Steel bar"]}
          />
          <mesh
            name="Cube017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_1.geometry}
            material={materials["Green board.005"]}
          />
          <mesh
            name="Cube017_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_2.geometry}
            material={materials["book color 2.005"]}
          />
          <mesh
            name="Cube017_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_3.geometry}
            material={materials["book color 1.010"]}
          />
          <mesh
            name="Cube017_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_4.geometry}
            material={materials["book color 1.011"]}
          />
        </group>
        <group
          name="GateDoor003"
          position={[-1.55, 0.34, -0.04]}
          scale={[0.36, 0.36, 0.01]}
        >
          <mesh
            name="Cube012"
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={materials["smooth wood"]}
          />
          <mesh
            name="Cube012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_1.geometry}
            material={materials["Green board.002"]}
          />
          <mesh
            name="Cube012_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_2.geometry}
            material={materials["book color 2.002"]}
          />
          <mesh
            name="Cube012_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_3.geometry}
            material={materials["book color 1.004"]}
          />
          <mesh
            name="Cube012_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_4.geometry}
            material={materials["book color 1.005"]}
          />
          <mesh
            name="Cube012_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_5.geometry}
            material={materials["Steel bar.002"]}
          />
          <mesh
            name="Cube012_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_6.geometry}
            material={materials["smooth wood.005"]}
          />
        </group>
        <group
          name="bookdoor004"
          position={[0.09, 0.34, -2.66]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.36, -0.36, -0.06]}
        >
          <mesh
            name="Cube024"
            castShadow
            receiveShadow
            geometry={nodes.Cube024.geometry}
            material={materials["Steel bar.003"]}
          />
          <mesh
            name="Cube024_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube024_1.geometry}
            material={materials["Green board.007"]}
          />
          <mesh
            name="Cube024_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube024_2.geometry}
            material={materials["book color 2.007"]}
          />
          <mesh
            name="Cube024_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube024_3.geometry}
            material={materials["book color 1.014"]}
          />
          <mesh
            name="Cube024_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube024_4.geometry}
            material={materials["book color 1.015"]}
          />
        </group>
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["table wood"]}
          position={[2.82, 0.5, -1.57]}
          scale={[0.53, 0.01, 0.53]}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["table wood"]}
          position={[0.03, 0.52, 2.01]}
          scale={[0.53, 0.01, 0.53]}
        />

        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.ceiling}
          position={[0, 2.67, 0]}
          scale={2.57}
        />
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.ceiling}
          position={[5.05, 2.67, 0]}
          scale={2.57}
        />
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["wall texture"]}
          position={[-1.89, 1.01, 0]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[2.15, 1.7, 2.74]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["wall texture"]}
          position={[-0.83, 1.01, -2.52]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[2.15, 1.7, 2.74]}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["wall texture"]}
          position={[4.62, 1.01, -2.52]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[2.15, 1.7, 2.74]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/BankInside.glb");
export default BankInside;
