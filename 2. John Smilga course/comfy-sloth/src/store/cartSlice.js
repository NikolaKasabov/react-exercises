import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    productsCount: 0,
    totalSum: 0,
  },
  reducers: {},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
