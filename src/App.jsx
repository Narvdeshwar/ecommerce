import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from './pages/Home';
import Login from "./pages/Login";
import Cart from "./pages/Cart";

//routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}> <Route index element={<Home />}></Route>
    <Route path='/cart' element={<Cart />}></Route><Route path='/login' element={<Login />}></Route></Route>,
   
  )
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
