import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import Navbar from "../../Components/Navbar";
function MapView() {
     
  // const [SubscribedUserBefore,setSubscribedUserBefore] =  useState();
  // const SubscribedUser = useSelector(
  //   (state) => state.rootReducer.LoginReducers.SubscribedUser
  // );
  // useEffect(() => {

  // const beforeLoad =localStorage.setItem("@userData", JSON.stringify(SubscribedUser));
    
  // setSubscribedUserBefore(beforeLoad)
    
  // }, []);
 
  
  const position = [51.505, -0.09];
  return (
    <>
   
  
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

    </>
  );
}

export default MapView;
