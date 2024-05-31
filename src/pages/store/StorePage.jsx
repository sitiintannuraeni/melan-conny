import { Button, Typography } from "@material-tailwind/react";
import Product1 from "../../assets/product-14.png";
import Product2 from "../../assets/product-12.png";
import Product3 from "../../assets/product-13.png";
import CardProduct from "../../components/CardProduct";
import AllProduct from "./AllProduct";

function Store() {
  return (
    <>
      <div className="px-16 mt-10 ">
        <Typography className="text-white font-semibold text-2xl">
          Categories
        </Typography>
        <div className="flex flex-col-3 mt-8 gap-5">
          <Button
            variant="outlined"
            size="sm"
            color="white"
            className="border-2 focus:bg-[#FF0386] "
          >
            <Typography className="text-white text-sm">Semua</Typography>
          </Button>
          <Button
            variant="outlined"
            size="sm"
            color="white"
            className="border-2 focus:bg-[#FF0386]"
          >
            <Typography className="text-white text-sm">T - Shirt</Typography>
          </Button>
          <Button
            variant="outlined"
            size="sm"
            color="white"
            className="border-2 focus:bg-[#FF0386]"
          >
            <Typography className="text-white text-sm">Accessories</Typography>
          </Button>
        </div>
        <div>
          <AllProduct />
        </div>
      </div>
    </>
  );
}
export default Store;
