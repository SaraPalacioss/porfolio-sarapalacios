import React, { Fragment } from "react";
import Navbar from "./Layout/Navbar";

import Hero from "./Hero/Hero";
import ReadMe from "./ReadMe";

import Footer from "./Layout/Footer";

const Home = () => {
  return (
    <Fragment>
    <Navbar/>
      <Hero/>
      <ReadMe/>
      <Footer />
    </Fragment>
  );
};

export default Home;
