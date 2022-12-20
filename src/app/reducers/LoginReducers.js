import { configureStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import initialState from "./Initialstate";

const LoginReducers = (state = initialState, action) => {
   switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        normalusers: [
          {
            ...state,
            userType: action.payload.userType,
          },
        ],
        Token: action.payload.token,
        SubscribedUser: true,
      };
    case "LogOut":
      return {
        ...state,
        Token: "",
        SubscribedUser: false,
      };
    case "ValidationLogin":
      return {
        ...state,
        Token: action.payload,
        SubscribedUser: true,
      };
    default:
      return state;
  }
};
export default LoginReducers;
