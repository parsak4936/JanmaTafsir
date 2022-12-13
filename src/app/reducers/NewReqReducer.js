import { configureStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";

const InitialState = {
  activeIndex: 0,
  state: "",
  city: "",
  stateID: "",
  cityID: "",
  //    Longitude and latitude
  len: null,
  lon: null,
  uploadedFile: null,
  Address: "",
};

const NewReqReducer = (state = InitialState, action) => {
  
  switch (action.type) {
    //--------------Submit cases----------------

    case "FirstFormSubmit":
      return {
        ...state,
        state: action.payload.selectedState.name,
         city: action.payload.selectedCity.name,
        stateID: action.payload.selectedState.id,
         cityID: action.payload.selectedCity.id,
        activeIndex: 1,
      };
    case "SecondFormSubmit":
      return {
        ...state,
        activeIndex: 2,
      };
    case "ThirdFormSubmit":
      return {
        ...state,
        activeIndex: 3,
      };
    case "FourthFormSubmit":
      return {
        ...state,
      };
    //--------------Back cases----------------
    case "SecondFormBack":
      return {
        ...state,
        activeIndex: 0,
      };
    case "ThirdFormBack":
      return {
        ...state,
        activeIndex: 1,
      };
    case "FourthFormBack":
      return {
        ...state,
        activeIndex: 2,
      };

    default:
      return state;
  }
};
export default NewReqReducer;
