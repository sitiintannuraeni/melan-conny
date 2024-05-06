import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
  data: {},
  user: {},
  redirectTo: "",
  shippingAddres: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.data = action.payload.data;
    },
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthLoginRedirect: (state, action) => {
      state.redirectTo = action.payload;
    },
    logout: (state) => {
      state.token = "";
      state.isLoggedIn = false;
      state.data = {};
      state.user = {};
    },
    setShippingAddress: (state, action) => {
      state.shippingAddres = action.payload;
    },
  },
});

export const {
  setAuthToken,
  setAuthLoginRedirect,
  logout,
  setAuthUser,
  setShippingAddress,
} = authSlice.actions;

export default authSlice.reducer;
