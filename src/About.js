import "./css/about.css";
import Spline from "@splinetool/react-spline";
import "./css/index.css";

function About() {
  return (
    <div className="about">
      <div className="ants">
        <Spline scene="https://prod.spline.design/emIVRXp0RtJGueQy/scene.splinecode" />
      </div>
      <div className="container aboutContainer">
        <div className="row  d-flex justify-content-center text-center">
          <div className="col-md-12 wantedPoster">
            <img src="images/wantedPoster.png" alt=""></img>
          </div>
          <div className="col-md-12 aboutHim text-white cowboyFont">
            <div className="aboutTitle">About Him</div>
            <div className="aboutPara">
              <p>
                Hi, I'm Mychal! A passionate full stack developer with a strong
                focus on creativity. I believe in the power of combining
                technology with artistic elements to create unique and immersive
                web experiences.
              </p>
              <p>
                I graduated from Ranken Technical College, where I honed my
                skills in both frontend and backend development. While I enjoy
                all aspects of web development, my true passion lies in
                exploring the world of 3D design and incorporating it into
                website development.
              </p>
              <p>
                I love working with tools like Blender to create stunning 3D
                assets, and I enjoy pushing the boundaries of web development by
                implementing 3D aspects in my projects. It brings me joy to see
                websites come to life with interactive and visually captivating
                elements.
              </p>
              <p>
                As a lifelong learner, I am dedicated to continuously expanding
                my skill set and staying up-to-date with the latest
                technologies. During my free time, I channel my creativity into
                game development, where I create games that showcase my 3D
                design skills.
              </p>
              <p>
                I am currently seeking exciting opportunities where I can apply
                my skills and take on new challenges. I am eager to work with a
                company that values innovation and encourages personal and
                professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
