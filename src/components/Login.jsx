import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDialogLogin,
  openDialogAsGuest,
  openDialogRegister,
} from "../slice/menuSlice";

function Login() {
  const { dialogLogin } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  function handlePasswordType(e) {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  return (
    <>
      <Dialog
        size="xs"
        open={dialogLogin}
        handler={() => dispatch(closeDialogLogin())}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-sm">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Login
              <div className="float-right">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-500 text-black transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(closeDialogLogin());
                  }}
                >
                  <XMarkIcon className="w-6 h-6" />
                </a>
              </div>
            </Typography>
            <Typography className="-mb-1 size-sm text-[black]">
              Email*
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  className="w-[400px] h-[40px] text-sm outline-none border-none bg-transparent"
                  placeholder="Enter Your Email..."
                />
              </div>
              <div className="flex justify-end">
                <div className="w-[100%] border-b-[1px] border-[#000000] " />
              </div>
            </Typography>

            <Typography className="-mb-2 size-sm text-[black]">
              Password*
              <div className="float-right">
                <a
                  href="#"
                  onClick={(e) => handlePasswordType(e)}
                  className="flex items-center hover:text-blue-500 transition-colors"
                >
                  {passwordType === "password" ? (
                    <EyeSlashIcon className=" mt-8 mr-2 w-5 h-5" />
                  ) : (
                    <EyeIcon className="mt-8 mr-2 w-5 h-5" />
                  )}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <input
                  type={passwordType}
                  className="w-[400px] h-[40px] text-sm outline-none border-none bg-transparent"
                  placeholder="Enter Your Password..."
                />
              </div>
              <div className="flex justify-end">
                <div className="w-[100%] border-b-[1px] border-[#000000] " />
              </div>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => alert("send data login")} fullWidth>
              Login
            </Button>
            <div className="py-4 flex items-center justify-center">
              <div className="border-b-[1px] border-[#B0B0B0] flex-grow"></div>
              <Typography className="text-center mx-4 text-[black]">
                OR
              </Typography>
              <div className="border-b-[1px] border-[#B0B0B0] flex-grow"></div>
            </div>

            <Button
              variant="outlined"
              fullWidth
              className="text-sm"
              onClick={() => {
                dispatch(openDialogAsGuest());
                dispatch(closeDialogLogin());
              }}
            >
              CONTINUE AS GUEST
            </Button>

            <Typography
              variant="small"
              className="mt-4 flex justify-center text-[black]"
            >
              Doesn't have an account?
            </Typography>
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="font-bold text-center mt-3 text-[black] underline"
              onClick={(e) => {
                e.preventDefault();
                dispatch(openDialogRegister());
                dispatch(closeDialogLogin());
              }}
            >
              Register Now
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default Login;
