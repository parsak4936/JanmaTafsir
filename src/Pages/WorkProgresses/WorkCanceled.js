 
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import Navbar from "../../Components/navbars/Navbar";
import EWorkCanceledTable from "../../Components/Tables/ExpertReports/EWorkCanceledTable";
import UWorkCanceledTable from "../../Components/Tables/UserReports/UWorkCanceledTable";

 export default function WorkCanceled() {
  //TODO : usertype ==0 => render userTables | userYpe=1 => expertTables
  const UserType = useSelector(
    (state) => state.persistedReducer.LoginReducers.userType
  );
  return (
    <div style={{ direction: "rtl" }}>
          <Navbar />
          {UserType==2 && <EWorkCanceledTable/> }
          {UserType==1 && <UWorkCanceledTable/> }

        </div>
  )
}
