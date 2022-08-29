import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cartSlice';
import productsSlice from './productsSlice';
import uiSlice from './uiSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
    ui: uiSlice.reducer,
  }
});

export default store;
