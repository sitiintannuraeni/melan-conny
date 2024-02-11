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
      >
        <div className="p-4 flex justify-between w-[100%]">
          <Typography className="mt-2 font-medium text-black text-lg">
            As Guest
          </Typography>
          <a
            href="#"
            className="flex items-center hover:text-blue-500 text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeDialogAsGuest());
            }}
          >
            <XMarkIcon className="w-6 h-6" />
          </a>
        </div>
        <Typography className="p-4">
          <div className="text-md text-[black]">
            Phone*
            <div className="flex justify-start items-start space-x-3 mt-3">
              <Typography className="p-3">+62</Typography>
              <input
                className="outline-none text-xs mt-[17px] w-[100%]"
                placeholder="Enter Your Phone..."
                type="number"
              />
            </div>
          </div>
        </Typography>
        <div className="flex justify-end w-full">
          <div className="w-[100%] border-b-[1px] border-[#B0B0B0] " />
        </div>
        <div className="mt-3 p-4">
          <Button className="w-full bg-[#B0B0B0]">SEND</Button>
        </div>
      </Dialog>
    </>
  );
}

export default AsGuest;
