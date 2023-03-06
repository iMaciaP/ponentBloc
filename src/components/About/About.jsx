import React from "react";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <div style={{ padding: 32 }}>
      <Typography gutterBottom variant="title" component="h3">
        Aquesta pàgina és en construcció, tot és gratis així que va al seu
        ritme.
      </Typography>
      <Typography gutterBottom variant="subtitle" component="h4">
        Sempre pots col·laborar amb el que creguis enviant un correu a{" "}
        <b>profilacticxl@gmail.com</b>
      </Typography>
      <Typography gutterBottom variant="title" component="h3">
        {"| (• ◡•)| (❍ᴥ❍ʋ)"}
      </Typography>
      <Typography gutterBottom variant="title" component="h3">
        TODO LIST:
        <Typography gutterBottom variant="title" component="h5">
          - implementar per penjar noves ressenyes{" "}
          <a href="http://ianli.github.io/raphael-sketchpad/">link dibuixar</a>
        </Typography>
        <Typography gutterBottom variant="title" component="h5">
          - carregar dades -.-
        </Typography>
      </Typography>
    </div>
  );
};

export default About;
