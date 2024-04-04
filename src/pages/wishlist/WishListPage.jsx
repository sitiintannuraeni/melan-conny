import { Spinner, Typography } from "@material-tailwind/react";
import CardWishList from "./CardWishList";
import { useGetWishListQuery } from "../../services/apiWishList";
import { baseUrlApi } from "../../services/apiCore";
import { useState } from "react";

function WishListIsEmpty() {
  return (
    <>
      <div>
        <Typography>Want to save the items you love</Typography>
        <Typography>
          Just Click on the heart icon found on the product image and will show
          up here
        </Typography>
      </div>
    </>
  );
}

function WishList() {
  const {
    data: wishlists,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetWishListQuery();

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
      <Typography className="font-semibold pl-5 lg:pl-0">
        My WishList
      </Typography>
      {isError || wishlists.length <= 0 ? (
        <WishListIsEmpty />
      ) : (
        isSuccess && (
          <>
            <div className="w-[600px] grid grid-cols-4 gap-3 border-gray-50">
              {wishlists.data.map((wishlist, index) => (
                <CardWishList
                  key={index}
                  id={wishlist.wishlist_id}
                  img={`${baseUrlApi}/${wishlist.product_images[0].path}`}
                  name={wishlist.product_name}
                  price={wishlist.total_price}
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
