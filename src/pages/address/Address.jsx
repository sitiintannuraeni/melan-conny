import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  openDialogAddress,
  openDialogUpdateAddress,
} from "../../slice/menuSlice";
import { LocationPin2 } from "../../icons/LocationPin2";
import {
  useDeleteFromAddressMutation,
  useGetAddressQuery,
} from "../../services/apiShippingAddress";
import { useEffect } from "react";

function UpdateFromAddress() {
  const dispatch = useDispatch();
  return (
    <>
      <div onClick={() => dispatch(openDialogUpdateAddress())}>
        <Typography className="text-black font-bold hover:text-[#40A2D8] lg:text-lg text-xs">
          Edit
        </Typography>
      </div>
    </>
  );
}

function DeleteToAddress({ id }) {
  const [deleteFromAddress, { isLoading, isError, isSuccess, error }] =
    useDeleteFromAddressMutation();

  useEffect(() => {
    if (isSuccess) {
      console.log("Data Telah di Hapus");
    }
  }, [isSuccess]);

  const handleRemoveFromAddress = (id) => {
    deleteFromAddress({ id });
    console.log("handleRemoveFromAddress", id);
  };

  return (
    <>
      <Typography
        className="text-black lg:text-lg text-xs font-bold hover:text-red-600"
        onClick={() => handleRemoveFromAddress(id)}
      >
        Delete
      </Typography>
    </>
  );
}

function Address() {
  const dispatch = useDispatch();
  const {
    data: addresses,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetAddressQuery();

  console.log({ addresses });

  if (isSuccess) {
    return (
      <>
        <div className="lg:px-0 px-4">
          <div className="fond-semibold pb-14">
            <Typography className="font-semibold ">Saved Address</Typography>
          </div>
          {addresses.data.map((address, index) => (
            <Card
              className="w-full overflow-hidden -mt-10 border-none bg-gray-50"
              shadow={false}
              key={index}
              id={address.id}
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mt-7 rounded-none"
              >
                <div className="flex flex-col-3 gap-2">
                  <Typography className="text-black/80 lg:text-base md:text-base text-base">
                    {address.recipients_name}
                  </Typography>
                  <div className="lg:h-[27px] h-[16px] lg:w-[1px] w-[1px] bg-black/30" />
                  <Typography className="text-[#989898] lg:text-base md:text-base text-base">
                    {address.number_phone}
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="px-0 flex flex-col-2 p-0 lg:gap-24 gap-5 mt-3">
                <div className="w-[550px]">
                  <Typography className="text-black lg:text-lg text-xs md:text-base">
                    {address.address}, {address.province}, {address.city},{" "}
                    {address.district}, {address.sub_district},{" "}
                    {address.sub_district}, {address.postal_code},{" "}
                    {address.number_phone}
                  </Typography>
                </div>
                <div className="flex justify-end cursor-pointer">
                  <div className="flex flex-col-3 gap-2 justify-end ">
                    <UpdateFromAddress />
                    <Typography className="text-black text-xs lg:text-lg font-bold">
                      /
                    </Typography>
                    <DeleteToAddress id={address.id} />
                  </div>
                </div>
              </CardBody>
              <CardFooter className="flex justify-end -mt-7 px-0 py-10">
                <Button
                  variant="outlined"
                  className="lg:w-[200px] w-[150px] rounded-md text-[#989898] lg:text-[10px] text-[8.5px] border-[#989898]"
                >
                  Atur Sebagai Utama
                </Button>
              </CardFooter>
            </Card>
          ))}
          <div className="lg:pl-[75px] pl-16 mt-10">
            <div className="rounded-none">
              <div className="pl-[86px]">
                <div className="w-[47px] transition-colors flex items-center pb-4">
                  <a href="#">
                    <LocationPin2 className="text-[#989898] hover:text-black text-4xl" />
                  </a>
                </div>
              </div>
              <Typography className="pl-[13px] pb-2 text-[#989898]">
                You have no saved address
              </Typography>
            </div>
            <Button
              variant="filled"
              className="w-56"
              onClick={() => {
                dispatch(openDialogAddress());
              }}
            >
              Add New Address
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Address;
