import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product.types";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
    return response.data;
})

// fetching products, create middleware: thunk that handles ... (like useEffect - manages the ft is called only once), then we return response.data

const productsSlice = createSlice({
    name: 'products',
    initialState: [] as Product[],
    reducers:{}, // used for internal data, you dont have access to the builder (only with extraReducers)
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (_, action) => { // better for api use, can handle different cases 
            // unused parameter is replaced with _ (underscore)!!! (was state before)
            return action.payload;
        })
    }
})



export default productsSlice.reducer; // now connect it to the store