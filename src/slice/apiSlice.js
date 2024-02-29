import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
  data: {},
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
    logout: (state) => {
      state.token = "";
      state.isLoggedIn = false;
      state.data = {};
    },
  },
});

export const { setAuthToken, logout } = authSlice.actions;

export default authSlice.reducer;
