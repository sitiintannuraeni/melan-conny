import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  closeDialogKodeVerifikasi,
  openDialogForgotPassword,
  openDialogNewPassword,
} from "../slice/menuSlice";
import { useDispatch, useSelector } from "react-redux";

function KodeVerifikasi() {
  const { dialogKodeVerifikasi } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <>
      <Dialog
        open={dialogKodeVerifikasi}
        size="xs"
        handler={() => dispatch(closeDialogKodeVerifikasi())}
        className="bg-black p-10"
      >
        <DialogHeader className="flex flex-col-2 p-1 gap-3">
          <div
            onClick={() => {
              dispatch(openDialogForgotPassword());
              dispatch(closeDialogKodeVerifikasi());
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
            Masukan Kode Verifikasi
          </Typography>
        </DialogHeader>
        <DialogBody className="pt-0 mt-3">
          <Typography className="text-white text-sm">
            Kode verifikasi telah dikirim melalui e-mail ke
            k**********@g****.com.
          </Typography>
          <div className="flex flex-col-4 mt-6 gap-6">
            <input
              placeholder=""
              className="text-white w-12 h-14 rounded-xl border-2 border-white bg-transparent flex justify-center"
            />
            <input
              placeholder=""
              className="text-white w-12 h-14 rounded-xl border-2 border-white bg-transparent flex justify-center"
            />
            <input
              placeholder=""
              className="text-white w-12 h-14 rounded-xl border-2 border-white bg-transparent flex justify-center"
            />
            <input
              placeholder=""
              className="text-white w-12 h-14 rounded-xl border-2 border-white bg-transparent flex justify-center"
            />
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center">
          <Button
            className="bg-[#FF0386] rounded-xl w-24"
            size="sm"
            onClick={() => {
              dispatch(openDialogNewPassword());
              dispatch(closeDialogKodeVerifikasi());
            }}
          >
            <Typography className="text-xs">kirim</Typography>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default KodeVerifikasi;
