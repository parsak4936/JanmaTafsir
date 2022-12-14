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
  SubstantialTopics:"",
  SelectReason:""

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
        
        activeIndex: 1,
      };
    case "SecondFormSubmit":
      return {
        ...state,
       
        activeIndex: 2,
      };
      //-------------------------------
      case "SelectReason":
      return {
        ...state,
        SelectReason:action.payload.caption
      };
      case "SelectSubstantialTopics":
        return {
          ...state,
          SubstantialTopics:action.payload.caption
        };
        //-------------------------
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
        state: '',
        city: '',
       stateID: '',
        cityID: '',
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
