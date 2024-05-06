import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Checkbox, Spinner, Typography } from "@material-tailwind/react";
import DrawerOne from "../../assets/drawer-1.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  useDeleteFromBagItemsMutation,
  useGetBagItemsQuery,
} from "../../services/apiBagsItems";
import { baseUrlApi } from "../../services/apiCore";
import NumberFormatCurrency from "../../utils";
import { useEffect } from "react";
import { QuantityItem } from "../../components/ListCartProduct";
import { useNavigate } from "react-router-dom";

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
        <div className="w-[20px] flex justify-center items-start mt-4">
          <Spinner className="h-[13px] w-[13px]" />
        </div>
      ) : (
        <div
          className="w-[20px] flex justify-center items-start mt-4"
          onClick={() => handleRemoveFromCart(id)}
        >
          <XMarkIcon className="h-4 w-4 cursor-pointer text-white" />
        </div>
      )}
    </>
  );
}

function Product() {
  const {
    data: cartProduct,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetBagItemsQuery();

  // if (isLoading) {
  //   <div className="w-[20px] flex justify-center items-start mt-4">
  //     <Spinner className="h-[13px] w-[13px]" />
  //   </div>;
  // }

  if (isSuccess) {
    console.log({ cartProduct });
    return (
      <>
        {cartProduct.data.map((product, idx) => {
          return (
            <div key={idx} className="grid grid-cols-2">
              <div className="flex flex-col-2 gap-4 w-[500px]">
                <div className="flex flex-col-2 gap-2 mt-3 rounded-md">
                  <Checkbox defaultChecked color="pink" />
                  <img
                    src={`${baseUrlApi}/${product.product.images[0].path}`}
                    alt="product"
                    className="h-[115px] w-[90px] object-cover rounded-md"
                  />
                </div>
                <div className="mt-3">
                  <Typography className="text-white">
                    {product.product.product_name}
                  </Typography>
                  <Typography className="text-white">
                    <NumberFormatCurrency value={product.product.price} />
                  </Typography>
                  <Typography className="text-white">
                    {product.size.size_name}
                  </Typography>
                  <Typography className="text-white">
                    <QuantityItem
                      id={product.id}
                      bagId={product.bag_id}
                      quantity={product.quantity}
                      productId={product.product_id}
                      sizeId={product.size_id}
                    />
                  </Typography>
                </div>
              </div>
              <div className="flex justify-end">
                <RemoveBagItems />
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

function TotalItems() {
  const { qtyTotal } = useSelector((state) => state.cart);

  return (
    <>
      <div className="-mt-10">
        <Typography className="text-xs text-white">
          Total {qtyTotal} item(s)
        </Typography>
        <div className="border border-white mt-2" />
        <div className="mt-1 flex justify-start space-x-2">
          <Checkbox defaultChecked color="pink" />
          <Typography className="lg:mt-[9.5px] mt-3 lg:text-base text-xs text-white ">
            ALL ITEMS
          </Typography>
        </div>
        <div className="">
          <Product />
        </div>
      </div>
    </>
  );
}
export default TotalItems;
