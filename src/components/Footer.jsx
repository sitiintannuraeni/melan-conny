import {
  ChevronDownIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <>
      <div className="bg-black w-full h-[480px] text-white">
        <div className="text-center py-2">
          <Typography className="text-lg">MEN'S FASHION STORE</Typography>
        </div>
        <div className="flex flex-col-4 justify-center gap-12 py-4 pr-10">
          <div className="">
            <div className="flex justify-center">
              <Typography className="pl-7 text-lg mt-4 ">Shop</Typography>
            </div>
            <div className="pl-12 mt-4 felx justify-center">
              <Typography className="mt-2 text-md px-5">
                Rainy Season Collection
              </Typography>
              <Typography className="mt-5 text-md px-12">
                Available Items
              </Typography>
              <Typography className="mt-5 text-md px-16">Collection</Typography>
              <Typography className="mt-5 text-md px-14">
                Accessories
              </Typography>
              <Typography className="mt-5 text-md px-[67px]">
                Heylocal
              </Typography>
              <Typography className="mt-5 text-md px-14">Zoma Basic</Typography>
              <Typography className="mt-5 text-md px-[53px]">
                Prepp Studio
              </Typography>
              <Typography className="mt-5 text-md px-[63px]">
                Boonaboo
              </Typography>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              <Typography className="pl-7 mt-5 text-lg">About </Typography>
            </div>
            <div className="mt-2">
              <Typography className="mt-5 text-md pl-7">Our Story</Typography>
              <Typography className="mt-5 text-md pl-10">Articel</Typography>
            </div>
          </div>
          <div className="">
            <Typography className="pl-7 mt-5 text-lg flex justify-center">
              Payment
            </Typography>
            <div className="pl-12 mt-2">
              <Typography className="mt-5 text-md pl-[5px]">
                Bank BCA
              </Typography>
              <Typography className="mt-5 text-md">Bank Mandiri</Typography>
              <Typography className="mt-5 text-md pl-3">Bank BRI</Typography>
              <Typography className="mt-5 text-md pl-3">Bank BNI</Typography>
              <Typography className="mt-5 text-md ">Bank Permata</Typography>
              <Typography className="mt-5 text-md pl-2">Shopee Pay</Typography>
            </div>
          </div>
          <div className="">
            <Typography className="pl-7 mt-5 text-lg flex justify-center">
              Help
            </Typography>
            <Typography className="mt-5 pl-8">FAQ</Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
