import { createSlice } from '@reduxjs/toolkit';
import { calcProductsAmountAndSum } from '../utils/helpers';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    productsAmount: 0,
    totalSum: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { amount, selectedColor: color, product } = action.payload;

      const newProduct = {
        id: product.id + color,
        color,
        amount,
        price: product.price,
        image: product.images[0].url,
        name: product.name,
      };

      // is the same product already added in the cart
      const isProductAdded = state.products.some(p => p.id === newProduct.id);

      if (isProductAdded) {
        state.products = state.products.map(p => {
          if (p.id === newProduct.id) {
            let newAmount = p.amount + newProduct.amount;
            if (newAmount > 5) {
              newAmount = 5;
            }
            p.amount = newAmount;
          }
          return p;
        });
      } else {
        state.products.push(newProduct);
      }

      // calculate productsAmount and totalSum
      const { productsAmount, totalSum } = calcProductsAmountAndSum(state.products);
      state.productsAmount = productsAmount;
      state.totalSum = totalSum;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
