import { Button, IconButton, Typography } from "@material-tailwind/react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { openDialogAddress } from "../../slice/menuSlice";
import { LocationPin2 } from "../../icons/LocationPin2";

function Address() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="lg:px-0 px-4">
        <div className="fond-semibold pb-14">
          <Typography className="font-semibold lg:pl-0 pl-3">
            Saved Address
          </Typography>
        </div>
        <div className="-mt-6 ">
          <div className="flex flex-col-3 gap-2">
            <Typography className="text-black/80">Delisa </Typography>
            <div className="lg:h-[27px] h-[16px] lg:w-[1px] w-[1px] bg-[#989898]" />
            <Typography className="text-[#989898]">085788510310</Typography>
          </div>
          <div className="flex flex-col-2 gap-12 mt-2">
            <Typography className="w-[600px] text-[#989898]">
              Jalan Mangga Kecil No.13, RT 09 RW 03, Kelurahan Besi Tua,
              Kecamatan Sukaraja, Kab. Binjai, Sumatera Utara, 53421
            </Typography>
            <div className="flex justify-end cursor-pointer">
              <div className="flex flex-col-2 gap-4 justify-end h-[25px]">
                <Typography className="hover:text-red-600">Ubah</Typography>
                <Typography className="hover:text-[#40A2D8]">Hapus</Typography>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              variant="outlined"
              className="w-[200px] rounded-md text-[#989898] text-[10px] border-[#989898]"
            >
              Atur Sebagai Utama
            </Button>
          </div>
        </div>
        <div className="lg:pl-[75px] pl-16 mt-10">
          <div className="rounded-none">
            <div className="pl-[86px]">
              <div className="w-[47px] transition-colors flex items-center pb-4">
                <a href="#">
                  <LocationPin2 className="text-[#989898] hover:text-black text-4xl" />
                </a>
              </div>
            </div>
            <Typography className="pl-[13px] pb-2 text-[#989898]">
              You have no saved address
            </Typography>
          </div>
          <Button
            variant="filled"
            className="w-56"
            onClick={() => {
              dispatch(openDialogAddress());
            }}
          >
            Add New Address
          </Button>
        </div>
      </div>
    </>
  );
}

export default Address;
