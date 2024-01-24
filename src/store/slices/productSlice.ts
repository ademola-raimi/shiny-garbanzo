import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from '../../types';

const initialState: ProductState = {
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
