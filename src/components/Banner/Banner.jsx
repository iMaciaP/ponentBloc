import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Banner = () => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "16px",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#1769aa",
        // backgroundColor: "#F5C841",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Bloc de ponent
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          L'idea es tenir un repositori on poder consultar les vies i blocs que
          hi ha per la zona de ponent de Catalunya.El projecte es públic a
          github per a qui vulgui col·laborar.
        </Typography>
      </Container>
    </Paper>
  );
};

export default Banner;
