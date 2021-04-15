import React, { Fragment } from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero/Hero";
import ReadMe from "./components/ReadMe/ReadMe";
import ProjectsTitle from "./components/Titles/ProjectsTitle";
import Projects from "./components/Work/Projects";
import AppsTitle from "./components/Titles/AppsTitle";
import Apps from "./components/Work/Apps";
import Contact from "./components/Contact";
import Footer from "./components/Layout/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <ReadMe />
      <ProjectsTitle />
      <Projects />
      <AppsTitle />
      <Apps />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
