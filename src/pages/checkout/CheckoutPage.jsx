import { Typography } from "@material-tailwind/react";
import ShoppingBag from "./ShoppingBag";
import Information from "./Information";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-full lg:px-20 px-3 mt-10">
        <div className="flex justify-between">
          <Typography
            className="text-xs underline cursor-pointer text-white"
            onClick={() => navigate("/")}
          >
            Back to Shop
          </Typography>
          <Typography className="text-base lg:pr-[557px] text-white">
            Checkout
          </Typography>
        </div>
        <div className="lg:grid lg:grid-cols-2 flex flex-col">
          <div className="rounded-lg">
            <Information />
          </div>
          <div className="">
            <ShoppingBag />
          </div>
        </div>
      </div>
    </>
  );
}
export default CheckoutPage;
