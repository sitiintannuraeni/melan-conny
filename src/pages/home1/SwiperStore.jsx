import { Card, Typography } from "@material-tailwind/react";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles/swiper-home1.css";
import { Pagination } from "swiper/modules";
import { useGetProductsByGroupCategoryQuery } from "../../services/apiProduct.js";
import { baseUrlApi } from "../../services/apiCore.js";
import CardProduct from "../../components/CardProduct.jsx";
import SkeletonHomePage from "./SkeletonHomePage.jsx";

function SwiperStore() {
  const {
    data: productByCategory,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetProductsByGroupCategoryQuery();

  if (isLoading || isFetching) {
    return (
      <>
        <SkeletonHomePage />;
      </>
    );
  }

  if (isSuccess) {
    return (
      <>
        {productByCategory.map((category, categoryIndex) => (
          <div className="pb-14" key={categoryIndex}>
            <div className="lg:px-32 px-8 lg:mt-10 mt-[-70px]">
              <Typography className="text-white text-2xl font-bold">
                {category.category_name}
              </Typography>
              <div className="mt-10">
                <>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {category.products.map((product, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <CardProduct
                            id={product.id}
                            img={`${baseUrlApi}/${product.images[0].path}`}
                            name={product.product_name}
                            price={product.price}
                            items={`${product.total_sold} items sold`}
                            is_wishlist={product.is_wishlist}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default SwiperStore;
