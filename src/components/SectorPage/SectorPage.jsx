import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./SectorPage.css";
import Typography from "@mui/material/Typography";
import Bloc from "../Bloc/Bloc.jsx";
import { SectorsVies } from "../../data/data";

const usePathname = () => {
  const location = useLocation();
  return location.pathname.split("/");
};

const SectorPage = (props) => {
  const path = usePathname();
  // WIP segur hi ha una menera millor de fer aixo, custom hook? filter?
  const sName = path[1] ? path[1] : "err";
  const sId = path[2] ? path[2] : "1";
  const sData = SectorsVies[sName][sId - 1];
  console.log(Object.values(sData));

  // var res = obj.locations.filter((item) => {
  //   return item.id == val;
  // });
  return (
    <div className="pageContainer">
      <Typography
        className="title"
        gutterBottom
        variant="title1"
        component="div"
      >
        ZONA - SECTOR
      </Typography>
      <Button variant="outline-primary" href="">
        Mapa
      </Button>

      {/* WIP SELECT ID AND ADD ID TO DATA xD */}
      {Object.values(sData).map((element, index) => (
        <Bloc key={index} {...element} />
      ))}
      <div style={{ width: 300, height: 300, backgroundColor: 'red' }}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};
export default SectorPage;
