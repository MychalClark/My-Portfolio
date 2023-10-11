import { Canvas } from "@react-three/fiber";
import "./css/loadingScreen.css";
import React from "react";
import { PerspectiveCamera } from "@react-three/drei";
import "./css/game.css";
import OutsideLighting from "./assets/components/OutsideLighting";
import BankInside from "./assets/components/BankInside";
import { useRef, useState } from "react";
import { EffectComposer, Vignette, Noise } from "@react-three/postprocessing";
import FullstackProjects from "./FullstackProjects";
import "./css/overlayTopic.css";
import { useEffect } from "react";
import "./css/index.css";
import "./css/dialogueDiv.css";
import GameProjects from "./GameProjects";
function BankGame({
  isMusicPlaying,
  isBankDialogueFinished,
  setBankDialogueFinished,
  setCanvasReady,
}) {
  const audioRef = useRef(null);
  const [fullstackOpen, setFullstackOpen] = useState(false);
  const [gameProjectsOpen, setGameProjectsOpen] = useState(false);
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const [dialogueTurn, setDialogueTurn] = useState(0);
  const [audioSrc, setAudioSrc] = useState("/audio/bankDialogue1.mp3");

  const handleNextButtonClick = () => {
    setDialogueTurn((prevDialogueTurn) => {
      const newDialogueTurn = prevDialogueTurn + 1;
      console.log(newDialogueTurn);

      switch (newDialogueTurn) {
        default:
          break;
        case 1:
          setAudioSrc("/audio/bankDialogue2.mp3");
          break;
        case 2:
          setAudioSrc("/audio/bankDialogue3.mp3");
          break;
      }

      return newDialogueTurn;
    });

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
    if (dialogueTurn >= 3) {
      setBankDialogueFinished(true);
    }
  }, [isMusicPlaying, canvasLoaded, dialogueTurn, setBankDialogueFinished]);

  function closeAllProjects() {
    setGameProjectsOpen(false);
    setFullstackOpen(false);
  }

  return (
    <div className="BankGame sectionContainer">
      <div className=" gameContainer ">
        <div
          style={{ zIndex: 1, position: "absolute" }}
          className="loadingScreen"
        >
          <div className="loadingBubble boldFont">
            Yeehaw! Just hold yer horses, cowboy! We're fixin' to load things up
            real nice for ya!
          </div>
        </div>
        <Canvas
          style={{ zIndex: 20 }}
          shadows
          dpr={[1, window.devicePixelRatio]}
          onCreated={() => {
            setCanvasLoaded(true);
            setTimeout(() => {
              setCanvasReady(true);
            }, 2000);
          }}
        >
          <OutsideLighting />
          <PerspectiveCamera
            makeDefault
            position={[2.8, 0.6, 2.4]}
            rotation={[0.2, 0.7, -0.14]}
          />
          <EffectComposer>
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.1} darkness={0.4} />
          </EffectComposer>

          <BankInside
            openfullStackProjects={() => {
              if (!fullstackOpen && !gameProjectsOpen) {
                setFullstackOpen(true);
              }
            }}
            openGameProjects={() => {
              if (!fullstackOpen && !gameProjectsOpen) {
                setGameProjectsOpen(true);
              }
            }}
            isMusicPlaying={isMusicPlaying}
          />
        </Canvas>

        {canvasLoaded &&
          dialogueTurn < 3 &&
          isBankDialogueFinished === false && (
            <div className="dialogueDiv row">
              <div className="cowgirlPicture col-3"></div>

              <div className="dialogue text-white calmFont justify-content-center text-center col-6">
                {dialogueTurn === 0 && (
                  <div>
                    Well, now, hold on just a minute there, stranger. You ain't
                    supposed to be in this here bank. This place is off-limits
                    to most folks.
                    <audio
                      ref={audioRef}
                      src={audioSrc}
                      type="audio/mpeg"
                    ></audio>
                  </div>
                )}
                {dialogueTurn === 1 && (
                  <div>
                    Wha? ah? Oh! My apologies! Sheriff's been expectin' ya.
                    We've got ourselves a right mess on our hands. Them projects
                    we had, they're all scattered around like tumbleweeds in a
                    storm. We're tryin' to figure out just what that Mychal
                    fella took.
                    <audio
                      ref={audioRef}
                      src={audioSrc}
                      type="audio/mpeg"
                    ></audio>
                  </div>
                )}
                {dialogueTurn === 2 && (
                  <div>
                    You can click on them posters hangin' around the bank to see
                    what we've found so far. That might just help you figure out
                    where Mychal's been pokin' his nose!
                    <audio
                      ref={audioRef}
                      src={audioSrc}
                      type="audio/mpeg"
                    ></audio>
                  </div>
                )}
              </div>
              <div className="dialogueButtons col-3">
                <div class="d-grid gap-2">
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
      {fullstackOpen || gameProjectsOpen ? (
        <div className="Projects ">
          {fullstackOpen && <FullstackProjects />}
          {gameProjectsOpen && <GameProjects />}
          <button
            style={{ position: "fixed", zIndex: 999, top: "20%", left: "5%" }}
            type="button"
            className="btn btn-warning"
            onClick={() => {
              closeAllProjects();
            }}
          >
            <div className="cowboyFont text-white">Close</div>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default BankGame;
