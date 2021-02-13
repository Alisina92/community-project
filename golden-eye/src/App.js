import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar-component/Navbar";
import HomePage from "./HomePage/HomePage";
import Learning from"./LearningPage/Learning";
import Footer from "./Footer/Footer";
import "./App.css";
import "./grid.css";


const App = () => {
  return (
    <div className="App ">
      <Router>
      <Navbar styled={styled} />
        <switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/learning" component={Learning} exact />
        </switch>
       <Footer styled={styled} />
      </Router>
    </div>
  );
};

export default App;
