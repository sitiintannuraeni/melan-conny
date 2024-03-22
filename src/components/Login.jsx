import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDialogLogin,
  openDialogAsGuest,
  openDialogRegister,
} from "../slice/menuSlice";
import { useAuthMutation } from "../services/apiAuth";
import { useEffect } from "react";

function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const { dialogLogin } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const [login, { isLoading, isError, isSuccess, error }] = useAuthMutation();

  if (isError) {
    console.log("is Error Login", error);
  }

  useEffect(() => {
    const body = document.querySelector("body");
    if (body && dialogLogin) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
    if (isSuccess) {
      setInputEmail("");
      setInputPassword("");
    }
  }, [dialogLogin, isSuccess]);

  function handlePasswordType(e) {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  function handleClickLogin() {
    login({
      email: inputEmail,
      password: inputPassword,
    });
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
            <div className="flex justify-between items-center">
              <Typography variant="h4" color="blue-gray">
                Login
              </Typography>
              <a
                href="#"
                className="flex items-center -mt-3 hover:text-blue-500 text-black transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(closeDialogLogin());
                }}
              >
                <XMarkIcon className="w-6 h-6" />
              </a>
            </div>
            <div className="flex items-center justify-center mt-2">
              <Input
                variant="static"
                label="Email*"
                type="email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="Enter Your Email..."
              />
            </div>
            <div className="mt-3">
              <div className="flex w-full">
                <Input
                  variant="static"
                  label="Password*"
                  placeholder="Enter Your Password..."
                  className="text-[#] text-[17px]"
                  type={passwordType}
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  icon={
                    passwordType === "password" ? (
                      <EyeSlashIcon
                        className="h-5 cursor-pointer text-black"
                        onClick={(e) => handlePasswordType(e)}
                      />
                    ) : (
                      <EyeIcon
                        className="h-5 cursor-pointer text-black"
                        onClick={(e) => handlePasswordType(e)}
                      />
                    )
                  }
                />
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="button"
              disabled={isLoading}
              loading={isLoading}
              onClick={() => handleClickLogin()}
              fullWidth
            >
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
                dispatch(closeDialogLogin());
                dispatch(openDialogRegister());
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
