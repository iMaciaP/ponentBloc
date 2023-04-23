import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Banner = () => {
  return (
    <Stack maxWidth="md" spacing={2} sx={{ margin: 2 }}>
      <Alert severity="info">Bloc de ponent</Alert>
      <Alert severity="warning">
        L'idea es tenir un repositori on poder consultar les vies i blocs que hi
        ha per la zona de ponent de Catalunya
      </Alert>
    </Stack>
  );
};

export default Banner;
