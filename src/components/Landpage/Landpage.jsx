import React, { useState, useEffect } from "react";
import "./Landpage.css";
import SectorCard from "../SectorCard/SectorCard";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { cardsGarrigues, cardsNoguera, cardsSegria } from "../../data/data";
import { Stack, Typography, Divider, Container } from "@mui/material";

const Landpage = () => {
  const [currSector, setCurrSector] = useState(0);

  const mapCards = {
    0: cardsGarrigues,
    1: cardsNoguera,
    2: cardsSegria,
  };

  useEffect(() => {}, [currSector]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Banner />
      <Paper sx={{ margin: 3 }}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          sx={{ padding: 3 }}
        >
          <Button variant="contained" onClick={() => setCurrSector(0)}>
            Garrigues
          </Button>
          <Button variant="contained" onClick={() => setCurrSector(1)}>
            La Noguera
          </Button>
          <Button variant="contained" onClick={() => setCurrSector(2)}>
            Segrià
          </Button>
        </Stack>
      </Paper>
      {mapCards[currSector] ? (
        <Box
          sx={{
            flexWrap: "wrap",
            display: "flex",
            justifyContent: "space-around",
            padding: 8,
            flexDirection: "row",
            width: "100%",
          }}
        >
          {mapCards[currSector].map((element, index) => {
            return <SectorCard key={index} {...element} />;
          })}
        </Box>
      ) : (
        <Typography>No info aneu al boto colabora per queixar-vos</Typography>
      )}
      <Footer />
    </Container>
  );
};

export default Landpage;
