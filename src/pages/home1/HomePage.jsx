import SwiperStore from "./SwiperStore";
import Banner from "../../assets/banner-utama.png";
import Logo from "../../assets/logo-auth.png";

function HomePage() {
  return (
    <>
      <figure className="relative lg:h-[570px] h-[350px] w-full">
        <div>
          <img
            src={Banner}
            alt="banner"
            className="w-full h-full object-contain lg:mt-0 mt-[50px]"
          />
          {/* <div className="absolute z-20 lg:bottom-9 bottom-[175px] lg:left-[370px] left-[105px]">
            <img
              src={Logo}
              alt="logo-banner"
              className="lg:h-[490px] lg:w-[490px] h-[190px] w-[190px] object-contain"
            />
          </div> */}
        </div>
      </figure>
      <div className="flex items-center justify-center">
        <div className="bg-[#EA017E] h-[16px] w-[80px] lg:mt-6 mt-[-265px] rounded-full" />
      </div>
      <div>
        <SwiperStore />
        {/* <SwiperAccessories /> */}
      </div>
    </>
  );
}

export default HomePage;
