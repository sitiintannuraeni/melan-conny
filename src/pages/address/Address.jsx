import Sidebar from "../../components/Sidebar";
import Logo from "../../assets/logo1.png";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { openDialogAddress } from "../../slice/menuSlice";

function Address() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="mt-7 lg:px-24 lg:pb-44 pb-16 cursor-default">
        <div className="pb-10">
          <div className="flex justify-center items-center pb-3">
            <img
              src={Logo}
              alt="logo"
              className="h-[122px] w-[150px] object-cover"
            />
          </div>
          <div className="grid grid-rows-2 justify-center">
            <Typography className="text-center  ">
              MEN'S FASHION STORE Account
            </Typography>
            <Typography className="text-[#989898] text-center">
              You can manage your account and track your order here
            </Typography>
          </div>
          <div className=" border-b-[1px] border-black mt-12 w-full" />
        </div>
        <div className="lg:flex lg:flex-col-2 grid grid-cols lg:gap-20 w-full">
          <div>
            <Sidebar />
          </div>
          <div className="w-full ">
            <div className="fond-semibold pb-14">
              <Typography className="font-semibold lg:pl-0 pl-3">
                Saved Address
              </Typography>
            </div>
            <div className="lg:pl-40 pl-20">
              <div className="rounded-none">
                <div className="text-[#989898] hover:text-black transition-colors pl-20 pb-4">
                  <a href="#" className="">
                    <MapPinIcon className="w-12 h-12 text-gray-30" />
                  </a>
                </div>
                <Typography className="pl-[13px] pb-2 text-[#989898]">
                  You have no saved address
                </Typography>
              </div>
              <Button
                variant="filled"
                className="w-56"
                onClick={() => {
                  dispatch(openDialogAddress());
                }}
              >
                Add New Address
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
