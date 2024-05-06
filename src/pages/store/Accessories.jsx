import Banner from "../../assets/banner-utama.png";
import Logo from "../../assets/logo-auth.png";
import { IconButton } from "@material-tailwind/react";
import Product1 from "../../assets/product-2.png";
import Product2 from "../../assets/product-2.png";
import Product3 from "../../assets/product-3.png";
import Product4 from "../../assets/product-4.png";

export function CardAccessories() {
  return (
    <>
      <div className="mt-10 grid lg:grid-cols-4 grid-cols-2 gap-3">
        <div>
          <img src={Product1} alt="product-1" />
        </div>
        <div>
          <img src={Product2} alt="product-1" />
        </div>
        <div>
          <img src={Product3} alt="product-1" />
        </div>
        <div>
          <img src={Product4} alt="product-1" />
        </div>
      </div>
    </>
  );
}

function Accessories() {
  return (
    <>
      <img
        src={Banner}
        alt="banner"
        className="w-full h-[570px] object-cover"
      />
      <div className="flex items-center justify-center">
        <div className="bg-[#EA017E] h-[16px] w-[80px] lg:mt-6 mt-[-265px] rounded-full" />
      </div>
      <div className="py-[90px] -mt-[30px] px-32 relative">
        <CardAccessories className="mt-10" />
        <div className="absolute z-20 top-44 right-[2px] ">
          <IconButton>{/* <HeartIcon className="h-4 w-4" /> */}</IconButton>
        </div>
      </div>
    </>
  );
}
export default Accessories;
