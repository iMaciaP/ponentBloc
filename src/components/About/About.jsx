import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 2 }}>
      <Paper sx={{ padding: 2, margin: 1 }}>
        <Typography gutterBottom variant="title">
          Aquesta pàgina és en construcció, tot és gratis així que va al seu
          ritme.
        </Typography>
      </Paper>
      <Paper sx={{ padding: 2, margin: 1 }}>
        <Typography gutterBottom variant="subtitle">
          Sempre pots col·laborar amb el que creguis enviant un correu a <br />
          <b>profilacticxl@gmail.com</b>
        </Typography>
        <Typography gutterBottom variant="title">
          {"| (• ◡•)| (❍ᴥ❍ʋ)"}
        </Typography>
      </Paper>
      <Paper sx={{ padding: 2, margin: 1 }}>
        <Typography gutterBottom variant="title">
          TODO LIST:
          <br />
          <Typography gutterBottom variant="caption">
            - implementar per penjar noves ressenyes{" "}
            <a href="http://ianli.github.io/raphael-sketchpad/">
              link dibuixar
            </a>
          </Typography>
          <br />
          <Typography gutterBottom variant="caption">
            - carregar dades -.-
          </Typography>
          <br />
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
