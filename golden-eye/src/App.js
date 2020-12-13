import React from "react";
import Navbar from "./Navbar-component/Navbar";
import Hero from "./Hero-Image/Hero";
import Cards from "./Cards/Cards";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./grid.css";

const App = () => {
  return (
    <div className="App ">
      <Router>
        <Navbar styled={styled} />
      </Router>
      <Hero styled ={styled}/>
      <Cards styled ={styled}/>
    </div>
  );
};

export default App;
