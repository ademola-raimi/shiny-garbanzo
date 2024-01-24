// reducers/products.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  bestSellerProduct: [],
  page: 1,
  loading: false,
  limit: 10,
  hideLoadMore: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    setBestSellerProducts: (state, action) => {
      state.bestSellerProduct = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setHideLoadMore: (state, action) => {
      state.hideLoadMore = action.payload;
    },
  },
});

export const {
  setProducts,
  setPage,
  setLoading,
  setHideLoadMore,
  setBestSellerProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
