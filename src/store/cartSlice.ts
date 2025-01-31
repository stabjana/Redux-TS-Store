import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types/cart.types";

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      ); // we have the item in the car, we need to increase and if not, we add it
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // we need to add quantity to it
      }
    },
  },
});

export const {addToCart} = cartSlice.actions; // its a method not a function
export default cartSlice.reducer;
// action.payload is the  data you sended