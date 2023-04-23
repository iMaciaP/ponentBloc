import React, { useContext, useEffect } from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import LandscapeIcon from "@mui/icons-material/Landscape";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { GlobalContext } from "../../context/GlobalState";

const AppBarList = () => {
  const { navBarLinks } = useContext(GlobalContext);

  const [collapseLinkList, setcollapseLinkList] = React.useState([]);

  function isLinkOpen(id) {
    const link = collapseLinkList.find((link) => link.id === id);
    return link ? link.open : false;
  }

  const handleCollapseClick = (id) => (e) => {
    e.preventDefault();
    const newcollapseLinkList = collapseLinkList.map((item) =>
      item.id === id ? { ...item, open: !item.open } : item
    );
    setcollapseLinkList(newcollapseLinkList);
  };

  useEffect(() => {
    setcollapseLinkList(
      navBarLinks.map((link) => {
        return {
          id: link.id,
          open: link.open,
        };
      })
    );
  }, [navBarLinks]);

  return (
    <Box role="presentation">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Menu de navegació
          </ListSubheader>
        }
      >
        <ListItemButton component={Link} to="/about">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
        <Divider>Sectors</Divider>
        {navBarLinks.map((element) => {
          return (
            <List key={element.id}>
              <ListItemButton onClick={handleCollapseClick(element.id)}>
                <ListItemIcon>
                  <LandscapeIcon />
                </ListItemIcon>
                <ListItemText primary={element.title} />
                {isLinkOpen(element.id) ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={isLinkOpen(element.id)}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {element.sectors.map((element2, index2) => {
                    return (
                      <ListItemButton
                        key={index2}
                        sx={{ pl: 4 }}
                        href={element2.link}
                      >
                        <ListItemIcon>
                          <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary={element2.name} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          );
        })}
      </List>
    </Box>
  );
};

export default AppBarList;
