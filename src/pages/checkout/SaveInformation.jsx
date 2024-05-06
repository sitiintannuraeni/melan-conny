import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SaveInformation({ name, email, listAddress, changeShippingAddress }) {
  const handleChangeShippingAddress = () => {
    return changeShippingAddress();
  };
  return (
    <>
      <div className="flex justify-between">
        <Typography className="mt-3 cursor-default font-semibold text-white">
          Contact Infomation
        </Typography>
        <div className="mt-1">
          <Typography className="mt-3 underline text-xs cursor-pointer text-white hidden">
            Close
          </Typography>
        </div>
      </div>
      <div className="mt-5">
        <Typography className="text-xs text-white"> Your Name </Typography>
        <Typography className="text-sm mt-1 text-white">{name}</Typography>
      </div>
      <div className="border border-x-2 mt-2 border-white" />;
      <div className="-mt-2">
        <Typography className="text-xs text-white"> Your Email </Typography>
        <Typography className="text-sm mt-1 text-white">{email}</Typography>
      </div>
      <div className="border border-x-2 mt-3 border-white" />;
      <div className="flex justify-between -mt-4">
        <Typography className="mt-3 cursor-default font-semibold text-white">
          Shipping Address
        </Typography>
        <div className="mt-1">
          <Typography
            className="mt-3 underline text-xs cursor-pointer text-white"
            onClick={handleChangeShippingAddress}
          >
            Change
          </Typography>
        </div>
      </div>
      <div>
        <Typography className="text-white text-sm">
          {listAddress[listAddress.length - 1].recipients_name}
        </Typography>
        <div className="">
          <Typography className="text-white text-sm">
            {listAddress[listAddress.length - 1].address},
            {listAddress[listAddress.length - 1].province},
            {listAddress[listAddress.length - 1].city},
            {listAddress[listAddress.length - 1].district},
            {listAddress[listAddress.length - 1].sub_district},
            {listAddress[listAddress.length - 1].postal_code},
            {listAddress[listAddress.length - 1].number_phone}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default SaveInformation;
