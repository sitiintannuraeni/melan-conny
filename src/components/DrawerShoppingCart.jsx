import {
  Button,
  Checkbox,
  Drawer,
  IconButton,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawerShoppingCart } from "../slice/menuSlice";
import { useNavigate } from "react-router-dom";
import ListCardProduct from "./ListCartProduct";
import NumberFormatCurrency from "../utils";
import { useState } from "react";
import Logo from "../assets/logo1.png";
import DrawerSCLayout from "./DrawerSCLayout";
import EmptyState from "./DrawerShopEmpty";

function TruckingOrder() {
  const [truckingOrders, setTruckingOrders] = useState([{ id: 1 }]);

  const handleAddInputTruckingOrders = () => {
    setTruckingOrders((current) => [
      ...current,
      { id: current[current.length - 1].id + 1 },
    ]);
  };

  const handleRemoveInputTruckingOrders = (id) => {
    setTruckingOrders((current) => current.filter((item) => item.id !== id));
  };
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
          <Typography className="flex justify-center items-center text-white">
            MEN'S FASHION STORE
          </Typography>
          <div className="border-b-[1px] border-black/20 mt-6 w-full" />
          <Typography className="flex justify-center items-center mt-6">
            Order Number Tracking
          </Typography>
          <div className="flex flex-col gap-2">
            {truckingOrders.map((truckingOrder, index) => {
              const isLastItem =
                index + 1 === truckingOrders.length ||
                truckingOrders.length === 1;
              return (
                <div
                  className="flex justify-center flex-col-2 items-center"
                  key={index}
                >
                  <div className="lg:w-80 w-64">
                    <Input variant="static" placeholder="Insert order number" />
                  </div>
                  <IconButton
                    variant="outlined"
                    className="rounded-md lg:h-8 lg:w-8 h-7 w-7 mt-2"
                    onClick={() =>
                      isLastItem
                        ? handleAddInputTruckingOrders()
                        : handleRemoveInputTruckingOrders(truckingOrder.id)
                    }
                  >
                    {isLastItem ? (
                      <PlusIcon className="h-4 w-4" />
                    ) : (
                      <XMarkIcon className="h-4 w-4" />
                    )}
                  </IconButton>
                </div>
              );
            })}
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

  if (qtyTotal <= 0) {
    return (
      <>
        <EmptyState />
      </>
    );
  }

  return (
    <>
      <div className="">
        <div className="w-full border-b-[1px] border-black mt-1">
          <Typography className="text-white">Total {qtyTotal} items</Typography>
        </div>
        <div className="mt-4 flex justify-start space-x-2">
          <Checkbox color="pink" />
          <Typography className="mt-2 text-white">ALL ITEMS</Typography>
        </div>
        <div className="lg:h-[250px] md:h-[540px] h-[250px] scrollbar-y overflow-y-auto">
          <div>
            <ListCardProduct />
          </div>
        </div>
        <div>
          <div className="px-3">
            <div className="border-b-[1px] border-white mt-5" />
            <div className="flex flex-col text-[#000000]">
              <div className="flex justify-between">
                <Typography className="mt-3 text-white">TOTAL</Typography>
                <Typography className="mt-3 text-[#F62C85]">
                  <NumberFormatCurrency value={priceTotal} />
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography className="mt-3 text-white">SHOPPING</Typography>
                <div>
                  <Typography className="mt-3 text-[11px] md:text-[13px] text-white">
                    Takes and shopping fe will be cal culated
                  </Typography>
                  <Typography className="flex justify-end text-[11px] md:text-[13px] text-white">
                    at checkout
                  </Typography>
                </div>
              </div>
              <div className="border-b-[1px] border-white mt-7" />
              <div className="flex justify-between mt-5 w-full">
                <Typography
                  className="mt-2 text-lg font-bold underline cursor-pointer text-white"
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
                  className="bg-[#F62C85]"
                >
                  CHECK OUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DrawerShoppingCart() {
  const [activeBtn, setActiveBtn] = useState("shopping");
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <DrawerSCLayout>
        {isLoggedIn ? (
          <>{activeBtn === "shopping" ? <AllItems /> : <TruckingOrder />}</>
        ) : (
          <EmptyState />
        )}
      </DrawerSCLayout>
    </>
  );
}

export default DrawerShoppingCart;
