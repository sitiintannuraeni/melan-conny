import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Checkbox, Spinner, Typography } from "@material-tailwind/react";
import DrawerOne from "../../assets/drawer-1.png";
import { useSelector } from "react-redux";
import {
  useDeleteFromBagItemsMutation,
  useGetBagItemsQuery,
} from "../../services/apiBagsItems";
import { baseUrlApi } from "../../services/apiCore";
import NumberFormatCurrency from "../../utils";
import { QuantityItem } from "../../components/ListCartProduct";
import { useEffect } from "react";
import EmptyViewBag from "./Empty";

function RemoveViewBag({ id }) {
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

export function ProductViewBag() {
  const {
    data: cartProduct,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetBagItemsQuery();

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
                <RemoveViewBag id={product.id} />
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
