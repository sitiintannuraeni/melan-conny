import { Checkbox, IconButton, Typography } from "@material-tailwind/react";
import NumberFormatCurrency from "../utils";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
  setPriceTotal,
  setQtyTotal,
} from "../slice/cartSlice";

function ListCardProduct({ image, productName, price }) {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // add index value
  const cartProduct = products.map((prod, idx) => ({ index: idx, ...prod }));

  // sort based on index from high to low
  cartProduct.sort((a, b) => b.index - a.index);

  const handleIncrementQty = (data) => {
    dispatch(incrementQty(data));
    dispatch(setPriceTotal());
    dispatch(setQtyTotal());
  };

  const handleDecrementQty = (data) => {
    dispatch(decrementQty(data));
    dispatch(setPriceTotal());
    dispatch(setQtyTotal());
  };

  const handleRemoveFromCart = (data) => {
    dispatch(removeFromCart(data));
    dispatch(setPriceTotal());
    dispatch(setQtyTotal());
  };
  return (
    <>
      <div className="">
        {cartProduct.map((product, idx) => {
          return (
            <div key={idx} className="flex flex-col-3 mt-4 gap-2">
              <div className="w-[120px] flex justify-between">
                <div className="flex justify-start items-start">
                  <Checkbox className="h-5 w-5" />
                </div>
                <div className="flex justify-start items-start">
                  <img
                    src={product.image}
                    alt="drawer1"
                    className="h-[100px] w-[65px] object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="gap-1 w-[210px]">
                <Typography className="text-sm">
                  {product.product_name}
                </Typography>
                <Typography className="text-sm">
                  <NumberFormatCurrency value={product.qty * product.price} />
                </Typography>
                <Typography className="mt-3 text-sm">
                  {product.size_name}
                </Typography>
                <div className="flex justify-start mt-2 space-x-3 w-[140px]">
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                    onClick={() =>
                      handleDecrementQty({
                        id: product.id,
                        size_id: product.size_id,
                      })
                    }
                  >
                    <MinusIcon className="text-black h-4 w-5" />
                  </IconButton>
                  <Typography className="text-lg">{product.qty}</Typography>
                  <IconButton
                    variant="outlined"
                    className=" rounded-md h-[25px] w-[25px]"
                    onClick={() =>
                      handleIncrementQty({
                        id: product.id,
                        size_id: product.size_id,
                      })
                    }
                  >
                    <PlusIcon className="text-black h-4 w-5" />
                  </IconButton>
                </div>
              </div>
              <div
                className="w-[20px] flex justify-center items-start"
                onClick={() =>
                  handleRemoveFromCart({
                    id: product.id,
                    size_id: product.size_id,
                  })
                }
              >
                <XMarkIcon className="h-4 w-4 cursor-pointer" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ListCardProduct;
