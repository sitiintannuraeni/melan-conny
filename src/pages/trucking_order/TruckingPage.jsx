import {
  Button,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import Logo from "../../assets/logo1.png";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { current } from "@reduxjs/toolkit";
function TruckingPage() {
  const [truckingOrders, setTruckingOrders] = useState([{ id: 1 }]);

  const handleAddInputTruckingOrders = () => {
    setTruckingOrders((current) => [
      ...current,
      { id: current[current.length - 1].id + 1 },
    ]);
  };

  const handleRemoveInputTruckingOrders = (id) => {
    setTruckingOrders((current) => current.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="lg:px-[245px] px-3 py-14">
        <div className="pb-10">
          <div className="flex justify-center items-center pb-3">
            <img
              src={Logo}
              alt="logo"
              className="h-[122px] w-[150px] object-cover"
            />
          </div>
          <div className="grid grid-rows justify-center mt-2">
            <Typography className="text-center">MEN’S FASHION STORE</Typography>
          </div>
          <div className="border-b-[1px] border-black/20 mt-6 w-full" />
          <Typography className="flex justify-center items-center mt-6">
            Order Number Tracking
          </Typography>

          <div className="flex flex-col gap-2">
            {truckingOrders.map((truckingOrder, index) => {
              const isLastItem =
                index + 1 === truckingOrders.length ||
                truckingOrders.length === 1;
              return (
                <div
                  className="flex justify-center flex-col-2 items-center"
                  key={index}
                >
                  <div className="lg:w-80 w-64">
                    <Input variant="static" placeholder="Insert order number" />
                  </div>
                  <IconButton
                    variant="outlined"
                    className="rounded-md lg:h-8 lg:w-8 h-7 w-7 mt-2"
                    onClick={() =>
                      isLastItem
                        ? handleAddInputTruckingOrders()
                        : handleRemoveInputTruckingOrders(truckingOrder.id)
                    }
                  >
                    {isLastItem ? (
                      <PlusIcon className="h-4 w-4" />
                    ) : (
                      <XMarkIcon className="h-4 w-4" />
                    )}
                  </IconButton>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center mt-6">
            <Button className="bg-[#D9D9D9] lg:w-64 w-56">SUBMIT</Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TruckingPage;
