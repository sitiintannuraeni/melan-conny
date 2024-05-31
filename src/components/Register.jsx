import {
  EyeIcon,
  EyeSlashIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  Dialog,
  Typography,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogRegister, openDialogLogin } from "../slice/menuSlice";
import { useEffect } from "react";
import { useAuthRegisterMutation } from "../services/apiAuth";
import { useForm } from "react-hook-form";

function FormRegister() {
  const [errorSize, setErrorSize] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [formRegister, { isLoading, isError, isSuccess, error }] =
    useAuthRegisterMutation();

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

  function handleConfirmPasswordType(e) {
    e.preventDefault();
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else {
      setConfirmPasswordType("password");
    }
  }

  const onSubmit = (data) => {
    formRegister({
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      confirm_password: data.confirm_password,
      birthdate: data.birthdate,
      gender: data.gender,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mb-2 mt-3">
          <Input
            color="white"
            variant="outlined"
            label="Your Name*"
            className=" rounded-xl"
            // value={inputName}
            // onChange={(e) => setInputName(e.target.value)}
            placeholder="Enter Your Name..."
            {...register("name", { required: true })}
          />
          <span className="text-red-500 text-xs">
            {errors.name && <span>Name required</span>}
          </span>
        </div>
      </div>
      {errorSize && (
        <Typography variant="small" className="text-red-700">
          Size must be selected!
        </Typography>
      )}
      <div>
        <div className="mb-2 mt-5">
          <Input
            color="white"
            variant="outlined"
            label="Your Email*"
            className=" rounded-xl"
            type="email"
            // value={inputEmail}
            // onChange={(e) => setInputEmail(e.target.value)}
            placeholder="Enter Your Email..."
            {...register("email", { required: true })}
          />
          <span className="text-red-500 text-xs">
            {errors.email && <span>Email required</span>}
          </span>
        </div>
      </div>
      <div>
        <div className="mb-2 mt-5">
          <Input
            color="white"
            variant="outlined"
            label="Phone*"
            className=" rounded-xl"
            // value={inputPhone}
            // onChange={(e) => setInputPhone(e.target.value)}
            placeholder="Enter Your Phone..."
            {...register("phone", { required: true })}
          />
          <span className="text-red-500 text-xs">
            {errors.phone && <span>Phone required</span>}
          </span>
        </div>
      </div>
      <div>
        <div className="mb-2 mt-5">
          <Input
            color="white"
            variant="outlined"
            label="Password*"
            placeholder="Enter Password"
            className="text-[#] text-[17px] rounded-xl"
            type={passwordType}
            // value={inputPassword}
            // onChange={(e) => setInputPassword(e.target.value)}
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
      </div>
      <div>
        <div className="mb-2 mt-6">
          <Input
            color="white"
            variant="outlined"
            label="Confirm Password*"
            placeholder="Confirm Password"
            className="text-[#] text-[17px] rounded-xl"
            type={confirmPasswordType}
            // value={inputConfirmPassword}
            // onChange={(e) => setInputConfirmPassword(e.target.value)}
            icon={
              confirmPasswordType === "password" ? (
                <EyeSlashIcon
                  className="h-5 cursor-pointer text-white"
                  onClick={(e) => handleConfirmPasswordType(e)}
                />
              ) : (
                <EyeIcon
                  className="h-5 cursor-pointer text-white"
                  onClick={(e) => handleConfirmPasswordType(e)}
                />
              )
            }
            {...register("confirmPassword", { required: true })}
          />
          <span className="text-red-500 text-xs">
            {errors.confirmPassword && <span>Confirm Password required</span>}
          </span>
        </div>
      </div>
      <div>
        <div className="mb-2 mt-6">
          <Input
            color="white"
            variant="outlined"
            label="Birth Date* "
            type="date"
            className="rounded-xl"
            // onChange={(e) => setInputBirthDate(e.target.value)}
            {...register("birthDate", { required: true })}
          />
          <span className="text-red-500 text-xs">
            {errors.birthDate && <span>Birthdate required</span>}
          </span>
        </div>
      </div>
      <div className="mt-5">
        <Select
          label="Gender"
          color="gray"
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
          className="rounded-xl"
          {...register("gender", { required: true })}
        >
          <Option value={"Male"}>Male</Option>
          <Option value={"Female"}>Female</Option>
        </Select>
      </div>
      <div className="mt-4">
        <Button
          type="submit"
          disabled={isLoading}
          loading={isLoading}
          // onClick={() => handleClickRegister()}
          fullWidth
          className="bg-[#FF0386] rounded-xl"
        >
          Register
        </Button>
      </div>
    </form>
  );
}

function Register() {
  const { dialogRegister } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  // const [, { isLoading, isError, isSuccess, error }] =
  //   useAuthRegisterMutation();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body && dialogRegister) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [dialogRegister]);

  return (
    <>
      <Dialog
        size="xs"
        open={dialogRegister}
        handler={() => dispatch(closeDialogRegister())}
        className="h-[90%] select-none bg-transparent "
      >
        <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black p-3">
          <div className="w-full relative top-0 left-0 h-full">
            <div className="flex justify-between items-center top-0 p-4 z-[1] mt-1 sticky">
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-lg text-white"
              >
                Register
              </Typography>
              <a
                href="#"
                className="-mt-5 flex items-center hover:text-blue-500 text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(closeDialogRegister());
                }}
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </a>
            </div>
            <Card
              className="w-full h-[500px] overflow-y-auto scrollbar-y bg-black"
              shadow={false}
            >
              <CardBody className="flex flex-col relative px-4 pt-0  ">
                <FormRegister />
                <div className="mt-5 flex justify-center gap-3 items-center w-full">
                  <Typography
                    variant="small"
                    className="text-sm text-white"
                    color="blue-gray"
                  >
                    Alredy have an account?
                  </Typography>
                  <Typography
                    as="a"
                    href="#signup"
                    variant="small"
                    className="text-sm text-white font-bold"
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
              </CardBody>
            </Card>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Register;
