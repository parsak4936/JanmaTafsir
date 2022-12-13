import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import Navbar from "../../Components/navbars/Navbar";
function MapView() {
  const SubscribedUser = useSelector(
    (state) => state.persistedReducer.LoginReducers.SubscribedUser
  );
 
  
  const position = [51.505, -0.09];
  return (
    <>
      {SubscribedUser===true ?
   
  
   <div style={{ direction: "rtl" }}>
   <Navbar />

   <MapContainer
     center={position}
     zoom={13}
     style={{ height: " 100vh", zIndex: "0" }}
     scrollWheelZoom={false}
   >
     <TileLayer
       attribution=" "
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     <Marker position={position}>
       <Popup>
         A pretty CSS3 popup. <br /> Easily customizable.
       </Popup>
     </Marker>
   </MapContainer>
 </div>

   :
   <></>

 }
    </>
  
    
  );
}

export default MapView;
