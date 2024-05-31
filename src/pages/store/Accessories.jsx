import Banner from "../../assets/banner-utama.png";
import Logo from "../../assets/logo-auth.png";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import Product1 from "../../assets/product-14.png";
import Product2 from "../../assets/product-12.png";
import Product3 from "../../assets/product-13.png";
import CardProduct from "../../components/CardProduct";
import { useState } from "react";

function Accessories() {
  return (
    <>
      <div className="px-16 mt-10 ">
        <div className="flex flex-col-3 mt-6 gap-5">
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
        <div className="pb-28 grid grid-cols-4 mt-8 gap-20">
          <CardProduct
            img={Product1}
            name={"T Shirt Oversize - Skull Edition"}
            price={" 18500000"}
            items={"123 items sold"}
          />
          <CardProduct
            img={Product2}
            name={"Lanyard - Melanconny Edition"}
            price={" 18500000"}
            items={"123 items sold"}
          />
          <CardProduct
            img={Product3}
            name={"GasLighter - Melanconny Edition"}
            price={" 18500000"}
            items={"123 items sold"}
          />
          <CardProduct
            img={Product2}
            name={"Lanyard - Melanconny Edition"}
            price={" 18500000"}
            items={"123 items sold"}
          />
        </div>
      </div>
    </>
  );
}
export default Accessories;
