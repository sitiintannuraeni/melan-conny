import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles/swiper-detail.css";

// import required modules
import { Pagination } from "swiper/modules";
import CardProduct from "../../components/CardProduct";
import { BrowserView, MobileView } from "react-device-detect";
import { useGetProductBySalesQuery } from "../../services/apiProduct";
import DetailCardHome from "../home/DetailCardHome";
export default function ProductSwipper({ images }) {
  const {
    data: recommendation,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetProductBySalesQuery();

  if (isLoading || isFetching) {
    console.log("is Loading");
    return <></>;
  }

  if (isError) {
    console.log("is Error");
  }

  if (isSuccess) {
    return (
      <>
        <div className="pb-10 lg:px-3 px-4 lg:mt-4 mt-6">
          <BrowserView>
            <Swiper
              slidesPerView={4}
              spaceBetween={16}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="productSwiper"
            >
              {recommendation.map((recommend, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CardProduct
                      id={recommend.id}
                      img={recommend.images[0].url}
                      name={recommend.product_name}
                      price={recommend.price}
                      items={`${recommend.total_sold} items sold`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <DetailCardHome />
          </BrowserView>
          <MobileView>
            <Swiper
              slidesPerView={2}
              spaceBetween={16}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="productSwiper"
            >
              {recommendation.map((recommend, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CardProduct
                      id={recommend.id}
                      img={recommend.images[0].url}
                      name={recommend.product_name}
                      price={recommend.price}
                      items={`${recommend.total_sold} items sold`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </MobileView>
        </div>
      </>
    );
  }
}
