import Logo from "../assets/melanconny-logo.png";

import {
  Card,
  CardBody,
  Typography,
  IconButton,
  CardHeader,
} from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAddToWishlistMutation } from "../services/apiWishList";
import { useSelector } from "react-redux";

export function CardProduct1({ id, img, name, price, is_wishlist }) {
  const navigate = useNavigate();
  const [isClickLove, setIsClickLove] = useState(is_wishlist);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const detailProduct = (id) => {
    navigate(`/detail/${id}`);
  };

  const Login = () => {
    navigate(`/login`);
  };

  const [
    addToWishlist,
    { data: responseApiWishlist, isLoading, isError, isSuccess, error },
  ] = useAddToWishlistMutation();

  const handleAddToWishlist = (data) => {
    if (!isLoggedIn) {
      // dispatch(setAuthLoginRedirect(location.pathname));
      Login();
    } else {
      console.log("add to wishlist");
      const dataBody = {
        product_id: data.product_id,
      };
      addToWishlist(dataBody);
    }
  };

  return (
    <div>
      <Card
        className="p-0 flex flex-col bg-[#202020] border-none w-full relative rounded-none h-[290px] lg:h-[280px] md:h-[500px] select-none"
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
            className=" rounded-md cursor-pointer relative z-20 w-full h-[190px] lg:h-[225px] md:h-[360px] object-cover"
            onClick={() => detailProduct(id)}
          />
          <div className="flex justify-between ">
            <div className="absolute z-20 -top-3 left-[10px] h-14 w-14">
              <img src={Logo} alt="logo" className="h-full w-full" />
            </div>
            {isClickLove ? (
              <div className="absolute z-20 top-3 right-[10px]">
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
                    handleAddToWishlist({
                      product_id: id,
                      // user_id: user.id,
                    });
                  }}
                >
                  <HeartIcon className="h-4 w-4 lg:h-4 lg:w-4 md:h-5 md:w-5" />
                </IconButton>
              </div>
            )}
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <Typography className="mt-3 bg-[#202020] text-white font-semibold rounded-b-md flex justify-start items-start">
            {name}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
