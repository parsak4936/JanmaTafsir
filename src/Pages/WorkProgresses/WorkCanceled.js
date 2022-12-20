 
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import Navbar from "../../Components/navbars/Navbar";
 export default function WorkCanceled() {
  //TODO : usertype ==0 => render userTables | userYpe=1 => expertTables
  return (
    <div style={{ direction: "rtl" }}>
          <Navbar />
          
        </div>
  )
}
