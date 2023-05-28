import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

const text = `{
  Bloc1: {
    coords: [41.494163, 0.786883],
    name: "Bloc 1: Grata entrada",
    img: cst2_1,
    vies: [
      {
        name: "Aqui hi ha vies xules",
        grau: "V",
        sit: true,
        cau: true,
        love: true,
      },
    ],
  },
  Bloc2: {
    coords: [41.494117, 0.786791],
    name: "Bloc 2: Esquerda bèstia",
    img: cst2_2,
    vies: [
      {
        name: "Aqui hi ha vies xules",
        grau: "V",
        sit: true,
        cau: true,
        love: true,
      },
    ],
  }`;

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
      <Paper sx={{ padding: 2, margin: 1 }}>
        <code>
          <pre>
            {text}
          </pre>
        </code>
      </Paper>
    </Container>
  );
};

export default About;
