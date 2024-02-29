import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DrawerShoppingCart from "./components/DrawerShoppingCart";
import Register from "./components/Register";
import Login from "./components/Login";
import DrawerMenFashionStore from "./components/DrawerMenFashionStore";
import DrawerShopping from "./components/DrawerShopping";
import CheckOut from "./components/CheckOut";
import AsGuest from "./components/AsGuest";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchV2 from "./components/SearchV2";
import ModalAddress from "./pages/address/ModalAddress";
import ModalChange from "./pages/account_info/ModalChange";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
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
        <main className="pt-[62px] bg-gray-50">
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
      <SearchV2 />
      {/* <Test /> */}
      <ModalAddress />
      <ModalChange />

      <ToastContainer autoClose={1500} />
    </>
  );
}
export default App;
