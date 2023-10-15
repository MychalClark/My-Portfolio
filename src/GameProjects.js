import "./css/projects.css";

import { useState } from "react";
import "./css/overlayTopic.css";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectDescription from "./ProjectDescription";
function GameProjects() {
  /*Projects*/
  const transformers = {
    img: "/images/transformerImg.jpg",
    title: "Transformers Game Concept",
    media: ["/videos/transformerGame.mp4"],
    description: `A showcase of game design, artstyle, and animation using the "Transformerverse".
    
    For the 3D models, I went for a toyish artstyle that would compliment the stop motion animation. To handle transformations, I created two seperate base models that could be edited. The robot and the car.
     To create fluid transformations, the robot model moves into a pose while shrinking continuously. The car model that is split into seperate pieces enlarges and overlaps the robot while reverting back into its original form before the split. This gives the illusion that the robot is shaping into the car model. To add weight and quick movement to the animations, I minuplated the cameras FOV, distance and shake.
     
     I really enjoy procedural generated content because it creates unique designs and cuts work in half. So for the firearms, I created a procedural generation that was inspired by Borderlands. To do this I made a base model of a firearm. The model included 7 parts: Scope, Stock, Barrel, Handgaurd, Magazine, Lower Reciever and Upper Reciever. Each part of the model gives the firearm different attributes thsat can effect the Look and usefulness of the weapon.
     With this procedural system, a group of 15 firearms could make over 50,000 unique weapon combinations!`,
    link: null,
  };
  const inline = {
    img: "/images/inlineImage.png",
    title: "Inline Game",
    media: ["/videos/inlineVideo.mp4"],
    description: ` A creation that was heavily inspired by the EA Skate franchise.

      Unlike most extreme sport games, I wanted to create a new system that doesn't use splines to engage in grind mechanics, and jumps that don't use the analog to start.
      Instead of using splines to create a "can grind here", I created a system that uses multiple raycastings to dectect if a model had an edge. A system like this creates multiple benefits for moderen extreme sport games.
      
      A Edge detection system allows Map creators to plop down any model, without drawing splines over every edge of the surface. This reduces ram, space and time letting creators focus more on looks than gameplay.
      Creates realism. Instead of magnetizing onto railings, the skater uses the physics system to register when it is touching a edge. Meaning the skater could always slip off depending on speed and the way the skater lands on a edge.
      
      Instead of flicking the analog to jump like most esg, I created a new way of jumping! Gyro. Flicking the remote causes your charater to jump. Depending on how low you have the remote affects the height in your jump. When in the air the gyro height changes the tricks can perform. Say you wanted your character legs to stick out straight while grabbing them instead of bent in a cannonball position. Holding the gyro in a up position while in the air would create a different trick like a "rocket air"vinstead of a "cannonball".
      
      A Gyro controlled skater allows more access to tricks, creates more opportunities for the analogs, and more importantly makes the feel like their really inside the video game. As far as I can tell, I'm the first to do this concept. Yes im bragging!`,
    link: null,
  };
  const artworkOne = {
    img: "/images/imp.png",
    title: "Blender Artwork #1",
    media: [
      "/images/imp.png",
      "/images/alien.png",
      "/images/boar1.png",
      "/images/blenderImg.png",
      "/images/house.png",
    ],
    description: `Some Random 3D models`,
    link: null,
  };

  /*Const */
  const [projects, setProjects] = useState([transformers, inline, artworkOne]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectDescriptionOpen, setIsProjectDescriptionOpen] =
    useState(false);

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="fullstackProjects overlayTopic"
      style={{
        zIndex: selectedProject ? 1004 : 999,
        height: selectedProject ? 0 : "",
      }}
    >
      <div className="projectBlur">
        {/* Title */}
        <h2 className="projectsTitle text-center text-white cowboyFont mt-3">
          GAME DESIGN AND 3D ART
        </h2>
        <div className="span projectSpan text-center mb-3 cowboyFont ">
          Indie game development and artwork
        </div>
        {/* project grid start */}
        <div className="projectGrid ">
          {!selectedProject && (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="10px">
                {projects.map((project, i) => (
                  <img
                    key={i}
                    className="projectImage"
                    alt="Unable to Load Media"
                    src={project.img}
                    onClick={() => {
                      handleImageClick(project);
                      setIsProjectDescriptionOpen(true);
                      scrollToTop();
                    }}
                  ></img>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
          {selectedProject && (
            <ProjectDescription
              project={selectedProject}
              onClose={() => {
                setIsProjectDescriptionOpen(false);
                setSelectedProject(null);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default GameProjects;
