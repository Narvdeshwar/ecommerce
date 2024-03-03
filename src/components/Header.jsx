import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Autocomplete,
  alpha,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartSharp";
import { getItemCount } from "../utils";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const Search = styled("section")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  backgroundColor: alpha(theme.pallete.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.pallete.common.white, 0.25) },
  marginRight: theme.spacing(2),
  width: "100%",
}));

function SearchBar() {
  return (
    <Search>
      <Autocomplete />
    </Search>
  );
}
export default function Header() {
  const cartItems = useSelector((state) => state.cart?.value);
  const count = getItemCount(cartItems);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          E-commerce
        </Typography>
        <SearchBar />
        <Box sx={{ display: { md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show item in cart"
            color="inherit"
          >
            <Badge badgeContent={count} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
