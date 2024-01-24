// reducers/products.js
import { createSlice } from '@reduxjs/toolkit';

// Load basket and wishlist from localStorage
const initialBasket = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('basket')) || [] : [];
const initialWishlist = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('wishlist')) || [] : [];

const initialState = {
  products: [],
  bestSellerProduct: [],
  page: 1,
  loading: false,
  limit: 10,
  hideLoadMore: false,
  basket: initialBasket,
  wishlist: initialWishlist,
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
    addToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
      localStorage.setItem('basket', JSON.stringify(state.basket));
    },
    addToWishlist: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
    removeFromCart: (state, action) => {
      state.basket = state.basket.filter(item => item.id !== action.payload);
      localStorage.setItem('basket', JSON.stringify(state.basket));
    },

    incrementQuantity: (state, action) => {
      const item = state.basket.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        localStorage.setItem('basket', JSON.stringify(state.basket));
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.basket.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem('basket', JSON.stringify(state.basket));
      }
    },
  },
});

export const {
  setProducts,
  setPage,
  setLoading,
  setHideLoadMore,
  setBestSellerProducts,
  addToBasket,
  addToWishlist,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = productsSlice.actions;

export default productsSlice.reducer;
