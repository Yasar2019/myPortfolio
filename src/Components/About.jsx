/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/337648659_228797629558908_700263482333340213_n.jpg";

const imageAltText = "background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Software Engineering student studying at École de technologie supérieur University at Montreal, Canada. I'm an AI enthousiat. I am planning to develop my skills in software and AI development. I am also interested in Data Science and Machine Learning. I am looking for an internship in AI development.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Software Development",
  "AI Research and Development",
  "Basic Knowledge of Data Science",
  "Philosophy & Psychology",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. Together we can build a better future of humanity by applying AI features in effective and peaceful way";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-content">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="about-quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
