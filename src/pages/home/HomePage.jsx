import { Alert, Button, Typography } from "@material-tailwind/react";
import banner from "../../assets/banner.png";
import bannerPants from "../../assets/banner1.png";
import { useGetProductsQuery } from "../../services/apiProduct.js";
import DetailCardHome from "./DetailCardHome.jsx";
import CardProduct from "../../components/CardProduct.jsx";
import Product1 from "../../assets/pants.png";
import Product2 from "../../assets/pants-1.png";
import Product3 from "../../assets/pants-2.png";
import Product4 from "../../assets/pants-3.png";
import Product5 from "../../assets/pants-4.png";
import Product6 from "../../assets/pants-5.png";
import SkeletonCardHome from "./SkeletonCardHome.jsx";

function ListProducts() {
  const {
    data: products,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();
  if (isLoading || isFetching) {
    console.log("is Loading Product");
    return (
      <>
        <SkeletonCardHome />
      </>
    );
  }

  if (isError) {
    console.log("is Erorr Product");
    return <></>;
  }

  if (isSuccess) {
    return (
      <>
        <div>
          <div className="flex justify-between mb-5 lg:mb-12 px-2 lg:px-20 items-center">
            <Typography className="text-lg font-bold">
              SHORT AND LONG T-SHIRT
            </Typography>
            <Button variant="outlined" size="sm" className="rounded-md">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 px-7 gap-3 lg:grid-cols-4 lg:gap-4 lg:px-20 pb-10">
            {products.map((product, index) => {
              return (
                <CardProduct
                  key={index}
                  id={product.id}
                  img={product.images[0].url}
                  name={product.product_name}
                  price={product.price}
                  items={`${product.total_sold} items sold`}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

function ListProductsPants() {
  const {
    data: products,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();
  if (isLoading || isFetching) {
    console.log("is Loading Product");
    return (
      <>
        <SkeletonCardHome />
      </>
    );
  }

  if (isError) {
    console.log("is Erorr Product");
    return <></>;
  }

  if (isSuccess) {
    return (
      <>
        <div>
          <div className="flex justify-between mb-5 lg:mb-12 px-2 lg:px-20 items-center">
            <Typography className="text-lg font-bold">STYLEM PANTS</Typography>
            <Button variant="outlined" size="sm" className="rounded-md">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 px-7 gap-3 lg:grid-cols-4 lg:gap-4 lg:px-20 pb-10">
            {products.map((product, index) => {
              return (
                <CardProduct
                  key={index}
                  id={product.id}
                  img={product.images[0].url}
                  name={product.product_name}
                  price={product.price}
                  items={`${product.total_sold} items sold`}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
function HomePage() {
  return (
    <>
      <div>
        <figure className="relative h-full w-full">
          <img className="object-cover" src={banner} alt="nature image" />
          <figcaption className="absolute bottom-52 left-2/4 grid w-[calc(55%-4rem)] -translate-x-2/4 grid-rows-2">
            <div className="flex justify-between lg:h-[30px] px-[172px]">
              <Typography className="text-lg font-semibold">
                Regular Vit |
              </Typography>
              <Typography className="text-lg text-white font-semibold pr-[58px]">
                Oversided fit
              </Typography>
            </div>
            <div className="py-4 px-6 -translate-y-[50px]">
              <Typography className="text-[#5E5C5C] text-[19px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
          </figcaption>
        </figure>
        <div className="px-3 lg:px-40 py-5 flex items-center justify-center mb-8">
          <div className="lg:border-[8px] border-[6px] border-black rounded-lg lg:w-[90px] w-[60px]" />
        </div>
        <ListProducts />
        <DetailCardHome />
      </div>
      <div>
        <figure className="relative h-full w-full">
          <img className="object-cover" src={bannerPants} alt="nature image" />
          <figcaption className="absolute lg:bottom-10 bottom-3 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 px-3 bg-transparent">
            <Typography className="lg:text-2xl text-xs text-[#857F7F] text-center lg:px-[120px] px-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </figcaption>
        </figure>
        <div className="px-3 lg:px-40 py-5 flex items-center justify-center mb-8">
          <div className="lg:border-[8px] border-[6px] border-black rounded-lg lg:w-[90px] w-[60px]" />
        </div>
        <ListProductsPants />
      </div>
    </>
  );
}

export default HomePage;
