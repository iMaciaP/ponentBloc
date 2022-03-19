import React from "react";
import "./Landpage.css";
import SectorCard from "../SectorCard/SectorCard";
import Banner from "../Banner/Banner";
import { cardsInfo } from "../../data/data";

const Landpage = () => {
  return (
    <div className="container">
      <Banner />
      <div className="SectorCards">
        {cardsInfo.map((element, index) => {
          return <SectorCard {...element} />;
        })}
      </div>
    </div>
  );
};

export default Landpage;
