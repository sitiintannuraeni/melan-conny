import { Alert, Button, Typography } from "@material-tailwind/react";
import CardProduct from "../../components/CardProduct";
import banner from "../../assets/banner.png";
import { useGetProductsQuery } from "../../services/apiProduct.js";
import { useEffect, useState } from "react";
import DetailCardHome from "./DetailCardHome.jsx";

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
    return <></>;
  }

  if (isError) {
    console.log("is Erorr Product");
    return <></>;
  }

  if (isSuccess) {
    return (
      <>
        <div className="grid justify-items-center items-center mb-12">
          <Typography variant="h4" className="font-['Helvetica']">
            TOP SELLING
          </Typography>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-3">
          {products.map((product, index) => {
            return (
              <CardProduct
                key={index}
                id={product.id}
                img={product.images[0].url}
                name={product.product_name}
                harga={product.price}
                items={`${product.total_sold} items sold`}
              />
            );
          })}
        </div>
      </>
    );
  }
}

function HomePage() {
  return (
    <>
      <img
        src={banner}
        alt="banner"
        className="h-full w-full"
        style={{ objectFit: "cover" }}
      />
      <div className="px-3 lg:px-40 py-10 flex items-center justify-center mb-8">
        <Alert
          variant="outlined"
          className="flex justify-start lg:justify-center items-center border-gray-500 font-light"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          doloremque voluptatibus unde eos cum facere.
        </Alert>
      </div>
      <ListProducts />
      <DetailCardHome />
    </>
  );
}

export default HomePage;
