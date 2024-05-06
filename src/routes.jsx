import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DetailPage from "./pages/detail/DetailPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import App from "./App";
import WishList from "./pages/wishlist/WishListPage";
import MyOrder from "./pages/my_order/MyOrder";
import Addres from "./pages/address/Address";
import AccountInfo from "./pages/account_info/AccountInfo";
import ProtectedLayouts from "./layouts/ProtectedLayouts";
import ViewBag from "./pages/view_bag/ViewBag";
import TruckingPage from "./pages/trucking_order/TruckingPage";
import Layouts from "./layouts/Layouts";
import MemberOrder from "./pages/my_order/MemberOrder";
import HomePage from "./pages/home1/HomePage";
import Login from "./components/Login1";
import ForgotPassword from "./components/ForgotPassword";
import Register from "./components/Register1";
import T_Shirt from "./pages/store/T-Shirt";
import Accessories from "./pages/store/Accessories";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/t-shirt" element={<T_Shirt />}></Route>
        <Route path="/accessories" element={<Accessories />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/trucking-order" element={<TruckingPage />}></Route>
        <Route element={<ProtectedLayouts />}>
          <Route path="/account-info" element={<AccountInfo />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/my-order" element={<MyOrder />}></Route>
          <Route path="/address" element={<Addres />}></Route>
        </Route>
        <Route element={<Layouts />}>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/view-bag" element={<ViewBag />}></Route>
          <Route path="/member-order" element={<MemberOrder />}></Route>
        </Route>
      </Route>
    </>
  )
);
