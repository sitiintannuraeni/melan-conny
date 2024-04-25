import Banner from "../../assets/banner-utama.png";
import { CardAccessories } from "../home1/SwiperAccessories";

function AccessoriesPage() {
  return (
    <>
      <img
        src={Banner}
        alt="banner"
        className="w-full h-[570px] object-cover"
      />
      <div className="flex items-center justify-center">
        <div className="bg-[#EA017E] h-[16px] w-[80px] mt-3 rounded-full" />
      </div>
      <div className="py-[90px] -mt-[30px] px-32">
        <CardAccessories className="mt-10" />
      </div>
    </>
  );
}
export default AccessoriesPage;
