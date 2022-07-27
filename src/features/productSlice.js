import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch, getState) {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const Data = await response.json();
//       dispatch(ProductActions.setproducts(Data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const Data = await response.json();
  return Data;
});

// export const fetchProducts = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const Data = response.json();
//   return { type: "FETCHED_PRODUCTS", payload: Data };
// };
export const ProductActions = productSlice.actions;
export default productSlice.reducer;
