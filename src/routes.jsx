import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DetailPage from "./pages/detail/DetailPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import App from "./App";
import WishList from "./pages/wishlist/WishListPage";
import MyOrder from "./pages/my_order/MyOrder";
import Addres from "./pages/address/Address";
import AccountInfo from "./pages/account_info/AccountInfo";
import ProtectedLayouts from "./layouts/ProtectedLayouts";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route element={<ProtectedLayouts />}>
          <Route path="/accountInfo" element={<AccountInfo />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/myOrder" element={<MyOrder />}></Route>
          <Route path="/address" element={<Addres />}></Route>
        </Route>
      </Route>
    </>
  )
);
