import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { openDialogLogin } from "../slice/menuSlice";
import Sidebar from "../components/Sidebar";
import Logo from "../assets/logo1.png";
import { Typography } from "@material-tailwind/react";
import { isMobile } from "react-device-detect";
import SidebarResponsive from "../pages/responsive/SiderbarResponsive";

function BrowserLayout() {
  return (
    <>
      <div className="mt-7 lg:px-24 lg:pb-44 pb-16 cursor-default select-none">
        <div className="pb-10">
          <div className="flex justify-center items-center pb-3">
            <img
              src={Logo}
              alt="logo"
              className="h-[122px] w-[150px] object-cover"
            />
          </div>
          <div className="grid grid-rows-2 justify-center -mt-2">
            <Typography className="text-center  ">
              MEN'S FASHION STORE Account
            </Typography>
            <Typography className="text-[#989898] text-center -mt-[1px]">
              You can manage your account and track your order here
            </Typography>
          </div>
          <div className=" border-b-[1px] border-black mt-12 w-full" />
        </div>
        <div className="flex lg:flex-col-2 flex-col-1 lg:gap-20 w-full">
          <div>
            <Sidebar />
          </div>
          <div className="w-full px-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

function ProtectedLayouts() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!isLoggedIn) {
    dispatch(openDialogLogin());
    return <Navigate to={"/"} replace />;
  }

  if (isMobile) {
    return <SidebarResponsive />;
  } else {
    return <BrowserLayout />;
  }
}
export default ProtectedLayouts;
