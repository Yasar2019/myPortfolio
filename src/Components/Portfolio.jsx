/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import { Helmet } from "react-helmet";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/joshua-aragon-BMnhuwFYr7w-unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "BluetoothMesh for controlling the UV light of an Horticulture Chamber  🎉",
    description: "Software Developer Intern of Symphoni R&D team at Delight Canada Inc.",
    url: "https://symphoni.ai/",
  },
  {
    title:
      "Designing and developping a new system for SPACQ (Professional Society of Authors and Composers of Quebec)",
    description: "Realizing the Vision And SRS documents and offer a prototype to the client.",
    url: "https://eportfolio.etsmtl.ca/Portfolio/Document/56904",
  },
  {
    title: "My Resume Site",
    description: "Created from Microsoft's resume workshop and deployed to GitHub pages.",
    url: "https://yasar2019.github.io/MyResume/",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Highlight of my work and projects" />
      </Helmet>
      <h2 className="portfolio-h2" className="portfolio-h2">Portfolio</h2>
      <div className="portfolio-layout">
        <div className="portfolio-image-container">
          <img className="portfolio-image" src={image} alt={imageAltText} />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="project-container" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 className="project-title">{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
