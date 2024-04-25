import SwiperAccessories from "./SwiperAccessories";
import SwiperStore from "./SwiperStore";
import Banner from "../../assets/banner-utama.png";
import Logo from "../../assets/logo-auth.png";

function HomePage() {
  return (
    <>
      <div className="relative">
        <img
          src={Banner}
          alt="banner"
          className="w-full h-[570px] object-cover"
        />
        <div className="absolute z-20 bottom-9 left-[370px]">
          <img
            src={Logo}
            alt="logo-banner"
            className="h-[490px] w-[490px] object-contain"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-[#EA017E] h-[16px] w-[80px] mt-3 rounded-full" />
      </div>
      <div>
        <SwiperStore />
        <SwiperAccessories />
      </div>
    </>
  );
}

export default HomePage;
