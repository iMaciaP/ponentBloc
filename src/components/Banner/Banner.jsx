import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Banner = () => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        marginTop: "32px",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Typography gutterBottom variant="title1" component="div">
        LOREM IPSUM
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        lorem ipsum set amet co asetn amc lore mape i sulant
      </Typography>
    </Paper>
  );
};

export default Banner;
