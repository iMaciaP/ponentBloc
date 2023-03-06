import React, { useState } from "react";
import "./Landpage.css";
import SectorCard from "../SectorCard/SectorCard";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";
import { cardsGarrigues, cardsNoguera, cardsSegria } from "../../data/data";
import { Typography } from "@mui/material";

const Landpage = () => {
  const [currSector, setCurrSector] = useState(0);
  console.log(currSector);

  const mapCards = {
    0 : cardsGarrigues,
    1 : cardsNoguera,
    2 : cardsSegria
  }

  return (
    <>
      <Banner />
      <div className="container">
        <Button className="buttons" variant="contained" onClick={() => setCurrSector(0)}>1 - page</Button>
        <Button className="buttons" variant="contained" onClick={() => setCurrSector(1)}>2 - page</Button>
        <Button className="buttons" variant="contained" onClick={() => setCurrSector(2)}>3 - page</Button>
        {mapCards[currSector]? (
          <div className="SectorCards">
            {mapCards[currSector].map((element, index) => {
              return <SectorCard key={index} {...element} />;
            })}
          </div>
        ) : <Typography>No info aneu al boto colabora per queixar-vos</Typography>}
      </div>
      <Footer />
    </>
  );
};

export default Landpage;
