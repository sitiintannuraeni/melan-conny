import Product from "../../assets/product-14.png";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../styles/swiper-modal-home.css";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

function ModalImgHome({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="lg:px-0 px-2 lg:p-8 p-0">
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
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="swiper-big-product-img-home rounded-xl select-none"
        >
          <SwiperSlide>
            <img
              src={Product}
              alt="product"
              className="object-contain h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Product}
              alt="product"
              className="object-contain h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Product}
              alt="product"
              className="object-contain h-full w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default ModalImgHome;
