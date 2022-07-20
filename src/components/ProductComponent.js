import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import "../css/ProductList.css";
import { Link } from "react-router-dom";
import { style } from "@mui/system";

const ProductComponent = () => {
  const productsCartValue = useSelector((state) => state.myProduct.products);

  return (
    <div className="product_list_wrapper">
      {productsCartValue.map((item) => {
        return (
          <Link to={`/products/:${item.id}`} style={{ textDecoration: "none" }}>
            <div key={item.id}>
              <Card sx={{ Width: 400, height: 450 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt="green iguana"
                  style={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontWeight: "600", fontSize: "15px" }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Link>
        );
      })}
      {console.log(productsCartValue)}
    </div>
  );
};

export default ProductComponent;
