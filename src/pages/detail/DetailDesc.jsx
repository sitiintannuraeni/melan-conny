import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShareIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";
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
        <Typography className="font-medium tracking-wide lg:text-lg text-lg md:text-xl text-white">
          {product_name}
        </Typography>
        <Typography className="font-medium tracking-wide lg:text-base md:text-lg text-base mt-2 text-white">
          <NumberFormatCurrency value={price} />
        </Typography>
        <div className="border border-white mt-4" />
        <Typography className="mt-3 text-white text-sm">{desc}</Typography>
        <div className="border border-white mt-3" />
        <Typography className="lg:mt-5 mt-2 text-md text-white">
          Select Size
        </Typography>
        <div className="grid lg:grid-cols-10 grid-cols-7 lg:gap-[61px] gap-[54px] md:gap-[10px] mt-3 lg:w-full w-full md:w-[750 px]">
          {size.map((ukuran, index) => {
            return (
              <Button
                key={index}
                variant={activeSize === ukuran.id ? "filled" : "outlined"}
                onClick={() => handleSelectSize(ukuran)}
                className="text-sm text-white h-[40px] w-full flex justify-center items-center"
                color="pink"
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
        <div className="mt-5 flex flex-col-2 gap-3 items-center">
          <IconButton variant="outlined" color="white">
            <PlusIcon className="h-5 w-5 text-white" />
          </IconButton>
          <Typography className="text-white text-xl">1</Typography>
          <IconButton variant="outlined" color="white">
            <MinusIcon className="h-5 w-5 text-white" />
          </IconButton>
          <Typography className="text-white">Stock : 123</Typography>
        </div>
        <div className="flex flex-col-2 mt-5 gap-2">
          <div className="flex flex-col-2">
            <Button
              className="lg:w-[174px] md:w-[269px] w-[172px] size-12 text-xs flex flex-col-3 gap-2 border border-white"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <Typography className="text-sm mt-[1px] font-semibold">
                ADD TO BAG
              </Typography>
            </Button>
          </div>
          <Button
            className="lg:w-[174px] md:w-[269px] w-[172px] text-sm bg-[#F62C85] text-white"
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
              className="flex items-center gap-2 pl-12 lg:w-full md:w-[415px] w-full lg:h-[95%] h-[45px] bg-white"
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
              className="lg:w-20 md:w-[90px] md:pl-8 lg:pl-7 pl-6 bg-white text-black"
              fullWidth
              size="md"
              onClick={() => dispatch(openDialogShareLink())}
            >
              <ShareIcon className="h-5 w-5 flex-auto" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailDesc;
