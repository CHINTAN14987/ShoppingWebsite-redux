import React, { useEffect } from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import "../css/ProductList.css";
import { Link } from "react-router-dom";
import { fetchProducts } from "../features/productSlice";

const ProductComponent = () => {
  let dispatch = useDispatch();
  const productsCartValue = useSelector((state) => state.myProduct.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="product_list_wrapper">
      {console.log(productsCartValue)}
      {productsCartValue.map((item) => {
        return (
          <Link
            className="items"
            to={`/products/${item.id}`}
            style={{
              textDecoration: "none",
            }}
            key={item.id}
          >
            <div>
              <Card
                sx={{
                  Width: 400,
                  minHeight: 400,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt=""
                  style={{ objectFit: "contain", marginTop: "1rem" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{
                      fontWeight: "700",
                      color: "black",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="h3"
                    color="text.secondary"
                    style={{ fontWeight: "600", fontSize: "20px" }}
                  >
                    {item.category}
                  </Typography>

                  <Typography
                    variant="h3"
                    color="black"
                    style={{
                      fontWeight: "700",
                      fontSize: "18px",
                      marginTop: "10px",
                    }}
                  >
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductComponent;
