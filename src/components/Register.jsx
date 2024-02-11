import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDialogRegister,
  openDialogLogin,
  openDialogRegister,
} from "../slice/menuSlice";
import { useEffect } from "react";

function Register() {
  const { dialogRegister } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  function handlePasswordType(e) {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  function handleConfirmPasswordType(e) {
    e.preventDefault();
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else {
      setConfirmPasswordType("password");
    }
  }

  function handleOpenDialogRegister() {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = "auto";
    }
  }

  useEffect(() => {
    if (dialogRegister) {
      handleOpenDialogRegister();
    }
  }, [dialogRegister]);

  return (
    <>
      <Dialog
        size="md"
        open={dialogRegister}
        handler={() => dispatch(closeDialogRegister())}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[26rem]">
          <CardBody className="flex flex-col relative">
            <Typography variant="h6" color="blue-gray" className="text-lg">
              Register
              <div className="float-right">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-500 text-black transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(closeDialogRegister());
                  }}
                >
                  <XMarkIcon className="w-6 h-6" />
                </a>
              </div>
            </Typography>
            <Typography>
              <div className="mb-2 mt-2 text-sm text-[black]">
                Your Name*
                <div className="flex items-center justify-center">
                  <input
                    type="text"
                    className="w-[400px] h-[40px] text-xs outline-none border-none bg-transparent"
                    placeholder="Enter Your Name..."
                  />
                </div>
                <div className="flex justify-end">
                  <div className="w-[100%] border-b-[1px] border-[#000000] " />
                </div>
              </div>
            </Typography>
            <Typography>
              <div className="mb-2 text-sm text-black">
                Your Email*
                <div className="flex items-center justify-center">
                  <input
                    type="email"
                    className="w-[400px] h-[40px] text-xs outline-none border-none bg-transparent"
                    placeholder="Enter Your Email..."
                  />
                </div>
                <div className="flex justify-end">
                  <div className="w-[100%] border-b-[1px] border-[#000000] " />
                </div>
              </div>
            </Typography>
            <Typography>
              <div className="mb-2 text-sm text-[black]">
                Phone*
                <div className="flex items-center justify-center">
                  <div className="w-[40px]">+62</div>
                  <input
                    type="number"
                    className="w-[380px] h-[40px] text-xs outline-none border-none bg-transparent"
                    placeholder="Enter Your Phone Number..."
                  />
                </div>
                <div className="flex justify-end">
                  <div className="w-[100%] border-b-[1px] border-[#000000] " />
                </div>
              </div>
            </Typography>
            <Typography>
              <div className="mb-2 text-sm text-[black]">
                Password*
                <div className="float-right">
                  <a
                    href="#"
                    onClick={(e) => handlePasswordType(e)}
                    className="flex items-center hover:text-blue-500 transition-colors"
                  >
                    {passwordType === "password" ? (
                      <EyeSlashIcon className=" mt-6 w-6 h-5" />
                    ) : (
                      <EyeIcon className="mt-6 w-6 h-5" />
                    )}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <input
                    type={passwordType}
                    className="w-[400px] h-[40px] text-xs outline-none border-none bg-transparent"
                    placeholder="Enter Your Password..."
                  />
                </div>
                <div className="flex justify-end">
                  <div className="w-[100%] border-b-[1px] border-[#000000] " />
                </div>
              </div>
            </Typography>
            <div className="mb-2 text-[black]">
              <Typography
                variant="small"
                className="font-['Helvetica'] mt-2 text-sm"
              >
                More than 8 character
              </Typography>
              <Typography variant="small" className="font-['Helvetica']">
                1 uppercase
              </Typography>
              <div className="float-right -mt-12">
                <Typography
                  variant="small"
                  className="font-['Helvetica'] mt-2 text-sm"
                >
                  1 number
                </Typography>
                <Typography variant="small" className="font-['Helvetica']">
                  1 lowercase
                </Typography>
              </div>
            </div>
            <Typography>
              <div className="mb-2 mt-5 text-sm text-[black]">
                Confirm Password*
                <div className="float-right">
                  <a
                    href="#"
                    onClick={(e) => handleConfirmPasswordType(e)}
                    className="flex items-center hover:text-blue-500 transition-colors"
                  >
                    {confirmPasswordType === "password" ? (
                      <EyeSlashIcon className=" mt-6 w-6 h-5" />
                    ) : (
                      <EyeIcon className="mt-6 w-6 h-5" />
                    )}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <input
                    type={confirmPasswordType}
                    className="w-[400px] h-[40px] text-xs outline-none border-none bg-transparent"
                    placeholder="Confirm Your Password..."
                  />
                </div>
                <div className="flex justify-end">
                  <div className="w-[100%] border-b-[1px] border-[#000000] " />
                </div>
              </div>
            </Typography>
            <Typography>
              <div className="mb-2 mt-5 text-sm text-[black]">
                Birth Date*
                <div className="flex items-center justify-center">
                  <input
                    type="date"
                    className="w-[400px] h-[40px] text-xs outline-none border-none bg-transparent"
                    placeholder="Enter Your Name..."
                  />
                </div>
                <div className="flex justify-end">
                  <div className="w-[100%] border-b-[1px] border-[#000000] " />
                </div>
              </div>
            </Typography>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal text-[10px] text-[black]"
                >
                  i agree receive information and commercial offers from
                  Heylocal and World White Enterprise
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
          </CardBody>
          <CardFooter className="pt-0 ">
            <Button
              onClick={() => alert("create user")}
              fullWidth
              className="bg-[#B0B0B0]"
            >
              Register
            </Button>
            <div className="mt-3 flex justify-between space-x-3 pl-[73px]">
              <Typography
                variant="small"
                className="text-sm text-[black]"
                color="blue-gray"
              >
                Alredy have an account?
              </Typography>
              <Typography
                as="a"
                href="#signup"
                variant="small"
                className="text-sm text-[black] pr-[90px] font-bold"
                color="blue-gray"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(openDialogLogin());
                  dispatch(closeDialogRegister());
                }}
              >
                Login
              </Typography>
            </div>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default Register;
