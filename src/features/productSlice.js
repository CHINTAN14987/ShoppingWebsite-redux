import { createSlice } from "@reduxjs/toolkit";
const initialState = { products: [], selectedProducts: [] };
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setproducts: (state, action) => {
      state.products = action.payload;
    },
    selectedProducts: (state, action) => {
      state.selectedProducts = action.payload;
    },
    removeSelectedProducts: (state) => {
      state.selectedProducts = [];
    },
  },
});
export const ProductActions = productSlice.actions;
export default productSlice.reducer;
