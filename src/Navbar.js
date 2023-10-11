import "./css/navbar.css";
import "./css/index.css";
import React from "react";

function Navbar({
  onPageChange,
  currentPage,
  isMusicPlaying,
  isCanvasReady,
  setCanvasReady,
}) {
  function openPage(page) {
    switch (page) {
      case "home":
        onPageChange("home");
        break;
      default:
        break;
      case "about":
        onPageChange("about");
        break;
      case "projects":
        onPageChange("projects");
        break;
      case "contact":
        onPageChange("contact");
        break;
    }
  }

  const queSound = () => {
    const audio = new Audio("/audio/buttonPress.mp3");
    if (isMusicPlaying && audio.paused) {
      try {
        audio.play();
      } catch (error) {
        console.error("An error occurred while playing the audio:", error);
      }
    }
  };
  return (
    <div>
      <div className="nav d-flex justify-content-center align-items-center justify-content-evenly  fixed-top">
        <div className=" navName ">
          <div className="navNameText playfulFont  text-white ms-4">
            MYCHAL!
          </div>
        </div>
        <div className="links boldFont d-flex justify-content-evenly">
          <div
            className="nav-link text-white"
            onClick={() => {
              if (isCanvasReady && currentPage !== "home") {
                openPage("home");
                queSound();
                setCanvasReady(false);
              }
            }}
          >
            Home
          </div>
          <div
            className="nav-link text-white"
            onClick={() => {
              if (isCanvasReady && currentPage !== "about") {
                openPage("about");
                queSound();
                setCanvasReady(false);
              }
            }}
          >
            About
          </div>
          <div
            className="nav-link text-white"
            onClick={() => {
              if (isCanvasReady && currentPage !== "projects") {
                openPage("projects");
                queSound();
                setCanvasReady(false);
              }
            }}
          >
            Projects
          </div>

          <a
            className="nav-link text-white"
            href="https://github.com/MychalClark/My-Portfolio"
            rel="noreferrer"
            target="_blank"
          >
            Repository
          </a>
        </div>
        <div className="navName"></div>
      </div>
    </div>
  );
}
export default Navbar;
