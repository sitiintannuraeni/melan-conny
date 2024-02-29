import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Checkbox, IconButton, Typography } from "@material-tailwind/react";
import DrawerOne from "../../assets/drawer-1.png";

function TotalItems() {
  return (
    <>
      <Typography className="text-xs text-[#989898]">Total 2 item</Typography>
      <div className="border border-black/10 mt-2" />
      <div className="mt-1 flex justify-start space-x-2">
        <Checkbox />
        <Typography className="mt-[9.5px] text-base">ALL ITEMS</Typography>
      </div>
      <div className="grid grid-cols-2 space-x-[180px]">
        <div className="grid grid-cols-2 space-x-[-73px] w-[463px]">
          <div className="grid grid-cols-2 space-x-[-65px] mt-4">
            <Checkbox />
            <img
              src={DrawerOne}
              alt="logo"
              className="h-[130px] w-[100px] object-cover"
            />
          </div>
          <div className="mt-4 grid grid-rows-3">
            <Typography className="text-base">
              Elgant Basic Shirt Black
            </Typography>
            <Typography>Rp 185.000</Typography>
            <div className="flex justify-start mt-2 space-x-3">
              <IconButton
                variant="outlined"
                className=" rounded-sm h-[25px] w-[25px]"
              >
                <MinusIcon className="text-black h-4 w-5" />
              </IconButton>
              <Typography className="text-xl">1</Typography>
              <IconButton
                variant="outlined"
                className=" rounded-sm h-[25px] w-[25px]"
              >
                <PlusIcon className="text-black h-4 w-5" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="w-[103px] flex justify-end mt-4 ">
          <XMarkIcon className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </>
  );
}
export default TotalItems;
