import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Checkbox, IconButton, Typography } from "@material-tailwind/react";
import DrawerOne from "../../assets/drawer-1.png";

function TotalItems() {
  return (
    <>
      <Typography className="text-xs text-[#989898]">Total 2 item</Typography>
      <div className="border border-black/10 mt-2" />
      <div className="mt-1 flex justify-start space-x-2">
        <Checkbox defaultChecked />
        <Typography className="mt-[9.5px] text-base">ALL ITEMS</Typography>
      </div>
      <div className="grid grid-cols-2 lg:space-x-[236px] space-x-[150px]">
        <div className="grid grid-cols-2 lg:space-x-[-130px] space-x-[-40px] lg:w-[570px] w-[338px]">
          <div className="flex flex-col-2 lg:space-x-3 mt-4 lg:w-[150px] w-[124px]">
            <Checkbox defaultChecked />
            <img
              src={DrawerOne}
              alt="logo"
              className="h-[130px] w-[80px] object-cover rounded-lg"
            />
          </div>
          <div className="mt-4 grid grid-rows-3 lg:w-[335px] w-[185px]">
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
        <div className="lg:w-[47px] w-[20px] flex justify-end mt-4">
          <XMarkIcon className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </>
  );
}
export default TotalItems;
