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
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
  key: "main-root",
  storage,
};

 const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
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
