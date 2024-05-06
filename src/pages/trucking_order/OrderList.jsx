import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Typography } from "@material-tailwind/react";
import Logo from "../../assets/logoDrawer.png";
import { useNavigate } from "react-router-dom";

function OrderList() {
  const navigate = useNavigate();
  return (
    <>
      <div className="pb-10 lg:px-40 py-10">
        <div className="flex justify-center items-center pb-3">
          <img
            src={Logo}
            alt="logoDrawer"
            width={50}
            className="object-cover"
          />
        </div>
        <div className="flex justify-center">
          <Typography className="text-center text-white">
            WorldWhite Enterprice account
          </Typography>
        </div>
        <div className="border-b-[1px] border-white mt-5 w-full " />
      </div>
      <div className="flex justify-center py-10 -mt-16">
        <div className="flex flex-cols-1 w-[550px]">
          <div className="w-full">
            <div className="flex justify-between">
              <ArrowLeftIcon className="w-6 h-6 cursor-pointer text-white" />
              <div className="pr-[217px]">
                <Typography className="text-lg font-semibold text-white">
                  Order List
                </Typography>
              </div>
            </div>
            <div className="border border-white mt-4 px-4 rounded-md">
              <div className="mt-3">
                <div className="flex flex-col-3 space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Typography className="mt-[1px] text-white">
                    15 Maret 2024
                  </Typography>
                  <div class="px-2 mt-[2px] text-xs rounded-md h-[25px] bg-[#F62C85]">
                    <Typography className="text-[10px] mt-[4px] text-white">
                      Menunggu Pembayaran
                    </Typography>
                  </div>
                </div>
                <Typography className="lg:mt-2 mt-5 lg:text-sm text-xs text-white">
                  MAL24031513556483272075308950
                </Typography>
                <div className="flex justify-end">
                  <div className="lg:-mt-6 -mt-[16.8px]">
                    <Typography className="lg:text-base text-xs font-medium text-white flex justify-end">
                      Total Amount
                    </Typography>
                    <Typography className="flex justify-end lg:text-base text-xs text-white">
                      Rp 130.500
                    </Typography>
                    <div onClick={() => navigate("/member-order")}>
                      <Typography className="flex justify-end mt-2 py-3 underline cursor-pointer lg:text-base text-sm text-white">
                        View Details
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderList;
