import SwiperStore from "./SwiperStore";
import Banner from "../../assets/banner-utama.png";

function HomePage() {
  return (
    <>
      <figure className=" lg:h-[570px] h-[350px] w-full">
        <div>
          <img
            src={Banner}
            alt="banner"
            className="w-full h-full object-contain lg:mt-0 mt-[50px]"
          />
        </div>
      </figure>
      <div className="flex items-center justify-center">
        <div className="bg-[#EA017E] h-[16px] w-[80px] lg:mt-6 mt-[-265px] rounded-full" />
      </div>
      <div>
        <SwiperStore />
      </div>
    </>
  );
}

export default HomePage;
