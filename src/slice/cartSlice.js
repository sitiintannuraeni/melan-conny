import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  priceTotal: 0,
  qtyTotal: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.data = action.payload
    },
  },
});

export const {
  addToCart
} = cartSlice.actions;

export default cartSlice.reducer;
