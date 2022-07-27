import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductActions } from "../features/productSlice";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const apiData = async () => {
  //     const fetchPromise = await fetch("https://fakestoreapi.com/products");
  //     const response = await fetchPromise.json();
  //     return response;
  //   };
  //   apiData()
  //     .then((response) => {
  //       dispatch(ProductActions.setproducts(response));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [dispatch]);

  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductList;
