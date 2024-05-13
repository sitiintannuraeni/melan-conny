import {
  Checkbox,
  IconButton,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import NumberFormatCurrency from "../utils";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  useDeleteFromBagItemsMutation,
  useGetBagItemsQuery,
  useUpdateToBagItemsMutation,
} from "../services/apiBagsItems";
import { useEffect } from "react";
import { useState } from "react";
import EmptyState from "./DrawerShopEmpty";
import { baseUrlApi } from "../services/apiCore";

function UpdateIncrementQty({ id, bagId, quantity, productId, sizeId }) {
  const [updateItem, { isLoading, isError, isSuccess, error }] =
    useUpdateToBagItemsMutation();

  const handleIncrementQty = async () => {
    const body = {
      bag_id: bagId,
      product_id: productId,
      size_id: sizeId,
      quantity: quantity + 1,
    };
    await updateItem({ id: id, data: body });
  };

  if (isLoading) {
    return (
      <IconButton
        variant="outlined"
        className=" rounded-md h-[25px] w-[25px]"
        disabled
      >
        <Spinner className="h-4 w-4" />
      </IconButton>
    );
  }

  return (
    <IconButton
      variant="outlined"
      className=" rounded-md h-[25px] w-[25px]"
      onClick={() => handleIncrementQty()}
      color="white"
    >
      <PlusIcon className="h-4 w-5 text-white" />
    </IconButton>
  );
}

function UpdateDecrementQty({ id, bagId, quantity, productId, sizeId }) {
  const [updateItem, { isLoading, isError, isSuccess, error }] =
    useUpdateToBagItemsMutation();

  const handleDecrementQty = async () => {
    if (quantity > 1) {
      const body = {
        bag_id: bagId,
        product_id: productId,
        size_id: sizeId,
        quantity: quantity - 1,
      };
      await updateItem({ id: id, data: body });
      console.log("handleDecrementQty", { body });
    }
  };

  if (isLoading) {
    return (
      <IconButton
        variant="outlined"
        className=" rounded-md h-[25px] w-[25px]"
        disabled
      >
        <Spinner className="h-4 w-4 text-white" />
      </IconButton>
    );
  }

  return (
    <IconButton
      variant="outlined"
      className=" rounded-md h-[25px] w-[25px]"
      onClick={() => handleDecrementQty()}
      color="white"
    >
      <MinusIcon className="X h-4 w-5 text-white" />
    </IconButton>
  );
}

export function QuantityItem({ id, bagId, quantity, productId, sizeId }) {
  const [currentQty, setCurrentQty] = useState(0);

  useEffect(() => {
    setCurrentQty(quantity);
  }, [quantity]);

  return (
    <>
      <div className="flex justify-start mt-3 space-x-3 w-[140px]">
        <UpdateDecrementQty
          id={id}
          bagId={bagId}
          quantity={quantity}
          productId={productId}
          sizeId={sizeId}
        />
        <Typography className="text-lg text-white">{currentQty}</Typography>
        <UpdateIncrementQty
          id={id}
          bagId={bagId}
          quantity={quantity}
          productId={productId}
          sizeId={sizeId}
        />
      </div>
    </>
  );
}

function RemoveBagItems({ id }) {
  const [deleteFromBagItems, { isLoading, isError, isSuccess, error }] =
    useDeleteFromBagItemsMutation();

  useEffect(() => {
    if (isSuccess) {
      console.log("Data Telah di Hapus");
    }
  }, [isSuccess]);

  const handleRemoveFromCart = (id) => {
    deleteFromBagItems({ id });
    console.log("handleRemoveFromCart", id);
  };

  return (
    <>
      {isLoading ? (
        <div className="w-[20px] flex justify-center items-start">
          <Spinner className="h-[13px] w-[13px]" />
        </div>
      ) : (
        <div
          className="w-[20px] flex justify-center items-start"
          onClick={() => handleRemoveFromCart(id)}
        >
          <XMarkIcon className="h-4 w-4 cursor-pointer text-white" />
        </div>
      )}
    </>
  );
}

function ListCardProduct() {
  const [isChecked, setIsChecked] = useState(false);

  const {
    data: cartProduct,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetBagItemsQuery();

  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <EmptyState />
      </>
    );
  }

  if (isSuccess) {
    return (
      <>
        {cartProduct.data.map((product, idx) => {
          return (
            <div key={idx} className="flex flex-col-3 mt-4 gap-2">
              <div className="w-[120px] flex justify-between">
                <div className="flex justify-start items-start select-none">
                  <Checkbox className="h-5 w-5" color="pink" />
                </div>
                <div className="flex justify-start items-start select-none">
                  <img
                    src={`${baseUrlApi}/${product.product.images[0].path}`}
                    alt="drawer1"
                    className="h-[100px] w-[65px] object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="gap-1 w-[210px] select-none">
                <Typography className="text-base text-white -mt-1">
                  {product.product.product_name}
                </Typography>
                <Typography className="text-base text-white">
                  {product.size.size_name}
                </Typography>
                <div className="flex flex-col-3 gap-2 items-center mt-1">
                  <Typography className="text-white text-sm">
                    Qty {product.quantity}
                  </Typography>
                  <Typography className="text-white text-xs">X</Typography>
                  <Typography className="text-white text-sm">
                    <NumberFormatCurrency value={product.product.price} />
                  </Typography>
                  {/* <Typography className="text-white">
                    <NumberFormatCurrency
                      value={product.quantity * product.product.price}
                    />
                  </Typography> */}
                </div>
                <QuantityItem
                  id={product.id}
                  bagId={product.bag_id}
                  quantity={product.quantity}
                  productId={product.product_id}
                  sizeId={product.size_id}
                />
              </div>
              <RemoveBagItems id={product.id} />
            </div>
          );
        })}
      </>
    );
  }
}
export default ListCardProduct;
