import { configureStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import  initialState  from "./Initialstate";

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
