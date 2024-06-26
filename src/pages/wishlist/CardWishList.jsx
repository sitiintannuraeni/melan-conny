import { HeartIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/melanconny-logo.png";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import NumberFormatCurrency from "../../utils";
import { useDeleteFromWishlistMutation } from "../../services/apiWishList";
import { useState } from "react";
import { useEffect } from "react";

function CardWishList({ img, price, id: wishlist_id, name }) {
  const [isClickLove, setIsClickLove] = useState(false);
  // const [deleteFromWishlist, { isLoading, isError, isSuccess, error }] =
  //   useDeleteFromWishlistMutation();

  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log("Data Telah di Hapus");
  //   }
  // }, [isSuccess]);

  // const handleRemoveFromWishlist = (id) => {
  //   deleteFromWishlist({ id });
  //   console.log("handleRemoveFromCart", id);
  // };

  return (
    <>
      <Card
        className="p-0 flex flex-col bg-[#202020] border w-full relative rounded-none h-[290px] lg:h-[245px] md:h-[500px] select-none"
        shadow={false}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none p-0"
        >
          <img
            src={img}
            alt="product-image"
            className="rounded-none cursor-pointer relative z-20 w-full h-[190px] lg:h-[200px] md:h-[360px] object-cover"
          />
          <div className="flex justify-between ">
            <div className="absolute z-20 top-1 left-[10px] h-14 w-14">
              <img src={Logo} alt="logo" className="h-[50px] w-[50px]" />
            </div>
            {isClickLove ? (
              <div className="absolute z-20 top-3 right-[10px]">
                <IconButton
                  variant="text"
                  size="sm"
                  className="rounded-full bg-white "
                  onClick={() => setIsClickLove(false)}
                >
                  <HeartIcon className="h-4 w-4" />
                </IconButton>
              </div>
            ) : (
              <div className="absolute z-20 top-3 right-[10px] ">
                <IconButton
                  variant="text"
                  size="sm"
                  className="rounded-full bg-white"
                  onClick={() => {
                    setIsClickLove(true);
                    handleRemoveFromWishlist(wishlist_id);
                  }}
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
            )}
          </div>
        </CardHeader>
        <CardBody className="p-0 mt-3">
          <Typography className="text-white flex justify-center items-center text-[13px]">
            {name}
          </Typography>
        </CardBody>
        {/* <CardFooter className="h-8 p-0 text-black text-sm px-3">
          <NumberFormatCurrency value={price} />
        </CardFooter> */}
      </Card>
    </>
  );
}

export default CardWishList;
