import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import DrawerShoppingCart from "./components/DrawerShoppingCard";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  const [openDialogLogin, setOpenDialogLogin] = useState(false);
  const [openDialogRegister, setOpenDialogRegister] = useState(false);
  const [openDrawerShoppingCart, setOpenDrawerShoppingCart] = useState(false);

  function handleOpenDialogRegister(e) {
    e.preventDefault();
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = "hidden";
    }

    setOpenDialogRegister((cur) => !cur);
    setOpenDialogLogin(false);
  }

  function handleOpenLogin(e) {
    e.preventDefault();

    setOpenDialogRegister(false);
    setOpenDialogLogin(true);
  }

  function handleOpen() {
    setOpenDialogLogin(false);
  }

  return (
    <>
      <ScrollToTop />
      <div className="container max-w-full">
        <Header
          openLoginDialog={setOpenDialogLogin}
          openDrawerShoppingCart={setOpenDrawerShoppingCart}
        />
        <main className="pt-[62px]">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Dialog
        size="md"
        open={openDialogLogin}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[28rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Login
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="input your email"
              type="email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input
              size="lg"
              placeholder="input your password"
              type="password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="">
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Forgot your Password
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleOpen} fullWidth>
              Login
            </Button>
            <div className="py-4">
              <Typography className="text-center">OR</Typography>
            </div>
            <Button variant="outlined" fullWidth>
              CONTINUE AS GUEST
            </Button>

            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
            </Typography>
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="font-bold text-center mt-3"
              onClick={(e) => handleOpenDialogRegister(e)}
            >
              Register Now
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>

      <Dialog
        size="md"
        open={openDialogRegister}
        handler={handleOpenDialogRegister}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[26rem]">
          <CardBody className="flex flex-col relative">
            <Typography variant="h6" color="blue-gray" className="text-lg">
              Register
            </Typography>
            <div className="mb-2">
              <Typography
                className="mt-2 text-sm text-[#000000] mb-2"
                variant="h6"
              >
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="input your name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-2">
              <Typography
                className="mt-2 text-sm text-[#000000] mb-2"
                variant="h6"
              >
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="input your email"
                type="email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-2">
              <Typography
                className="mt-2 text-sm text-[#000000] mb-2"
                variant="h6"
              >
                Phone
              </Typography>
              <Input
                size="lg"
                placeholder="input your phone"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-2">
              <Typography
                className="mt-2 text-sm text-[#000000] mb-2"
                variant="h6"
              >
                Your Password
              </Typography>
              <Input
                size="lg"
                placeholder="input your password"
                type="password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-2">
              <Typography
                variant="small"
                className="font-['Helvetica'] font-bold mt-2 text-sm"
              >
                More than 8 character
              </Typography>
              <Typography variant="small" className="font-['Helvetica']">
                1 uppercase
              </Typography>
            </div>
            <div className="mb-2">
              <Typography
                className="mt-2 text-sm text-[#000000] mb-2"
                variant="h6"
              >
                Confirm Password
              </Typography>
              <Input
                size="lg"
                placeholder="confirm password"
                type="password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <IconButton
              variant="text"
              className="absolute z-20 top-[500px] left-[350px]"
            >
              <EyeSlashIcon className="w-6 h6" color="black" />
            </IconButton>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal text-xs"
                >
                  i agree receive information and commercial offers from
                  Heylocal and World White Enterprise
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleOpen} fullWidth>
              Register
            </Button>
            <div>
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="text-center mt-3"
                onClick={handleOpen}
              >
                Alredy have an account? Login
              </Typography>
            </div>
          </CardFooter>
        </Card>
      </Dialog>
      <DrawerShoppingCart
        openDrawerShoppingCart={openDrawerShoppingCart}
        closeDrawerShoppingCart={setOpenDrawerShoppingCart}
      />
    </>
  );
}
export default App;
