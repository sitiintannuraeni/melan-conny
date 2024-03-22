import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { openDialogShareLink } from "../../slice/menuSlice";
import { useDispatch } from "react-redux";
import NumberFormatCurrency from "../../utils";

function ModalDescHome({
  product_name,
  price,
  total_sold,
  size,
  material,
  features,
  overview,
  desc,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full">
        <Typography className="font-medium tracking-wide text-md text-black">
          {product_name}
        </Typography>
        <Typography className="font-medium tracking-wide text-sm mt-2 text-black">
          <NumberFormatCurrency value={price} />
        </Typography>
        <Typography className="text-[#989898] text-[11px]">
          {total_sold} items sold
        </Typography>
        <Typography className="text-[#000000] mt-6 text-sm">
          Select Size
        </Typography>
        <div className="flex gap-[7px] mt-2">
          {size.map((ukuran, index) => {
            return (
              <Button
                key={index}
                variant="outlined"
                className="text-xs h-[40px] w-1 flex justify-center items-center"
              >
                {ukuran.size_name}
              </Button>
            );
          })}
        </div>
        <div className="grid grid-cols-5 gap-4 w-[90%] mt-4 font-bold">
          <div className="col-span-4">
            <Button fullWidth>ADD TO BAG</Button>
          </div>
          <div className="col-span-3 flex justify-between">
            <Button
              variant="outlined"
              className="flex justify-center items-center gap-3"
              fullWidth
            >
              <HeartIcon className="h-4 w-4" />
              <Typography className="font-bold text-sm">
                ADD TO WISHLIST
              </Typography>
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <Button
              fullWidth
              variant="outlined"
              onClick={() => dispatch(openDialogShareLink())}
            >
              <ShareIcon className="h-5 w-7 " />
            </Button>
          </div>
        </div>
        <div className="h-full">
          <div className="grid grid-cols-1">
            <div className="text-md font-medium mt-5 text-black">Details</div>
            <div className="w-[70px] border-b-[3px] border-black"></div>
          </div>
          <div className="h-[150px] overflow-y-auto scrollbar-y overflow-x-hidden">
            <Typography className="mt-4 font-semibold text-[14px] text-[#857F7F]">
              {product_name}
            </Typography>
            <div className="grid grid-cols-2 w-[200px] mt-[20px] text-base tracking-wider">
              <div className="font-semibold text-[#857F7F] text-sm">
                Material :
              </div>
              <div className="text-[#B0B0B0] text-sm mt-[1px]">{material}</div>
            </div>
            <div className="grid grid-cols-1 w-[200px] mt-[20px] text-base tracking-wider gap-1">
              <div className="font-semibold text-[#857F7F] text-sm">
                Features :
              </div>
              <div className="text-[#B0B0B0] text-sm">{features}</div>
            </div>
            <div className="grid grid-cols-1 w-[450px] mt-[30px] text-base tracking-wider gap-1">
              <div className="font-semibold text-[#857F7F] text-sm">
                Overview :
              </div>
              <div className="text-[#B0B0B0] text-sm">
                <Typography className="text-sm">{overview}</Typography>
              </div>
            </div>
            <div className="font-semibold text-[#857F7F] mt-9 text-sm">
              Size Chart : <br /> Length x Chest x Shoulder
            </div>
            <div className="text-[#B0B0B0] mt-2">
              {size.map((ukuran, index) => {
                return (
                  <Typography key={index} className="text-sm">
                    {ukuran.label}
                  </Typography>
                );
              })}
            </div>
            <div className="text-[#857F7F] mt-8">
              <Typography className="text-md font-semibold text-sm">
                Talent
              </Typography>
            </div>
            <div className="text-[#B0B0B0] text-sm">
              - Tinggi : 180 cm
              <br /> - Berat : 70 kg <br /> - Menggunakan size L
            </div>
            <div className="text-[#B0B0B0] mt-9">
              <Typography className="text-sm">{desc}</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDescHome;
