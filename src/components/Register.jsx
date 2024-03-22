import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogRegister, openDialogLogin } from "../slice/menuSlice";
import { useEffect } from "react";
import { useAuthRegisterMutation } from "../services/apiAuth";

function Register() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");
  const [inputBirthDate, setInputBirthDate] = useState("");
  const { dialogRegister } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [register, { isLoading, isError, isSuccess, error }] =
    useAuthRegisterMutation();
  console.log({ register });

  if (isError) {
    console.log("is Error Register", error);
  }

  useEffect(() => {
    const body = document.querySelector("body");
    if (body && dialogRegister) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
    if (isSuccess) {
      setInputName("");
      setInputEmail("");
      setInputPhone("");
      setInputPassword("");
      setInputConfirmPassword("");
      setInputBirthDate("");
    }
  }, [dialogRegister, isSuccess]);

  function handleClickRegister() {
    register({
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
      password: inputPassword,
      confirm_password: inputConfirmPassword,
      birthdate: inputBirthDate,
    });
  }

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
                  <div className="mb-2 mt-3">
                    <div className="flex items-center justify-center">
                      <Input
                        variant="static"
                        label="Your Name*"
                        type="text"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        placeholder="Enter Your Name..."
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 mt-3">
                    <div className="flex items-center justify-center">
                      <Input
                        variant="static"
                        label="Your Email*"
                        type="email"
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                        placeholder="Enter Your Email..."
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 mt-3">
                    <div className="flex items-center justify-center">
                      <Input
                        variant="static"
                        label="Phone*"
                        value={inputPhone}
                        onChange={(e) => setInputPhone(e.target.value)}
                        placeholder="Enter Your Phone..."
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 mt-3">
                    <Input
                      variant="static"
                      label="Password*"
                      placeholder="Enter Password"
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
                  <div className="mb-2 mt-5">
                    <Input
                      variant="static"
                      label="Confirm Password*"
                      placeholder="Confirm Password"
                      className="text-[#] text-[17px]"
                      type={confirmPasswordType}
                      value={inputConfirmPassword}
                      onChange={(e) => setInputConfirmPassword(e.target.value)}
                      icon={
                        confirmPasswordType === "password" ? (
                          <EyeSlashIcon
                            className="h-5 cursor-pointer text-black"
                            onClick={(e) => handleConfirmPasswordType(e)}
                          />
                        ) : (
                          <EyeIcon
                            className="h-5 cursor-pointer text-black"
                            onClick={(e) => handleConfirmPasswordType(e)}
                          />
                        )
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-2 mt-3">
                    <div className="flex items-center justify-center">
                      <Input
                        variant="static"
                        label="Birth Date*"
                        type="date"
                        onChange={(e) => setInputBirthDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col-2 gap-2">
                  <Checkbox />
                  <Typography className="text-[11px] mt-2 text-black">
                    i agree receive information and commercial offers from
                    Heylocal and World White Enterprise
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="pt-0 ">
                <Button
                  type="button"
                  disabled={isLoading}
                  loading={isLoading}
                  onClick={() => handleClickRegister()}
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
