import {
  Button,
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
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import EmptyState from "./DrawerShopEmpty";

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
    >
      <PlusIcon className="text-black h-4 w-5" />
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
        <Spinner className="h-4 w-4" />
      </IconButton>
    );
  }

  return (
    <IconButton
      variant="outlined"
      className=" rounded-md h-[25px] w-[25px]"
      onClick={() => handleDecrementQty()}
    >
      <MinusIcon className="text-black h-4 w-5" />
    </IconButton>
  );
}

function QuantityItem({ id, bagId, quantity, productId, sizeId }) {
  const [currentQty, setCurrentQty] = useState(0);

  useEffect(() => {
    setCurrentQty(quantity);
  }, [quantity]);

  return (
    <>
      <div className="flex justify-start mt-2 space-x-3 w-[140px]">
        <UpdateDecrementQty
          id={id}
          bagId={bagId}
          quantity={quantity}
          productId={productId}
          sizeId={sizeId}
        />
        <Typography className="text-lg">{currentQty}</Typography>
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
          <XMarkIcon className="h-4 w-4 cursor-pointer" />
        </div>
      )}
    </>
  );
}

function ListCardProduct() {
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
        <div className="">
          {cartProduct.data.map((product, idx) => {
            return (
              <div key={idx} className="flex flex-col-3 mt-4 gap-2">
                <div className="w-[120px] flex justify-between">
                  <div className="flex justify-start items-start select-none">
                    <Checkbox className="h-5 w-5" />
                  </div>
                  <div className="flex justify-start items-start select-none">
                    <img
                      src={product.product_image}
                      alt="drawer1"
                      className="h-[100px] w-[65px] object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="gap-1 w-[210px] select-none">
                  <Typography className="text-sm">
                    {product.product_name}
                  </Typography>
                  <Typography className="text-sm">
                    <NumberFormatCurrency
                      value={product.quantity * product.product_price}
                    />
                  </Typography>
                  <Typography className="mt-3 text-sm">
                    {product.size_name}
                  </Typography>
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
        </div>
      </>
    );
  }
}
export default ListCardProduct;
