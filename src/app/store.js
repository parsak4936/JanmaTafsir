import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootreducer";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import  ToggleReducer from './reducers/ToggleReducer'
import SelectCSReducer from "./reducers/SelectCSReducer";
import persistStore from "redux-persist/es/persistStore";
import NewReqReducer from './reducers/NewReqReducer'
import UpdateUserDataReducer from './reducers/UpdateUserDataReducer'
import getInfoReducer from './reducers/getInfoReducer'
import  SignupReducer from './reducers/SignupReducer'
const persistConfig = {
  key: "main-root",
  storage,
};
 const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer:{
    persistedReducer,
    ToggleReducer,
    SelectCSReducer,
    NewReqReducer,
    UpdateUserDataReducer,
    SignupReducer,
  } ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
});
export const persistor = persistStore(store)

//persist configuration func :
//The key specifies the ID of the persist object and the storage determines the type of storage being used.

export default store;
