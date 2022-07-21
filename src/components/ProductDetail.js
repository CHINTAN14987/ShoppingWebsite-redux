import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductActions } from "../features/productSlice";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedValue = useSelector(
    (state) => state.myProduct.selectedProducts
  );
  useEffect(() => {
    const apiData = async () => {
      const fetchPromise = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      const response = await fetchPromise.json();
      return response;
    };

    apiData()
      .then((response) => {
        dispatch(ProductActions.selectedProducts(response));
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      dispatch(ProductActions.removeSelectedProducts());
    };
  }, [id]);

  return (
    <>
      {selectedValue && (
        <div
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5rem",
          }}
        >
          <Card
            sx={{
              Width: 600,
              height: 850,
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              height="60%"
              image={selectedValue.image}
              alt="green iguana"
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                style={{
                  fontWeight: "700",
                  color: "black",
                  marginBottom: "10px",
                }}
              >
                {selectedValue.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                {selectedValue.description}
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <Typography
                  variant="h3"
                  color="black"
                  style={{ fontWeight: "600", fontSize: "30px" }}
                >
                  {selectedValue.category}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="h3"
                  color="blue"
                  width="6rem"
                  borderRadius="10px"
                  backgroundColor="skyblue"
                  padding="10px"
                  border="transparent"
                  style={{ fontWeight: "600", fontSize: "25px" }}
                >
                  {selectedValue.price}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
