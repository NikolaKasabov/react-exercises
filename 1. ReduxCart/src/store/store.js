import { configureStore } from "@reduxjs/toolkit";

import productsSlice from './productsSlice';
import shoppingCartSlice from './shoppingCartSlice';

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice.reducer,
    products: productsSlice.reducer,
  }
});

export default store;
