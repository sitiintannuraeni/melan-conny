import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import DrawerShoppingCart from "./components/DrawerShoppingCart";
import DrawerMenFashionStore from "./components/DrawerMenFashionStore";
import CheckOut from "./components/CheckOut";
import AsGuest from "./components/AsGuest";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchV2 from "./components/SearchV2";
import ModalAddress from "./pages/address/ModalAddress";
import ModalChange from "./pages/account_info/ModalChange";
import UpdateModalAddress from "./pages/address/UpdateModalAddress";
import Header from "./components/Header1";
import Footer from "./components/Footer1";

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
  return (
    <>
      <ScrollToTop />
      <div className="container max-w-full">
        <Header />
        <main className="lg:pt-[62px] pt-[20px] bg-[#202020]">
          <Outlet />
        </main>
        <Footer />
      </div>
      <DrawerShoppingCart />
      <CheckOut />
      {/* <Login /> */}
      {/* <Register /> */}
      <AsGuest />
      <DrawerMenFashionStore />
      <SearchV2 />
      {/* <Test /> */}
      <ModalAddress />
      <ModalChange />
      <UpdateModalAddress />
      <ToastContainer
        autoClose={3000}
        pauseOnHover={false}

        // position="top-center"
        // width="200px"
        // icon={false}
      />
    </>
  );
}
export default App;
