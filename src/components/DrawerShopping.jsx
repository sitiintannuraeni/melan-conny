import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  closeDrawerShopping,
  openDrawerMenFashionStore,
  openDrawerShoppingCart,
} from "../slice/menuSlice";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoDrawer from "../assets/logoDrawer.png";
import { useDispatch, useSelector } from "react-redux";

function DrawerShopping() {
  const drawerShopping = useSelector((state) => state.menu.drawerShopping);
  const dispatch = useDispatch();
  return (
    <>
      <Drawer
        placement="right"
        open={drawerShopping}
        onClose={() => dispatch(closeDrawerShopping())}
        className="p-4"
      >
        <div className="mb-6 flex items-center space-x-3">
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeDrawerShopping());
            }}
          >
            <XMarkIcon className="w-6 h-6" />
          </a>
          <img src={LogoDrawer} alt="logoDrawer" width="50" />
          <Typography variant="h5" color="blue-gray">
            SHOPPING BAG
          </Typography>
        </div>
        <div className="mt-[100px]">
          <div className="flex justify-center items-center">
            <IconButton variant="text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-9"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </IconButton>
          </div>
          <Typography className="flex justify-center items-center">
            Your bag is empty.
          </Typography>
          <Typography className="flex justify-center items-center">
            Let's add one, shall we
          </Typography>
          <div className="flex justify-center items-center mt-[100px]">
            <Button
              className="w-full"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                dispatch(openDrawerShoppingCart());
                dispatch(closeDrawerShopping());
              }}
            >
              SHOP NOW
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default DrawerShopping;
