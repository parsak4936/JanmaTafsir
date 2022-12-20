import { configureStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";

const InitialState = {
  activeIndex: 0,
  //FirstForm datas--> NewReqForm.js :
  state: "",
  city: "",
  stateID: "",
  cityID: "",
  len: null, //latitude
  lon: null, //Longitude
  Address: "",
  //SecondForm datas --> ExperListForNewReq.js
  expertId: 1,
  //third Form datas--> Detailed Red :
  uploadedFile: null, //TODO After submission !
  SubstantialTopics: "",
  SubstantialTopicsID: "",
  SelectReason: "",
  SelectReasonID: "",
  moreDetails: "",
  //forth form data-->finalstepnewReq.js
  //it will just send datas from prev forms to the API (after accept in a modal)
};

const NewReqReducer = (state = InitialState, action) => {
  
  switch (action.type) {
    //--------------Submit cases----------------
    case "FirstFormstate":
      return {
        ...state,
        state: action.payload.name,
        stateID: action.payload.id,
      };
    case "FirstFormcity":
      return {
        ...state,
        city: action.payload.name,
        cityID: action.payload.id,
      };
    case "FirstFormSubmit":
      return {
        ...state,
        Address: action.payload.Address,
        activeIndex: 1,
      };

    //-------------Second Form------------------

    case "SelectReason":
      return {
        ...state,
        SelectReason: action.payload.caption,
        SelectReasonID: action.payload.id,
      };
    case "SelectSubstantialTopics":
      return {
        ...state,
        SubstantialTopics: action.payload.caption,
        SubstantialTopicsID: action.payload.id,
      };
    case "SecondFormSubmit":
      return {
        ...state,
      
        activeIndex: 2,
      };
    //Back
    case "SecondFormBack":
      return {
        ...state,
        state: "",
        city: "",
        stateID: "",
        cityID: "",
        activeIndex: 0,
      };
    //-----------Third Form--------------
    case "ThirdFormSubmit":
      return {
        ...state,
        moreDetails:action.payload,
        activeIndex: 3,
      };
    case "ThirdFormBack":
      return {
        ...state,

        activeIndex: 1,
      };
    //--------------Forth Form----------------

    case "FourthFormSubmit":
      return {
        ...state,
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
