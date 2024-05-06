import { Typography } from "@material-tailwind/react";
import Image from "../assets/footer.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsApp.png";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const pathName = location.pathname.split("/login")[1];
  return (
    <>
      <div>
        {pathName === "" ? (
          ""
        ) : (
          <>
            <figure className="relative">
              <img
                src={Image}
                alt="image"
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute bottom-[135px] h-[20px] w-full flex flex-col-5 lg:gap-9 gap-3 justify-center">
                <div className="text-white lg:text-base text-[10px]">
                  About Melanconny
                </div>
                <div className="text-white lg:text-base text-[10px]">
                  Contact
                </div>
                <div className="text-white lg:text-base text-[10px]">
                  Program Vindes
                </div>
                <div className="text-white lg:text-base text-[10px]">
                  Terms Of Service & Privacy policy
                </div>
                <div className="text-white lg:text-base text-[10px]">
                  Melanconny Saker
                </div>
              </div>
              <div className="absolute bottom-[90px] h-[20px] w-full flex flex-col-3 gap-5 justify-center">
                <img
                  src={instagram}
                  alt="instagram"
                  className="h-10 w-[42px]"
                />
                <img src={facebook} alt="instagram" className="h-10 w-[42px]" />
                <img src={whatsapp} alt="instagram" className="h-10 w-[42px]" />
              </div>
              <div className="absolute bottom-[35px] h-[20px] w-full flex justify-center">
                <Typography className="text-white lg:text-base text-sm">
                  Copyright 2024 Melanconny | All right reserved.
                </Typography>
              </div>
            </figure>
          </>
        )}
      </div>
    </>
  );
}

export default Footer;
