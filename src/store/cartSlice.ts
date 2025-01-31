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
      console.log("Add to cart: ", action.payload);
      const existingItem = state.items.find(item => item.id === action.payload.id);
      // we have the item in the cart, we need to increase and if not, we add it
      console.log("Existing item: ", existingItem);
      if (existingItem?.id) {
        existingItem.quantity++;
      } else {
        console.log("We are going to push a new item");
        state.items.push({ ...action.payload, quantity: 1 }); // we need to add quantity to it
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToCart, toggleCart } = cartSlice.actions; // its a method not a function
export default cartSlice.reducer;
// action.payload is the  data you sended
