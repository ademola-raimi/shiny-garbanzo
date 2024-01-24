// store/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: null,
  loading: true,
  currentImageIndex: 0,
  limit: 8,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurrentImageIndex: (state, action) => {
      state.currentImageIndex = action.payload;
    },
  },
});

export const { setProduct, setLoading, setCurrentImageIndex } = productSlice.actions;
export default productSlice.reducer;
