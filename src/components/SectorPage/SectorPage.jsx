import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./SectorPage.css";
import Typography from "@mui/material/Typography";
import Bloc from "../Bloc/Bloc.jsx";
import Map from "../Map/Mapa.jsx";
import { SectorsVies } from "../../data/data";

const usePathname = () => {
  const location = useLocation();
  return location.pathname.split("/");
};

const SectorPage = (props) => {
  const path = usePathname();
  // WIP segur hi ha una menera millor de fer aixo, custom hook? filter?
  const sName = path[1] ? path[1] : "err";
  const sId = path[2] ? path[2] : "1";
  const sData = SectorsVies[sName] ? SectorsVies[sName][sId - 1] : null;
  
  console.log(sData);
  // TODO maapejar les coordenades de tots els blocs
  const coords = {};

  return (
    <div className="pageContainer">
      {!!sData ? (
        <>
          <Typography
            className="title"
            gutterBottom
            variant="title1"
            component="div"
          >
            ZONA - SECTOR
          </Typography>

          <Map coords={coords} />

          {Object.values(sData).map((element, index) => (
            <Bloc key={index} {...element} />
          ))}
        </>
      ) : (
        <>
          <Typography gutterBottom variant="title1" component="h4">
            No s'han afegit les dades encara, pots crear un json amb les vies i enviar-me'l.
          </Typography>
          <Typography gutterBottom variant="title1" component="h4">
            | (• ◡•)| (❍ᴥ❍ʋ) 
          </Typography>
        </>
      )}
    </div>
  );
};
export default SectorPage;
