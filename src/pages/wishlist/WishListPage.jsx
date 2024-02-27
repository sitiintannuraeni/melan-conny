import Sidebar from "../../components/Sidebar";
import Logo from "../../assets/logo1.png";
import { IconButton, Typography } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image1 from "../../assets/wishlist1.png";
import Image2 from "../../assets/wishlist2.png";
import Image3 from "../../assets/wishlist3.png";
import Image4 from "../../assets/wishlist4.png";

function CardWishList({ img, name, price }) {
  return (
    <Card
      className="max-w-[10rem] mt-7 rounded-t-lg border border-gray-200"
      shadow={false}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 h-62 relative rounded-none pb-3"
      >
        <img src={img} alt="" />
        <div className="absolute z-20 top-3 right-[10px] bg-transparent">
          <IconButton
            variant="text"
            size="sm"
            className="rounded-full bg-white "
          >
            <HeartIcon className="h-4 w-4" />
          </IconButton>
        </div>
      </CardHeader>
      <CardBody className="flex justify-start items-start p-0 h-10 px-3">
        <Typography className="text-sm text-black">{name}</Typography>
      </CardBody>
      <CardFooter className="h-8 p-0 text-black text-sm px-3">
        {price}
      </CardFooter>
    </Card>
  );
}

function WishList() {
  return (
    <>
      <div className="mt-7 px-24 pb-44 cursor-default">
        <div className="pb-10">
          <div className="flex justify-center items-center pb-3">
            <img
              src={Logo}
              alt="logo"
              className="h-[122px] w-[150px] object-cover"
            />
          </div>
          <div className="grid grid-rows-2 justify-center">
            <Typography className="text-center  ">
              MEN'S FASHION STORE Account
            </Typography>
            <Typography className="text-[#989898]">
              You can manage your account and track your order here
            </Typography>
          </div>
          <div className=" border-b-[1px] border-black mt-12 w-full" />
        </div>
        <div className="flex flex-col-2 gap-20 w-full">
          <div>
            <Sidebar />
          </div>
          <div className="w-full">
            <div className="fond-semibold">
              <Typography className="font-semibold">My WishList</Typography>
            </div>
            <div className="flex flex-col-4 gap-10">
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
                name={"Elgant Basic Shirt Clean Look Sky Blue"}
                price={"Rp 185.000"}
              />
              <CardWishList
                img={Image4}
                name={"Elgant Short Sleeve Shirt Black"}
                price={"Rp 170.000"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishList;
