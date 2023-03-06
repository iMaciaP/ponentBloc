import React, { useState } from "react";
import "./Landpage.css";
import SectorCard from "../SectorCard/SectorCard";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";
import { cardsInfo } from "../../data/data";

const Landpage = () => {
  const [currSector, setCurrSector] = useState(0);
  console.log(currSector);

  return (
    <>
      <Banner />
      <div className="container">
        <Button variant="contained" onClick={() => setCurrSector(0)}>1 - page</Button>
        <Button variant="contained" onClick={() => setCurrSector(1)}>2 - page</Button>
        <Button variant="contained" onClick={() => setCurrSector(2)}>3 - page</Button>
        {currSector === 1 ? (
          <div className="SectorCards">
            {cardsInfo.map((element, index) => {
              return <SectorCard key={index} {...element} />;
            })}
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default Landpage;
