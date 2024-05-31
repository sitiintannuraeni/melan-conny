import {
  Button,
  Card,
  CardBody,
  Dialog,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDialogForgotPassword,
  openDialogKodeVerifikasi,
  openDialogLogin,
} from "../slice/menuSlice";

function Form() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col-2 items-center gap-3 p-2">
        <div
          onClick={() => {
            dispatch(openDialogLogin());
            dispatch(closeDialogForgotPassword());
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
        <div className="grid">
          <Typography className="text-white text-xl font-semibold">
            Atur Ulang Kata Sandi
          </Typography>
        </div>
      </div>
      <div className="p-2 mt-3">
        <Typography className="text-xs text-white">
          Masukkan e-mail dan nomor HP yang terdaftar. Kami akan mengirimkan
          kode verifikasi untuk atur ulang kata sandi.
        </Typography>
        <div className="mt-5">
          <Input
            variant="outlined"
            label="Email*"
            placeholder="Enter Your Email..."
            color="white"
            className="rounded-xl"
          />
        </div>
        <div className="mt-5">
          <Input
            variant="outlined"
            label="Phone*"
            placeholder="Enter Your Email Number Phone"
            color="white"
            className="rounded-xl"
          />
        </div>
        <div className="mt-5">
          <Button
            className="rounded-xl w-full bg-[#FF0386]"
            size="sm"
            onClick={() => {
              dispatch(openDialogKodeVerifikasi());
              dispatch(closeDialogForgotPassword());
            }}
          >
            <Typography className="text-white text-sm">Kirim</Typography>
          </Button>
        </div>
      </div>
    </>
  );
}

function ForgotPassword() {
  const { dialogForgotPassword } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <>
      <Dialog
        size="xs"
        open={dialogForgotPassword}
        handler={() => dispatch(closeDialogForgotPassword())}
        className="bg-transparent shadow-none select-none"
      >
        <Card className="mx-auto w-full max-w-sm bg-black">
          <CardBody className="flex flex-col p-8 pb-14">
            <Form />
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
export default ForgotPassword;
