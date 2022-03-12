import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import SectorCard from "../SectorCard/SectorCard";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="SectorCards">
        <SectorCard />
        <SectorCard />
        <SectorCard />
        <SectorCard />
      </div>
    </div>
  );
};

export default App;
