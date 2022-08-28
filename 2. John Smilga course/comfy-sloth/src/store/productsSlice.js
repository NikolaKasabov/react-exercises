import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductsThunk = createAsyncThunk(
  'products/fetchProducts',
  (arg, thunkAPI) => {
    return axios.get('https://course-api.com/react-store-products')
      .then(res => {
        return res.data;
      });
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProductsThunk.pending]: (state, action) => { 
      state.isLoading = true;
      state.error = null;
    },
    [fetchProductsThunk.fulfilled]: (state, action) => { 
      state.isLoading = false;
      state.products = action.payload;
    },
    [fetchProductsThunk.rejected]: (state, action) => { 
      state.isLoading = false;
      state.error = action.error?.message;
    },
  }
});

export const productsActions = productsSlice.actions;

export default productsSlice;
