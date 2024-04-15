import {
  HeartIcon,
  ShareIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { openDialogLogin, openDialogShareLink } from "../../slice/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import NumberFormatCurrency from "../../utils";
import { useState } from "react";
import Image2 from "../../assets/product-2.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setAuthLoginRedirect } from "../../slice/apiSlice";
import { useAddToBagsMutation } from "../../services/apiBags";
import {
  useAddToBagItemsMutation,
  useUpdateToBagItemsMutation,
} from "../../services/apiBagsItems";
import { useCallback } from "react";
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
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sizeId, setSizeId] = useState(0);
  const [sizeName, setSizeName] = useState("");
  const [errorSize, setErrorSize] = useState(false);
  const [activeSize, setActiveSize] = useState(0);
  const {
    qtyTotal,
    bagId,
    products: cartProducts,
  } = useSelector((state) => state.cart);
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const [
    addToBags,
    { data: responseApiBag, isLoading, isError, isSuccess, error },
  ] = useAddToBagsMutation();

  const [
    addToBagItems,
    {
      data: responseBagItems,
      isLoading: isLoadingBagItems,
      isError: isErrorBagItems,
      isSuccess: isSuccessBagItems,
      error: errorBagItems,
    },
  ] = useAddToBagItemsMutation();

  const [
    updateItem,
    {
      isLoading: isUpdating,
      isError: isUpdateError,
      isSuccess: isUpdateSuccess,
    },
  ] = useUpdateToBagItemsMutation();

  const handleAddToBagItems = useCallback(() => {
    if (isSuccess) {
      console.log("hit endpont api bag items");
      addToBagItems(responseApiBag);
    }
  }, [isSuccess]);

  useEffect(() => {
    handleAddToBagItems();
  }, [handleAddToBagItems]);

  const handleAddToBag = (data) => {
    if (!isLoggedIn) {
      dispatch(setAuthLoginRedirect(location.pathname));
      dispatch(openDialogLogin());
    } else {
      if (data.size_id === 0) {
        return setErrorSize(true);
      } else {
        const dataBody = {
          user_id: user.id,
          total_price: data.price,
          product_id: data.product_id,
          size_id: data.size_id,
          quantity: 1,
        };

        if (qtyTotal === 0) {
          console.log("add to bag");
          addToBags(dataBody);
          toast.success("Success add to cart");
        } else {
          console.log("add to bag items");
          toast.success("Success add to cart");
          // hit endpoint add to bag items
          // tambahkan validasi untuk size yang sudah ada dikeranjang
          // contoh : ketika size m di tambahkan quantity akan di plus 1
          const currentItem = exsisItem(data.product_id, data.size_id);
          if (!currentItem.status) {
            addToBagItems({
              bag_id: bagId,
              product_id: data.product_id,
              size_id: data.size_id,
              quantity: currentItem.quantity + 1,
            });
          } else {
            const body = {
              bag_id: bagId,
              product_id: data.product_id,
              size_id: data.size_id,
              quantity: currentItem.quantity + 1,
            };
            updateItem({ id: currentItem.id, data: body });
          }
        }
      }
    }

    // toast.success("Success add to cart");
  };

  const handleSelectSize = (size) => {
    setSizeId(size.id);
    setSizeName(size.size_name);
    setActiveSize(size.id);
    setErrorSize(false);
  };

  const exsisItem = useCallback(
    (productId, sizeId) => {
      const index = cartProducts.findIndex(
        (item) => item.product_id === productId && item.size_id === sizeId
      );
      console.log("result index", index);
      if (index !== -1) {
        return {
          id: cartProducts[index].id,
          quantity: cartProducts[index].quantity,
          status: true,
        };
      } else {
        return {
          id: 0,
          quantity: 0,
          status: false,
        };
      }
    },
    [cartProducts]
  );

  return (
    <>
      <div className="px-3 lg:mt-0 mt-5 md:px-20 lg:px-6 select-none">
        <Typography className="font-medium tracking-wide lg:text-lg text-lg md:text-xl">
          {product_name}
        </Typography>
        <Typography className="font-medium tracking-wide lg:text-base md:text-lg text-base mt-2">
          <NumberFormatCurrency value={price} />
        </Typography>
        <Typography className="text-[#989898] mt-1 lg:text-xs text-[12px] md:text-sm">
          {total_sold} items sold
        </Typography>
        <Typography className="text-[#000000] lg:mt-5 mt-2 text-md">
          Select Size
        </Typography>
        <div className="grid lg:grid-cols-10 grid-cols-7 lg:gap-[61px] gap-[54px] md:gap-[10px] mt-3 lg:w-full w-full md:w-[750 px]">
          {size.map((ukuran, index) => {
            return (
              <Button
                key={index}
                variant={activeSize === ukuran.id ? "filled" : "outlined"}
                onClick={() => handleSelectSize(ukuran)}
                className="text-sm hover:text-white h-[40px] w-full flex justify-center items-center hover:bg-black/100"
              >
                {ukuran.size_name}
                {/* :{ukuran.pivot.stock} */}
              </Button>
            );
          })}
        </div>
        {errorSize && (
          <Typography variant="small" className="text-red-700">
            Size must be selected!
          </Typography>
        )}
        <div className="grid lg:grid-cols-4 grid-cols-3 md:grid-cols-3 gap-2 mt-5">
          <div className="bg-gray-200 lg:h-[60px] h-[50px] md:h-[75px] flex flex-col-2 gap-2 px-3">
            <div className="w-[120px] h-[50px] mt-[5.4px]">
              <img
                src={Image2}
                alt="image2"
                className="object-cover lg:w-full lg:h-full w-[40px] h-[40px] md:w-[60px] md:h-[64px]"
              />
            </div>
            <div className="w-[140px] mt-4">
              <div className="flex items-center ">
                <Typography className="lg:text-xs text-[8px] md:text-[15px] text-black">
                  Maroon
                </Typography>
              </div>
              <Typography className="lg:text-[10.7px] text-[8px] md:text-[13px] text-black/60">
                stok 12374
              </Typography>
            </div>
          </div>
          <div className="bg-gray-200 lg:h-[60px] h-[50px] md:h-[75px] flex flex-col-2 gap-2 px-3">
            <div className="w-[120px] h-[50px] mt-[5.4px]">
              <img
                src={Image2}
                alt="image2"
                className="object-cover lg:w-full lg:h-full w-[40px] h-[40px] md:w-[60px] md:h-[64px]"
              />
            </div>
            <div className="w-[140px] mt-4 ">
              <div className="flex items-center ">
                <Typography className="lg:text-xs text-[8px] md:text-[15px] text-black">
                  Blue
                </Typography>
              </div>
              <Typography className="lg:text-[10.7px] text-[8px] md:text-[13px] text-black/60">
                stok 1234
              </Typography>
            </div>
          </div>
          <div className="bg-gray-200 lg:h-[60px] h-[50px] md:h-[75px] flex flex-col-2 gap-2 px-3">
            <div className="w-[120px] h-[50px] mt-[5.4px]">
              <img
                src={Image2}
                alt="image2"
                className="object-cover lg:w-full lg:h-full w-[40px] h-[40px] md:w-[60px] md:h-[64px]"
              />
            </div>
            <div className="w-[140px] mt-4 ">
              <div className="flex items-center ">
                <Typography className="lg:text-xs text-[8px] md:text-[15px] text-black">
                  Green
                </Typography>
              </div>
              <Typography className="lg:text-[10.7px] text-[8px] md:text-[13px] text-black/60">
                stok 1222
              </Typography>
            </div>
          </div>
          <div className="bg-gray-200 lg:h-[60px] h-[50px] md:h-[75px] flex flex-col-2 gap-2 px-3">
            <div className="w-[120px] h-[50px] mt-[5.4px]">
              <img
                src={Image2}
                alt="image2"
                className="object-cover lg:w-full lg:h-full w-[40px] h-[40px] md:w-[60px] md:h-[64px]"
              />
            </div>
            <div className="w-[140px] mt-4 ">
              <div className="flex items-center ">
                <Typography className="lg:text-xs text-[8px] md:text-[15px] text-black">
                  Black
                </Typography>
              </div>
              <Typography className="lg:text-[10.7px] text-[8px] md:text-[13px] text-black/60">
                stok 1123
              </Typography>
            </div>
          </div>
          <div className="bg-gray-200 lg:h-[60px] h-[50px] md:h-[75px] flex flex-col-2 gap-2 px-3">
            <div className="w-[120px] h-[50px] mt-[5.4px]">
              <img
                src={Image2}
                alt="image2"
                className="object-cover lg:w-full lg:h-full w-[40px] h-[40px] md:w-[60px] md:h-[64px]"
              />
            </div>
            <div className="w-[140px] mt-4 ">
              <div className="flex items-center ">
                <Typography className="lg:text-xs text-[8px] md:text-[15px] text-black">
                  Brown
                </Typography>
              </div>
              <Typography className="lg:text-[10.7px] text-[8px] md:text-[13px] text-black/60">
                stok 1555
              </Typography>
            </div>
          </div>
          <div className="bg-gray-200 lg:h-[60px] h-[50px] md:h-[75px] flex flex-col-2 gap-2 px-3">
            <div className="w-[120px] h-[50px] mt-[5.4px]">
              <img
                src={Image2}
                alt="image2"
                className="object-cover lg:w-full lg:h-full w-[40px] h-[40px] md:w-[60px] md:h-[64px]"
              />
            </div>
            <div className="w-[140px] mt-4 ">
              <div className="flex items-center ">
                <Typography className="lg:text-xs text-[8px] md:text-[15px] text-black">
                  Pink
                </Typography>
              </div>
              <Typography className="lg:text-[10.7px] text-[8px] md:text-[13px] text-black/60">
                stok 1666
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col-2 mt-5 gap-2">
          <div className="flex flex-col-2">
            <Button
              className="lg:w-[174px] md:w-[269px] w-[172px] size-12 text-xs flex flex-col-2 gap-2"
              loading={isLoading}
              disabled={isLoading}
              onClick={() => {
                handleAddToBag({
                  product_id: id,
                  product_name: product_name,
                  image: image,
                  price: price,
                  qty: 1,
                  size_id: sizeId,
                  size_name: sizeName,
                });
              }}
            >
              <a href="">
                <ShoppingBagIcon className="h-4 w-4 mt-[1px]" />
              </a>
              <Typography className="text-xs font-bold mt-[2px]">
                Add to Bag
              </Typography>
            </Button>
          </div>
          <Button
            className="lg:w-[174px] md:w-[269px] w-[172px] text-xs bg-black/40 text-black"
            variant="outlined"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </Button>
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-4 lg:gap-4 gap-4 md:gap-[228px] w-full lg:max-w-md mt-4 font-bold">
          <div className="lg:col-span-3 col-span-3 md:col-span-2">
            <Button
              variant="outlined"
              className="flex items-center gap-2 pl-12 lg:w-full md:w-[415px] w-full lg:h-[95%] h-[45px]"
            >
              <HeartIcon className="h-5 w-5" />
              <Typography className="font-bold text-xs lg:text-base md:text-base">
                ADD TO WISHLIST
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              className="lg:w-20 md:w-[90px] md:pl-8 lg:pl-7 pl-6"
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
