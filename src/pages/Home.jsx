import { useTheme } from "@emotion/react";
import { ShoppingCartSharp } from "@mui/icons-material";
import {
  Container,
  Grid,
  Card,
  Typography,
  CardContent,
  CardMedia,
  Rating,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart-slice";
import { fetchAllProducts } from "../features/cart-slice";

export default function Home() {
  const theme = useTheme();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  if (!products?.value.length) {
    dispatch(fetchAllProducts());
  }

  // dispatching the payload
  function addToCartProduct(product) {
    dispatch(addToCart({ product, quantity: 1 }));
  }
  return (
    <Container sx={{ py: 2 }} maxWidth="lg">
      <Grid container spacing={2}>
        {products?.map(({ id, title, price, description, image, rating }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card
              sx={{ heigh: "100%", display: "flex", flexDirection: "column" }}
            >
              {/**Image display */}
              <CardMedia
                component="img"
                image={image}
                sx={{
                  alignSelf: "center",
                  width: theme.spacing(30),
                  height: theme.spacing(30),
                  objectFit: "contain",
                  pt: theme.spacing(),
                }}
                alt={title}
              />

              {/**Content want to display in the form of text like paragraph,heading */}
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  color="text.disabled"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {description}
                </Typography>
                <Typography>${price}</Typography>
                <Rating readOnly precision={0.5} value={rating.rate} />
              </CardContent>
              <CardActions sx={{ alignSelf: "center" }}>
                <Button
                  variant="contained"
                  onClick={() =>
                    addToCartProduct({
                      id,
                      title,
                      price,
                      description,
                      image,
                      rating,
                    })
                  }
                >
                  <ShoppingCartSharp />
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
