import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogChangePassword } from "../../slice/menuSlice";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function ModalChange() {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");
  const dialogChangePassword = useSelector(
    (state) => state.menu.dialogChangePassword
  );
  const dispatch = useDispatch();

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
  function handleConfirmPassword(e) {
    e.preventDefault();
    if (confirmPassword === "password") {
      setConfirmPassword("text");
    } else {
      setConfirmPassword("password");
    }
  }
  return (
    <>
      <Dialog
        open={dialogChangePassword}
        size="xs"
        handler={() => dispatch(closeDialogChangePassword())}
        className=""
      >
        <DialogHeader className="flex justify-between">
          <Typography className="cursor-default text-lg font-semibold">
            Change Password
          </Typography>
          <a
            href="#"
            className="flex items-center hover:text-blue-500 text-black transition-colors"
            onClick={() => dispatch(closeDialogChangePassword())}
          >
            <XMarkIcon className="h-6 w-6" />
          </a>
        </DialogHeader>
        <DialogBody className="">
          <div className="flex w-full">
            <Input
              variant="static"
              label="Current Password*"
              placeholder="Current Password"
              className="text-[#] text-[17px]"
              type={passwordType}
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
          <div className="mt-8">
            <Input
              variant="static"
              label="New Password*"
              placeholder="New Password"
              className="text-[#] text-[17px]"
              type={confirmPasswordType}
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
          <div className="grid grid-cols-2 mt-3 text-black">
            <Typography className="text-xs">More than 8 Caracters</Typography>
            <Typography className="text-xs">1 number</Typography>
            <Typography className="text-xs">1 Uppercase</Typography>
            <Typography className="text-xs">1 lowercase</Typography>
          </div>
          <div className="mt-8">
            <Input
              variant="static"
              label="Confirm new Password*"
              placeholder="Confirm new Password"
              className="text-[#] text-[17px]"
              type={confirmPassword}
              icon={
                confirmPassword === "password" ? (
                  <EyeSlashIcon
                    className="h-5 cursor-pointer text-black"
                    onClick={(e) => handleConfirmPassword(e)}
                  />
                ) : (
                  <EyeIcon
                    className="h-5 cursor-pointer text-black"
                    onClick={(e) => handleConfirmPassword(e)}
                  />
                )
              }
            />
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center">
          <Button className="w-80 bg-[#B0B0B0] text-sm">
            CONFIRM NEW PASSWORD
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default ModalChange;
