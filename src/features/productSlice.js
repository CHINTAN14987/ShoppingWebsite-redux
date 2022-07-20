import { createSlice } from "@reduxjs/toolkit";
const initialState = { products: [] };
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setproducts: (state, action) => {
      state.products = action.payload;
    },
    selectedProducts: (state, action) => {},
  },
});
export const ProductActions = productSlice.actions;
export default productSlice.reducer;
