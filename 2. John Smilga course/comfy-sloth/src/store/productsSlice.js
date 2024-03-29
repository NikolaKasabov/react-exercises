import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { products_url, single_product_url } from '../utils/constants';
import { filterProducts, getProductsMaxPrice, getUniqueValues, sortProducts } from '../utils/helpers';

export const fetchProductsThunk = createAsyncThunk(
  'products/fetchProducts',
  (arg, thunkAPI) => {
    return axios.get(products_url)
      .then(res => {
        return res.data;
      });
  }
);

export const fetchSingleProductThunk = createAsyncThunk(
  'products/fetchSingleProduct',
  (id, thunkAPI) => {
    return axios.get(single_product_url + id)
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
    selectedProduct: null,
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
    },
    sort: {
      productsView: 'grid',     // 'grid' || 'list'
      sortBy: 'price-lowest',   // 'price-lowest' || 'price-highest' || 'name-a' || 'name-z'
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
      state.sort = {
        productsView: 'grid',
        sortBy: 'price-lowest',
      };
      state.filteredProducts = sortProducts(state.products, 'price-lowest');
    },
    changeProductsView: (state, action) => {
      state.sort.productsView = action.payload;
    },
    changeSort: (state, action) => {
      const sortedProducts = sortProducts(state.filteredProducts, action.payload);
      state.filteredProducts = sortedProducts;
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
      state.filteredProducts = sortProducts(action.payload, 'price-lowest');
      
      //set initial filters values
      state.filters.maxPrice = getProductsMaxPrice(action.payload);
      state.filters.price = state.filters.maxPrice;
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
    [fetchSingleProductThunk.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchSingleProductThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.selectedProduct = action.payload;
    },
    [fetchSingleProductThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message;
    },
  }
});

export const productsActions = productsSlice.actions;

export default productsSlice;
