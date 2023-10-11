import { Canvas } from "@react-three/fiber";
import React, { useState, useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import OutsideLighting from "./assets/components/OutsideLighting";
import { EffectComposer, Vignette, Noise } from "@react-three/postprocessing";
import JailInside from "./assets/components/JailInside";
import "./css/game.css";
import "./css/dialogueDiv.css";
import About from "./About";
function JailGame({
  isMusicPlaying,
  isJailDialogueFinished,
  setJailDialogueFinished,
  setCanvasReady,
}) {
  const audioRef = useRef(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const [dialogueTurn, setDialogueTurn] = useState(0);
  const [audioSrc, setAudioSrc] = useState("/audio/jailDialogue1.mp3");

  const handleNextButtonClick = () => {
    setDialogueTurn((prevDialogueTurn) => {
      const newDialogueTurn = prevDialogueTurn + 1;
      console.log(newDialogueTurn);

      switch (newDialogueTurn) {
        default:
          break;
        case 1:
          setAudioSrc("/audio/jailDialogue2.mp3");
          break;

        case 2:
          setAudioSrc("/audio/jailDialogue3.mp3");
          break;
        case 3:
          setAudioSrc("/audio/jailDialogue4.mp3");
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
    if (dialogueTurn >= 4) {
      setJailDialogueFinished(true);
    }
  }, [isMusicPlaying, canvasLoaded, dialogueTurn, setJailDialogueFinished]);

  return (
    <div
      className={`JailGame sectionContainer ${
        aboutOpen ? "row noPadding" : ""
      }`}
    >
      <div
        className={
          aboutOpen
            ? "gameContainerHalf container-effect col-6 noPadding"
            : "gameContainer"
        }
      >
        <div
          style={{ zIndex: 1, position: "absolute" }}
          className="loadingScreen3"
        >
          <div className="loadingBubble boldFont">
            Yeehaw! This page's loadin' like a cowboy on a quick draw!
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
            position={[1.7, 1, 1]}
            rotation={[0.0, -0.47, 0]}
          />
          <EffectComposer>
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.1} darkness={0.4} />
          </EffectComposer>

          <JailInside
            openAbout={() => setAboutOpen(!aboutOpen)}
            isMusicPlaying={isMusicPlaying}
          />
        </Canvas>
        {canvasLoaded &&
          dialogueTurn < 4 &&
          isJailDialogueFinished === false && (
            <div className="dialogueDiv row">
              {(dialogueTurn === 0 || dialogueTurn === 2) && (
                <div className="cowmanPicture col-3"></div>
              )}
              {(dialogueTurn === 1 || dialogueTurn === 3) && (
                <div className="sheriffPicture col-3"></div>
              )}
              <div className="dialogue text-white calmFont justify-content-center text-center col-6">
                {dialogueTurn === 0 && (
                  <div>
                    Welcome to the sheriff's building. This here is where
                    justice is served, Wildfire Ridge style. I was just 'bout to
                    introduce you to the man himself, Sheriff Jackson. He's a
                    mighty fine lawman.
                    <audio
                      ref={audioRef}
                      src={audioSrc}
                      type="audio/mpeg"
                    ></audio>
                  </div>
                )}
                {dialogueTurn === 1 && (
                  <div>
                    Hahaha! No need for the praise, Randall.
                    <audio
                      ref={audioRef}
                      src={audioSrc}
                      type="audio/mpeg"
                    ></audio>
                  </div>
                )}
                {dialogueTurn === 2 && (
                  <div>
                    Well, Sheriff, you know I always speak the truth. Anyway,
                    we're a little busy right now, ain't we? Huntin' down Mychal
                    ain't no small task.
                    <audio
                      ref={audioRef}
                      src={audioSrc}
                      type="audio/mpeg"
                    ></audio>
                  </div>
                )}
                {dialogueTurn === 3 && (
                  <div>
                    That's right, Randall! We're hot on his trail, tryin' to
                    figure out what he's up to. If you're curious 'bout Mychal,
                    you might wanna click on that poster over yonder. It's got
                    some interestin' information.
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
      {aboutOpen === true && <About className="col-6" />}
    </div>
  );
}

export default JailGame;
