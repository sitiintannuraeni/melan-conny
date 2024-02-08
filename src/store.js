import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import menuReducer from "./slice/menuSlice.js";
import { persistReducer } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["menu"],
};

export const rootReducers = combineReducers({
  menu: menuReducer,
});

const persistedReduser = persistReducer(persistConfig, rootReducers);
const store = configureStore({
  reducer: persistedReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

setupListeners(store.dispatch);
export default store;
