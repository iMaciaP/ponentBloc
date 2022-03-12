import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import SectorCard from "../SectorCard/SectorCard";
import { cardsInfo } from "../../data/data";

const App = () => {
  //wip mirar component stack de reactbootsrap
  return (
    <div className="App">
      <NavBar />
      <div className="SectorCards">
        {cardsInfo.map((element, index) => {
          return (
            <SectorCard
              key={index}
              header={element.header}
              title={element.title}
              imgSrc={element.imgSrc}
              desc={element.desc}
              btnlink={element.btnlink}
              btnLabel={element.btnLabel}
              badges={element.badges}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
