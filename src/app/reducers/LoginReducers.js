import { configureStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
const initialState = {
  normalusers: {
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
  SubscribedUser: false,
};

const LoginReducers = (state = initialState, action) => {
  
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        normalusers: {
          ...state.normalusers,
          nationalCode: action.payload.nationCode,
          password: action.payload.password,
        },
        SubscribedUser: true,
      };

    default:
      return state;
  }
};
export default LoginReducers;
