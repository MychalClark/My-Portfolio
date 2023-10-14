import "./css/loadingScreen.css";
import { useEffect } from "react";
function LoadingScreen() {
  useEffect(() => {
    const letters = document.querySelectorAll(".loadingLetter");

    letters.forEach((loadingLetter, index) => {
      const delay = index * 120;
      loadingLetter.style.animationDelay = `${delay}ms`;
    });
  }, []);

  return (
    <div className="loadingDiv">
      <div className="loadingBlur d-flex text-center justify-content-center">
        <div className="loadingText cowboyFont d-flex text-center justify-content-center ">
          <span className="loadingLetter">L</span>
          <span className="loadingLetter">O</span>
          <span className="loadingLetter">A</span>
          <span className="loadingLetter">D</span>
          <span className="loadingLetter">I</span>
          <span className="loadingLetter">N</span>
          <span className="loadingLetter">G</span>
          <span className="loadingLetter">!</span>
        </div>
      </div>
    </div>
  );
}
export default LoadingScreen;
