import { Button, IconButton, Typography } from "@material-tailwind/react";
import Logo from "../../assets/logo1.png";
import TotalItems from "./TotalItems";
import Summary from "./Summary";
import image from "../../assets/product-1.png";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import BCA from "../../assets/BCA.png";
import Mandiri from "../../assets/mandiri.png";
import BRI from "../../assets/bank-bri.png";
import BNI from "../../assets/bni.png";
import PermataBank from "../../assets/permata-bank.png";
import ShopeePay from "../../assets/shopee-pay.png";
import Empty from "./Empty";

function ViewBag() {
  const [isDelete, setIsDelete] = useState(false);
  return (
    <>
      <div className="mt-12 select-none">
        <div className="mb-6 flex items-center lg:px-7 px-0 mt-3">
          <div>
            <img src={Logo} alt="logo" className=" object-cover w-[125px]" />
          </div>
          <Typography variant="h5">SHOPPING BAG</Typography>
        </div>
        <BrowserView>
          <div className="lg:px-14 px-7 lg:py-24 lg:-mt-20 -mt-7 py-14">
            {isDelete ? (
              <div>
                <Empty />
              </div>
            ) : (
              <div className="flex flex-col lg:grid lg:grid-cols-2 -mt-3 gap-5 lg:space-x-32">
                <div>
                  <TotalItems />
                  <div
                    className="w-full flex justify-end -mt-[127px]"
                    onClick={() => setIsDelete(true)}
                  >
                    <XMarkIcon className="h-5 w-5 cursor-pointer" />
                  </div>
                  <div className="border border-black/10 mt-[123px]" />
                </div>
                <div className="">
                  <div>
                    <Summary />
                  </div>
                </div>
              </div>
            )}
          </div>
        </BrowserView>

        <MobileView className="py-20 -mt-28">
          <div className="px-7 mt-7 ">
            {isDelete ? (
              <div>
                <Empty />
              </div>
            ) : (
              <div>
                <TotalItems />
                <div
                  className="w-full flex justify-end -mt-[127px]"
                  onClick={() => setIsDelete(true)}
                >
                  <XMarkIcon className="h-5 w-5 cursor-pointer" />
                </div>
                <div className="mt-32">
                  <div className="flex justify-between">
                    <Typography>Shipping Fee</Typography>
                    <Typography className="text-[#989898]">
                      Calculated after checkout
                    </Typography>
                  </div>
                  <div className="border border-black/70 border-x-2 mt-3 " />
                  <div className="flex justify-between mt-3">
                    <Typography>TOTAL</Typography>
                    <Typography className="text-[#989898]">
                      Rp 185.000{" "}
                    </Typography>
                  </div>
                  <div className="mt-3">
                    <Button className="w-full">PROCEED TO CHEKOUT</Button>
                  </div>
                  <div className="mt-4 lg:pl-5 pl-0">
                    <div className="flex justify-center items-center flex-cols-4 gap-3">
                      <img
                        src={BCA}
                        alt="BCA"
                        className="h-14 w-14 object-cover"
                      />
                      <img
                        src={Mandiri}
                        alt="Mandiri"
                        className="h-14 w-14 object-cover"
                      />
                      <img
                        src={BRI}
                        alt="BRI"
                        className="h-14 w-14 object-cover"
                      />
                      <img
                        src={BNI}
                        alt="BNI"
                        className="h-14 w-14 object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <img
                        src={PermataBank}
                        alt="permataBank"
                        className="h-12 w-12"
                      />
                      <img
                        src={ShopeePay}
                        alt="ShopeePay"
                        className="h-12 w-12"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </MobileView>
      </div>
    </>
  );
}
export default ViewBag;
