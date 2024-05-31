import {
  EyeIcon,
  EyeSlashIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Alert,
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
  openDialogForgotPassword,
  openDialogRegister,
} from "../slice/menuSlice";
import { useAuthMutation } from "../services/apiAuth";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function FormLogin() {
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const [login, { isLoading, isError, isSuccess, error }] = useAuthMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function handlePasswordType(e) {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  const onSubmit = (data) => {
    login({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between items-center rounded-full">
        <Typography variant="h4" className="text-white">
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
          <XMarkIcon className="w-6 h-6 text-white" />
        </a>
      </div>
      <div className="mt-3">
        {isError && (
          <div className="border border-current border-red-200 px-3 rounded-xl py-3 flex flex-col-2 space-x-2">
            <InformationCircleIcon className=" w-6 h-6 text-red-300" />
            <Typography className="text-sm text-red-300">
              Your account and/or password is incorrect, please try again
            </Typography>
          </div>
        )}
      </div>
      <div className="mt-7">
        <Input
          variant="outlined"
          label="Email*"
          type="email"
          placeholder="Enter Your Email..."
          {...register("email", { required: true })}
          color="white"
          className="rounded-xl"
        />
        <span className="text-red-500 text-xs">
          {errors.email && <span>Email required</span>}
        </span>
      </div>
      <div className="mt-5">
        <Input
          variant="outlined"
          label="Password*"
          placeholder="Enter Your Password..."
          type={passwordType}
          color="white"
          className="rounded-xl"
          icon={
            passwordType === "password" ? (
              <EyeSlashIcon
                className="h-5 cursor-pointer text-white"
                onClick={(e) => handlePasswordType(e)}
              />
            ) : (
              <EyeIcon
                className="h-5 cursor-pointer text-white"
                onClick={(e) => handlePasswordType(e)}
              />
            )
          }
          {...register("password", { required: true })}
        />
        <span className="text-red-500 text-xs">
          {errors.password && <span>Password required</span>}
        </span>
      </div>
      <div className="flex justify-between mt-5">
        <Typography
          className="text-white text-xs cursor-pointer"
          onClick={() => {
            dispatch(openDialogForgotPassword());
            dispatch(closeDialogLogin());
          }}
        >
          Forgot Password?
        </Typography>
        <Typography className="text-white text-xs cursor-pointer">
          Don’t Have Account?
        </Typography>
      </div>
      <div className="mt-5">
        <Button
          type="submit"
          disabled={isLoading}
          loading={isLoading}
          // onClick={() => handleClickLogin()}
          fullWidth
          className="bg-[#FF0386] rounded-2xl"
        >
          Login
        </Button>
      </div>
    </form>
  );
}

function Login() {
  const { dialogLogin } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body && dialogLogin) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [dialogLogin]);

  return (
    <>
      <Dialog
        size="xs"
        open={dialogLogin}
        handler={() => dispatch(closeDialogLogin())}
        className="bg-transparent shadow-none select-none"
      >
        <Card className="mx-auto w-full max-w-sm bg-black">
          <CardBody className="flex flex-col p-8 pb-20">
            <FormLogin />
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}

export default Login;
