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
  closeDialogLogin,
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

  useEffect(() => {
    const body = document.querySelector("body");
    if (body && dialogRegister) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [dialogRegister]);

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

  return (
    <>
      <Dialog
        size="xs"
        open={dialogRegister}
        handler={() => dispatch(closeDialogRegister())}
        className="h-[90%]"
      >
        <div className="absolute top-0 left-0 w-full h-full rounded-lg p-[2px]">
          <div className="w-full h-full relative top-0 left-0 overflow-y-auto">
            <div className="flex justify-between items-center sticky top-0 p-4 bg-white z-[1]">
              <Typography variant="h6" color="blue-gray" className="text-lg">
                Register
              </Typography>
              <a
                href="#"
                className="-mt-3 flex items-center hover:text-blue-500 text-black transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(closeDialogRegister());
                }}
              >
                <XMarkIcon className="w-6 h-6" />
              </a>
            </div>
            <Card className="w-full h-full" shadow={false}>
              <CardBody className="flex flex-col relative px-4 pt-0 pb-6">
                <div>
                  <div className="mb-2 text-sm text-[black]">
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
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
                <div>
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
                </div>
                <div>
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
                </div>
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
                <div className="mt-3 flex justify-center gap-3 items-center w-full">
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
                    className="text-sm text-[black] font-bold"
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
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Register;
