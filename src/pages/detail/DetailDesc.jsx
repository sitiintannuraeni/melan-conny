import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { openDialogShareLink, openDialogVariant } from "../../slice/menuSlice";
import { useDispatch } from "react-redux";
import NumberFormatCurrency from "../../utils";
import { useState } from "react";
import { addToCart, setPriceTotal, setQtyTotal } from "../../slice/cartSlice";
import { toast } from "react-toastify";

function DetailDesc({
  id,
  product_name,
  image,
  price,
  total_sold,
  size,
  material,
  features,
  overview,
  desc,
}) {
  const dispatch = useDispatch();
  const [sizeId, setSizeId] = useState(0);
  const [sizeName, setSizeName] = useState("");
  const [errorSize, setErrorSize] = useState(false);
  const [activeSize, setActiveSize] = useState(0);

  const handleAddToBag = (data) => {
    if (data.size_id === 0) {
      return setErrorSize(true);
    }

    dispatch(
      addToCart({
        id: data.id,
        product_name: data.product_name,
        image: data.image,
        price: data.price,
        qty: 1,
        size_id: data.size_id,
        size_name: data.size_name,
      })
    );

    dispatch(setPriceTotal());
    dispatch(setQtyTotal());

    //

    toast.success("Success add to cart");
  };

  const handleSelectSize = (size) => {
    setSizeId(size.id);
    setSizeName(size.size_name);
    setActiveSize(size.id);
    setErrorSize(false);
  };

  return (
    <>
      <div className="px-3 lg:mt-0 mt-5 md:px-20 lg:px-6">
        <Typography className="font-medium tracking-wide lg:text-lg text-lg md:text-xl">
          {product_name}
        </Typography>
        <Typography className="font-medium tracking-wide lg:text-base md:text-lg text-base mt-2">
          <NumberFormatCurrency value={price} />
        </Typography>
        <Typography className="text-[#989898] mt-1 lg:text-xs text-[12px] md:text-sm">
          {total_sold} items sold
        </Typography>
        <Typography className="text-[#000000] lg:mt-10 mt-4 text-md">
          Select Size
        </Typography>
        <div className="grid lg:grid-cols-10 grid-cols-7 lg:gap-[61px] gap-[54px] mt-3 w-full">
          {size.map((ukuran, index) => {
            return (
              <Button
                key={index}
                variant={activeSize === ukuran.id ? "filled" : "outlined"}
                onClick={() => handleSelectSize(ukuran)}
                className="text-sm hover:text-white h-[40px] w-full flex justify-center items-center hover:bg-black/100"
              >
                {ukuran.size_name}
              </Button>
            );
          })}
        </div>
        {errorSize ? (
          <Typography variant="small" className="text-red-700">
            Size must be selected!
          </Typography>
        ) : (
          ""
        )}
        <div className="grid lg:grid-cols-5 grid-cols-4 gap-4 w-full lg:max-w-md mt-4 font-bold">
          <div className="col-span-4">
            <Button
              className="w-full size-12 text-base"
              onClick={() =>
                handleAddToBag({
                  id: id,
                  product_name: product_name,
                  image: image,
                  price: price,
                  qty: 1,
                  size_id: sizeId,
                  size_name: sizeName,
                })
              }
            >
              ADD TO BAG
            </Button>
          </div>
          <div className="col-span-3">
            <Button
              variant="outlined"
              className="flex items-center gap-2 pl-12 w-full lg:h-[95%] h-[45px]"
            >
              <HeartIcon className="h-5 w-5" />
              <Typography className="font-bold text-xs lg:text-base">
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
            >
              <ShareIcon className="h-5 w-5 flex-auto" />
            </Button>
          </div>
          <div className="col-span-3">
            <Button
              variant="outlined"
              className="flex justify-center gap-2 w-full"
              onClick={() => dispatch(openDialogVariant())}
            >
              <Typography className="font-bold text-xs lg:text-base flex items-center">
                SEE ALL VARIAN
              </Typography>
            </Button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1">
            <div className="lg:text-lg md:text-2xl text-base font-medium mt-7">
              Details
            </div>
            <div className="lg:w-[70px] md:w-[90px] w-[60px] lg:border-b-[4px] border-b-[3px] md:border-b-[4px] border-black mt-2"></div>
          </div>
          <Typography className="mt-4 font-semibold lg:text-base text-sm md:text-lg text-[#857F7F]">
            {product_name}
          </Typography>
          <div className="grid grid-cols-2 w-[200px] mt-[30px] text-base tracking-wider">
            <div className="font-semibold text-[#857F7F] lg:text-base text-sm md:text-xl">
              Material :
            </div>
            <div className="text-[#B0B0B0] lg:text-sm text-xs md:text-base mt-[3px]">
              {material}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:w-[200px] md:w-[400px] w-[200px] mt-[30px] text-base tracking-wider gap-1">
            <div className="font-semibold text-[#857F7F] lg:text-base text-sm md:text-xl">
              Features :
            </div>
            <div className="text-[#B0B0B0] lg:text-sm text-xs md:text-lg">
              {features}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:w-[450px] w-[335px] md:w-[550px] mt-[30px] text-base tracking-wider gap-1">
            <div className="font-semibold text-[#857F7F] lg:text-base text-sm md:text-xl">
              Overview :
            </div>
            <div>
              <Typography className="text-[#B0B0B0] lg:text-sm text-xs md:text-lg">
                {overview}
              </Typography>
            </div>
          </div>
          <div className="mt-9">
            <Typography className="font-semibold text-[#857F7F]  lg:text-base text-sm md:text-xl">
              Size Chart :
            </Typography>
            <Typography className="font-semibold text-[#857F7F]  lg:text-base text-sm md:text-xl">
              Length x Chest x Shoulder
            </Typography>
          </div>
          <div className="text-[#B0B0B0] mt-2 ">
            {size.map((ukuran, index) => {
              return (
                <Typography
                  key={index}
                  className="lg:text-base md:text-lg text-sm"
                >
                  {ukuran.label}
                </Typography>
              );
            })}
          </div>
          <div className="text-[#857F7F] mt-8">
            <Typography className="font-semibold lg:text-base text-sm md:text-xl">
              Talent
            </Typography>
          </div>
          <div className="text-[#B0B0B0] grid grid-rows-3">
            <Typography className="lg:text-base text-sm md:text-lg">
              - Tinggi : 180 cm
            </Typography>
            <Typography className="lg:text-base text-sm md:text-lg">
              - Berat : 70 kg
            </Typography>
            <Typography className="lg:text-base text-sm md:text-lg">
              - Menggunakan size L
            </Typography>
          </div>
          <div className="text-[#B0B0B0] mt-9 lg:w-full w-[340px] md:w-full">
            <Typography className="lg:text-base text-sm md:text-lg">
              {desc}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailDesc;
