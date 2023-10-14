import "./css/projects.css";
import { useState } from "react";
import "./css/overlayTopic.css";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectDescription from "./ProjectDescription";
function FullstackProjects() {
  /*Projects*/
  const gameLibrary = {
    img: "/images/gameLibraryImage.png",
    title: "Game Library",
    media: [
      "/videos/gameLibrary.mp4",
      "/images/gameLibraryImage2.png",
      "/images/gameLibraryImage3.png",
    ],
    description: ` Game Library is a game management platform designed with Java for gamers to keep track of their gaming wishlist and catalog their owned games. This user-friendly library integrates seamlessly with the eBay API and utilizes Firebase for a collaborative and social gaming experience.
     Key Features:
      
      Wishlist Management: GameLibrary allows users to create and manage a wishlist of games they desire to own. Users can search for games by title, platform, or genre and add them to their wishlist with a single click.
      
      Owned Games: Users can easily mark games as "owned" in their library, ensuring they always know which games they possess. This feature helps prevent purchasing duplicates and keeps their collection organized.
      
      eBay Integration: GameLibrary leverages the eBay API to enable users to search for games available for sale on the eBay marketplace. Users can find the best deals and listings for the games on their wishlist and access them directly from the platform.
      
      Community Library: Users can connect with others in the gaming community by viewing and sharing their game libraries. This feature allows for game recommendations among gamers.
      
      Firebase Database: GameLibrary employs Firebase as its backend database, ensuring real-time synchronization of data across devices. Users can access their library and wishlist from multiple devices and always have up-to-date information.`,
    link: "https://github.com/MychalClark/GameLibrary",
  };
  const bugList = {
    img: "/images/bugListImage.jpg",
    title: "Bug List",
    media: [
      "/videos/buglistvideo.mkv",
      "/images/buglist2.jpg",
      "/images/buglist3.jpg",
    ],
    description:
      "This web application, created using React, simplifies bug tracking and reporting. Users can create accounts, report bugs with descriptions and screenshots, add comments for collaboration, and filter bug reports. MongoDB handles data storage and retrieval, ensuring a seamless and scalable experience. In addition to handling data storage and retrieval, MongoDB is also used to create and maintain user accounts. ",
    link: "https://github.com/MychalClark/issue-tracker-react",
  };
  const javaExamples = {
    img: "/images/folder.png",
    title: "Java Examples",
    media: ["/images/fibonacci.jpg", "/images/receipt.png"],
    description: "Some little work of Java using Android Studio. ",
    link: "https://github.com/MychalClark/SimpleJavaApps",
  };

  /*Const */
  const [projects, setProjects] = useState([
    gameLibrary,
    bugList,
    javaExamples,
  ]);
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
      className="fullstackProjects container-fluid overlayTopic"
      style={{
        zIndex: selectedProject ? 1004 : 999,
        height: selectedProject ? 0 : "auto",
      }}
    >
      <div className="projectBlur">
        {/* Title */}
        <h2 className="projectsTitle text-center text-white cowboyFont mt-3">
          FULLSTACK DEV PROJECTS
        </h2>
        <div className="span projectSpan text-center mb-3 cowboyFont ">
          My Projects for Fullstack Development
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
export default FullstackProjects;
