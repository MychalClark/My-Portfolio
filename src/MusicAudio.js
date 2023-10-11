import React, { useRef } from "react";

const MusicAudio = ({ isMusicPlaying, setMusicPlaying }) => {
  const musicRef = useRef(null);

  const handleToggle = () => {
    musicRef.current.volume = 0.12;
    const music = musicRef.current;

    if (isMusicPlaying) {
      music.pause();
    } else {
      music.play();
    }

    setMusicPlaying(!isMusicPlaying);
  };

  return (
    <div style={{ position: "fixed", top: 0, right: 0, zIndex: 99999 }}>
      <i className="fa-solid fa-volume"></i>
      <i className="fa-solid fa-volume-slash"></i>
      <button type="button" className="btn btn-warning" onClick={handleToggle}>
        {isMusicPlaying ? (
          <i className="fa-solid fa-volume-xmark"></i>
        ) : (
          <i className="fa-solid fa-volume-high"></i>
        )}
      </button>

      <audio ref={musicRef} src="/audio/countrymusic.mp3" loop />
    </div>
  );
};

export default MusicAudio;
