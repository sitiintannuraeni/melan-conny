import React from "react";
import {
  Button,
  Dialog,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogShareLink } from "../../slice/menuSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ImageA from "../../assets/image 1.svg";
import ImageB from "../../assets/image 2.svg";
import ImageC from "../../assets/image 3.svg";
import ImageLine from "../../assets/line.webp";
import ImageE from "../../assets/image 5.svg";

function DetailLink() {
  const dialogShareLink = useSelector((state) => state.menu.dialogShareLink);
  const dispatch = useDispatch();
  return (
    <>
      <Dialog
        size="xs"
        open={true}
        handler={() => dispatch(closeDialogShareLink())}
        className="p-4"
      >
        <div className="flex justify-between">
          <Typography className="mt-2 font-medium text-black text-lg">
            Share to
          </Typography>
          <IconButton
            variant="text"
            onClick={() => dispatch(closeDialogShareLink())}
          >
            <XMarkIcon className="w-7 h-6" />
          </IconButton>
        </div>
        <div class="grid grid-cols-4 font-mono text-black text-sm text-center font-bold">
          <div class="p-4 rounded-lg shadow-lg bg-blue-500">
            <div className="flex justify-center">
              <img src={ImageB} alt="imageA" className="w-[50px]" />
            </div>
            <Typography className="mt-2">Twitter</Typography>
          </div>
          <div class="p-4 rounded-lg shadow-lg bg-green-500">
            <div className="flex justify-center">
              <img src={ImageC} alt="imageC" className="w-[47px]" />
            </div>
            <Typography className="mt-2">Whatsapp</Typography>
          </div>
          <div class="p-4 rounded-lg shadow-lg bg-purple-500">
            <div className="flex justify-center">
              <img src={ImageA} alt="imageB" className="w-[50px]" />
            </div>
            <Typography className="mt-2">Facebook</Typography>
          </div>
          <div class="p-4 rounded-lg shadow-lg bg-yellow-500">
            <div className="flex justify-center items-center">
              <img src={ImageLine} alt="imageD" className="w-[43px]" />
            </div>
            <Typography className="mt-2">Line</Typography>
          </div>
          <div class="p-4 rounded-lg shadow-lg bg-blue-500">
            <div className="flex justify-center items-center">
              <img src={ImageE} alt="imageD" className="w-[55px]" />
            </div>
            <Typography className="mt-2">Line</Typography>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default DetailLink;
