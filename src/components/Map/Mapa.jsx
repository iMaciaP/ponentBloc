import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
})


const Mapa = (props) => {
  const position = [41.499485, 0.778083];
  return (
    <MapContainer
      style={{ height: "30vh", margin: 64, borderRadius: 4 }}
      center={position}
      zoom={20}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
      />
      <Marker position={position}>
        <Popup>
          Bloc X [{position[0]},{position[1]}]
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
