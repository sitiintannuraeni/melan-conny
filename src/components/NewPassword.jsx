import { useDispatch, useSelector } from "react-redux";
import {
  closeDialogNewPassword,
  openDialogKodeVerifikasi,
} from "../slice/menuSlice";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";

function NewPassword() {
  const dispatch = useDispatch();
  const { dialogNewPassword } = useSelector((state) => state.menu);
  return (
    <>
      <Dialog
        open={dialogNewPassword}
        size="xs"
        handler={() => dispatch(closeDialogNewPassword())}
        className=" bg-black p-7"
      >
        <DialogHeader className="flex flex-col-2 gap-4">
          <div
            onClick={() => {
              dispatch(openDialogKodeVerifikasi());
              dispatch(closeDialogNewPassword());
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <Typography className="text-white text-xl">
            Kata Sandi Baru
          </Typography>
        </DialogHeader>
        <DialogBody className="pt-0">
          <Typography className="text-sm text-white">
            Buat kata sandi yang kuat untuk akun dengan
            e-mail kyankaw.ksn@gmail.com
          </Typography>
          <div className="mt-7">
            <Input
              variant="outlined"
              label="New Password"
              placeholder="Enter New Password..."
              color="white"
              className="rounded-xl"
            />
          </div>
          <div className="mt-4">
            <Input
              variant="outlined"
              label="Confirm Password*"
              placeholder="Confirm Password..."
              color="white"
              className="rounded-xl"
            />
          </div>
        </DialogBody>
        <DialogFooter className="pt-0 mt-4">
          <Button className="bg-[#FF0386] rounded-2xl w-full" size="sm">
            <Typography className="text-sm">kirim</Typography>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default NewPassword;
