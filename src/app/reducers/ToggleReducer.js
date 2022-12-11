import { configureStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
 
const InitialState = {
 
    ModalToggle: false,
    MapToggle: false,
   
  };
 
const ToggleReducer = (state = InitialState, action) => {
   
  switch (action.type) {
    case "ModalToggle":
      return {
        ...state,
        ModalToggle:action.payload,
        
        
      };
      case "MapToggle":
        return {
          ...state,
          MapToggle:action.payload

        };
  
    default:
      return state;
  }
};
export default ToggleReducer;
