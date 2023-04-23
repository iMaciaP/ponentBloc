import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const Mapa = (props) => {
  return (
    <MapContainer
      style={{ height: "35vh", margin: 16, borderRadius: 4 }}
      center={props.coords[0]}
      zoom={18}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png" maxZoom={20}/>
        {props.coords.map((pos, index) => (
            <Marker position={pos} key={index} /*icon={L.NumberedDivIcon({number: '1'})}*/>
              <Popup>
                Bloc {index} [{pos[0]},{pos[1]}]
              </Popup>
            </Marker>
          ))}
        
    </MapContainer>
  );
};

export default Mapa;
