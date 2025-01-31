import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipes } from "../types/recipes.type";

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    const response = await axios.get<{ recipes: Recipes[] }>('https://dummyjson.com/recipes');
    return response.data;
})

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: [] as Recipes[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.fulfilled, (_, action) => {
            return action.payload;
        })
    }
})

export default recipesSlice.reducer;