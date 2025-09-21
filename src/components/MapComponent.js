import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Bus icon (Change URL if you want another icon)
const busIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.freepik.com/512/6615/6615039.png',  // Bus icon URL
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});


const initialLocation = [28.6304, 77.2177]; // Default marker location (Delhi)

const MapComponent = () => {
  const [position, setPosition] = useState(initialLocation);

  // Animate position every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(([lat, lng]) => [
        lat + (Math.random()-0.5)*0.01, 
        lng + (Math.random()-0.5)*0.01
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer center={position} zoom={14} style={{ height: "470px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={busIcon}>
        <Popup>
          Bus Live Location: <br /> {position[0].toFixed(4)}, {position[1].toFixed(4)}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
