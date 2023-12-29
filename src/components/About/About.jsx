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
        name: "Sense nom 1",
        grau: "7B",
        sit: false,
        cau: false,
        love: false,
      },
      {
        name: "Sense nom 2",
        grau: "6A+",
        sit: false,
        cau: false,
        love: false,
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
        <Typography gutterBottom variant="title">
          Mencions honorables a:
          <ul>
            <li>
              <a href="https://aprietaclimbing.com/">Aprieta climb</a>
            </li>
            <li>
              <a href="https://github.com/chervera/lboulder">
                {"Lboulder (majoria de fotos)"}{" "}
              </a>
            </li>
            <li>
              <a href="http://www.lleidaclimbs.com/">Lleida climbs</a>
            </li>
            <li>
              <a href="https://ponentbloc.netlify.app/">Bouldertopo Spain</a>
            </li>
            <li>
              <a href="https://ponentbloc.netlify.app/">
                La gent de Escala2 ❤️
              </a>
            </li>
          </ul>
        </Typography>
      </Paper>
      <Paper sx={{ padding: 2, margin: 1 }}>
        <Typography gutterBottom variant="subtitle">
          Sempre pots col·laborar amb el que creguis enviant un correu a
          <br />
          <b>{"----------> amantechoncho96@gmail.com <----------"}</b>
          <br />
        </Typography>
        <Typography gutterBottom variant="title">
          {"| (• ◡•)| (❍ᴥ❍ʋ) (•⩊•) (•⩊•)"}
        </Typography>
      </Paper>

      <Paper sx={{ padding: 2, margin: 1 }}>
        <Typography gutterBottom variant="title">
          TODO LIST:
          <br />
          <Typography gutterBottom variant="caption">
            - Fer/aconseguir mes fotos i ressenyes{" "}
          </Typography>
          <br />
          <Typography gutterBottom variant="caption">
            - Carregar totes les imatges amb les linees
          </Typography>
          <br />
          <Typography gutterBottom variant="caption">
            - Que funcioni el buscador de vies
          </Typography>
          <br />
          <Typography gutterBottom variant="caption">
            - Pagar un domini perque no sigui ponentbloc.netlify.com
          </Typography>
          <br />
          <Typography gutterBottom variant="caption">
            - Nose...
          </Typography>
          <br />
        </Typography>
      </Paper>
      <Paper sx={{ padding: 2, margin: 1 }}>
        <Typography gutterBottom variant="caption">
          Si em voleu enviar algun bloc nou d'algun secotr, aquesta es
          l'esctuctura que tenen
        </Typography>
        <code>
          <pre>{text}</pre>
        </code>
      </Paper>
    </Container>
  );
};

export default About;
