import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

import "./css/game.css";

import BankModel from "./assets/components/BankModel";
import OutsideLighting from "./assets/components/OutsideLighting";
import MountainFloor from "./assets/components/MountainFloor";
import BankTitle from "./assets/components/BankTitle";
import SheriffModel from "./assets/components/SheriffModel";
import SheriffTitle from "./assets/components/SheriffTitle";
import CourtModel from "./assets/components/CourtModel";
import HouseModel from "./assets/components/HouseModel";
import GateModel from "./assets/components/GateModel";
import { OrbitControls } from "@react-three/drei";

import "./css/loadingScreen.css";
import "./css/dialogueDiv.css";
import CourtTitle from "./assets/components/CourtTitle";

function HoverableGroup({ children, isMusicPlaying }) {
  const [isHovered, setIsHovered] = useState(false);
  const audio = new Audio("/audio/posterHover.mp3");

  const handlePointerOver = () => {
    setIsHovered(true);
    if (isMusicPlaying && audio.paused) {
      try {
        audio.play();
      } catch (error) {
        console.error("An error occurred while playing the audio:", error);
      }
    }
  };

  const handlePointerOut = () => {
    setIsHovered(false);
  };

  return (
    <group
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      scale={isHovered ? [1, 2, 1] : [1, 1, 1]}
    >
      {children}
    </group>
  );
}

function OutsideGame({
  isMusicPlaying,
  isOutsideDialogueFinished,
  setOutsideDialogueFinished,
  setCanvasReady,
  onPageChange,
}) {
  const audioRef = useRef(null);
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const [dialogueTurn, setDialogueTurn] = useState(0);
  const handleNextButtonClick = () => {
    setDialogueTurn(dialogueTurn + 1);
    console.log(dialogueTurn);
    const audio = new Audio("/audio/buttonPress.mp3");

    if (isMusicPlaying) {
      audio.play();
    }
  };

  useEffect(() => {
    if (isMusicPlaying && audioRef.current && canvasLoaded) {
      try {
        audioRef.current.play();
      } catch (error) {
        console.error("An error occurred while playing the audio:", error);
      }
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
    if (dialogueTurn >= 2) {
      setOutsideDialogueFinished(true);
    }
  }, [isMusicPlaying, canvasLoaded, dialogueTurn, setOutsideDialogueFinished]);

  return (
    <div className="gameBackground d-flex justify-content-center align-items-center">
      <div className="gameContainer ">
        <div
          style={{ zIndex: 1, position: "absolute" }}
          className="loadingScreen2"
        >
          <div className="loadingBubble boldFont">
            Giddy up, partner! We're wranglin' up some mighty fine content for
            ya!
          </div>
        </div>
        <Canvas
          style={{ zIndex: 10 }}
          shadows
          dpr={[1, window.devicePixelRatio]}
          camera={{ position: [22, 8, -22], fov: 50 }}
          className="rounded-5"
          onCreated={() => {
            setCanvasLoaded(true);
            setTimeout(() => {
              setCanvasReady(true);
            }, 2000);
          }}
        >
          <OutsideLighting />
          <HoverableGroup isMusicPlaying={isMusicPlaying}>
            <group
              className="bank"
              onClick={() => {
                onPageChange("projects");
                setCanvasReady(false);
              }}
            >
              <BankModel />
              <BankTitle />
            </group>
          </HoverableGroup>
          <HoverableGroup isMusicPlaying={isMusicPlaying}>
            <group
              className="sheriff"
              onClick={() => {
                onPageChange("about");
                setCanvasReady(false);
              }}
            >
              <SheriffModel />
              <SheriffTitle />
            </group>
          </HoverableGroup>
          <HoverableGroup isMusicPlaying={isMusicPlaying}>
            <group
              className="court"
              onClick={() => {
                window.open("https://example.com", "_blank");
              }}
            >
              <CourtModel />
              <CourtTitle />
            </group>
          </HoverableGroup>

          <group className="houses">
            <group className="housesOnLeft">
              <HouseModel position={[-8, 0.05, 2]} />
              <HouseModel position={[-8, 0.05, 3.2]} />
              <HouseModel position={[-8, 0.05, -2]} />
              <HouseModel position={[-8, 0.05, -3.2]} />
              <HouseModel rotation={[0, 1.5, 0]} position={[-6, 0.05, 4]} />
            </group>
            <group className="housesOnRight">
              <HouseModel rotation={[0, 3.2, 0]} position={[-1, 0.05, 2]} />
              <HouseModel rotation={[0, 3.2, 0]} position={[-1, 0.05, 3.2]} />
              <HouseModel rotation={[0, 3.2, 0]} position={[-1, 0.05, -2]} />
              <HouseModel rotation={[0, 3.2, 0]} position={[-1, 0.05, -3.2]} />
            </group>
            <group className="houseCircle">
              <HouseModel rotation={[0, 1.6, 0]} position={[4, 0.05, 1.6]} />
              <HouseModel rotation={[0, 1.6, 0]} position={[2.8, 0.05, 1.6]} />
              <HouseModel rotation={[0, 1.6, 0]} position={[1.6, 0.05, 1.6]} />
              <GateModel
                rotation={[0, 0, 0]}
                position={[1.6, 0, 6]}
                scale={[0.2, 0.2, 0.2]}
              />
              <GateModel
                rotation={[0, 0, 0]}
                position={[-1.9, 0, 6]}
                scale={[0.2, 0.2, 0.2]}
              />
            </group>
          </group>

          <MountainFloor />
          <OrbitControls />
        </Canvas>
        {canvasLoaded &&
          dialogueTurn < 2 &&
          isOutsideDialogueFinished === false && (
            <div className="dialogueDiv row">
              <div className="cowmanPicture col-3"></div>
              <div className="dialogue text-white calmFont justify-content-center text-center col-6">
                {dialogueTurn === 0 && (
                  <div>
                    Well, howdy there, partner! Welcome to the town of Wildfire
                    Ridge. You see, this here town used to be a real haven for
                    creativity and innovation. But, I reckon I oughta let ya in
                    on a little secret. The fella who founded this place, ol'
                    Mychal, well, he turned his back on us. Stole some of our
                    finest projects, he did. Now, they got a price on his head,
                    and folks 'round here ain't too pleased 'bout it.
                    <audio
                      ref={audioRef}
                      src="/audio/outsideChat1.mp3"
                      type="audio/mpeg"
                    ></audio>
                  </div>
                )}
                {dialogueTurn === 1 && (
                  <div>
                    Anyways, partner, make yourself at home in our fine town!
                    You can mosey on into them buildings with a good ol' click
                    using the mouse and finger, or if you're lookin' to get
                    there faster than a jackrabbit on a hot day, you can use
                    that there navigation bar to hitch a ride to different parts
                    of town!
                    <audio
                      ref={audioRef}
                      src="/audio/outsideChat2.mp3"
                      type="audio/mpeg"
                    ></audio>
                  </div>
                )}
              </div>
              <div className="dialogueButtons col-3">
                <div className="d-grid gap-2">
                  <button
                    onClick={handleNextButtonClick}
                    type="button"
                    className="btn btn-warning"
                  >
                    <div className="cowboyFont text-white">Next</div>
                  </button>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default OutsideGame;
