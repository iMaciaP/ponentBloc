import React from "react";
import "./SectorsCards.css";
import SectorCard from "../SectorCard/SectorCard";
import { cardsInfo } from "../../data/data";

const SectorsCards = () => {
  return (
    <div className="SectorCards">
      {cardsInfo.map((element, index) => {
        return <SectorCard {...element} />;
      })}
    </div>
  );
};

export default SectorsCards;
