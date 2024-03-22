import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  priceTotal: 0,
  qtyTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(
        (product) =>
          product.id === action.payload.id &&
          product.size_id === action.payload.size_id
      );
      if (product) {
        product.qty++;
      } else {
        state.products.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      const findIndex = state.products.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.size_id === action.payload.size_id
      );
      if (findIndex !== -1) {
        state.products.splice(findIndex, 1);
      }
    },

    setPriceTotal: (state) => {
      state.priceTotal = state.products.reduce((prevValue, curValue) => {
        return prevValue + curValue.qty * curValue.price;
      }, 0);
    },
    setQtyTotal: (state) => {
      state.qtyTotal = state.products.reduce((prevValue, curValue) => {
        return prevValue + curValue.qty;
      }, 0);
    },

    incrementQty: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.size_id === action.payload.size_id
      );
      state.products[productIndex].qty += 1;
    },
    decrementQty: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.size_id === action.payload.size_id
      );
      if (state.products[productIndex].qty > 1) {
        state.products[productIndex].qty -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setPriceTotal,
  setQtyTotal,
  incrementQty,
  decrementQty,
} = cartSlice.actions;

export default cartSlice.reducer;
