import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
  data: {},
  user: {},
  redirectTo: "",
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
  },
});

export const { setAuthToken, setAuthLoginRedirect, logout, setAuthUser } =
  authSlice.actions;

export default authSlice.reducer;
