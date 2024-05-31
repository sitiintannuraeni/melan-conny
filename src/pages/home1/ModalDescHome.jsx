import { IconButton, Typography } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDialogDetailCardHome,
  openDialogLogin,
} from "../../slice/menuSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import NumberFormatCurrency from "../../utils";
import ModalImgHome from "./ModalImgHome";
import {
  useAddToBagItemsMutation,
  useUpdateToBagItemsMutation,
} from "../../services/apiBagsItems";
import { useAddToBagsMutation } from "../../services/apiBags";
import { useCallback } from "react";
import { useEffect } from "react";
import { setAuthLoginRedirect } from "../../slice/apiSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function ModalDescHome({
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
  const [isClickDetail, setIsClickDetail] = useState(false);

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
          dispatch(closeDialogDetailCardHome());
        } else {
          console.log("add to bag items");
          toast.success("Success add to cart");
          dispatch(closeDialogDetailCardHome());

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
      <div className="mt-7">
        <Typography className="text-white text-2xl font-semibold">
          Melancony
        </Typography>
        <Typography className="text-sm mt-2 text-white font-normal">
          deskripsi singkat tentang product
        </Typography>
        <Typography className="text-2xl font-semibold text-white mt-14">
          <NumberFormatCurrency value="834798" />
        </Typography>
        <Typography className="text-sm text-white mt-2">Ukuran</Typography>
        <div className="flex flex-col-6 mt-3 gap-3">
          <Button variant="outlined" size="sm" color="white">
            <Typography className="text-white">X</Typography>
          </Button>
          <Button variant="outlined" size="sm" color="white">
            <Typography className="text-white">X</Typography>
          </Button>
          <Button variant="outlined" size="sm" color="white">
            <Typography className="text-white">X</Typography>
          </Button>
          <Button size="sm" color="white">
            <Typography className="text-black">X</Typography>
          </Button>
        </div>
        <div className="grid grid-cols-2 mt-4 gap-2 pb-5">
          <Button className="bg-white">
            <Typography className="text-[9px] text-black font-bold">
              Add to Cart
            </Typography>
          </Button>
          <Button className="bg-[#FF0386]">
            <Typography className="text-[9px] font-bold">
              Checkout Now
            </Typography>
          </Button>
        </div>
      </div>
    </>
  );
}
export default ModalDescHome;
