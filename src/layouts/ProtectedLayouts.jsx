import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { openDialogLogin } from "../slice/menuSlice";
import Sidebar from "../components/Sidebar";
import { Breadcrumbs, IconButton, Typography } from "@material-tailwind/react";
import { isMobile } from "react-device-detect";
import SidebarResponsive from "../pages/responsive/SiderbarResponsive";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function BrowserLayout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-7 lg:px-14 lg:pb-44 pb-16 cursor-default select-none">
        <div className="flex items-center gap-8">
          <a href="/" className="">
            <ArrowLeftIcon className="h-6 w-6 text-white" />
          </a>
          <Breadcrumbs className=" bg-transparent">
            <a href="/" className="text-[#FF0386]">
              <Typography>Home</Typography>
            </a>
            <a href="#" className="text-[#FF0386]">
              <Typography>Profile</Typography>
            </a>
          </Breadcrumbs>
        </div>
        <Typography className="text-white text-2xl mt-5 font-semibold">
          Profile
        </Typography>
        <div className="flex lg:flex-col-2 flex-col-1 lg:gap-10 w-full mt-7">
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
