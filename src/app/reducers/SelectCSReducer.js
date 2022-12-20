import { configureStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
 
const InitialState = {
 
    selectedCity: {id:'',name:''},
    selectedState: {id:'',name:''} ,
   
  };
const SelectCSReducer = (state = InitialState, action) => {
  
  switch (action.type) {
    // case "SelectState":
    //   return {
    //     ...state,
    //     selectedState:{
    //         id:action.payload.id,
    //         name:action.payload.name
    //     }
    //   };
    //   case "SelectCity":
    //     return {
    //       ...state,
    //       selectedCity:{
    //         id:action.payload.id,
    //         name:action.payload.name
    //     }
    //     };
  
    default:
      return state;
  }
};
export default SelectCSReducer;
