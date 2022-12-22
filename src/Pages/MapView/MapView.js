import axios from "axios";
import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import Navbar from "../../Components/navbars/Navbar";
import Show400Errors, { Show404Errors, Show500Errors, ShowNetorkErrors, ShowTokenErrors } from "../../Components/ShowErrors/ShowErrors";

function MapView() {
  const dispatch = useDispatch();
  const toastBC = useRef(null);

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
        if (exception.response.status == 400) {
          Show400Errors(toastBC);
        } else if (exception.response.status == 404) {
          Show404Errors(toastBC);
        } else if (exception.response.status == 500) {
          Show500Errors(toastBC);
        }
        else if (exception.response.status == 401) {
          ShowTokenErrors(toastBC);
        }
        else if (exception.code=="ERR_NETWORK") {
          ShowNetorkErrors(toastBC)
        }
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
          <Toast ref={toastBC} position="bottom-center" />
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
