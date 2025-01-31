import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import recipesReducer from "./recipesSlice";

// configureStore is toolkit is same as create store
export const store = configureStore({ // creates a store that merges all slices together
    reducer: {
        products: productsReducer,
        recipes: recipesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>; // it inferres the type of the state automatically
export type AppDispatch = typeof store.dispatch; // creates a type for the action