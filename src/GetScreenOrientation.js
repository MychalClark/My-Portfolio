import React, { useEffect, useState } from "react";
import "./css/screenOrientation.css";

function GetScreenOrientation() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  const isLandscape = windowSize.width > windowSize.height;
  console.log(isLandscape);

  return (
    <div>
      {!isLandscape && (
        <div className="screenOrientation d-flex justify-content-center align-items-center text-center">
          <img
            src="/images/rotatePhone.gif"
            alt="Please Rotate Device into Landscape Mode"
          ></img>
        </div>
      )}
    </div>
  );
}

export default GetScreenOrientation;
