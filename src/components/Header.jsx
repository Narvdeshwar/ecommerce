import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Button,
  Autocomplete,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { getItemCount } from "../utils";
import { styled, alpha } from "@mui/material/styles";
const Search = styled("section")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));
function SearchBar() {
  const products = useSelector((state) => state.products.value);
  return (
    <Search>
      <Select
        size="small"
        sx={{ m: 1, "&": {} }}
        variant="standard"
        labelId="selected-Category"
        id="selected-category-id"
      >
        <MenuItem>all</MenuItem>
      </Select>
      <Autocomplete
        id="combo-box-demo"
        options={Array.from(products, (prod) => ({
          id: prod.id,
          label: prod.title,
        }))}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="products" />}
      />
    </Search>
  );
}
export default function Header() {
  const cartItems = useSelector((state) => state.cart?.value);
  const count = getItemCount(cartItems);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          Ecom
        </Typography>
        <SearchBar />
        <Box>
          <IconButton
            size="large"
            aria-label="shows cart items count"
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
