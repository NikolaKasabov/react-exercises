import { createSlice } from '@reduxjs/toolkit';


const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: {}
});

export const productsActions = productsSlice.actions;

export default productsSlice;
