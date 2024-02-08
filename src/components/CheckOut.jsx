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
  closeDialogCheckOut,
  openDialogAsGuest,
  openDialogLogin,
} from "../slice/menuSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";

function CheckOut() {
  const dialogCheckOut = useSelector((state) => state.menu.dialogCheckOut);
  const dispatch = useDispatch();

  return (
    <>
      <Dialog
        size="xs"
        open={dialogCheckOut}
        handler={() => dispatch(closeDialogCheckOut())}
        className="p-4"
      >
        <div className="flex justify-between">
          <Typography className="mt-2 font-bold text-black text-lg">
            Checkout
          </Typography>
          <IconButton
            variant="text"
            onClick={() => dispatch(closeDialogCheckOut())}
          >
            <XMarkIcon className="w-7 h-6" />
          </IconButton>
        </div>
        <div className="mt-7">
          <Typography className="flex justify-center items-center text-black">
            Alredy have an account?
          </Typography>
          <div className="flex justify-center items-center text-black mt-4">
            <Button
              className="w-full bg-black"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                dispatch(openDialogLogin());
                dispatch(closeDialogCheckOut());
              }}
            >
              LOG IN
            </Button>
          </div>
          <Typography className="flex justify-center items-center mt-4 text-black">
            New to MFS
          </Typography>
          <Typography className="flex justify-center items-center mt-4 text-black">
            Register
          </Typography>
          <div className="mt-4 flex justify-center items-center">
            <Button
              variant="outlined"
              onClick={(e) => {
                e.preventDefault();
                dispatch(openDialogAsGuest());
                dispatch(closeDialogCheckOut());
              }}
            >
              CONTINUE AS GUEST
            </Button>
          </div>
        </div>
        <div></div>
      </Dialog>
    </>
  );
}

export default CheckOut;
