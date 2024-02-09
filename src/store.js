import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import menuReducer from "./slice/menuSlice.js";
import cartReducer from "./slice/cartSlice.js"
import { persistReducer } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./slice/apiSlice.js"
import {apiProduct} from './services/apiProduct.js'
import {apiAuth} from "./services/apiAuth.js";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ['menu','apiProducts', 'apiAuth'],
  whitelist: ['cart'],
};

const authPersistConfig = {
  key: 'auth',
  storage: storage,
}

export const rootReducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  menu: menuReducer,
  cart: cartReducer,
  [apiProduct.reducerPath]: apiProduct.reducer,
  [apiAuth.reducerPath]: apiAuth.reducer,
});

const persistedReduser = persistReducer(persistConfig, rootReducers);
const store = configureStore({
  reducer: persistedReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([apiProduct.middleware, apiAuth.middleware]),
});

setupListeners(store.dispatch);
export default store;
