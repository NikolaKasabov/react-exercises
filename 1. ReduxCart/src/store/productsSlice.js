import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
  },
  reducers: {
    saveProducts(state, action) {
      state.items = action.payload;
    }
  }
});

export const productsActions = productsSlice.actions;

export default productsSlice;
