import React from "react";
import "./Landpage.css";
import SectorCard from "../SectorCard/SectorCard";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import { cardsInfo } from "../../data/data";

const Landpage = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="SectorCards">
          {cardsInfo.map((element, index) => {
            return <SectorCard key={index} {...element} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landpage;
