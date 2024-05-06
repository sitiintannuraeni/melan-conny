import { Button, Typography } from "@material-tailwind/react";
import BCA from "../../assets/BCA.png";
import Mandiri from "../../assets/mandiri.png";
import BRI from "../../assets/bank-bri.png";
import BNI from "../../assets/bni.png";
import PermataBank from "../../assets/permata_bank.png";
import ShopeePay from "../../assets/shopee-pay.png";
import { useNavigate } from "react-router-dom";
import cartSlice from "../../slice/cartSlice";
import { useSelector } from "react-redux";
import NumberFormatCurrency from "../../utils";

function Summary() {
  const { priceTotal } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <>
      <div className="-mt-10">
        <Typography className="text-xs text-white">Summary</Typography>
        <div className="border border-white mt-2" />
        <div className="flex justify-between mt-3 ">
          <Typography className="text-base text-white">Order Value</Typography>
          <Typography className="text-white">
            <NumberFormatCurrency value={priceTotal} />
          </Typography>
        </div>
        <div className="flex justify-between mt-[23px]">
          <Typography className="text-white">Shipping Fee</Typography>
          <Typography className="text-white">
            Calculated after checkout
          </Typography>
        </div>
        <div className="border border-white mt-4" />
        <div className="flex justify-between mt-3">
          <Typography className="text-white">TOTAL</Typography>
          <Typography className="text-white">
            <NumberFormatCurrency value={priceTotal} />
          </Typography>
        </div>

        <div className="flex justify-center mt-12 lg:pl-5 ">
          <Button
            className="w-80 bg-[#F62C85]"
            onClick={() => navigate("/checkout")}
          >
            PROCEED TO CHECKOUT
          </Button>
        </div>
        <div className="mt-4 lg:pl-5 pl-0">
          <div className="flex justify-center items-center flex-cols-4 gap-3">
            <img src={BCA} alt="BCA" className="h-14 w-14 object-cover" />
            <img
              src={Mandiri}
              alt="Mandiri"
              className="h-14 w-14 object-cover"
            />
            <img src={BRI} alt="BRI" className="h-14 w-14 object-cover" />
            <img src={BNI} alt="BNI" className="h-14 w-14 object-cover" />
          </div>
          <div className="flex justify-center items-center gap-4">
            <img src={PermataBank} alt="permataBank" className="h-12 w-12" />
            <img src={ShopeePay} alt="ShopeePay" className="h-12 w-12" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Summary;
