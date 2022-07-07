import { createSlice } from '@reduxjs/toolkit';

// product example:
// {
//   id: 1,
//   title: 'Product 1',
//   price: 6,
//   description: 'This is a first product - amazing!',
//   quantity: 3,
//   totalPrice: 18, 
// }

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    products: [],
    isShown: true,
  },
  reducers: {
    toggleIsShown(state, action) {
      state.isShown = !state.isShown;
    },
    addProduct(state, action) {
      const newProduct = action.payload;

      // if there is no such product added in the cart:
      if (!state.products.some(product => product.id === newProduct.id)) {
        state.products.push({
          ...newProduct,
          quantity: 1,
          totalPrice: newProduct.price,
        });
      } else {  // if the product has already been added to the cart
        const existingProduct = state.products.find(product => product.id === newProduct.id);
        existingProduct.quantity++;
        existingProduct.totalPrice += existingProduct.price;
      }
    },
    decreaseProductQuantity(state, action) {
      const productId = action.payload;
      const selectedProduct = state.products.find(product => product.id === productId);

      // if the product is only 1 - remove it
      if (selectedProduct.quantity === 1) {
        state.products = state.products.filter(product => product.id !== productId);
      } else { // if the product has quantity > 1
        selectedProduct.quantity--;
        selectedProduct.totalPrice -= selectedProduct.price;
      }
    },
    increaseProductQuantity(state, action) {
      const productId = action.payload;
      const selectedProduct = state.products.find(product => product.id === productId);
      selectedProduct.quantity++;
      selectedProduct.totalPrice += selectedProduct.price;
    }
  }
});

export const shoppingCartActions = shoppingCartSlice.actions;

export default shoppingCartSlice;
