import { Button, Input, Typography } from "@material-tailwind/react";
import Banner from "../assets/banner-utama.png";
import Logo from "../assets/logo-auth.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  EyeIcon,
  EyeSlashIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useAuthMutation } from "../services/apiAuth";

function FormLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const [login, { isLoading, isError, isSuccess, error }] = useAuthMutation();

  const homePage = () => {
    navigate(`/`);
  };

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
    homePage();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="absolute bottom-[340px] left-[370px] w-[500px]">
          <div className="mt-3">
            {/* {isError && (
              <div className="border border-current border-red-200 px-3 rounded-md py-3 flex flex-col-2 space-x-2">
                <InformationCircleIcon className=" w-6 h-6 text-red-300" />
                <Typography className="text-sm text-red-300">
                  Your account and/or password is incorrect, please try again
                </Typography>
              </div>
            )} */}
          </div>
        </div>
        <div className="absolute bottom-[395px] left-[370px] w-[500px]">
          <Input
            label="Email Or Phone Number"
            color="white"
            {...register("email", { required: true })}
          />
          <span className="text-red-500 text-xs">
            {errors.email && <span>Email required</span>}
          </span>
        </div>
        <div className="absolute bottom-[325px] left-[370px] w-[500px] mt-7">
          <Input
            label="Password"
            color="white"
            type={passwordType}
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
        <div className="absolute bottom-[260px] left-[370px] w-[500px]">
          <div className="bg-white h-[38px] rounded-md cursor-pointer">
            <Button
              type="submit"
              disabled={isLoading}
              loading={isLoading}
              className="text-base font-bold h-full w-full flex justify-center items-center"
              color="white"
            >
              MASUK
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="select-none">
        <figure className="relative">
          <img
            src={Banner}
            alt="banner"
            className="w-full object-cover h-[573px]"
          />
          {/* <div className="absolute bottom-[350px] left-[505px]">
            <img
              src={Logo}
              alt="logo"
              className="h-[235px] w-[235px] object-contain"
            />
          </div> */}
          <FormLogin />
          <div
            className="absolute bottom-[220px] left-[370px] w-[500px] cursor-pointer"
            onClick={() => navigate("/forgot-password")}
          >
            <Typography className="text-white font-semibold">
              Lupa kata sandi?
            </Typography>
          </div>
          <div className="absolute bottom-[185px] left-[370px] w-[500px] cursor-text">
            <Typography className="text-white font-semibold">
              Belum punya akun?
            </Typography>
          </div>
          <div className="absolute bottom-[130px] left-[370px] w-[500px]">
            <div
              className="bg-white h-[38px] flex justify-center items-center rounded-md cursor-pointer"
              onClick={() => navigate("/register")}
            >
              <Typography className="text-base font-bold">DAFTAR</Typography>
            </div>
          </div>
        </figure>
      </div>
    </>
  );
}

export default Login;
