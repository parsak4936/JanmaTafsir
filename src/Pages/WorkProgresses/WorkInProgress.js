 
import axios from "axios";
import React, { useEffect, useState } from "react";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import Navbar from "../../Components/navbars/Navbar";
import EWorkInprogressTable from "../../Components/Tables/ExpertReports/EWorkInprogressTable.js";
import UWorkInprogressTable from "../../Components/Tables/UserReports/UWorkInprogressTable.js";


 export default function WorkInProgress() {
  const UserType = useSelector(
    (state) => state.persistedReducer.LoginReducers.userType
  );
  return (
    <div style={{ direction: "rtl" }}>
          <Navbar />
          {UserType == 2 && <EWorkInprogressTable />}
      {UserType == 1 && <UWorkInprogressTable />}
        </div>
  )
}
