/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import { Helmet } from "react-helmet";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Yasar Nazzarian",
  title: "Software Engineering Student & AI enthousiat",
  email: "yasar20111926@hotmail.com",
  gitHub: "Yasar2019",
  //instagram: "microsoft",
  linkedIn: "yasarnazzarian-98/",
  //medium: "",
  twitter: "yasarnazarian",
  //youTube: "Code",
};

const primaryColor = "black";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Helmet>
        <title>
          {siteProps.name} - {siteProps.title}
        </title>
        <meta
          name="description"
          content="Welcome to my personal website. Here you can learn more about me, my portfolio, and how to get in touch!"
        />
      </Helmet>
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
