import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
  Badge,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  UserCircleIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline/index.js";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  openDialogLogin,
  openDialogRegister,
  openDialogSearch,
  openDrawerShoppingCart,
} from "../slice/menuSlice";
import { logout } from "../slice/apiSlice";
import { toast } from "react-toastify";
import BagIcon from "../assets/bag.png";
import LoveIcon from "../assets/love.png";
function HeaderLogo() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname.split("/")[1];
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-start items-center h-full px-3 select-none">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="object-contain h-[125px] w-[125px]"
          />
        </Link>
        {/* {pathName === "" ? (
          <>
            <IconButton
              variant="text"
              className="h-6 w-6 rounded-full hover:bg-transparent active:bg-transparent"
              ripple={false}
              onClick={() => dispatch(openDrawerMenFashionStore())}
            >
              <Bars3Icon className="h-6 w-7" />
            </IconButton>
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo"
                className="object-contain h-[90px] w-[90px]"
              />
            </Link>
          </>
        ) : (
          <IconButton
            variant="text"
            className="h-6 w-6 hover:bg-transparent active:bg-transparent"
            ripple={false}
            onClick={() => navigate("/")}
          >
            <ChevronLeftIcon className="h-7 w-7 text-white" />
          </IconButton>
        )} */}
      </div>
    </>
  );
}
function HeaderMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState("");

  return (
    <>
      <ul className="my-2 pl-10 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-24 select-none">
        <Typography variant="small" color="white" className="p-1 font-medium">
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors text"
            onClick={(e) => e.preventDefault(navigate("/trucking-order"))}
            selected={activeBtn === "btn"}
          >
            <Typography
              variant="small"
              color="white"
              className="p-1 font-medium btn"
            >
              <a
                href="#"
                className="flex items-center hover:text-blue-500 transition-colors text-base"
              >
                Tracking Order
              </a>
            </Typography>
          </a>
        </Typography>
        <div onClick={() => navigate("/store")}>
          <Typography
            variant="small"
            color="white"
            className="p-1 font-medium btn"
            selected={activeBtn === "btn"}
          >
            <a
              href="#"
              className="flex items-center hover:text-blue-500 transition-colors text-base"
            >
              Categories
            </a>
          </Typography>
        </div>
        <Typography
          variant="small"
          color="white"
          className="p-1 font-medium btn text-base"
          selected={activeBtn === "btn"}
        >
          <a
            href="#"
            className="flex items-center transition-colors hover:text-blue-500"
            onClick={(e) => {
              e.preventDefault();
              dispatch(openDialogSearch());
            }}
          >
            <MagnifyingGlassIcon className="w-4 h-4 mr-2 text-white" />
            Search
          </a>
        </Typography>
      </ul>
    </>
  );
}

function HeaderProfileMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, user: data } = useSelector((state) => state.auth);
  const { qtyTotal } = useSelector((state) => state.cart);

  const handleDialogLogout = () => {
    dispatch(logout());
    toast.success("Logout Success!");
  };

  return (
    <>
      <div className="flex items-center gap-10 select-none">
        {!isLoggedIn ? (
          <div className="flex flex-col-2 justify-center items-center gap-6 cursor-pointer">
            <div onClick={() => dispatch(openDialogRegister())}>
              <Typography className="text-base text-white">SIGN UP</Typography>
            </div>
            <div
              className="bg-[#F62C85] w-[95px] h-[35px] rounded-full flex items-center justify-center"
              onClick={() => dispatch(openDialogLogin())}
            >
              <Typography className="text-white">SIGN IN</Typography>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-10">
            <IconButton
              variant="text"
              className="h-6 w-6 lg:hidden rounded-full hover:bg-transparent active:bg-transparent"
              ripple={false}
              onClick={() => {
                dispatch(openDialogSearch());
              }}
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-white" />
            </IconButton>
            <Badge
              content={isLoggedIn ? qtyTotal : 0}
              className={`bg-[#F62C85] text-white p-0 min-w-[20px] min-h-[20px] ${qtyTotal <= 0 || !isLoggedIn ? "hidden" : ""}`}
            >
              <Button
                size="sm"
                variant="text"
                ripple={false}
                className="px-0 py-0 flex gap-1 items-center rounded-full hover:bg-transparent active:bg-transparent text-white"
                onClick={() => dispatch(openDrawerShoppingCart())}
              >
                <img
                  src={BagIcon}
                  alt="logo"
                  className="h-7 w-7 object-contain"
                />
              </Button>
            </Badge>
            <Button
              size="sm"
              variant="text"
              ripple={false}
              className="px-0 py-0 flex gap-1 items-center rounded-full hover:bg-transparent active:bg-transparent text-white"
              onClick={() => navigate("/wishlist")}
            >
              <img
                src={LoveIcon}
                alt="logo"
                className="h-7 w-7 object-contain"
              />
            </Button>
            <Menu className="p-0 m-2">
              <MenuHandler>
                {/* <div className="rounded-full h-6 w-6 flex items-center justify-center bg-gray-900 cursor-pointer">
                  <Typography
                    variant="small"
                    className="text-white text-[10px] font-semibold"
                  >
                    {data.name.split(" ")[0].slice(0, 1)}
                    {data.name.split(" ")[1] !== undefined
                      ? data.name.split(" ")[1].slice(0, 1)
                      : ""}
                  </Typography>
                </div> */}
                <UserIcon className="h-6 w-6 text-white cursor-pointer" />
              </MenuHandler>
              <MenuList className="bg-[#000000] border-none">
                <MenuItem
                  className="flex items-center gap-2"
                  onClick={() => navigate("/account-info")}
                >
                  <UserCircleIcon className="h-5 w-5 text-white" />
                  <Typography
                    variant="small"
                    className="font-medium text-white"
                  >
                    {data.name.split(" ")[0]}
                  </Typography>
                </MenuItem>
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem
                  className="flex items-center gap-2"
                  onClick={handleDialogLogout}
                >
                  <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-white" />
                  <Typography
                    variant="small"
                    className="font-medium text-white"
                  >
                    Logout
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        )}
      </div>
    </>
  );
}

function Header() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <Navbar
        className="max-w-full px-3 py-1 fixed top-0 z-[999] h-auto lg:h-[62px] rounded-none select-none bg-black"
        blurred={false}
        shadow={false}
      >
        <div className="flex items-center justify-between text-blue-gray-900 h-full">
          <div className="flex items-center gap-4">
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 hidden text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
            <HeaderLogo />
            <div className="hidden lg:block">
              <HeaderMenu />
            </div>
          </div>
          <HeaderProfileMenu />
        </div>
        <Collapse open={openNav}>
          <HeaderMenu />
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;
