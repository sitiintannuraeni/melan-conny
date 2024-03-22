import React, { useEffect } from "react";
import { Button, Dialog, Radio, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogAsGuest } from "../slice/menuSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";

function AsGuest() {
  const dialogAsGuest = useSelector((state) => state.menu.dialogAsGuest);
  const dispatch = useDispatch();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body && dialogAsGuest) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [dialogAsGuest]);

  return (
    <>
      <Dialog
        size="xs"
        open={dialogAsGuest}
        handler={() => dispatch(closeDialogAsGuest())}
      >
        <div className="p-7">
          <div className="flex justify-between w-[100%]">
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
          <div className="text-md text-[black] mt-4">
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
          <div className="flex justify-end w-full -mt-3">
            <div className="w-[100%] border-b-[1px] border-[#B0B0B0] " />
          </div>
          <div className="text-black mt-7 ">
            <Typography className="text-sm">Delivery Method*</Typography>
            <div className="flex flex-col mt-2">
              <Radio
                name="terms"
                label={
                  <Typography
                    color="blue-gray"
                    className="flex font-medium text-sm"
                  >
                    SMS
                  </Typography>
                }
              />
              <Radio
                name="terms"
                label={
                  <Typography
                    color="blue-gray"
                    className="flex font-medium text-sm"
                  >
                    WHATSAPP
                  </Typography>
                }
              />
            </div>
          </div>
          <div className="mt-3 p-4">
            <Button className="w-full bg-[#B0B0B0]">SEND</Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default AsGuest;
