import React from "react";
import Hero from "../Hero-Image/Hero";
import Cards from "../Cards/Cards";
import styled from "styled-components";
import About from "../About/About";


const HomePage = () => {
  return (
    <div>
      <Hero styled={styled} />
      <Cards styled={styled} />
      <About styled={styled} />
    </div>
  );
};

export default HomePage;
