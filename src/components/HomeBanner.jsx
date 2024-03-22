import { BrowserView, MobileView } from "react-device-detect";
import bannerPants from "../assets/banner1.png";
import bannerPants2 from "../assets/banner2.png";
import { Typography } from "@material-tailwind/react";

function HomeBanner() {
  return (
    <>
      <figure className="relative h-full w-full">
        <BrowserView>
          <img className="object-cover" src={bannerPants} alt="nature image" />
        </BrowserView>
        <MobileView>
          <img className="object-cover" src={bannerPants2} alt="nature image" />
        </MobileView>
        <figcaption className="absolute lg:bottom-10 md:bottom-8 bottom-3 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 px-3 bg-transparent">
          <Typography className="lg:text-2xl md:text-[18px] text-xs text-[#857F7F] text-center lg:px-[120px] px-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </figcaption>
      </figure>
      <div className="px-3 lg:px-40 lg:py-5 mt-7 lg:-mt-0 md:mt-4 flex items-center justify-center mb-8">
        <div className="lg:border-[8px] border-[6px] border-black rounded-lg lg:w-[90px] w-[50px]" />
      </div>
    </>
  );
}
export default HomeBanner;
