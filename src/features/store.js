import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
const store = configureStore({ reducer: { myProduct: productReducer } });
export default store;
