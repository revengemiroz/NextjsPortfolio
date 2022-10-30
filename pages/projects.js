import React from "react";
import ReactTooltip from "react-tooltip";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { OnProjectPageTrigger } from "../components/Trigger/onProjectPageTrigger";
import windowsize from "../components/windowsize";

import { projectsCollection } from "../Data/project";

import HTML from "../public/project/html.png";
import KNOT from "../public/project/four.png";
import Mern from "../public/project/mern.png";
import Github from "../public/project/github.png";
import Movie from "../public/project/movie.png";
import Project_Shelf from "../public/project/Project-Shelf.png";

import styles from "../styles/pages/projects.module.css";

export const ImgPath = (projectName) => {
  switch (projectName) {
    case "Project Shelf":
      return Project_Shelf;
    case "Movie App":
      return Movie;
    case "Knots":
      return KNOT;
    case "MERN Stack":
      return Mern;
    case "Vanilla Js Collection":
      return "https://cdn.discordapp.com/attachments/736210763315675158/745963481768919050/unknown.png";
    case "HTML and CSS Collection":
      return HTML;
    case "Github SignIn/Up page":
      return Github;
    case "React Hook Form":
      return "https://cdn.discordapp.com/attachments/736210763315675158/745947194938490930/unknown.png";
    default:
      return;
  }
};

function projects(props) {
  const [width] = windowsize();
  return (
    <Layout title="Projects | Miroz Devkota">
      <Header />

      <div className={styles.containers}>
        <p className={styles.projects}>Projects</p>

        <p className={styles.commingSoon}>
          Below are some of my Projects that i have done on the road
          to being a good Front End Developer. Most of my stacks
          include Javascript Framework like{" "}
          <a
            href="https://reactjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            React Js
          </a>
          ,{" "}
          <a
            href="https://nextjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next Js
          </a>
          ,{" "}
          <a
            href="https://nodejs.org/en/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Node Js
          </a>
          ,{" "}
          <a
            href="https://expressjs.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Express Js
          </a>{" "}
          and databases such as{" "}
          <a
            href="https://www.postgresql.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            PostgreSQL
          </a>
          ,{" "}
          <a
            href="https://www.mongodb.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            MongoDB
          </a>
          .
        </p>

        <div className={styles.projectCollection}>
          {projectsCollection.map((project) => (
            <>
              <ReactTooltip
                id={String(project.id)}
                className="tooltip"
                effect="float"
              >
                <OnProjectPageTrigger
                  description={project.description}
                ></OnProjectPageTrigger>
              </ReactTooltip>
              <div key={project.id} className={styles.project}>
                <div className={styles.imgContainer}>
                  <img
                    data-tip
                    data-for={String(project.id)}
                    alt={project.project_name}
                    src={ImgPath(project.project_name)}
                    className={styles.project__thumbnail}
                  ></img>
                </div>
                <a
                  href={project.project_link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className={styles.titleContainer}>
                    <span className={styles.number}>
                      No.<span>{project.id}</span>
                    </span>

                    <div>
                      <h4>{project.project_name}</h4>
                    </div>

                    <span className="fas fa-external-link-alt"></span>
                  </div>
                </a>

                <div className={styles.tagsContainer}>
                  {project.tags.map((tag) => {
                    return <span className={styles.tags}>{tag}</span>;
                  })}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default projects;
