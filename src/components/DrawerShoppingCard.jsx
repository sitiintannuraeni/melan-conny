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
import {
  closeDrawerShopping,
  closeDrawerShoppingCart,
  openDialogCheckOut,
} from "../slice/menuSlice";

function DrawerShoppingCart() {
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
        className="p-4"
      >
        <div className="mb-6 flex items-center space-x-3">
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
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

        <div className="h-[400px] overflow-y-auto">
          <div className="flex flex-col-3 mt-4 gap-2">
            <div className="">
              <div className="flex justify-start">
                <Checkbox defaultChecked ripple={false} />
                <img src={DrawerOne} alt="drawer1" className="h-[120px]" />
              </div>
              <div className="flex justify-start mt-[50px]">
                <Checkbox ripple={false} />
                <img src={DrawerTwo} alt="drawer2" className="h-[120px]" />
              </div>
              <div className="flex justify-start mt-[42px]">
                <Checkbox />
                <img src={DrawerThree} alt="product3" className="h-[120px]" />
              </div>
              <div className="flex justify-start mt-[70px]">
                <Checkbox />
                <img src={DrawerFour} alt="drawer4" className="h-[120px]" />
              </div>
              <div className="flex justify-start mt-[74px]">
                <Checkbox />
                <img src={DrawerFive} alt="drawer5" className="h-[120px]" />
              </div>
              <div className="flex justify-start mt-[78px]">
                <Checkbox />
                <img src={DrawerSix} alt="drawer6" className="h-[120px]" />
              </div>
            </div>
            <div className="gap-1">
              <div>
                <Typography className="text-md">
                  Helmut Mockneck Knit <br />
                  Black <br /> Rp 189.000
                </Typography>
                <Typography className="mt-3 text-md">XS</Typography>
                <div className="flex justify-start mt-2 space-x-3">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[30px] w-[30px]"
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-xl mt-1">1</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[30px] w-[30px]"
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
              <div className="mt-5">
                <Typography className="text-md mt-5">
                  Elgant Basic Shirt Black
                  <br /> Rp 189.000
                </Typography>
                <Typography className="mt-3 text-md">S</Typography>
                <div className="flex justify-start mt-2 space-x-3">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[30px] w-[30px]"
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-xl mt-1">1</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[30px] w-[30px]"
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
              <div className="mt-5">
                <Typography className="text-md mt-[38px]">
                  Elgant Short Sleeve Shirt <br />
                  Black
                </Typography>
                <Typography>Rp. 189.000</Typography>
                <Typography className="mt-3 text-md">M</Typography>
                <div className="flex justify-start mt-2 space-x-3">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[30px] w-[30px]"
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-xl mt-1">1</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[30px] w-[30px]"
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
              <div className="mt-5">
                <div className="mt-1">
                  <Typography className="text-md">
                    Elgant Short Sleeve Shirt
                  </Typography>
                  <Typography>White</Typography>
                  <Typography>Rp 189.000</Typography>
                  <Typography className="mt-3 text-md">S</Typography>
                </div>
                <div className="flex justify-start mt-2 space-x-3">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[30px] w-[30px]"
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-xl mt-1">1</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[30px] w-[30px]"
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
              <div className="mt-5">
                <Typography className="text-md mt-[18px]">
                  Elgant Short Sleeve Shirt
                </Typography>
                <Typography>Maroon</Typography>
                <Typography>Rp 189.000</Typography>
                <Typography className="mt-3 text-md">S</Typography>
                <div className="flex justify-start mt-2 space-x-3">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[30px] w-[30px]"
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-xl mt-1">1</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[30px] w-[30px]"
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
              <div className="mt-5">
                <Typography className="text-md mt-[10px]">
                  Elgant Short Sleeve Shirt
                </Typography>
                <Typography>Look Choco</Typography>
                <Typography>Rp 189.000</Typography>
                <Typography className="mt-3 text-md">S</Typography>
                <div className="flex justify-start mt-2 space-x-3">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[30px] w-[30px]"
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-xl mt-1">1</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[30px] w-[30px]"
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-end">
                <IconButton variant="text" color="blue-gray">
                  <XMarkIcon className="text-black h-3 w-4" />
                </IconButton>
              </div>
              <div className="mt-[136px]">
                <IconButton variant="text" color="blue-gray">
                  <XMarkIcon className="text-black h-3 w-4" />
                </IconButton>
              </div>
              <div className="mt-[125px]">
                <IconButton variant="text" color="blue-gray">
                  <XMarkIcon className="text-black h-3 w-4" />
                </IconButton>
              </div>
              <div className="mt-[150px]">
                <IconButton variant="text" color="blue-gray">
                  <XMarkIcon className="text-black h-3 w-4" />
                </IconButton>
              </div>
              <div className="mt-[156px]">
                <IconButton variant="text" color="blue-gray">
                  <XMarkIcon className="text-black h-3 w-4" />
                </IconButton>
              </div>
              <div className="mt-[156px]">
                <IconButton variant="text" color="blue-gray">
                  <XMarkIcon className="text-black h-3 w-4" />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-black mt-5" />
          <div className="flex flex-col">
            <div className="flex justify-between">
              <Typography className="mt-3">TOTAL</Typography>
              <Typography className="mt-3">Rp. 189.000</Typography>
            </div>
            <div className="flex justify-between">
              <Typography className="mt-6">SHIPPING</Typography>
              <Typography className="mt-6 text-xs">
                Takes and shipping fe will be <br />
                cal culated at checkout
              </Typography>
            </div>
            <div className="border-b-[1px] border-black mt-7" />
            <div className="flex justify-between mt-5">
              <Typography className="mt-2 text-lg font-bold">
                View Bag
              </Typography>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(openDialogCheckOut());
                  dispatch(closeDrawerShoppingCart());
                  dispatch(closeDrawerShopping());
                }}
              >
                CHECK OUT
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
export default DrawerShoppingCart;
