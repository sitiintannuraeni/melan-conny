import { Typography } from "@material-tailwind/react";
import Logo from "../../assets/logo1.png";
import TotalItems from "./TotalItems";
import Summary from "./Summary";

function ViewBag() {
  return (
    <>
      <div className="lg:px-14 px-7 lg:py-24 lg:-mt-12 -mt-7 py-14">
        <div className="mb-6 flex items-center">
          <img src={Logo} alt="logo" width="100" className=" object-cover" />
          <Typography variant="h5" color="blue-gray">
            SHOPPING BAG
          </Typography>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 -mt-3 gap-5 lg:space-x-32">
          <div>
            <TotalItems />
            <div className="border border-black/10 mt-2" />
          </div>
          <div className="">
            <div>
              <Summary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewBag;
