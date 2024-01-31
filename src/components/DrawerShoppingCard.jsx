import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

function DrawerShoppingCart({
  openDrawerShoppingCart,
  closeDrawerShoppingCart,
}) {
  const [openRight, setOpenRight] = useState(false);
  useEffect(() => {
    setOpenRight(openDrawerShoppingCart);
  }, [openDrawerShoppingCart]);

  const closeDrawerRight = () => {
    setOpenRight(false);
    return closeDrawerShoppingCart(false);
  };
  return (
    <>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Shopping Cart
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          perferendis, optio laboriosam, qui odio, corporis quam dolor adipisci
          ducimus eaque aliquid deserunt inventore velit saepe maxime officia
          tempore. Quidem, fugiat.
        </Typography>
      </Drawer>
    </>
  );
}

export default DrawerShoppingCart;
