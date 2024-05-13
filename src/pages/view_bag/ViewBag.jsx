import {
  Button,
  Checkbox,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Logo from "../../assets/logo-auth.png";
import Summary from "./Summary";
import image from "../../assets/product-1.png";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { BrowserView, MobileView } from "react-device-detect";
import BCA from "../../assets/BCA.png";
import Mandiri from "../../assets/mandiri.png";
import BRI from "../../assets/bank-bri.png";
import BNI from "../../assets/bni.png";
import PermataBank from "../../assets/permata-bank.png";
import ShopeePay from "../../assets/shopee-pay.png";
import Empty from "./Empty";
import { useSelector } from "react-redux";
import { ProductViewBag } from "./TotalItems";
import EmptyViewBag from "./Empty";

function ViewBag() {
  const { qtyTotal } = useSelector((state) => state.cart);

  if (qtyTotal <= 0) {
    return (
      <>
        <EmptyViewBag />
      </>
    );
  }

  return (
    <>
      <div className="mt-5 select-none">
        <div className="mb-6 flex items-center lg:px-10 px-0 mt-3">
          <div>
            <img src={Logo} alt="logo" className=" object-cover w-[125px]" />
          </div>
          <Typography variant="h5" className="text-white">
            SHOPPING BAG
          </Typography>
        </div>
        <BrowserView>
          <div className="lg:px-14 px-7 lg:py-24 lg:-mt-20 -mt-7 py-14">
            <div className="flex flex-col lg:grid lg:grid-cols-2 -mt-3 gap-5 lg:space-x-32">
              <div className="-mt-10">
                <div>
                  <Typography className="text-xs text-white">
                    Total {qtyTotal} item(s)
                  </Typography>
                  <div className="border border-white mt-2" />
                </div>
                <div className="mt-1 flex justify-start space-x-2">
                  <Checkbox defaultChecked color="pink" />
                  <Typography className="lg:mt-[9.5px] mt-3 lg:text-base text-xs text-white ">
                    ALL ITEMS
                  </Typography>
                </div>
                <div className="">
                  <ProductViewBag />
                </div>
                <div className="border border-white mt-10" />
              </div>
              <div className="">
                <div>
                  <Summary />
                </div>
              </div>
            </div>
          </div>
        </BrowserView>

        <MobileView className="py-20 -mt-28">
          <div className="px-7 mt-7 ">
            <div>
              {/* <TotalItems /> */}
              <div
                className="w-full flex justify-end -mt-[127px]"
                onClick={() => setIsDelete(true)}
              >
                <XMarkIcon className="h-5 w-5 cursor-pointer text-white" />
              </div>
              <div className="mt-32">
                <div className="flex justify-between">
                  <Typography className="text-white">Shipping Fee</Typography>
                  <Typography className="text-[#989898]">
                    Calculated after checkout
                  </Typography>
                </div>
                <div className="border border-black/70 border-x-2 mt-3 " />
                <div className="flex justify-between mt-3">
                  <Typography>TOTAL</Typography>
                  <Typography className="text-[#989898]">Rp 185.000</Typography>
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
          </div>
        </MobileView>
      </div>
    </>
  );
}
export default ViewBag;
