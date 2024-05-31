import { HeartIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { openDialogDetailCardHome, openDialogLogin } from "../slice/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import NumberFormatCurrency from "../utils";
import { useState } from "react";
import { useAddToWishlistMutation } from "../services/apiWishList";
import { setAuthLoginRedirect } from "../slice/apiSlice";

function CardProduct({ id, img, name, price, items, is_wishlist }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isClickLove, setIsClickLove] = useState(is_wishlist);
  const { user } = useSelector((state) => state.auth);

  const detailProduct = (id) => {
    navigate(`/detail/${id}`);
  };

  const [
    addToWishlist,
    { data: responseApiWishlist, isLoading, isError, isSuccess, error },
  ] = useAddToWishlistMutation();

  const handleAddToBag = (data) => {
    if (!isLoggedIn) {
      dispatch(setAuthLoginRedirect(location.pathname));
      dispatch(openDialogLogin());
    } else {
      console.log("add to wishlist");
      const dataBody = {
        product_id: data.product_id,
      };
      addToWishlist(dataBody);
    }
  };

  return (
    <Card
      className="p-0 flex flex-col bg-transparent w-full relative h-[290px] lg:h-[385px] md:h-[500px] select-none"
      shadow={false}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={img}
          alt="product-img"
          className="cursor-pointer relative z-20 w-full h-[170px] lg:h-[360px] md:h-[360px] object-cover rounded-none"
          onClick={() => detailProduct(id)}
        />
        {/* {isClickLove ? (
          <div className="absolute z-20 top-3 right-[10px] ">
            <IconButton
              variant="text"
              size="sm"
              className="rounded-full bg-white"
              onClick={() => setIsClickLove(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#D90429]"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </IconButton>
          </div>
        ) : (
          <div className="absolute z-20 top-3 right-[10px]">
            <IconButton
              variant="text"
              size="sm"
              className="rounded-full bg-white "
              onClick={() => {
                setIsClickLove(true);
                handleAddToBag({
                  product_id: id,
                  user_id: user.id,
                  total_price: price,
                });
              }}
            >
              <HeartIcon className="h-4 w-4 lg:h-4 lg:w-4 md:h-5 md:w-5" />
            </IconButton>
          </div>
        )} */}
        <div className="absolute z-20 bottom-2 right-[10px]">
          <Button
            variant="outlined"
            size="sm"
            className="px-3 lg:flex hidden bg-black !bg-opacity-20 border-white border-2 rounded-full text-white gap-2 justify-center items-center"
            onClick={() => dispatch(openDialogDetailCardHome())}
          >
            <Typography className="font-['Helvetica'] text-[10px] font-bold">
              Quick View
            </Typography>
          </Button>
        </div>
      </CardHeader>
      <CardBody className="p-0 md:h-[100px] h-[100px] lg:h-[70px] mt-3 ">
        <div className="">
          <div className="flex flex-col justify-start items-start text-start lg:flex-row">
            <Typography className="font-['Helvetica'] lg:font-semibold font-normal lg:text-base text-[13px] md:text-[20px] text-white">
              {name}
            </Typography>
          </div>
          <div className="flex justify-start items-start">
            <Typography className="text-sm text-white">
              <NumberFormatCurrency value={price} />
            </Typography>
          </div>
          <div className="flex justify-start items-start mt-1">
            <Typography className="font-['Helvetica'] font-medium lg:text-[11px] text-[12px] md:text-[18px] flex text-gray-500">
              {items}
            </Typography>
          </div>
          <Typography className="lg:hidden font-normal text-start text-xs md:text-[17px] text-white">
            <NumberFormatCurrency value={price} />
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="p-0 mt-10">
        <Button
          variant="outlined"
          className="normal-case hidden lg:inline text-white bg-[#FF0386] w-full"
          size="sm"
        >
          <Typography className="text-base font-semibold">
            Add to Cart
          </Typography>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardProduct;
