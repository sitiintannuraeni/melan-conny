import { Typography } from "@material-tailwind/react";
import ShoppingBag from "./ShoppingBag";
import Information from "./Information";

function CheckoutPage() {
  return (
    <>
      <div className="h-full lg:px-20 px-3 mt-10">
        <div className="flex justify-between">
          <Typography className="text-xs underline cursor-pointer">
            Back to Shop
          </Typography>
          <Typography className="text-base pr-[557px]">Checkout</Typography>
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
