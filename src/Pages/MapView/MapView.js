import axios from "axios";
import L, { Icon, latLng } from "leaflet";
import {
  GeoSearchControl,
  MapBoxProvider,
  AlgoliaProvider,
} from "leaflet-geosearch";
import { OpenStreetMapProvider } from "react-leaflet-geosearch";

import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import Navbar from "../../Components/navbars/Navbar";
import Show400Errors, {
  Show404Errors,
  Show500Errors,
  ShowNetorkErrors,
  ShowTokenErrors,
} from "../../Components/ShowErrors/ShowErrors";
import SearchControl from "./SearchControl";
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
        if (response.data.statusCode === 200) {
          dispatch(allActions.userActions.getInfo(response.data.data));
        } else {
        }
      })
      .catch((exception) => {
        console.log(exception);
        if (exception.response.status === 400) {
          Show400Errors(toastBC);
        } else if (exception.response.status === 404) {
          Show404Errors(toastBC);
        } else if (exception.response.status === 500) {
          Show500Errors(toastBC);
        } else if (exception.response.status === 401) {
          ShowTokenErrors(toastBC);
        } else if (exception.code === "ERR_NETWORK") {
          ShowNetorkErrors(toastBC);
        }
      });
  };
  const iconPerson = new L.Icon({
    iconUrl: require("../../Assets/DashboardAsset/experts.jpg"),
    //iconRetinaUrl: require('../img/marker-pin-person.svg'),
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: "leaflet-div-icon",
  });
  const [position, setPosition] = useState([36.2945, 50.0192]);

  useEffect(() => {
    getInfo();
  }, []);

  const prov = new OpenStreetMapProvider();

  function LocationMarker() {
    const [userposition, setuserPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setuserPosition(e.latlng);
        //setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
      });
    }, [map]);

    return userposition === null ? null : (
      <Marker position={userposition} icon={iconPerson}>
        <Popup>
          موقعیت شما <br />
          در حال حاضر شما اینجا میباشد. <br />
        </Popup>
      </Marker>
    );
  }

  function MultipleMarkers() {
    // const [userposition, setuserPosition] = useState(null);
    var arrCoordinates = [
      {
        title: " a  ",
        location: [38.2945, 50.0192],
      },
      {
        title: "d  ",
        location: [37.2945, 50.0192],
      },
      {
        title: "c  ",
        location: [32.2945, 50.0192],
      },
      {
        title: "b ",
        location: [31.2945, 50.0192],
      },
    ];
    return arrCoordinates.map((items, index) => {
      return (
        <Marker key={index} position={items.location} icon={iconPerson}>
          <Popup>
            {items.title} <br />
            در حال حاضر شما اینجا میباشد. <br />
          </Popup>
        </Marker>
      );
    });
  }

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

            <LocationMarker />

            <SearchControl
              provider={prov}
              showMarker={true}
              showPopup={false}
              popupFormat={({ query, result }) => result.label}
              retainZoomLevel={false}
              animateZoom={true}
              autoClose={false}
              searchLabel={"Enter address, please"}
              keepResult={true}
            />
            <MultipleMarkers />
          </MapContainer>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default MapView;
