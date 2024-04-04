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
import {
  HeartIcon,
  UserIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline/index.js";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  openDialogLogin,
  openDialogSearch,
  openDrawerMenFashionStore,
  openDrawerShoppingCart,
} from "../slice/menuSlice";
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
                height="60"
                width="60"
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
            <ChevronLeftIcon className="h-7 w-7" />
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
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 select-none">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link to={"/"} className="flex items-center transition-colors">
            HOME
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
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
            color="blue-gray"
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
      <div className="flex items-center gap-4 select-none">
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
          <HeartIcon className="h-6 w-6" />
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
            <ShoppingBagIcon className="h-6 w-6" />
          </Button>
        </Badge>

        {!isLoggedIn ? (
          <IconButton
            variant="text"
            className="h-6 w-6 rounded-full hover:bg-transparent active:bg-transparent"
            ripple={false}
            onClick={() => dispatch(openDialogLogin())}
          >
            <UserIcon className="h-6 w-6" />
          </IconButton>
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
        className="max-w-full px-3 py-1 fixed top-0 z-[999] h-auto lg:h-[62px] rounded-none select-none"
        blurred={false}
        shadow={false}
      >
        <div className="flex items-center justify-between text-blue-gray-900 h-full">
          <div className="flex items-center">
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
          </div>
          <div className="hidden lg:block">
            <HeaderMenu />
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
