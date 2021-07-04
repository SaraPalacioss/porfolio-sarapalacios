import React, {Fragment} from 'react';
import Navbar from "./Layout/Navbar";
import Hero from "./Hero/Hero";
import ReadMe from "./ReadMe/ReadMe";
import ProjectsTitle from "./Titles/ProjectsTitle";
import Projects from "./Work/Projects";
import AppsTitle from "./Titles/AppsTitle";
import Apps from "./Work/Apps";
import Contact from "./Contact";
import Footer from "./Layout/Footer";

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
}
 
export default Home;