import {
  Alert,
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
import {
  EyeIcon,
  EyeSlashIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useChangePasswordMutation } from "../../services/apiAuth";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function FormModalChange() {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");
  const [changePassword, { isLoading, isError, isSuccess, error }] =
    useChangePasswordMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    changePassword({
      current_password: data.currentPassword,
      new_password: data.newPassword,
      confirm_password: data.confirmPassword,
    });
    toast.success("successfully");
    console.log(data);
  };

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {isError && (
          <div className="border border-current border-red-200 px-3 rounded-md py-3 flex flex-col-2 space-x-2">
            <InformationCircleIcon className=" w-6 h-6 text-red-300" />
            <Typography className="text-sm text-red-300">
              Failed to change password, please try again.
            </Typography>
          </div>
        )}
      </div>
      <div className="">
        <Input
          variant="static"
          label="Current Password*"
          placeholder="Current Password"
          className="text-[#] text-[17px]"
          type={passwordType}
          // value={inputCurrentPassword}
          // onChange={(e) => setInputCurrentPassword(e.target.value)}
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
          {...register("currentPassword", { required: true })}
        />
        <span className="text-red-500 text-xs">
          {errors.currentPassword && <span>Current Password required</span>}
        </span>
      </div>
      <div className="mt-8">
        <Input
          variant="static"
          label="New Password*"
          placeholder="New Password"
          className="text-[#] text-[17px]"
          type={confirmPasswordType}
          // value={inputNewPassword}
          // onChange={(e) => setInputNewPassword(e.target.value)}
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
          {...register("newPassword", { required: true })}
        />
        <span className="text-red-500 text-xs">
          {errors.newPassword && <span>New Password required</span>}
        </span>
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
          // value={inputConfirmPassword}
          // onChange={(e) => setInputConfirmPassword(e.target.value)}
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
          {...register("confirmPassword", { required: true })}
        />
        <span className="text-red-500 text-xs">
          {errors.confirmPassword && <span>Confirm Password required</span>}
        </span>
      </div>
      <div className="flex justify-center mt-4 ">
        <Button
          disabled={isLoading}
          loading={isLoading}
          type="submit"
          className="bg-[#F62C85]"
        >
          CONFIRM NEW PASSWORD
        </Button>
      </div>
    </form>
  );
}

function ModalChange() {
  const dialogChangePassword = useSelector(
    (state) => state.menu.dialogChangePassword
  );
  const dispatch = useDispatch();

  return (
    <>
      <Dialog
        open={dialogChangePassword}
        size="xs"
        handler={() => dispatch(closeDialogChangePassword())}
        className=" select-none"
      >
        <DialogHeader className="flex justify-between">
          <Typography className="cursor-default text-lg font-semibold ">
            Change Password
          </Typography>
          <a
            href="#"
            className="flex items-center hover:text-blue-500 text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeDialogChangePassword());
            }}
          >
            <XMarkIcon className="h-6 w-6" />
          </a>
        </DialogHeader>
        <DialogBody className="">
          <FormModalChange />
        </DialogBody>
      </Dialog>
    </>
  );
}

export default ModalChange;
