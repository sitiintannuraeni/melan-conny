import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import ProductA from "../../assets/product-5.png";
import ProductB from "../../assets/product-6.png";
import ProductC from "../../assets/product-7.png";
import ProductD from "../../assets/product-8.png";

function DetailCard({}) {
  return (
    <>
      <div class="p-4 grid grid-cols-4 gap-5 h-[340px] relative">
        <div class="">
          <img
            src={ProductA}
            alt="productA"
            className=" rounded-2xl w-full relative"
          />
          <div className="absolute top-7 left-[268px] bg-transparent">
            <IconButton
              variant="text"
              size="sm"
              className="rounded-full bg-white"
            >
              <HeartIcon className="h-4 w-4" />
            </IconButton>
          </div>
          <div className="absolute z-20 left-[152px] top-[295px]">
            <Button
              onClick=""
              variant="outlined"
              size="lg"
              className="px-3 lg:flex hidden bg-black !bg-opacity-20 border-white border-[1px] text-white gap-2 justify-center items-center"
            >
              <EyeIcon className="w-5 h-5" />
              <Typography className="font-['Helvetice'] font-medium">
                Quick View
              </Typography>
            </Button>
          </div>
          <div className="text-center mt-1">
            <Typography className="text-md font-bold">
              Versa Tees Oversized Black
            </Typography>
            <Typography className="text-[#989898] text-xs">
              S, M, L, XL, XXL
            </Typography>
            <Button variant="outlined" className="mt-5 rounded-md">
              Rp 120.000
            </Button>
          </div>
        </div>
        <div class="">
          <img
            src={ProductB}
            alt="productB"
            className="rounded-lg w-full relative"
          />
          <div className="absolute top-7 left-[580px] bg-transparent">
            <IconButton
              variant="text"
              size="sm"
              className="rounded-full bg-white"
            >
              <HeartIcon className="w-4 h-4" />
            </IconButton>
          </div>
          <div className="absolute z-20 left-[465px] top-[297px]">
            <Button
              onClick=""
              variant="outlined"
              size="lg"
              className="px-3 lg:flex hidden bg-black !bg-opacity-20 border-white border-[1px] text-white gap-2 justify-center items-center"
            >
              <EyeIcon className="w-5 h-5" />
              <Typography className="font-['Helvetice'] font-medium">
                Quick View
              </Typography>
            </Button>
          </div>
          <div className="text-center mt-1">
            <Typography className="text-md font-bold">
              Versa Tees Oversized Black
            </Typography>
            <Typography className="text-[#989898] text-xs">
              S, M, L, XL, XXL
            </Typography>
            <Button variant="outlined" className="mt-5 rounded-md">
              Rp 120.000
            </Button>
          </div>
        </div>
        <div class="">
          <img
            src={ProductC}
            alt="productC"
            className="rounded-lg w-full relative"
          />
          <div className="absolute top-7 right-[340px] bg-transparent">
            <IconButton
              variant="text"
              size="sm"
              className="rounded-full bg-white"
            >
              <HeartIcon className="w-4 h-4" />
            </IconButton>
          </div>
          <div className=" absolute z-20 bottom-2 right-[337px] top-[294px]">
            <Button
              onClick=""
              variant="outlined"
              size="lg"
              className="px-3 lg:flex hidden bg-black !bg-opacity-20 border-white border-[1px] text-white gap-2 justify-center items-center"
            >
              <EyeIcon className="w-5 h-5" />
              <Typography className="font-['Helvetice'] font-medium">
                Quick View
              </Typography>
            </Button>
          </div>
          <div className="text-center mt-1">
            <Typography className="text-md font-bold">
              Versa Tees Oversized Black
            </Typography>
            <Typography className="text-[#989898] text-xs">
              S, M, L, XL, XXL
            </Typography>
            <Button variant="outlined" className="mt-5 rounded-md">
              Rp 120.000
            </Button>
          </div>
        </div>
        <div class="">
          <img
            src={ProductD}
            alt="productD"
            className="rounded-lg w-full relative"
          />
          <div className="absolute top-7 right-6">
            <IconButton
              variant="text"
              size="sm"
              className="rounded-full bg-white"
            >
              <HeartIcon className="w-4 h-4" />
            </IconButton>
          </div>
          <div className=" absolute z-20 bottom-2 right-6 top-[296px]">
            <Button
              onClick=""
              variant="outlined"
              size="lg"
              className="px-3 lg:flex hidden bg-black !bg-opacity-20 border-white border-[1px] text-white gap-2 justify-center items-center"
            >
              <EyeIcon className="w-5 h-5" />
              <Typography className="font-['Helvetice'] font-medium">
                Quick View
              </Typography>
            </Button>
          </div>
          <div className="text-center mt-1 ">
            <Typography className="text-md font-bold">
              Versa Tees Oversized Black
            </Typography>
            <Typography className="text-[#989898] text-xs">
              S, M, L, XL, XXL
            </Typography>
            <Button variant="outlined" className="mt-5 rounded-md">
              Rp 120.000
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCard;
