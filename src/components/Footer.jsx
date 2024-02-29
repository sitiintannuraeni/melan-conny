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
      <div className="bg-black w-full h-[590px] lg:h-[650px] text-white">
        <div className="text-center py-2">
          <Typography className="lg:text-lg text-base mt-4">
            MEN'S FASHION STORE
          </Typography>
        </div>
        <div className="grid grid-cols-4 justify-center pl-7 py-4 gap-3 lg:pr-10 lg:flex lg:flex-col-4 lg:gap-16 ">
          <div className="mt-5">
            <Typography className="lg:text-lg text-base">Shop</Typography>
            <div className="mt-4">
              <Typography className="lg:text-base text-xs">
                Rainy Season Collection
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs">
                Available Items
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs">
                Collection
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs ">
                Accessories
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs ">
                Heylocal
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs ">
                Zoma Basic
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs">
                Prepp Studio
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs">
                Boonaboo
              </Typography>
            </div>
          </div>
          <div className="mt-5 pl-3">
            <Typography className="lg:text-lg text-base pl-3 lg:pl-none">
              About
            </Typography>
            <div className="mt-2 pl-3 lg:pl-none">
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs ">
                Our Story
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs 0">
                Articel
              </Typography>
            </div>
          </div>
          <div className="mt-5">
            <Typography className="lg:text-lg text-base pl-2">
              Payment
            </Typography>
            <div className="mt-2 pl-2">
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs">
                Bank BCA
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs">
                Bank Mandiri
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs ">
                Bank BRI
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs ">
                Bank BNI
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs ">
                Bank Permata
              </Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs ">
                Shopee Pay
              </Typography>
            </div>
          </div>
          <div className="mt-5">
            <div className="pl-4 lg:none">
              <Typography className="lg:text-lg text-base">Help</Typography>
              <Typography className="mt-4 lg:mt-3 lg:text-base text-xs">
                FAQ
              </Typography>
            </div>
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
