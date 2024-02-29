import { Button, Typography } from "@material-tailwind/react";
import BCA from "../../assets/BCA.png";
import Mandiri from "../../assets/mandiri.png";
import BRI from "../../assets/bank-bri.png";
import BNI from "../../assets/bni.png";
import PermataBank from "../../assets/permata-bank.png";
import ShopeePay from "../../assets/shopee-pay.png";

function Summary() {
  return (
    <>
      <Typography className="text-xs text-[#989898]">Summary</Typography>
      <div className="border border-black/10 mt-2" />
      <div className="flex justify-between mt-3 ">
        <Typography className="text-base">Order Value</Typography>
        <Typography className="text-[#5E5C5C]">Rp. 185.000</Typography>
      </div>
      <div className="flex justify-between mt-[23px]">
        <Typography className="">Shipping Fee</Typography>
        <Typography className="text-[#989898]">
          Calculated after checkout
        </Typography>
      </div>
      <div className="border border-black/10 mt-4" />
      <div className="flex justify-between mt-3">
        <Typography>TOTAL</Typography>
        <Typography className="text-[#5E5C5C]">Rp. 185.000</Typography>
      </div>

      <div className="flex justify-center mt-12">
        <Button className=" w-96">PROCEED TO CHECKOUT</Button>
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
    </>
  );
}
export default Summary;
