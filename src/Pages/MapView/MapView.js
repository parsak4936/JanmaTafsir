import axios from "axios";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import Navbar from "../../Components/navbars/Navbar";
function MapView() {
  const dispatch = useDispatch();

  const SubscribedUser = useSelector(
    (state) => state.persistedReducer.LoginReducers.SubscribedUser
  );
  const Token = useSelector(
    (state) => state.persistedReducer.LoginReducers.Token
  );
  const config = {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  };
  const getInfo = () => {
    axios
      .get(
        "https://elated-swanson-mrhungrj5.iran.liara.run/api/User/GetUserProfileData",
        config
      )
      .then((response) => {
        if (response.data.statusCode == 200) {
          
          dispatch(allActions.userActions.getInfo(response.data.data));
         
        } else {
        }
      })
      .catch((exception) => {
        console.log(exception);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);
  const position = [51.505, -0.09];

  return (
    <>
      {SubscribedUser === true ? (
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
      ) : (
        <></>
      )}
    </>
  );
}

export default MapView;
