import {
  ArrowLeftIcon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Checkbox,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/product-4.png";
import { useState } from "react";
import NumberFormatCurrency from "../../utils";
function Order() {
  const navigate = useNavigate();
  return (
    <>
      <div className="fond-semibold">
        <Typography className="font-semibold text-white text-xl">
          My Order
        </Typography>
      </div>
      <div className="flex flex-col-5 mt-5 gap-4">
        <Button
          variant="outlined"
          className="rounded-full focus:bg-white focus:text-black focus:font-semibold"
          color="white"
          size="sm"
        >
          <Typography className=" text-xs">Semua</Typography>
        </Button>
        <Button
          variant="outlined"
          className="rounded-full focus:bg-white focus:text-black focus:font-semibold"
          color="white"
          size="sm"
        >
          <Typography className=" text-xs">Diproses</Typography>
        </Button>
        <Button
          variant="outlined"
          className="rounded-full focus:bg-white focus:text-black focus:font-semibold"
          color="white"
          size="sm"
        >
          <Typography className=" text-xs">Dikirim</Typography>
        </Button>
        <Button
          variant="outlined"
          className="rounded-full focus:bg-white focus:text-black focus:font-semibold"
          color="white"
          size="sm"
        >
          <Typography className=" text-xs">Berhasil</Typography>
        </Button>
        <Button
          variant="outlined"
          className="rounded-full focus:bg-white focus:text-black focus:font-semibold"
          color="white"
          size="sm"
        >
          <Typography className=" text-xs">Tidak berhasil</Typography>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-9">
        <div className="items-center p-3 border-2 border-white rounded-xl">
          <div className="flex flex-col-2 gap-5 items-center">
            <Typography className="text-gray-400 text-sm">
              30 April 2024
            </Typography>
            <Button className="rounded-full" color="white" size="sm">
              <Typography className=" text-[10px] font-bold">
                Diproses
              </Typography>
            </Button>
          </div>
          <div className="flex flex-col-2 gap-10  mt-6">
            <div>
              <Typography className="text-gray-400 text-sm">
                30 April 2024
              </Typography>
              <Typography className="text-white text-base">
                BCA Virtual Account
              </Typography>
            </div>
            <div>
              <Typography className="text-gray-400 text-sm">
                Total Pembayaran
              </Typography>
              <Typography className="text-white text-base">
                <NumberFormatCurrency value={"43200000"} />
              </Typography>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="border-2 p-1 rounded-3xl w-[130px] flex justify-center ">
              <Typography className="text-white text-sm ">
                Pembayaran
              </Typography>
            </div>
            <div className="bg-[#FF0386] p-1 rounded-3xl w-[130px] flex justify-center ">
              <Typography className="text-white text-sm ">
                Lihat Detail
              </Typography>
            </div>
          </div>
        </div>
        <div className="items-center p-3 border-2 border-white rounded-xl">
          <div className="flex flex-col-2 gap-5 items-center">
            <Typography className="text-gray-400 text-sm">
              23 April 2024{" "}
            </Typography>
            <Button className="rounded-full" color="white" size="sm">
              <Typography className=" text-[10px] font-bold">
                Berhasil{" "}
              </Typography>
            </Button>
          </div>
          <div className="flex flex-col-2 gap-10  mt-6">
            <div>
              <Typography className="text-gray-400 text-sm">
                Payment Method{" "}
              </Typography>
              <Typography className="text-white text-base">Gopay </Typography>
            </div>
            <div>
              <Typography className="text-gray-400 text-sm">
                Total Pembayaran
              </Typography>
              <Typography className="text-white text-base">
                <NumberFormatCurrency value={"43200000"} />
              </Typography>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="p-1 rounded-3xl w-full flex justify-center bg-[#FF0386]">
              <Typography className="text-white text-sm ">
                Lihat Detail
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Transaction() {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-7">
        <div className="border border-white mt-7 px-3 rounded-md">
          <div className="-mt-1 py-4">
            <div className="flex justify-between">
              <Typography className="text-white text-sm">Status</Typography>
              <div class="px-2 mt-[2px] text-xs rounded-md h-[25px] bg-[#F62C85]">
                <Typography className="text-[12px] mt-[4px] text-white">
                  Menunggu Pembayaran
                </Typography>
              </div>
            </div>
            <div className="flex justify-between">
              <Typography className="text-white text-sm mt-[1px]">
                Order ID
              </Typography>
              <Typography className="text-[13px] mt-[9px] text-white">
                MAL24031513556483272075308950
              </Typography>
            </div>
            <div className="flex justify-between mt-[4.8px]">
              <Typography className="text-white text-sm -mt-[2px]">
                Order Date
              </Typography>
              <Typography className="text-[13px] mt-[4px] text-white">
                2024-03-15 01:54:06
              </Typography>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <Typography className="text-white text-base">
            Order Details
          </Typography>
          <div className="flex justify-between mt-2">
            <Typography className="text-white text-sm">Products</Typography>
            <Typography className="text-white text-[14px]">1 Item</Typography>
          </div>
          <div className="border border-x-black/15 mt-2" />
        </div>
        <div className="flex flex-col-2 mt-6 gap-5">
          <img
            src={Image}
            alt="image"
            className=" object-cover h-[200px] w-[150px] border border-gray-100 
            rounded-md"
          />
          <div className="-mt-1">
            <Typography className="text-base text-white">
              Versa Tees Regular Black
            </Typography>
            <Typography className="text-sm text-white">L</Typography>
            <Typography className="text-sm text-white">
              Qty 1 x Rp 119.000
            </Typography>
            <Typography className="text-sm mt-1 text-white">
              Total Amount
            </Typography>
            <Typography className="text-sm text-white mt-1">
              Rp 119.00
            </Typography>
          </div>
        </div>
        <div className="border border-white mt-7" />
        <Typography className="text-white text-base mt-4">
          Delivery Details
        </Typography>
        <div className="border border-white px-3 rounded-md mt-4">
          <div className="-mt-3 py-5">
            <div className="mt-2">
              <Typography className="text-white text-sm">
                Delivery Type
              </Typography>
              <Typography className="text-sm text-white">REG</Typography>
              <div className="border border-x-black/15 mt-2" />
            </div>
            <div className="mt-2">
              <Typography className="text-white text-sm">
                Resi Number
              </Typography>
              <Typography className="text-sm text-white">-</Typography>
              <div className="border border-x-black/15 mt-2" />
            </div>
            <div className="mt-2">
              <Typography className="text-white text-sm">Address</Typography>
              <Typography className="text-sm text-white">Delisa</Typography>
              <Typography className="text-sm text-white">
                Jalan Mangga Kecil No.13, RT 09 RW 03, Kelurahan Besi Tua,
                Kecamatan Sukaraja, Kab. Binjai, Sumatera Utara
              </Typography>
              <Typography className="text-sm text-white">53421</Typography>
              <Typography className="text-sm text-white">0475920345</Typography>
            </div>
          </div>
        </div>
        <Typography className="text-white text-base mt-4">
          Payment Details
        </Typography>
        <div className="border border-white rounded-md px-3 mt-4">
          <div className="-mt-2 py-5">
            <div className="flex justify-between">
              <Typography className="text-white text-sm">
                Paymend Method
              </Typography>
              <Typography className="text-sm text-white">
                BCA Virtual Account
              </Typography>
            </div>
            <div className="border border-x-black/15 mt-3" />
            <div className="mt-3 flex justify-between">
              <Typography className="text-black/40 text-sm text-white ">
                Total Price
              </Typography>
              <Typography className="text-sm text-white">Rp 119.000</Typography>
            </div>
            <div className="border border-x-black/15 mt-3" />
            <div className="mt-2 flex justify-between">
              <Typography className="text-white text-sm ">
                Delivery Fee
              </Typography>
              <Typography className="text-sm text-white">Rp 11.500</Typography>
            </div>
            <div className="border border-x-black-15 mt-3" />
            <div className="mt-3 flex justify-between">
              <Typography className="text-black/40 text-sm text-white ">
                Total
              </Typography>
              <Typography className="text-sm text-white">Rp 130.500</Typography>
            </div>
            <div className="border border-x-black/15 mt-3" />
          </div>
        </div>
        <div
          className="flex justify-center mt-4"
          onClick={() => navigate("/member-order")}
        >
          <Typography className="text-sm underline cursor-pointer text-white">
            Back to Payment
          </Typography>
        </div>
      </div>
    </>
  );
}

function MyOrder() {
  const [isMyOrder, setMyOrder] = useState(false);
  return (
    <>
      <div className="lg:px-0 px-4">
        {isMyOrder ? (
          <Order />
        ) : (
          <div>
            <div className="flex items-center space-x-2 -mt-2">
              <IconButton variant="text" onClick={() => setMyOrder(true)}>
                <ArrowLeftIcon className="h-7 w-7 text-white" />
              </IconButton>
              <Typography className="text-xl text-white font-medium">
                Transaction details
              </Typography>
            </div>
            <Transaction />
          </div>
        )}
      </div>
    </>
  );
}

export default MyOrder;
