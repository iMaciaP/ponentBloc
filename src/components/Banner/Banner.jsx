// Banner.js
import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const bannerStyles = {
  position: "relative",
  width: "90vw", // Use full width of the viewport
  height: "60vh", // Adjust height automatically based on aspect ratio
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textAlign: "center",
  padding: "20px",
  margin: "12px",
};

const backgroundStyles = {
  content: '""',
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  backgroundImage: "url('https://i.imgur.com/UmGaEqy.jpg')", // Replace with your actual image path
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(1.5px)",
  webkitFilter: "blur(1.5px)",
};

const bgText = {
  backgroundColor: "rgba(0,0,0, 0.4)" /* Black w/opacity/see-through */,
  color: "white",
  fontWeight: "bold",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "2",
  width: "80%",
  padding: "20px",
  textAlign: "center",
  borderRadius: "24px",
};

const Banner = () => {
  return (
    <>
      <div style={bannerStyles}>
        <div style={backgroundStyles} />
        <div style={bgText}>
          <Typography variant="h2" gutterBottom>
            Bloc de ponent
          </Typography>
          <Typography variant="body1" gutterBottom>
            Aquí trobareu informació necessària per gaudir de les rutes i
            problemes que he pogut recollir d'altres fonts i coneixement
            popular. Es un projecte sense ànim de lucre i de codi obert,
            sentiu-vos lliures de col·laborar 🥰🧗‍♂️🌄
          </Typography>
        </div>
      </div>
      <Stack maxWidth="md" spacing={2} sx={{ margin: 2 }}>
        <Alert severity="warning">
          L'idea principal es tenir un recurs més óptim de les ressenyes en
          paper i antigues que tinc
        </Alert>
      </Stack>
    </>
  );
};

export default Banner;
