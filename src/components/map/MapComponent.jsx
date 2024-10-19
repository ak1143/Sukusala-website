import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// You might need to manually import the leaflet icon due to Leaflet's default icon issues with Webpack
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import useComponentStore from "../../store/useComponentStore";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = () => {
  
  const mapData = useComponentStore( state => state.mapData);
  

  return (
    <div style={{ width : mapData.width, height: mapData.height }}>
      <MapContainer center={[mapData.lat, mapData.lng]} zoom={mapData.zoom} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[mapData.lat, mapData.lng]}>
          <Popup>{mapData.markerText}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
