import React, { Fragment } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
    <HelmetProvider>
      <Fragment className="App">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta property='og:title' content='Sara Palacios | Portfolio' />
          <meta property='og:image'
            content='https://i.ibb.co/MZZrHF3/portfolio-d.png' />
          <meta property='og:description'
            content="Portfolio de Sara Palacios. FullStack Developer enamorada de la tecnología y orientada a crear soluciones diferentes que realmente sirvan a las personas y aporten valor porque lo que distingue un buen trabajo de un gran trabajo es haber entendido la necesidad y saber responder a las expectativas." />
          <meta property='og:url' content='https://www.sarapalacios.me' />
          <meta name="keywords" content="Sara Palacios, Programación Web, FullStack, Front-End, React, Ironhack" />
          <meta name="copyright" content="Sara Palacios" />
          <meta name="author" content="Sara Palacios" />
          <meta name="robots" content="index" />
          <meta name="robots" content="follow" />
          <meta http-equiv="expires" content="1800" />
          <title>Sara Palacios | Portfolio</title>
        </Helmet>
        <header className="App-header">
          Sara Palacios | Portfolio
        </header>
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
    </HelmetProvider>
  );
};

export default Home;
