import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
  Badge,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon,
  UserIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline/index.js";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  openDialogLogin,
  openDialogSearch,
  openDrawerMenFashionStore,
  openDrawerShooping,
  openDrawerShoppingCart,
} from "../slice/menuSlice";

function HeaderLogo() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-start space-x-8">
        <IconButton
          variant="text"
          className="h-6 w-6 rounded-full hover:bg-transparent active:bg-transparent mt-[15px]"
          ripple={false}
          onClick={() => dispatch(openDrawerMenFashionStore())}
        >
          <Bars3Icon className="h-6 w-7" />
        </IconButton>
        <Link to={"/"}>
          <img src={logo} alt="logo" height="60" width="60" />
        </Link>
      </div>
    </>
  );
}
function HeaderMenu() {
  const dispatch = useDispatch();

  return (
    <>
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link
            to={"/"}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Home
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
          >
            Collaborations
          </a>
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
          >
            Tracking Order
          </a>
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
            onClick={(e) => {
              e.preventDefault();
              dispatch(openDialogSearch());
            }}
          >
            <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
            Search
          </a>
        </Typography>
      </ul>
    </>
  );
}

function HeaderProfileMenu() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center gap-4">
        <IconButton
          variant="text"
          className="h-6 w-6 rounded-full hover:bg-transparent active:bg-transparent"
          ripple={false}
          onClick={() => dispatch(openDialogLogin())}
        >
          <UserIcon className="h-6 w-6" />
        </IconButton>
        <IconButton
          variant="text"
          className="h-6 w-6 rounded-full hover:bg-transparent active:bg-transparent"
          ripple={false}
        >
          <HeartIcon className="h-6 w-6" />
        </IconButton>

        <Badge
          content="3"
          className="bg-black text-white p-0 min-w-[20px] min-h-[20px]"
        >
          <Button
            size="sm"
            variant="text"
            ripple={false}
            className="px-0 py-0 flex gap-1 items-center rounded-full hover:bg-transparent active:bg-transparent"
            onClick={() => dispatch(openDrawerShooping())}
          >
            <ShoppingBagIcon className="h-6 w-6" />
          </Button>
        </Badge>
      </div>
    </>
  );
}

function Header({ openDrawerShoppingCart }) {
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
        className="max-w-full px-3 py-1 fixed top-0 z-[999] h-auto lg:h-[62px] rounded-none"
        blurred={false}
        shadow={false}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center">
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
          <HeaderProfileMenu openDrawerShoppingCart={openDrawerShoppingCart} />
        </div>
        <Collapse open={openNav}>
          <HeaderMenu />
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;