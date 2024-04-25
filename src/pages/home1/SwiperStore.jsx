import { Card, Typography } from "@material-tailwind/react";
import Banner from "../../assets/banner-utama.png";
import Store from "../../assets/store.png";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles/swiper-detail.css";
import { Pagination } from "swiper/modules";
import Image1 from "../../assets/product-9.png";
import Image2 from "../../assets/product-10.png";
import Image3 from "../../assets/product-11.png";
import CardProduct from "../../components/CardProduct";
import { CardProduct1 } from "../../components/CardProduct1";

function SwiperStore() {
  return (
    <>
      <div className="py-20 -mt-[80px]">
        <div className="px-32 mt-10">
          <Typography className="text-white text-2xl font-bold">
            STORE
          </Typography>
          <div className="mt-10 flex flex-col-3 gap-3">
            <CardProduct1 img={Image1} name={"Melanconny Edition"} />
            <CardProduct1 img={Image2} name={"Naha Bogor"} />
            <CardProduct1 img={Image3} name={"Skull Edition"} />
            <CardProduct1 img={Image1} name={"Melanconny Edition"} />
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
                <SwiperSlide>
                  <CardProduct1 img={Image1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CardProduct1 img={Image2} />
                </SwiperSlide>
                <SwiperSlide>
                  <CardProduct1 img={Image3} />
                </SwiperSlide>
              </Swiper>
            </> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SwiperStore;
