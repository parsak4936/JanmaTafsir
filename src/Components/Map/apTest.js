import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Navbar from "../Navbar";
function MapTest() {
  const [waiting, setWaiting] = useState(false);

  const position = [51.505, -0.09];
  return (
    <div>
<Navbar />
   
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: " 20vh"}}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}

export default MapTest;
