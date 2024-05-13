import { Button, Spinner, Typography } from "@material-tailwind/react";
import CardWishList from "./CardWishList";
import { useGetWishListQuery } from "../../services/apiWishList";
import { baseUrlApi } from "../../services/apiCore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WishListIsEmpty() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-10">
        <Typography className="text-base font-semibold text-white">
          Want to save the items you love
        </Typography>
        <Typography className="text-base mt-2 text-white">
          Just Click on the heart icon found on the product image and will show
          up here
        </Typography>
        <div className="mt-4">
          <Button
            onClick={() => navigate("/")}
            color="white"
            className="bg-[#F62C85]"
            size="sm"
          >
            <Typography className="text-white font-semibold">
              SHOP NOW
            </Typography>
          </Button>
        </div>
      </div>
    </>
  );
}

function WishList() {
  const navigate = useNavigate();
  const {
    data: wishlists,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetWishListQuery();

  console.log({ wishlists });

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center pr-36 mt-36">
          <Spinner className="h-8 w-8" />
        </div>
      </>
    );
  }

  return (
    <>
      <Typography className="font-semibold pl-5 lg:pl-0 text-white">
        My WishList
      </Typography>
      {/* <WishListIsEmpty /> */}
      {isError || wishlists.length <= 0 ? (
        <WishListIsEmpty />
      ) : (
        isSuccess && (
          <>
            <div className="w-full grid grid-cols-4 gap-3 border-gray-50 mt-7">
              {wishlists.data.map((wishlist, index) => (
                <CardWishList
                  key={index}
                  id={wishlist.id}
                  img={`${baseUrlApi}/${wishlist.product.images[0].path}`}
                  name={wishlist.product.product_name}
                  price={wishlist.product.price}
                />
              ))}
            </div>
          </>
        )
      )}
    </>
  );
}

export default WishList;
