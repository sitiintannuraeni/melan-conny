import {
  Button,
  Checkbox,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Logo from "../../assets/logo1.png";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import TotalItems from "./TotalItems";
import Summary from "./Summary";

function ViewBag() {
  return (
    <>
      <div className="px-14 py-24 -mt-12">
        <div className="mb-6 flex items-center">
          <img src={Logo} alt="logo" width="100" className=" object-cover" />
          <Typography variant="h5" color="blue-gray">
            SHOPPING BAG
          </Typography>
        </div>
        <div className="grid grid-cols-2 -mt-3 gap-5">
          <div>
            <TotalItems />
            <div className="border border-black/10 mt-2" />
          </div>
          <div>
            <Summary />
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewBag;
