import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import SectorPage from "../SectorPage/SectorPage";
import SectorsCards from "../SectorCard/SectorsCards";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  //wip mirar component stack de reactbootsrap
  //wip https://github.com/AtotheY/YoutubePokedex/blob/master/src/App.js
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<SectorsCards />} />
          <Route path="/about" element={<About />} />
          <Route path="/sector/:sectorId" element={<SectorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
