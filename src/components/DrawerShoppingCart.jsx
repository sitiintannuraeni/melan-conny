import {
  Button,
  Checkbox,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import LogoDrawer from "../assets/logoDrawer.png";
import DrawerOne from "../assets/drawer-1.png";
import DrawerTwo from "../assets/drawer-2.png";
import DrawerThree from "../assets/drawer-3.png";
import DrawerFour from "../assets/drawer-4.png";
import DrawerFive from "../assets/drawer-5.png";
import DrawerSix from "../assets/drawer-6.png";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawerShoppingCart } from "../slice/menuSlice";
import { useNavigate } from "react-router-dom";

function DrawerShoppingCart() {
  const navigate = useNavigate();
  const drawerShoppingCart = useSelector(
    (state) => state.menu.drawerShoppingCart
  );

  const dispatch = useDispatch();

  const handleIncrementQty = (data) => {
    dispatch(decrementQty(data));
    dispatch(setPriceTotal());
    dispatch(setQtyTotal());
  };

  const handleDecrementQty = (data) => {
    dispatch(decrementQty(data));
    dispatch(setPriceTotal());
    dispatch(setQtyTotal());
  };

  const checkout = () => {
    navigate = "/checkout";
  };

  const viewBag = () => {
    navigate = "/view-bag";
  };

  return (
    <>
      <Drawer
        placement="right"
        open={drawerShoppingCart}
        onClose={() => dispatch(closeDrawerShoppingCart())}
        className="p-3"
      >
        <div className="mb-6 flex items-center space-x-3">
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
          <img src={LogoDrawer} alt="logoDrawer" width="50" />
          <Typography variant="h5" color="blue-gray">
            SHOPPING BAG
          </Typography>
        </div>
        <div className="w-full border-b-[1px] border-black mt-1">
          <Typography>Total 6 items</Typography>
        </div>
        <div className="mt-4 flex justify-start space-x-2">
          <Checkbox />
          <Typography className="mt-2">ALL ITEMS</Typography>
        </div>
        <div className="h-[400px] scrollbar-y overflow-y-auto">
          <div className="flex flex-col-3 mt-4 gap-2">
            <div className="">
              <div className="flex justify-start">
                <Checkbox defaultChecked ripple={false} />
                <img
                  src={DrawerOne}
                  alt="drawer1"
                  className="h-[85px] object-cover mt-1"
                />
              </div>
              <div className="flex justify-start mt-[50px]">
                <Checkbox ripple={false} />
                <img
                  src={DrawerTwo}
                  alt="drawer2"
                  className="h-[85px] object-cover mt-[12px]"
                />
              </div>
              <div className="flex justify-start mt-[53px]">
                <Checkbox />
                <img
                  src={DrawerThree}
                  alt="product3"
                  className="h-[85px] object-cover"
                />
              </div>
              <div className="flex justify-start mt-[98px]">
                <Checkbox />
                <img
                  src={DrawerFour}
                  alt="drawer4"
                  className="h-[85px] object-cover"
                />
              </div>
              <div className="flex justify-start mt-[98px]">
                <Checkbox />
                <img
                  src={DrawerFive}
                  alt="drawer5"
                  className="h-[85px] object-cover"
                />
              </div>
              <div className="flex justify-start mt-[100px]">
                <Checkbox />
                <img
                  src={DrawerSix}
                  alt="drawer6"
                  className="h-[85px] object-cover"
                />
              </div>
            </div>
            <div className="gap-1">
              <div>
                <Typography className="text-sm">
                  Helmut Mockneck Knit
                </Typography>
                <Typography className="text-sm">Black</Typography>
                <Typography className="text-sm">Rp. 189.000</Typography>
                <Typography className="mt-3 text-sm">XS</Typography>
                <div className="flex justify-start mt-2 space-x-3">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                    onClick={() => handleDecrementQty()}
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-lg">1</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                    onClick={() => handleIncrementQty()}
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
              <div className="mt-5">
                <Typography className="text-sm mt-5">
                  Elgant Basic Shirt Black
                </Typography>
                <Typography className="text-sm">Rp. 189.000</Typography>
                <Typography className="mt-3 text-sm">S</Typography>
                <div className="flex justify-start mt-2 space-x-3">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-lg">1</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
              <div className="mt-5">
                <Typography className="text-sm mt-[25px]">
                  Elgant Short Sleeve Shirt
                </Typography>
                <Typography className="text-sm">Black</Typography>
                <Typography className="text-sm">Rp. 189.000</Typography>
                <Typography className="mt-3 text-md">M</Typography>
                <div className="flex justify-start mt-2 space-x-3">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-lg">1</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
              <div className="mt-5">
                <div className="mt-7">
                  <Typography className="text-sm">
                    Elgant Short Sleeve Shirt
                  </Typography>
                  <Typography className="text-sm">Black</Typography>
                  <Typography className="text-sm">Rp. 189.000</Typography>
                  <Typography className="mt-3 text-md">S</Typography>
                </div>
                <div className="flex justify-start mt-2 space-x-3">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-lg">1</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
              <div className="mt-7">
                <Typography className="text-sm mt-[18px]">
                  Elgant Short Sleeve Shirt
                </Typography>
                <Typography className="text-sm">Black</Typography>
                <Typography className="text-sm">Rp. 189.000</Typography>
                <Typography className="mt-3 text-md">S</Typography>
                <div className="flex justify-start mt-2 space-x-3">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-lg">1</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
              <div className="mt-7">
                <Typography className="text-sm mt-[10px]">
                  Elgant Short Sleeve Shirt
                </Typography>
                <Typography className="text-sm">Black</Typography>
                <Typography className="text-sm">Rp. 189.000</Typography>
                <Typography className="mt-3 text-md">S</Typography>
                <div className="flex justify-start mt-2 space-x-3">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-lg">1</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="mt-1">
              <div className="flex pl-14">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-500 text-black transition-colors"
                >
                  <XMarkIcon className="w-3 h-3" />
                </a>
              </div>
              <div className="mt-[140px] flex pl-14">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-500 text-black transition-colors"
                >
                  <XMarkIcon className="w-3 h-3" />
                </a>
              </div>
              <div className="mt-[126px] flex pl-14">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-500 text-black transition-colors"
                >
                  <XMarkIcon className="w-3 h-3" />
                </a>
              </div>
              <div className="mt-[172px] flex pl-14">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-500 text-black transition-colors"
                >
                  <XMarkIcon className="w-3 h-3" />
                </a>
              </div>
              <div className="mt-[172px] flex pl-14">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-500 text-black transition-colors"
                >
                  <XMarkIcon className="w-3 h-3" />
                </a>
              </div>
              <div className="mt-[156px] flex pl-10">
                <IconButton variant="text" color="blue-gray">
                  <XMarkIcon className="text-black h-3 w-4" />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="px-3">
            <div className="border-b-[1px] border-black mt-5" />
            <div className="flex flex-col text-[#000000]">
              <div className="flex justify-between">
                <Typography className="mt-3">TOTAL</Typography>
                <Typography className="mt-3">Rp. 189.000</Typography>
              </div>
              <div className="flex justify-between">
                <Typography className="mt-2">SHOPPING</Typography>
                <div className="">
                  <Typography className="mt-2 text-xs">
                    Takes and shopping fe will be cal culated at
                  </Typography>
                  <Typography className="float-right text-xs">
                    checkout
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
      </Drawer>
    </>
  );
}

export default DrawerShoppingCart;
