import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dialogLogin: false,
  dialogRegister: false,
  drawerShopping: false,
  drawerShoppingCart: false,
  drawerMenFashionStore: false,
  dialogSearch: false,
  dialogCheckOut: false,
  dialogAsGuest: false,
  dialogShareLink: false,
  dialogDetailCardHome: false,
  idDetailDialogCardHome: 0,
  dialogAddress: false,
  dialogChangePassword: false,
  dialogDescDetail: false,
  updateDialogAddres: false,
  dialogForgotPassword: false,
  dialogKodeVerifikasi: false,
  dialogNewPassword: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openDialogLogin: (state) => {
      state.dialogLogin = true;
    },
    closeDialogLogin: (state) => {
      state.dialogLogin = false;
    },
    openDialogRegister: (state) => {
      state.dialogRegister = true;
    },
    closeDialogRegister: (state) => {
      state.dialogRegister = false;
    },
    openDrawerShooping: (state) => {
      state.drawerShopping = true;
    },
    closeDrawerShopping: (state) => {
      state.drawerShopping = false;
    },
    openDrawerShoppingCart: (state) => {
      state.drawerShoppingCart = true;
    },
    closeDrawerShoppingCart: (state) => {
      state.drawerShoppingCart = false;
    },
    openDrawerMenFashionStore: (state) => {
      state.drawerMenFashionStore = true;
    },
    closeDrawerMenFashionStore: (state) => {
      state.drawerMenFashionStore = false;
    },
    openDialogSearch: (state) => {
      state.dialogSearch = true;
    },
    closeDialogSearch: (state) => {
      state.dialogSearch = false;
    },
    openDialogCheckOut: (state) => {
      state.dialogCheckOut = true;
    },
    closeDialogCheckOut: (state) => {
      state.dialogCheckOut = false;
    },
    openDialogAsGuest: (state) => {
      state.dialogAsGuest = true;
    },
    closeDialogAsGuest: (state) => {
      state.dialogAsGuest = false;
    },
    openDialogShareLink: (state) => {
      state.dialogShareLink = true;
    },
    closeDialogShareLink: (state) => {
      state.dialogShareLink = false;
    },
    openDialogDetailCardHome: (state, action) => {
      state.dialogDetailCardHome = true;
      state.idDetailDialogCardHome = action.payload;
    },
    closeDialogDetailCardHome: (state) => {
      state.dialogDetailCardHome = false;
      state.idDetailDialogCardHome = 0;
    },
    openDialogAddress: (state) => {
      state.dialogAddress = true;
    },
    closeDialogAddress: (state) => {
      state.dialogAddress = false;
    },
    openDialogChangePasswod: (state) => {
      state.dialogChangePassword = true;
    },
    closeDialogChangePassword: (state) => {
      state.dialogChangePassword = false;
    },
    openDialogDetail: (state) => {
      state.dialogDescDetail = true;
    },
    closeDialogDetail: (state) => {
      state.dialogDescDetail = false;
    },
    openDialogUpdateAddress: (state) => {
      state.updateDialogAddres = true;
    },
    closeDialogUpdateAddress: (state) => {
      state.updateDialogAddres = false;
    },
    openDialogForgotPassword: (state) => {
      state.dialogForgotPassword = true;
    },
    closeDialogForgotPassword: (state) => {
      state.dialogForgotPassword = false;
    },
    openDialogKodeVerifikasi: (state) => {
      state.dialogKodeVerifikasi = true;
    },
    closeDialogKodeVerifikasi: (state) => {
      state.dialogKodeVerifikasi = false;
    },
    openDialogNewPassword: (state) => {
      state.dialogNewPassword = true;
    },
    closeDialogNewPassword: (state) => {
      state.dialogNewPassword = false;
    },
  },
});

export const {
  openDialogLogin,
  closeDialogLogin,
  openDialogRegister,
  closeDialogRegister,
  openDrawerShooping,
  closeDrawerShopping,
  openDrawerShoppingCart,
  closeDrawerShoppingCart,
  openDrawerMenFashionStore,
  closeDrawerMenFashionStore,
  openDialogSearch,
  closeDialogSearch,
  openDialogCheckOut,
  closeDialogCheckOut,
  openDialogAsGuest,
  closeDialogAsGuest,
  openDialogShareLink,
  closeDialogShareLink,
  openDialogDetailCardHome,
  closeDialogDetailCardHome,
  openDialogAddress,
  closeDialogAddress,
  openDialogChangePasswod,
  closeDialogChangePassword,
  openDialogDetail,
  closeDialogDetail,
  openDialogUpdateAddress,
  closeDialogUpdateAddress,
  openDialogForgotPassword,
  closeDialogForgotPassword,
  openDialogKodeVerifikasi,
  closeDialogKodeVerifikasi,
  openDialogNewPassword,
  closeDialogNewPassword,
} = menuSlice.actions;

export default menuSlice.reducer;
