import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Drawer,
  IconButton,
  Input,
  Tabs,
  Typography,
} from "@material-tailwind/react";
import LogoDrawer from "../assets/logoDrawer.png";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawerShoppingCart } from "../slice/menuSlice";
import { useNavigate } from "react-router-dom";
import ListCardProduct from "./ListCartProduct";
import NumberFormatCurrency from "../utils";
import { useState } from "react";
import Logo from "../assets/logo1.png";

function EmptyState() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCloseDrawer = () => {
    dispatch(closeDrawerShoppingCart());
    navigate("/");
  };
  return (
    <>
      <div className="mt-[210px] lg:mt-[175px]">
        <div className="flex justify-center items-center">
          <IconButton variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
        </div>
        <Typography className="flex justify-center items-center text-lg">
          Your bag is empty.
        </Typography>
        <Typography className="flex justify-center items-center text-lg">
          Let's add one, shall we
        </Typography>
        <div className="flex justify-center items-center lg:mt-[220px] mt-[225px]">
          <Button className="w-full" size="lg" onClick={handleCloseDrawer}>
            SHOP NOW
          </Button>
        </div>
      </div>
    </>
  );
}

function TruckingOrder() {
  return (
    <>
      <div className="mt-16">
        <div className="flex justify-center items-center">
          <img
            src={Logo}
            alt="logo"
            className="w-[130px] h-[130px] object-cover"
          />
        </div>
        <div className="mt-1">
          <Typography className="flex justify-center items-center">
            MEN'S FASHION STORE
          </Typography>
          <div className="border-b-[1px] border-black/20 mt-6 w-full" />
          <Typography className="flex justify-center items-center mt-6">
            Order Number Tracking
          </Typography>
          <div className="flex justify-center flex-col-2 items-center mt-4">
            <div className="w-54">
              <Input variant="static" placeholder="Insert order number" />
            </div>
            <IconButton variant="outlined" className="rounded-md h-7 w-7 mt-2">
              <PlusIcon className="h-4 w-4" />
            </IconButton>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Button className="bg-[#D9D9D9] w-[130px]">SUBMIT</Button>
          </div>
        </div>
      </div>
    </>
  );
}

function AllItems() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { priceTotal, qtyTotal } = useSelector((state) => state.cart);
  return (
    <>
      <div className="w-full border-b-[1px] border-black mt-1">
        <Typography>Total {qtyTotal} items</Typography>
      </div>
      <div className="mt-4 flex justify-start space-x-2">
        <Checkbox />
        <Typography className="mt-2">ALL ITEMS</Typography>
      </div>
      <div className="lg:h-[250px] md:h-[540px] h-[250px] scrollbar-y overflow-y-auto">
        <div>
          <ListCardProduct />
        </div>
      </div>
      <div>
        <div className="px-3">
          <div className="border-b-[1px] border-black mt-5" />
          <div className="flex flex-col text-[#000000]">
            <div className="flex justify-between">
              <Typography className="mt-3">TOTAL</Typography>
              <Typography className="mt-3">
                <NumberFormatCurrency value={priceTotal} />
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography className="mt-3">SHOPPING</Typography>
              <div>
                <Typography className="mt-3 text-[11px] md:text-[13px]">
                  Takes and shopping fe will be cal culated
                </Typography>
                <Typography className="flex justify-end text-[11px] md:text-[13px]">
                  at checkout
                </Typography>
              </div>
            </div>
            <div className="border-b-[1px] border-black mt-7" />
            <div className="flex justify-between mt-5 w-full">
              <Typography
                className="mt-2 text-lg font-bold underline cursor-pointer"
                onClick={() => {
                  navigate("/view-bag");
                  dispatch(closeDrawerShoppingCart());
                }}
              >
                View Bag
              </Typography>
              <Button
                onClick={() => {
                  navigate("/checkout");
                  dispatch(closeDrawerShoppingCart());
                }}
              >
                CHECK OUT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DrawerShoppingCart() {
  const { products } = useSelector((state) => state.cart);
  const [activeBtn, setActiveBtn] = useState("shopping");
  const drawerShoppingCart = useSelector(
    (state) => state.menu.drawerShoppingCart
  );
  const dispatch = useDispatch();

  return (
    <>
      <Drawer
        placement="right"
        open={drawerShoppingCart}
        onClose={() => dispatch(closeDrawerShoppingCart())}
        className="p-3"
      >
        <div className="flex items-center gap-2 mt-1">
          <div className="mb-6 flex items-center gap-2">
            <a
              href="#"
              className="flex items-center hover:text-blue-500 text-black transition-colors"
              onClick={(e) => {
                e.preventDefault();
                dispatch(closeDrawerShoppingCart());
              }}
            >
              <XMarkIcon className="w-6 h-6" />
            </a>
            <div className="hidden items-center gap-3 lg:flex md:flex">
              <img src={LogoDrawer} alt="logoDrawer" width="50" />
              <Typography variant="h5" color="blue-gray">
                SHOPPING BAG
              </Typography>
            </div>
            <div className="w-full flex-shrink-0 flex items-center lg:hidden gap-3 md:hidden mt-2">
              <Button
                variant={activeBtn === "shopping" ? "filled" : "outlined"}
                size="sm"
                className="w-full rounded-full"
                onClick={() => setActiveBtn("shopping")}
              >
                SHOPPING BAG
              </Button>
              <Button
                variant={activeBtn === "tracking" ? "filled" : "outlined"}
                size="sm"
                className="w-full rounded-full"
                onClick={() => setActiveBtn("tracking")}
              >
                TRACKING ORDER
              </Button>
            </div>
          </div>
        </div>
        {products.length <= 0 ? (
          <EmptyState />
        ) : (
          <>{activeBtn === "shopping" ? <AllItems /> : <TruckingOrder />}</>
        )}
      </Drawer>
    </>
  );
}

export default DrawerShoppingCart;
