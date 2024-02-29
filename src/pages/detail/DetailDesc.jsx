import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { openDialogShareLink } from "../../slice/menuSlice";
import { useDispatch } from "react-redux";
import { key } from "localforage";
import NumberFormatCurrency from "../../utils";
import { useState } from "react";
import { addToCart, setPriceTotal, setQtyTotal } from "../../slice/cartSlice";
import { useAddToBagsMutation } from "../../services/apiBags";

function DetailDesc({
  id,
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
  const [sizeId, setSizeId] = useState(0);
  const [errorSize, setErrorSize] = useState(false);
  const [activeSize, setActiveSize] = useState("");

  // const [bags, { data, isLoading, isError, isSuccess, error }] =
  //   useAddToBagsMutation();

  // if (isError) {
  //   console.log("is Error", error);
  // }

  // if (isSuccess) {
  //   console.log("Success", data);
  // }

  // function handleClickAddToBags() {
  //   bags({
  //     user_id: 1,
  //     total_price: 165000,
  //   });
  // }

  const handleAddToBag = (data) => {
    console.log({ data });
    if (data.size_id === 0) {
      return setErrorSize(true);
    }

    dispatch(
      addToCart({
        id: data.id,
        product_name: data.product_name,
        price: data.price,
        qty: 1,
        size_id: data.size_id,
      })
    );
    dispatch(setPriceTotal());
    dispatch(setQtyTotal());
  };

  //   dispatch(
  //     addToBags({
  //       id: data.id,
  //       user_id: data.user_id,
  //       total_price: data.total_price,
  //     })
  //   );

  return (
    <>
      <div className="px-3">
        <Typography className="font-medium tracking-wide text-lg">
          {product_name}
        </Typography>
        <Typography className="font-medium tracking-wide text-md mt-2">
          <NumberFormatCurrency value={price} />
        </Typography>
        <Typography className="text-[#989898] mt-1 text-xs">
          {total_sold} items sold
        </Typography>
        <Typography className="text-[#000000] mt-10 text-md">
          Select Size
        </Typography>
        <div className="flex gap-[11px] mt-3">
          {size.map((ukuran, index) => {
            return (
              <Button
                key={index}
                variant={activeSize === size.id ? "filled" : "outlined"}
                onClick={() => setSizeId(ukuran.id)}
                className="text-sm hover:text-white h-[40px] w-[40px] flex justify-center items-center hover:bg-black/100"
              >
                {ukuran.size_name}
              </Button>
            );
          })}
        </div>
        <div className="grid grid-cols-5 gap-4 w-full max-w-md mt-4 font-bold">
          <div className="col-span-4">
            <Button
              size="lg"
              fullWidth
              onClick={() =>
                handleAddToBag({
                  id: id,
                  product_name: product_name,
                  price: price,
                  qty: 1,
                  size_id: sizeId,
                })
              }
            >
              ADD TO BAG
            </Button>
          </div>
          <div className="col-span-3">
            <Button
              size="md"
              variant="outlined"
              className="flex items-center gap-2 pl-12"
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
            >
              <ShareIcon className="h-5 w-5 flex-auto" />
            </Button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1">
            <div className="text-lg font-medium mt-7">Details</div>
            <div className="w-[70px] border-b-[4px] border-black mt-2"></div>
          </div>
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
    </>
  );
}

export default DetailDesc;
