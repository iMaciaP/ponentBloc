import React, { useState } from "react";
import "./Landpage.css";
import SectorCard from "../SectorCard/SectorCard";
import Banner from "../Banner/Banner";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  cardsGarrigues,
  cardsNoguera,
  cardsSegria,
  cardsUrgell,
} from "../../data/data";
import {
  useMediaQuery,
  Typography,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";

const Landpage = () => {
  const [currSector, setCurrSector] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  const mapCards = {
    0: cardsGarrigues,
    1: cardsNoguera,
    2: cardsSegria,
    3: cardsUrgell,
  };

  const handleTabChange = (event, newValue) => {
    setCurrSector(newValue);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
      <Typography variant="body1" gutterBottom>
        Sectors per comarques
      </Typography>
      <Box sx={{}}>
        {isMobile ? (
          <Box sx={{ margin: 3 }}>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleTabChange(null, 0)}>
                Garrigues
              </MenuItem>
              <MenuItem onClick={() => handleTabChange(null, 1)}>
                La Noguera
              </MenuItem>
              <MenuItem onClick={() => handleTabChange(null, 2)}>
                Segrià
              </MenuItem>
              <MenuItem onClick={() => handleTabChange(null, 3)}>
                L'urgell
              </MenuItem>
            </Menu>
            <Button
              variant="contained"
              endIcon={<ArrowDropDownIcon />}
              onClick={handleMenuOpen}
            >
              Comarques
            </Button>
          </Box>
        ) : (
          <Paper sx={{ margin: 3 }}>
            <Tabs
              value={currSector}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Garrigues" />
              <Tab label="La Noguera" />
              <Tab label="Segrià" />
              <Tab label="L'urgell" />
            </Tabs>
          </Paper>
        )}
        {mapCards[currSector] ? (
          <Box
            sx={{
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "center",
              padding: isMobile ? 1 : 8,
              flexDirection: "row",
              width: "100%",
            }}
          >
            {mapCards[currSector].map((element, index) => {
              return <SectorCard key={index} {...element} />;
            })}
          </Box>
        ) : (
          <Typography>No info, envieu un correu per queixar-vos</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Landpage;
