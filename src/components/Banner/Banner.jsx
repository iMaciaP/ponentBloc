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
        /* backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",*/
        backgroundColor: "#F5C841",
      }}
    >
      <Typography gutterBottom variant="h3" component="div">
        Ponent Bloc
      </Typography>
      <Typography gutterBottom variant="h4" component="div">
        Pagina en construcció
      </Typography>
    </Paper>
  );
};

export default Banner;
