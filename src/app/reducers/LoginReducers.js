import { configureStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import initialState from "./Initialstate";

const LoginReducers = (state = initialState, action) => {
  console.log(action.payload)
   switch (action.type) {
    case "LOGIN":
      return {
        ...state,
      
       
        Token: action.payload,
        SubscribedUser: true,
      };
      case "updateUserType":
        return {
          ...state,
        
          userType:action.payload,
 
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
