import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import Product from "../../assets/product-13.png";
import Product2 from "../../assets/product-14.png";
import NumberFormatCurrency from "../../utils";

function TruckingOrder() {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <>
      <div className="p-7 pb-24 ">
        <Typography className="text-white text-xl mt-5 px-12">
          Trucking Order
        </Typography>
        <div className="px-64">
          <div className="w-96 mx-auto bg-black rounded-full relative border-[1.5px] mt-10 flex items-center">
            <input
              type="text"
              className="h-full w-80 text-sm outline-none rounded-full py-4 pl-5 pr-10 focus:right-0 text-white placeholder:text-gray-400 bg-black"
              placeholder="Masukan Nomor Invoice"
            />
            <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-black transition-colors rounded-full select-none">
              <Typography className="text white bg-[#FF0386] hover:bg-[#ff00849e] w-16 h-7 rounded-full cursor-pointer flex justify-center items-center text-white text-sm">
                Cari
              </Typography>
            </div>
          </div>
          <div className="bg-black w-full mt-7 text-white p-7 rounded-2xl">
            <div className="flex justify-between">
              <div className="flex flex-col-2 gap-6 items-center">
                <Typography className="text-white">23 April 2024</Typography>
                <div className="bg-white rounded-full h-8 w-32 flex justify-center items-center">
                  <Typography className=" text-black font-semibold text-sm">
                    Diproses
                  </Typography>
                </div>
              </div>
              <Typography className="text-white">12345678998765</Typography>
            </div>
            <div className="grid grid-cols-2 w-full mt-5 px-5">
              <div className="text-white w-[320px]">
                <div className="flex flex-col-2 items-center gap-12">
                  <div className="text-white bg-blue-2000">
                    <img
                      src={Product}
                      alt="product"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="text-white">
                    <Typography className="text-white text-xs">
                      Lanyad - Melanconny Edition
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-white flex items-center w-[230px]">
                  <div className="grid grid-cols-2 gap-14">
                    <div className="">
                      <Typography className="text-xs">4</Typography>
                    </div>
                    <div className="">
                      <Typography className="text-xs">
                        <NumberFormatCurrency value="12000000" />
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full mt-5 px-5">
              <div className="text-white w-[320px]">
                <div className="flex flex-col-2 items-center gap-12">
                  <div className="text-white bg-blue-2000">
                    <img
                      src={Product}
                      alt="product"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="text-white">
                    <Typography className="text-white text-xs">
                      Lanyad - Melanconny Edition
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-white flex items-center w-[230px]">
                  <div className="grid grid-cols-2 gap-14">
                    <div className="">
                      <Typography className="text-xs">4</Typography>
                    </div>
                    <div className="">
                      <Typography className="text-xs">
                        <NumberFormatCurrency value="12000000" />
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[80px]">
              <div className="flex justify-between">
                <div>
                  <Typography className="text-xs text-gray-400">
                    Payment Method
                  </Typography>
                </div>
                <Typography className="text-xs text-gray-400">
                  Total Pembayaran
                </Typography>
              </div>
              <div className="flex justify-between">
                <div>
                  <Typography className="text-white text-base">
                    BCA Virtual Account
                  </Typography>
                </div>
                <Typography className="text-white text-base">
                  Rp. 432.000,00
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TruckingOrder;
