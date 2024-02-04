import { useTheme } from "@emotion/react";
import { ShoppingCartSharp } from "@mui/icons-material";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  CardActions,
  Button,
} from "@mui/material";
import { addToCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../features/productSlice";
export default function Home() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const state = useSelector((state) => state.products);
  const { value: products, loading } = state ?? {};
  if (!products?.length) {
    dispatch(fetchAllProducts());
  }

  const addProductToCart = (product) => {
    // dispatch an action
    dispatch(addToCart({ product, quantity: 1 }));
  };
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {products.map(({ image, id, title, description, price, rating }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                  alignSelf: "center",
                  width: theme.spacing(30),
                  height: theme.spacing(30),
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    "-webkit-line-clamp": "1",
                    "-webkit-box-orient": "vertical",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  paragraph
                  color="text-secondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    "-webkit-line-clamp": "2",
                    "-webkit-box-orient": "vertical",
                  }}
                >
                  {description}
                </Typography>
                <Typography fontSize="large" paragraph>
                  {price}
                </Typography>
                <Rating readOnly precision={0.5} value={rating.rate}></Rating>
              </CardContent>
              <CardActions sx={{ alignSelf: "center" }}>
                <Button
                  variant="contained"
                  onClick={() =>
                    addProductToCart({
                      image,
                      id,
                      title,
                      description,
                      price,
                      rating,
                    })
                  }
                >
                  <ShoppingCartSharp />
                  Add to bag
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
