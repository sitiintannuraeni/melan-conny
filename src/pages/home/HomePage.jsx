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
            <Typography className="text-md font-bold lg:font-normal">
              SHORT AND LONG T-SHIRT
            </Typography>
            <Button variant="outlined" size="sm" className="rounded-md">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 px- gap-3 lg:grid-cols-4 lg:gap-4 lg:px-20 pb-10">
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
          <div className="flex justify-between mb-12 px-20 items-center">
            <Typography>STYLEM PANTS</Typography>
            <Button variant="outlined" size="sm" className="rounded-md">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-20 pb-10">
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
        <img
          src={banner}
          alt="banner"
          className="h-full w-full"
          style={{ objectFit: "cover" }}
        />
        <div className="px-3 lg:px-40 py-5 flex items-center justify-center mb-8">
          <div className="border-[8px] b border-black rounded-lg w-[90px]" />
        </div>
        <ListProducts />
        <DetailCardHome />
      </div>
      <div>
        <img
          src={bannerPants}
          alt="banner"
          className="h-full w-full"
          style={{ objectFit: "cover" }}
        />
        <div className="px-3 lg:px-40 py-5 flex items-center justify-center mb-8">
          <div className="border-[8px] b border-black rounded-lg w-[90px]" />
        </div>
        <ListProductsPants />
        <DetailCardHome />
      </div>
    </>
  );
}

export default HomePage;
