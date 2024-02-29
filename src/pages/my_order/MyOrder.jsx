import Sidebar from "../../components/Sidebar";
import Logo from "../../assets/logo1.png";
import Image1 from "../../assets/wishlist1.png";
import Image2 from "../../assets/wishlist2.png";
import Image3 from "../../assets/wishlist3.png";
import Image4 from "../../assets/wishlist4.png";
import { Typography } from "@material-tailwind/react";

function MyOrder() {
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
          <div className="w-full">
            <div className="fond-semibold">
              <Typography className="font-semibold">My Order</Typography>
            </div>
            <div className="flex flex-col-4 gap-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrder;
