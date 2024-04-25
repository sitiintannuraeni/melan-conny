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
  ChevronLeftIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline/index.js";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openDialogSearch, openDrawerShoppingCart } from "../slice/menuSlice";
import { logout } from "../slice/apiSlice";
import { toast } from "react-toastify";

function HeaderLogo() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname.split("/")[1];
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-start items-center h-full space-x-8 px-3 select-none">
        {pathName === "" ? (
          <>
            {/* <IconButton
              variant="text"
              className="h-6 w-6 rounded-full hover:bg-transparent active:bg-transparent"
              ripple={false}
              onClick={() => dispatch(openDrawerMenFashionStore())}
            >
              <Bars3Icon className="h-6 w-7" />
            </IconButton> */}
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo"
                height="103"
                width="103"
                className="object-cover"
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
        )}
      </div>
    </>
  );
}
function HeaderMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3 select-none">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <Link to={"/"} className="flex items-center transition-colors">
            HOME
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
            onClick={(e) => e.preventDefault(navigate("/store"))}
          >
            STORE
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
            onClick={(e) => e.preventDefault(navigate("/accessories"))}
          >
            ACCESSORIES
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
            onClick={(e) => e.preventDefault(navigate("/trucking-order"))}
          >
            TRACKING ORDER
          </a>
        </Typography>
        <div className="flex justify-between">
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-medium"
          >
            <a
              href="#"
              className="flex items-center transition-colors hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                dispatch(openDialogSearch());
              }}
            >
              <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
              SEARCH
              <div className="border-b-[0px] border-[#000] border w-[120px] mt-5 ml-4" />
            </a>
          </Typography>
        </div>
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
      <div className="flex items-center gap-8 select-none">
        <IconButton
          variant="text"
          className="h-6 w-6 lg:hidden rounded-full hover:bg-transparent active:bg-transparent"
          ripple={false}
          onClick={() => {
            dispatch(openDialogSearch());
          }}
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
        </IconButton>
        <IconButton
          variant="text"
          className="h-6 w-6 rounded-full hover:bg-transparent active:bg-transparent"
          ripple={false}
          onClick={() => navigate("/wishlist")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
        </IconButton>
        <Badge
          content={isLoggedIn ? qtyTotal : 0}
          className={`bg-black text-white p-0 min-w-[20px] min-h-[20px] ${qtyTotal <= 0 || !isLoggedIn ? "hidden" : ""}`}
        >
          <Button
            size="sm"
            variant="text"
            ripple={false}
            className="px-0 py-0 flex gap-1 items-center rounded-full hover:bg-transparent active:bg-transparent"
            onClick={() => dispatch(openDrawerShoppingCart())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Badge>

        {!isLoggedIn ? (
          <div className="flex flex-col-2 justify-center items-center gap-6 cursor-pointer">
            {/* <IconButton
              variant="text"
              className="h-6 w-6 rounded-full hover:bg-transparent active:bg-transparent"
              ripple={false}
              onClick={() => dispatch(openDialogLogin())}
            >
              <UserIcon className="h-6 w-6 text-white" />
            </IconButton>
            <UserCircleIcon className="h-6 w-6 text-white" /> */}
            <div onClick={() => navigate("/register")}>
              <Typography className="text-base text-white">SIGN UP</Typography>
            </div>
            <div className="bg-[#F62C85] w-[95px] h-[35px] rounded-full flex items-center justify-center">
              <Typography
                className="text-white"
                onClick={() => navigate("/login")}
              >
                SIGN IN
              </Typography>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Menu>
              <MenuHandler>
                <div className="rounded-full h-6 w-6 flex items-center justify-center bg-gray-900 cursor-pointer">
                  <Typography
                    variant="small"
                    className="text-white text-[10px] font-semibold"
                  >
                    {data.name.split(" ")[0].slice(0, 1)}
                    {data.name.split(" ")[1] !== undefined
                      ? data.name.split(" ")[1].slice(0, 1)
                      : ""}
                  </Typography>
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem
                  className="flex items-center gap-2"
                  onClick={() => navigate("/account-info")}
                >
                  <UserCircleIcon className="h-5 w-5" />
                  <Typography variant="small" className="font-medium">
                    {data.name.split(" ")[0]}
                  </Typography>
                </MenuItem>
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem
                  className="flex items-center gap-2"
                  onClick={handleDialogLogout}
                >
                  <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                  <Typography variant="small" className="font-medium">
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
