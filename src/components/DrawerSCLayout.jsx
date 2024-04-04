import { Button, Drawer, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawerShoppingCart } from "../slice/menuSlice";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import LogoDrawer from "../assets/logoDrawer.png";

function DrawerSCLayout(props) {
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState("shopping");
  const drawerShoppingCart = useSelector(
    (state) => state.menu.drawerShoppingCart
  );
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
        {props.children}
      </Drawer>
    </>
  );
}

export default DrawerSCLayout;
