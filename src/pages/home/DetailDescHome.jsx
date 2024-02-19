import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { openDialogShareLink } from "../../slice/menuSlice";
import { useDispatch } from "react-redux";
import NumberFormatCurrency from "../../utils";

function DetailDescHome({
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
      <div className="p-8">
        <Typography className="font-medium tracking-wide text-lg">
          {product_name}
        </Typography>
        <Typography className="font-medium tracking-wide text-md mt-2">
          <NumberFormatCurrency value={price} />
        </Typography>
        <Typography className="text-[#989898] text-xs">
          {total_sold} items sold
        </Typography>
        <Typography className="text-[#000000] mt-6 text-md">
          Select Size
        </Typography>
        <div className="flex gap-[9px] mt-2">
          {size.map((ukuran, index) => {
            return (
              <Button
                key={index}
                variant="outlined"
                className="text-xs h-[40px] w-2 flex justify-center items-center"
              >
                {ukuran.size_name}
              </Button>
            );
          })}
        </div>
        <div className="grid grid-cols-5 gap-4 w-full max-w-md mt-4 font-bold">
          <div className="col-span-4">
            <Button size="lg" fullWidth>
              ADD TO BAG
            </Button>
          </div>
          <div className="col-span-3">
            <Button
              size="md"
              variant="outlined"
              className="flex items-center gap-2 pl-9"
              fullWidth
            >
              <HeartIcon className="h-5 w-5" />
              <Typography variant="small" className="font-bold">
                ADD TO WISHLIST
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              fullWidth
              size="md"
              onClick={() => dispatch(openDialogShareLink())}
              className=""
            >
              <ShareIcon className="h-5 w-7 pr-3" />
            </Button>
          </div>
        </div>
        <div className="h-full">
          <div className="grid grid-cols-1">
            <div className="text-lg font-medium mt-5">Details</div>
            <div className="w-[70px] border-b-[4px] border-black"></div>
          </div>
          <div className="">
            <Typography className="mt-4 font-semibold text-md text-[#857F7F]">
              {product_name}
            </Typography>
            <div className="grid grid-cols-2 w-[200px] mt-[30px] text-base tracking-wider">
              <div className="font-semibold text-[#857F7F] text-md">
                Material :
              </div>
              <div className="text-[#B0B0B0] text-sm mt-[3px]">{material}</div>
            </div>
            <div className="grid grid-cols-1 w-[200px] mt-[30px] text-base tracking-wider gap-1">
              <div className="font-semibold text-[#857F7F] text-md">
                Features :
              </div>
              <div className="text-[#B0B0B0] text-sm">{features}</div>
            </div>
            <div className="grid grid-cols-1 w-[450px] mt-[30px] text-base tracking-wider gap-1">
              <div className="font-semibold text-[#857F7F] text-md">
                Overview :
              </div>
              <div className="text-[#B0B0B0] text-sm">
                <Typography variant="small">{overview}</Typography>
              </div>
            </div>
            <div className="font-semibold text-[#857F7F] mt-9 text-md">
              Size Chart : <br /> Length x Chest x Shoulder
            </div>
            <div className="text-[#B0B0B0] mt-2 text-sm">
              {size.map((ukuran, index) => {
                return <Typography key={index}>{ukuran.label}</Typography>;
              })}
            </div>
            <div className="text-[#857F7F] mt-8">
              <Typography className="text-md font-semibold text-md">
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

export default DetailDescHome;
