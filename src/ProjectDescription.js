import "./css/projects.css";

import "./css/overlayTopic.css";
import React from "react";
import "./css/description.css";

function ProjectDescription({ project, onClose }) {
  return (
    <div>
      <div className="container-fluid descriptionContainer text-center">
        <button
          style={{ position: "fixed", zIndex: 999, top: "20%", left: "5%" }}
          type="button"
          className="btn btn-warning"
          onClick={() => {
            onClose();
          }}
        >
          <div className="cowboyFont text-white">Close</div>
        </button>
        <div className=" d-flex align-items-center justify-content-center row">
          <h1 className="text-white cowboyFont col-12">{project.title}</h1>
          <div
            id="projectCarousel"
            className="carousel slide col-12"
            data-bs-ride="false"
          >
            <div className="carousel-inner">
              {project.media.map((media, i) => {
                if (
                  media.endsWith(".jpg") ||
                  media.endsWith(".png") ||
                  media.endsWith(".jpeg")
                ) {
                  return (
                    <div
                      className={`carousel-item ${i === 0 ? "active" : ""}`}
                      key={i}
                    >
                      <img
                        src={media}
                        className="d-block"
                        alt={`Unable to load${i}`}
                      />
                    </div>
                  );
                } else if (media.endsWith(".mp4") || media.endsWith(".mkv")) {
                  return (
                    <div
                      className={`carousel-item ${i === 0 ? "active" : ""}`}
                      key={i}
                    >
                      <video controls>
                        <source src={media} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {project.link !== null &&
            project.link !== "null" &&
            project.link !== "" && (
              <a
                className="btn col-12 btn-warning repoButton text-white"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                Visit Repository
              </a>
            )}
          <div className="barkArea d-flex align-items-center justify-content-center row">
            <div className="infoContainer col-12">
              <div style={{ whiteSpace: "pre-line" }}>
                <h3 className="text-warning cowboyFont">DESCRIPTION</h3>
              </div>
              {project.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDescription;
