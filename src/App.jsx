import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import DrawerShoppingCart from "./components/DrawerShoppingCard";
import Register from "./components/Register";
import Login from "./components/Login";
import DrawerMenFashionStore from "./components/DrawerMenFashionStore";
import Search from "./components/Search";
import DrawerShopping from "./components/DrawerShopping";
import CheckOut from "./components/CheckOut";
import AsGuest from "./components/AsGuest";
import DetailLink from "./pages/detail/DetailLink";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  const [openDrawerShoppingCart, setOpenDrawerShoppingCart] = useState(false);

  return (
    <>
      <ScrollToTop />
      <div className="container max-w-full">
        <Header openDrawerShoppingCart={setOpenDrawerShoppingCart} />
        <main className="pt-[62px]">
          <Outlet />
        </main>
        <Footer />
      </div>

      <DrawerShopping />

      <DrawerShoppingCart
        openDrawerShoppingCart={openDrawerShoppingCart}
        closeDrawerShoppingCart={setOpenDrawerShoppingCart}
      />

      <CheckOut />

      <Login />
      <Register />
      <AsGuest />

      <DrawerMenFashionStore />
      <Search />
    </>
  );
}
export default App;
