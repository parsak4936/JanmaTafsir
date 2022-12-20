import { configureStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
 
const InitialState = {
    id: 0,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    nationalCode: "",
    password: "",
    confirmPassword: "",
    shabaNumber: 0,
    address: "",
    cityId: 0,
    cityName:'',
    stateId: 0,
    stateId:'',
    profilePhoto:'',
    userBirthday:'',

   
  };
 
// expertProfileInformationDto => ?

const UpdateUserDataReducer = (state = InitialState, action) => {
  
  switch (action.type) {
    case "UpdateInfo":
      return {
        ...state,
          firstName: action.payload.firstname,
         lastName: action.payload.lastname,
        // phoneNumber: "",
        // nationalCode: "",
        // password: "",
        // confirmPassword: "",
        // shabaNumber: 0,
        // userType: 1,
        // address: "",
        // cityId: 0,
        // stateId: 0,
      };
     
    default:
      return state;
  }
};
export default UpdateUserDataReducer;
