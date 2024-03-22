import { Typography } from "@material-tailwind/react";
import Image1 from "../../assets/wishlist1.png";
import Image2 from "../../assets/wishlist2.png";
import Image3 from "../../assets/wishlist3.png";
import Image4 from "../../assets/wishlist4.png";
import CardWishList from "./CardWishList";
import { useGetWishListQuery } from "../../services/apiWishList";

function WishList() {
  const {
    data: whisLists,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetWishListQuery();
  console.log({ whisLists });
  return (
    <>
      <div className="fond-semibold">
        <Typography className="font-semibold pl-5 lg:pl-0">
          My WishList
        </Typography>
      </div>
      <div className="lg:flex lg:flex-col-4 grid grid-cols-2 lg:px-14 px-8 lg:gap-10 gap-2 pl-8 lg:pl-0">
        <CardWishList
          img={Image1}
          name={"Elgant Basic Shirt Black"}
          price={"Rp 185.000"}
        />
        <CardWishList
          img={Image2}
          name={"Elgant Basic Shirt White"}
          price={"Rp 185.000"}
        />
        <CardWishList
          img={Image3}
          name={"Elgant Basic Shirt Clean Look Sky"}
          price={"Rp 185.000"}
        />
        <CardWishList
          img={Image4}
          name={"Elgant Short Sleeve Shirt Black"}
          price={"Rp 170.000"}
        />
      </div>
    </>
  );
}

export default WishList;
