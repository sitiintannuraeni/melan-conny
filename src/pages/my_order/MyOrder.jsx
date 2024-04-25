import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/product-4.png";
import { useState } from "react";

function Order() {
  const navigate = useNavigate();
  return (
    <>
      <div className="fond-semibold">
        <Typography className="font-semibold">My Order</Typography>
      </div>
      <div className="border border-black/15 mt-7 px-4 rounded-md">
        <div className="mt-3">
          <div className="flex flex-col-3 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-[#989898]"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
            <Typography className="mt-[1px] text-black/85">
              15 Maret 2024
            </Typography>
            <div class="px-2 mt-[2px] text-xs rounded-md h-[25px] bg-[#EAEAEA]">
              <Typography className="text-[10px] mt-[4px] text-black/45">
                Menunggu Pembayaran
              </Typography>
            </div>
          </div>
          <Typography className="lg:mt-2 mt-5 lg:text-sm text-xs text-black/90">
            MAL24031513556483272075308950
          </Typography>
          <div className="flex justify-end">
            <div className="lg:-mt-6 -mt-[16.8px]">
              <Typography className="lg:text-base text-xs font-medium text-black/70 flex justify-end">
                Total Amount
              </Typography>
              <Typography className="flex justify-end lg:text-base text-xs">
                Rp 130.500
              </Typography>
              <div onClick={() => navigate("/member-order")}>
                <Typography className="flex justify-end mt-2 py-3 underline cursor-pointer lg:text-base text-sm">
                  View Details
                </Typography>
              </div>
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
        <div className="border border-black/15 mt-7 px-3 rounded-md">
          <div className="-mt-1 py-4">
            <div className="flex justify-between">
              <Typography className="text-black/40 text-sm">Status</Typography>
              <div class="px-2 mt-[2px] text-xs rounded-md h-[25px] bg-[#EAEAEA]">
                <Typography className="text-[12px] mt-[4px] text-black/45">
                  Menunggu Pembayaran
                </Typography>
              </div>
            </div>
            <div className="flex justify-between">
              <Typography className="text-black/40 text-sm mt-[1px]">
                Order ID
              </Typography>
              <Typography className="text-[13px] mt-[9px] text-black/60">
                MAL24031513556483272075308950
              </Typography>
            </div>
            <div className="flex justify-between mt-[4.8px]">
              <Typography className="text-black/40 text-sm -mt-[2px]">
                Order Date
              </Typography>
              <Typography className="text-[13px] mt-[4px]">
                2024-03-15 01:54:06
              </Typography>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <Typography className="text-black text-base">
            Order Details
          </Typography>
          <div className="flex justify-between mt-2">
            <Typography className="text-black/80 text-sm">Products</Typography>
            <Typography className="text-black/40 text-[14px]">
              1 Item
            </Typography>
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
            <Typography className="text-base">
              Versa Tees Regular Black
            </Typography>
            <Typography className="text-sm">L</Typography>
            <Typography className="text-sm">Qty 1 x Rp 119.000</Typography>
            <Typography className="text-sm mt-1 text-black/40">
              Total Amount
            </Typography>
            <Typography className="text-sm mt-1">Rp 119.00</Typography>
          </div>
        </div>
        <div className="border border-black/20 mt-7" />
        <Typography className="text-black text-base mt-4">
          Delivery Details
        </Typography>
        <div className="border border-black/15 px-3 rounded-md mt-4">
          <div className="-mt-3 py-5">
            <div className="mt-2">
              <Typography className="text-black/40 text-sm">
                Delivery Type
              </Typography>
              <Typography className="text-sm">REG</Typography>
              <div className="border border-x-black/15 mt-2" />
            </div>
            <div className="mt-2">
              <Typography className="text-black/40 text-sm">
                Resi Number
              </Typography>
              <Typography className="text-sm">-</Typography>
              <div className="border border-x-black/15 mt-2" />
            </div>
            <div className="mt-2">
              <Typography className="text-black/40 text-sm">Address</Typography>
              <Typography className="text-sm">Delisa</Typography>
              <Typography className="text-sm">
                Jalan Mangga Kecil No.13, RT 09 RW 03, Kelurahan Besi Tua,
                Kecamatan Sukaraja, Kab. Binjai, Sumatera Utara
              </Typography>
              <Typography className="text-sm">53421</Typography>
              <Typography className="text-sm">0475920345</Typography>
            </div>
          </div>
        </div>
        <Typography className="text-black text-base mt-4">
          Payment Details
        </Typography>
        <div className="border border-black/15 rounded-md px-3 mt-4">
          <div className="-mt-2 py-5">
            <div className="flex justify-between">
              <Typography className="text-black/40 text-sm">
                Paymend Method
              </Typography>
              <Typography className="text-sm">BCA Virtual Account</Typography>
            </div>
            <div className="border border-x-black/15 mt-3" />
            <div className="mt-3 flex justify-between">
              <Typography className="text-black/40 text-sm ">
                Total Price
              </Typography>
              <Typography className="text-sm">Rp 119.000</Typography>
            </div>
            <div className="border border-x-black/15 mt-3" />
            <div className="mt-2 flex justify-between">
              <Typography className="text-black/40 text-sm ">
                Delivery Fee
              </Typography>
              <Typography className="text-sm">Rp 11.500</Typography>
            </div>
            <div className="border border-x-black-15 mt-3" />
            <div className="mt-3 flex justify-between">
              <Typography className="text-black/40 text-sm ">Total</Typography>
              <Typography className="text-sm">Rp 130.500</Typography>
            </div>
            <div className="border border-x-black/15 mt-3" />
          </div>
        </div>
        <div
          className="flex justify-center mt-4"
          onClick={() => navigate("/member-order")}
        >
          <Typography className="text-sm underline cursor-pointer">
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
                <ArrowLeftIcon className="h-7 w-7" />
              </IconButton>
              <Typography className="text-xl text-black/90 font-medium">
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
