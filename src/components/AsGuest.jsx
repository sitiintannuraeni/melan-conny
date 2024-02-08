import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDialogAsGuest,
  closeDialogCheckOut,
  openDialogLogin,
} from "../slice/menuSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";

function AsGuest() {
  const dialogAsGuest = useSelector((state) => state.menu.dialogAsGuest);
  const dispatch = useDispatch();

  return (
    <>
      <Dialog
        size="xs"
        open={dialogAsGuest}
        handler={() => dispatch(closeDialogAsGuest())}
        className="p-4"
      >
        <div className="flex justify-between">
          <Typography className="mt-2 font-medium text-black text-lg">
            As Guest
          </Typography>
          <IconButton
            variant="text"
            onClick={() => dispatch(closeDialogAsGuest())}
          >
            <XMarkIcon className="w-7 h-6" />
          </IconButton>
        </div>
        <Typography className="mt-5">
          <div className="mb-7 text-md text-[black]">
            Phone*
            <div className="flex items-center justify-center">
              <div className="w-[40px]">+62</div>
              <input
                type="number"
                className="w-[380px] h-[40px] text-[#857F7F] text-xs outline-none border-none bg-transparent"
                placeholder="Enter Your Phone..."
              />
            </div>
            <div className="flex justify-end">
              <div className="w-[100%] border-b-[1px] border-[#000000] " />
            </div>
          </div>
          <div className="mt-3">
            <Button className="w-full bg-[#B0B0B0]">SEND</Button>
          </div>
        </Typography>
      </Dialog>
    </>
  );
}

export default AsGuest;
