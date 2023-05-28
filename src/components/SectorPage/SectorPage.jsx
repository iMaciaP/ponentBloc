import React from "react";
import { useLocation } from "react-router-dom";
import "./SectorPage.css";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
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

  const coords = !!sData
    ? Object.values(sData).map((obj) => {
        return !!obj.coords ? obj.coords : [];
      })
    : null;

  //TODO mapejar el titol al nom del sector
  // const pathname = window.location.pathname;

  return (
    <Container maxWidth="xl">
      {!!sData ? (
        <>
          <Box>
            <Typography
              className="title"
              gutterBottom
              variant="title1"
              component="div"
              sx={{ margin: 1, borderRadius: 1 }}
            >
              {sName} - {sId}
            </Typography>
          </Box>

          <Map coords={coords} />

          {Object.values(sData).map((element, index) => (
            <Bloc key={index} {...element} />
          ))}
        </>
      ) : (
        <Paper sx={{ margin: 3, padding: 2 }}>
          <Typography gutterBottom variant="title1">
            No s'han afegit les dades encara, pots crear un json amb les vies i
            enviar-me'l.
          </Typography>
          <br />
          <Typography gutterBottom variant="title1" component="h4">
            | (• ◡•)| (❍ᴥ❍ʋ)
          </Typography>
          <br />
          <Alert severity="warning">
            Pots trobar les ressenyes que tinc aqui:{" "}
            <a href="https://drive.google.com/drive/folders/1rFB2FYWl74s9JKTMGbfYOz6rh3oX4hbb?usp=share_link">
              link
            </a>
          </Alert>
        </Paper>
      )}
    </Container>
  );
};
export default SectorPage;
