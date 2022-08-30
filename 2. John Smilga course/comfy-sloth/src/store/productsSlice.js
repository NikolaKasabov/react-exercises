import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

import { filterProducts, getProductsMaxPrice, getUniqueValues } from '../utils/helpers';

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
    filteredProducts: [],
    filters: {
      text: '',
      allCategories: [],
      category: 'all',
      allCompanies: [],
      company: 'all',
      allColors: [],
      color: 'all',
      maxPrice: 0,
      price: 0,
      shipping: false,
    }
  },
  reducers: {
    changeFilter: (state, action) => {
      const { name, value } = action.payload;
      state.filters[name] = value;

      state.filteredProducts = filterProducts(state.products, state.filters);
    },
    clearFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.maxPrice,
        shipping: false,
      };
      state.filteredProducts = state.products;
    },
  },
  extraReducers: {
    [fetchProductsThunk.pending]: (state, action) => { 
      state.isLoading = true;
      state.error = null;
    },
    [fetchProductsThunk.fulfilled]: (state, action) => { 
      state.isLoading = false;
      state.products = action.payload;
      state.filteredProducts = action.payload;
      
      //set initial filters values
      state.filters.maxPrice = getProductsMaxPrice(action.payload);
      state.filters.price = getProductsMaxPrice(action.payload);
      const categories = getUniqueValues(action.payload, 'category');
      state.filters.allCategories = ['all', ...categories];
      const companies = getUniqueValues(action.payload, 'company');
      state.filters.allCompanies = ['all', ...companies];
      const colors = getUniqueValues(action.payload, 'colors');
      state.filters.allColors = ['all', ...colors];
    },
    [fetchProductsThunk.rejected]: (state, action) => { 
      state.isLoading = false;
      state.error = action.error?.message;
    },
  }
});

export const productsActions = productsSlice.actions;

export default productsSlice;
