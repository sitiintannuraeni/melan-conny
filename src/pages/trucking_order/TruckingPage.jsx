import {
  Button,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import Logo from "../../assets/logo-auth.png";
import {
  ArrowLeftIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { current } from "@reduxjs/toolkit";
import OrderList from "./OrderList";
import { useNavigate } from "react-router-dom";
function TruckingPage() {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
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
      {isSubmit ? (
        <OrderList />
      ) : (
        <div className="lg:px-[245px] px-3 py-14">
          <div className="pb-8">
            <div className="flex justify-center items-center pb-3 -mt-10">
              <img
                src={Logo}
                alt="logo"
                className="h-[200px] w-[200px] object-contain"
              />
            </div>
            <div className="grid grid-rows justify-center -mt-6">
              <Typography className="text-center text-white font-medium text-lg">
                MELANCONNY
              </Typography>
            </div>
            <div className="border-b-[1px] border-white mt-6 w-full" />
            <Typography className="flex justify-center items-center mt-6 text-white">
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
                      <Input
                        variant="static"
                        placeholder="Insert order number"
                        color="white"
                      />
                    </div>
                    <IconButton
                      variant="outlined"
                      color="white"
                      className="rounded-md lg:h-8 lg:w-8 h-7 w-7 mt-2"
                      onClick={() =>
                        isLastItem
                          ? handleAddInputTruckingOrders()
                          : handleRemoveInputTruckingOrders(truckingOrder.id)
                      }
                    >
                      {isLastItem ? (
                        <PlusIcon className="h-4 w-4 text-white" />
                      ) : (
                        <XMarkIcon className="h-4 w-4 text-white" />
                      )}
                    </IconButton>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center items-center mt-6">
              <Button
                className="bg-[#FFFFFF] lg:w-64 w-56"
                onClick={() => setIsSubmit(true)}
              >
                <Typography className="text-black text-base font-bold">
                  SUBMIT
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default TruckingPage;
