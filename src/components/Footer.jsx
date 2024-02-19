import {
  ChevronDownIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/facebook.png";
import WhatsApp from "../assets/whatsApp.png";

function Footer() {
  return (
    <>
      <div className="bg-black w-full h-[650px] text-white">
        <div className="text-center py-2">
          <Typography className="text-lg">MEN'S FASHION STORE</Typography>
        </div>
        <div className="flex flex-col-4 justify-center gap-28 py-4 pr-10">
          <div className="mt-6">
            <Typography className="text-lg">Shop</Typography>
            <div className="mt-4 felx justify-center">
              <Typography className="text-md">
                Rainy Season Collection
              </Typography>
              <Typography className="mt-3 text-md ">Available Items</Typography>
              <Typography className="mt-3 text-md ">Collection</Typography>
              <Typography className="mt-3 text-md ">Accessories</Typography>
              <Typography className="mt-3 text-md ">Heylocal</Typography>
              <Typography className="mt-3 text-md ">Zoma Basic</Typography>
              <Typography className="mt-3 text-md">Prepp Studio</Typography>
              <Typography className="mt-3 text-md">Boonaboo</Typography>
            </div>
          </div>
          <div className="mt-5">
            <Typography className="text-lg">About</Typography>
            <div className="mt-2">
              <Typography className="mt-3 text-md ">Our Story</Typography>
              <Typography className="mt-3 text-md 0">Articel</Typography>
            </div>
          </div>
          <div className="mt-5">
            <Typography className="text-lg">Payment</Typography>
            <div className="2 mt-2">
              <Typography className="mt-3 text-md 5px]">Bank BCA</Typography>
              <Typography className="mt-3 text-md">Bank Mandiri</Typography>
              <Typography className="mt-3 text-md ">Bank BRI</Typography>
              <Typography className="mt-3 text-md ">Bank BNI</Typography>
              <Typography className="mt-3 text-md ">Bank Permata</Typography>
              <Typography className="mt-3 text-md ">Shopee Pay</Typography>
            </div>
          </div>
          <div className="mt-5">
            <Typography className="text-lg">Help</Typography>
            <Typography className="mt-3">FAQ</Typography>
          </div>
        </div>
        <div className="flex flex-col-3 items-center justify-center mt-8 gap-3 pb-14">
          <img src={Instagram} alt="instagram" className="w-14 h-12" />
          <img src={Facebook} alt="facebook" className="w-14 h-[50px]" />
          <img src={WhatsApp} alt="whatsapp" className="w-14 h-12" />
        </div>
        <Typography className="flex justify-center items-center">
          Basic Club
        </Typography>
      </div>
    </>
  );
}

export default Footer;
