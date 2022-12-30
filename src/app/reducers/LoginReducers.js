 
import initialState from "./Initialstate";

const LoginReducers = (state = initialState, action) => {
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
