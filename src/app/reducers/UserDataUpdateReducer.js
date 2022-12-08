import { configureStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
const initialState = {
  userData: {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    nationalCode: "",
    password: "",
    confirmPassword: "",
    shabaNumber: 0,
    userType: 0,
    address: "",
    cityId: 0,
  },
  LogInToken: "",
  
};

const UserDataUpdateReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "GetUserData":
      return (console.log("DFG"))

    default:
      return state;
  }
};
export default UserDataUpdateReducer;
