import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DetailPage from "./pages/detail/DetailPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import App from "./App";
import DrawerMenFashionStore from "./components/DrawerMenFashionStore";
import DrawerShoppingCart from "./components/DrawerShoppingCard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      </Route>
    </>
  )
);
