import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../swiper-home.css";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

function DetailImageHome({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="swiper-big-product-img-home rounded-xl"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-small-product-img-home rounded-lg mt-3 cursor-pointer"
      >
        {images.map((image, swiper) => {
          return (
            <SwiperSlide key={swiper}>
              <img src={image.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
export default DetailImageHome;
