import { Typography } from "@material-tailwind/react";
import AppStore from "../../assets/app-store.png";
import GooglePlay from "../../assets/google-play.png";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles/swiper-detail.css";
import { Pagination } from "swiper/modules";
import Image1 from "../../assets/product-12.png";
import Image2 from "../../assets/product-13.png";
import { CardProduct1 } from "../../components/CardProduct1";

export function CardAccessories() {
  return (
    <>
      <Typography className="text-white text-2xl font-bold">
        ACCESSORIES
      </Typography>
      <div className="mt-10 flex flex-col-3 gap-3">
        <CardProduct1 img={Image1} name={"Melanconny Edition"} />
        <CardProduct1 img={Image2} name={"Naha Bogor"} />
        <CardProduct1 img={Image1} name={"Melanconny Edition"} />
        <CardProduct1 img={Image2} name={"Naha Bogor"} />
      </div>
    </>
  );
}

function SwiperAccessories() {
  return (
    <>
      <div className="py-14 -mt-[100px] ">
        <div className="px-32 mt-10">
          <div className="mt-10">
            <CardAccessories />
            {/* <>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </> */}
            <div className="flex justify-center mt-[100px]">
              <Typography className="text-xl text-white font-bold">
                Download Sekarang
              </Typography>
            </div>
            <div className="flex flex-col-2 justify-center mt-3 gap-4">
              <img
                src={AppStore}
                alt="appStore"
                className="h-20 w-[190px] object-contain"
              />
              <img
                src={GooglePlay}
                alt="googlePlay"
                className="h-20 w-[200px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SwiperAccessories;
