import Navbar from "./Navbar";
import React from "react";
import { View } from "react-native";
import { useState } from "react";
import "./css/app.css";

import "bootstrap/dist/css/bootstrap.min.css";
import LoadingScreen from "./LoadingScreen";
import OutsideGame from "./OutsideGame";
import BankGame from "./BankGame";
import MusicAudio from "./MusicAudio";
import JailGame from "./JailGame";
import GetScreenOrientation from "./GetScreenOrientation";
function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMusicPlaying, setMusicPlaying] = useState(false);
  const [isOutsideDialogueFinished, setOutsideDialogueFinished] =
    useState(false);
  const [isJailDialogueFinished, setJailDialogueFinished] = useState(false);
  const [isBankDialogueFinished, setBankDialogueFinished] = useState(false);
  const [isCanvasReady, setCanvasReady] = useState(false);

  function handlePageChange(page) {
    setCurrentPage(page);
    console.log("Current Page:", page);
    console.log(currentPage);
  }
  return (
    <div>
      <View>
        <GetScreenOrientation />
        {isCanvasReady === false && <LoadingScreen />}
        <Navbar
          onPageChange={handlePageChange}
          currentPage={currentPage}
          isMusicPlaying={isMusicPlaying}
          isCanvasReady={isCanvasReady}
          setCanvasReady={setCanvasReady}
        />
        <MusicAudio
          isMusicPlaying={isMusicPlaying}
          setMusicPlaying={setMusicPlaying}
        />
        <div className="gameView">
          <div className="gameSize100">
            {currentPage === "home" && (
              <OutsideGame
                isMusicPlaying={isMusicPlaying}
                isOutsideDialogueFinished={isOutsideDialogueFinished}
                setOutsideDialogueFinished={setOutsideDialogueFinished}
                setCanvasReady={setCanvasReady}
                onPageChange={handlePageChange}
              />
            )}
            {currentPage === "projects" && (
              <BankGame
                isMusicPlaying={isMusicPlaying}
                isBankDialogueFinished={isBankDialogueFinished}
                setBankDialogueFinished={setBankDialogueFinished}
                setCanvasReady={setCanvasReady}
              />
            )}
            {currentPage === "about" && (
              <JailGame
                isMusicPlaying={isMusicPlaying}
                isJailDialogueFinished={isJailDialogueFinished}
                setJailDialogueFinished={setJailDialogueFinished}
                setCanvasReady={setCanvasReady}
              />
            )}
          </div>
        </div>
      </View>
    </div>
  );
}

export default App;
