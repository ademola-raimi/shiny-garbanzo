import { createSlice } from '@reduxjs/toolkit';
import { ProductsState } from '../../types';

// Load basket and wishlist from localStorage
const initialBasket = (() => {
  if (typeof window !== 'undefined') {
    const basketString = localStorage.getItem('basket');
    return basketString ? JSON.parse(basketString) : [];
  }
  return [];
})();

const initialWishlist = (() => {
  if (typeof window !== 'undefined') {
    const wishlistString = localStorage.getItem('wishlist');
    return wishlistString ? JSON.parse(wishlistString) : [];
  }
  return [];
})();

const initialState: ProductsState = {
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
      //@ts-ignore
      state[action.payload.type] = state[action.payload.type].filter(item => item.id !== action.payload.id);
      //@ts-ignore
      localStorage.setItem(action.payload.type, JSON.stringify(state[action.payload.type]));
    },

    incrementQuantity: (state, action) => {
      //@ts-ignore
      const item = state[action.payload.type].find(item => item.id === action.payload.id);
      if (item && typeof item.quantity === 'number') {
        item.quantity += 1;
        //@ts-ignore
        localStorage.setItem(action.payload.type, JSON.stringify(state[action.payload.type]));
      }
    },
    decrementQuantity: (state, action) => {
      //@ts-ignore
      const item = state[action.payload.type].find(item => item.id === action.payload.id);
      if (item && typeof item.quantity === 'number'&& item.quantity > 1) {
        item.quantity -= 1;
        //@ts-ignore
        localStorage.setItem(action.payload.type, JSON.stringify(state[action.payload.type]));
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
