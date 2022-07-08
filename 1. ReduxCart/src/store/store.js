import { configureStore } from "@reduxjs/toolkit";

import productsSlice from './productsSlice';
import shoppingCartSlice from './shoppingCartSlice';
import uiSlice from './uiSlice';

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice.reducer,
    products: productsSlice.reducer,
    ui: uiSlice.reducer,
  }
});

export default store;
