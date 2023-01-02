import axios from "axios";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/navbars/Navbar";
import EWorkDoneTable from "../../Components/Tables/ExpertReports/EWorkDoneTable";
import UWorkDoneTable from "../../Components/Tables/UserReports/UWorkDoneTable";

export default function WorkDone() {
  const UserType = useSelector(
    (state) => state.persistedReducer.LoginReducers.userType
  );

  return (
    <div style={{ direction: "rtl" }}>
      <Navbar />
      {UserType == 2 && <EWorkDoneTable />}
      {UserType == 1 && <UWorkDoneTable />}
    </div>
  );
}
