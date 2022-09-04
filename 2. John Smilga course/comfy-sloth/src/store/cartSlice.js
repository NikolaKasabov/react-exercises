import { createSlice } from '@reduxjs/toolkit';
import { calcProductsAmountAndSum } from '../utils/helpers';

// get the initial data from local storage, if such exists
const lsProducts = JSON.parse(localStorage.getItem('cart'));
let lsProductsAmount, lsTotalSum;
if (lsProducts) {
  const { productsAmount: pa, totalSum: ts } = calcProductsAmountAndSum(lsProducts);
  lsProductsAmount = pa;
  lsTotalSum = ts;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: lsProducts || [],
    productsAmount: lsProductsAmount || 0,
    totalSum: lsTotalSum || 0,
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

      // save the cart products to local storage
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
    decreaseProductAmount: (state, action) => {
      const id = action.payload;
      const product = state.products.find(p => p.id === id);
      product.amount--;
      if (product.amount < 1) {
        product.amount = 1;
      }

      // calculate productsAmount and totalSum
      const { productsAmount, totalSum } = calcProductsAmountAndSum(state.products);
      state.productsAmount = productsAmount;
      state.totalSum = totalSum;

      // save the cart products to local storage
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
    increaseProductAmount: (state, action) => {
      const id = action.payload;
      const product = state.products.find(p => p.id === id);
      product.amount++;
      if (product.amount > 5) {
        product.amount = 5;
      }

      // calculate productsAmount and totalSum
      const { productsAmount, totalSum } = calcProductsAmountAndSum(state.products);
      state.productsAmount = productsAmount;
      state.totalSum = totalSum;

      // save the cart products to local storage
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter(product => product.id !== id);

      // calculate productsAmount and totalSum
      const { productsAmount, totalSum } = calcProductsAmountAndSum(state.products);
      state.productsAmount = productsAmount;
      state.totalSum = totalSum;

      // save the cart products to local storage
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
    clearCart: (state, action) => {
      state.products = [];
      state.productsAmount = 0;
      state.totalSum = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
