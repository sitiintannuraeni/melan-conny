import { Button, Typography } from "@material-tailwind/react";
import BCA from "../../assets/BCA.png";
import Mandiri from "../../assets/mandiri.png";
import BRI from "../../assets/bank-bri.png";
import BNI from "../../assets/bni.png";
import PermataBank from "../../assets/permata-bank.png";
import ShopeePay from "../../assets/shopee-pay.png";
import Checkout from "../../assets/checkout.png";

function ShoppingBag() {
  return (
    <>
      <div className="lg:pl-[90px] pl-none mt-4">
        <div className="flex justify-between">
          <Typography className="text-lg font-normal">Shopping Bag</Typography>
          <Typography className="text-sm underline">Edit</Typography>
        </div>
        <Typography className="text-xs mt-2">Total 1 item(s)</Typography>
        <div className="border border-b-[1px] mt-1 border-black/35" />
        <div className="grid grid-cols-2 h-[130px] lg:space-x-[-120px] space-x-[-96px] mt-8">
          <div>
            <img
              src={Checkout}
              alt="checkout"
              className="h-[130px] object-cover rounded-md"
            />
          </div>
          <div className="mt-3">
            <Typography className="text-base">
              Elgant Basic Shirt Black
            </Typography>
            <div className="flex justify-between">
              <Typography className="text-xs">10,486'items sold</Typography>
              <Typography className="text-xs">Rp 185.000</Typography>
            </div>
          </div>
        </div>
        <div className="border border-b-[1px] mt-4 border-black/35" />
        <div className="flex justify-between mt-4">
          <Button
            className="w-[310px] flex justify-start text-[#989898]"
            variant="outlined"
          >
            Input discount code here
          </Button>
          <Button
            variant="outlined"
            className="w-[50px] flex justify-center text-[#5E5C5C]"
          >
            ADD
          </Button>
        </div>
        <div className="mt-3">
          <div className="flex justify-between">
            <Typography className="text-base">Order Values</Typography>
            <Typography className="text-[#5E5C5C] text-sm">
              Rp 185.000
            </Typography>
          </div>
          <div className="flex justify-between mt-1">
            <Typography className="text-base">Delivery Fee</Typography>
            <Typography className="text-[#5E5C5C] text-sm">Rp 0</Typography>
          </div>
          <div className="flex justify-between mt-1">
            <Typography className="text-base">TOTAL</Typography>
            <Typography className="text-[#5E5C5C] text-sm">
              Rp 185.000
            </Typography>
          </div>
        </div>
        <div className="flex justify-center items-center mt-7">
          <Button className="bg-[#000000] w-full">PAY NOW</Button>
        </div>
        <div className="flex justify-center items-center flex-cols-4 gap-3">
          <img src={BCA} alt="BCA" className="h-14 w-14 object-cover" />
          <img src={Mandiri} alt="Mandiri" className="h-14 w-14 object-cover" />
          <img src={BRI} alt="BRI" className="h-14 w-14 object-cover" />
          <img src={BNI} alt="BNI" className="h-14 w-14 object-cover" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <img src={PermataBank} alt="permataBank" className="h-12 w-12" />
          <img src={ShopeePay} alt="ShopeePay" className="h-12 w-12" />
        </div>
      </div>
    </>
  );
}
export default ShoppingBag;
