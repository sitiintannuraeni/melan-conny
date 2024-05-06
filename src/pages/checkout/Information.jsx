import {
  Button,
  Card,
  CardBody,
  Input,
  Option,
  Radio,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import React from "react";
import { useState } from "react";
import BCA1 from "../../assets/bca-1.png";
import Mandiri1 from "../../assets/mandiri-1.png";
import BNI from "../../assets/bni-1.png";
import Permata1 from "../../assets/permata-1.png";
import BCA2 from "../../assets/bca-2.png";
import Qris from "../../assets/qris.png";
import { useAuthMutation } from "../../services/apiAuth";
import { useForm } from "react-hook-form";
import {
  useAddToAddressMutation,
  useGetAddressQuery,
} from "../../services/apiShippingAddress";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SaveInformation from "./SaveInformation";
import { useEffect } from "react";
import { setShippingAddress } from "../../slice/apiSlice";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function Icon1({ id, open1 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open1 ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const provinces = ["DKI JAKARTA", "JAWA BARAT", "JAWA TIMUR", "JAWA TENGAH"];
const cities = ["Jakarta Selatan", "Jakarta Utara", "Bogor"];
const districts = ["Cisarua", "Ciawi", "Cicurug"];
const subDustricts = ["Cilember", "Megamendung", "Cipayung"];

function FormInformation() {
  const { user } = useSelector((state) => state.auth);
  const [inputProvince, setInputProvince] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputDistrict, setInputDistrict] = useState("");
  const [inputSubDistrict, setInputSubDistrict] = useState("");
  const [isEditShippingAddress, setIsEditShippingAddress] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const {
    data: listAddress,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetAddressQuery();

  const [
    Address,
    {
      isLoading: isLoadingAddress,
      isError: isErrorAddress,
      isSuccess: isSuccessAddress,
      error: errorAddress,
    },
  ] = useAddToAddressMutation();

  const onSubmit = (data) => {
    const dataShippingAddres = {
      recipients_name: data.recipientName,
      address: data.address,
      province: inputProvince,
      city: inputCity,
      district: inputDistrict,
      sub_district: inputSubDistrict,
      postal_code: data.postalCode,
      number_phone: data.phone,
    };

    Address(dataShippingAddres);
  };

  useEffect(() => {
    if (isSuccessAddress) {
      console.log("Data Shipping Address Berhasil di kirim");
    }

    if (isSuccess) {
      setInputProvince(listAddress[listAddress.length - 1].province);
      setInputCity(listAddress[listAddress.length - 1].city);
      setInputDistrict(listAddress[listAddress.length - 1].district);
      setInputSubDistrict(listAddress[listAddress.length - 1].sub_district);
    }
  }, [
    isSuccessAddress,
    isLoadingAddress,
    isErrorAddress,
    isSuccess,
    listAddress,
    setInputProvince,
    setInputCity,
    setInputDistrict,
    setInputSubDistrict,
  ]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center pt-5">
        <Spinner className="h-4 w-4" />
      </div>
    );
  }

  if ((isSuccessAddress || isSuccess) && !isEditShippingAddress) {
    return (
      <SaveInformation
        name={user.name}
        email={user.email}
        listAddress={listAddress}
        changeShippingAddress={() => {
          setIsEditShippingAddress(true);
        }}
      />
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <Typography className="mt-3 cursor-default font-semibold text-white">
            Contact Infomation
          </Typography>
          <div className="mt-1">
            <Typography
              className="mt-3 underline text-xs cursor-pointer text-white"
              onClick={() => {
                setIsEditShippingAddress(false);
              }}
            >
              Close
            </Typography>
          </div>
        </div>
        <div className="mt-5">
          <Input
            variant="static"
            label="Your Name*"
            placeholder="Your Name"
            className="flex text-base"
            defaultValue={user.name}
            color="white"
          />
        </div>
        <div className="mt-5">
          <Input
            variant="static"
            label="Your Email*"
            placeholder="Your Email"
            className="flex text-base"
            defaultValue={user.email}
            color="white"
          />
        </div>
        <Typography className="mt-3 font-semibold text-white">
          Shipping Address
        </Typography>
        <div className="mt-7 ">
          <Input
            variant="static"
            label="Recipient's Name*"
            placeholder="Enter Your recipient’s name"
            className="flex text-[15px]"
            color="white"
            {...register("recipientName", {
              required: true,
              value: isSuccess
                ? listAddress[listAddress.length - 1].recipients_name
                : "",
            })}
          />
          <span className="text-red-500 text-xs">
            {errors.recipientName && <span>Recipient's name required</span>}
          </span>
        </div>
        <div className="mt-7">
          <Input
            variant="static"
            label="Address*"
            placeholder="Enter Your address"
            color="white"
            {...register("address", {
              required: true,
              value: isSuccess
                ? listAddress[listAddress.length - 1].address
                : "",
            })}
          />
          <span className="text-red-500 text-xs">
            {errors.address && <span>Address required</span>}
          </span>
        </div>
        <div className="grid grid-cols-2 lg:gap-6 gap-20 mt-5">
          <Select
            variant="standard"
            label="Province*"
            color="green"
            className="text-white"
            value={inputProvince}
            onChange={(val) => setInputProvince(val)}
            selected={(element) =>
              element &&
              React.cloneElement(element, {
                disabled: true,
                className:
                  "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
              })
            }
          >
            {provinces.map((province, index) => (
              <Option value={province} key={index}>
                {province}
              </Option>
            ))}
          </Select>
          <Select
            variant="standard"
            label="City*"
            color="green"
            className="text-white"
            value={inputCity}
            onChange={(val) => setInputCity(val)}
            selected={(element) =>
              element &&
              React.cloneElement(element, {
                disabled: true,
                className:
                  "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
              })
            }
          >
            {cities.map((city, idxCity) => (
              <Option value={city} key={idxCity}>
                {city}
              </Option>
            ))}
          </Select>
          <Select
            variant="standard"
            label="District*"
            color="green"
            className="text-white"
            value={inputDistrict}
            onChange={(val) => setInputDistrict(val)}
          >
            {districts.map((district, index) => (
              <Option value={district} key={index}>
                {district}
              </Option>
            ))}
          </Select>
          <Select
            variant="standard"
            label="Sub District*"
            color="green"
            className="text-white"
            value={inputSubDistrict}
            onChange={(val) => setInputSubDistrict(val)}
          >
            {subDustricts.map((subDistrict, index) => (
              <Option value={subDistrict} key={index}>
                {subDistrict}
              </Option>
            ))}
          </Select>
        </div>
        <div className="mt-9 ">
          <Input
            variant="static"
            label="Postal code*"
            color="white"
            {...register("postalCode", {
              required: true,
              value: isSuccess
                ? listAddress[listAddress.length - 1].postal_code
                : "",
            })}
          />
          <span className="text-red-500 text-xs">
            {errors.postalCode && <span>Phone required</span>}
          </span>
        </div>
        <div className="mt-5 ">
          <Input
            variant="static"
            label="Phone*"
            placeholder="+62 Your phone number"
            className="text-lg"
            color="white"
            {...register("phone", {
              required: true,
              value: isSuccess
                ? listAddress[listAddress.length - 1].number_phone
                : "",
            })}
          />
          <span className="text-red-500 text-xs">
            {errors.phone && <span>Phone required</span>}
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <Button
            className="w-full text-sm bg-[#F62C85]"
            type="submit"
            disabled={isLoadingAddress}
            loading={isLoadingAddress}
          >
            SAVE
          </Button>
        </div>
      </form>
    </>
  );
}

function Infomation() {
  const [openDetailPayment, setOpenDetailPayment] = useState(false);
  const [alwaysOpen, setAlwaysOpen] = useState(false);
  const [checkedPayment, setCheckedPayment] = useState(0);
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [isSave, setIsSave] = useState("");

  const handleAlwaysOpen = (value) => {
    setAlwaysOpen(alwaysOpen === value ? 0 : value);
  };

  return (
    <>
      <div className="border rounded-lg lg:border-white border-black/20 px-3 mt-5 select-none">
        {isSave ? <SaveInformation /> : <FormInformation />}
        <div className="border border-b-[1px] mt-4" />
        <div className="mt-5">
          <Typography className="font-semibold text-white">Delivery</Typography>
          <Typography className="text-xs text-white py-7 -mt-6 font-semibold">
            Please complete your shipping address
          </Typography>
        </div>
      </div>
      <div className="-mt-5 py-10">
        <Typography className="px-3 text-lg font-semibold text-white">
          Payment
        </Typography>
        {openDetailPayment ? (
          <Card
            floated={false}
            shadow={false}
            className="border lg:border-black/100 border-black/20 mt-5 rounded-lg bg-transparent"
          >
            <CardBody shadow={false}>
              <div className="flex justify-between -mt-2">
                <Typography className="text-sm text-white">
                  VIRTUAL-ACCOUNT
                </Typography>
                <Typography
                  className="underline text-sm cursor-pointer text-white"
                  onClick={() => setOpenDetailPayment(false)}
                >
                  Change
                </Typography>
              </div>
              <div className="flex flex-cols-2 space-x-4 bg-none mt-5 px-3">
                <img
                  src={Mandiri1}
                  alt="mandiri"
                  className="w-7 h-7 object-cover"
                />
                <div className="grid grid-rows-3 gap-2">
                  <Typography className="text-white">
                    MANDIRI Virtual Account
                  </Typography>
                  <Typography className="text-sm -mt-4 text-white">
                    Pembayaran hanya dapat dilakukan oleh nasabah Bank Mandiri
                    melalui ATM, Internet Banking, dan Mandiri Online.
                  </Typography>
                  <div>
                    <Typography className="text-sm text-white">
                      - Segera lakukan pembayaran agar pesanan anda tidak
                      dibatalkan.
                    </Typography>
                    <Typography className="text-sm text-white">
                      - Setelah Anda bayar, validasi akan di lakukan secara
                      otomatis.
                    </Typography>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ) : (
          <>
            <div className="border lg:border-white border-black/20 mt-5 rounded-lg px-3">
              <Accordion
                open={alwaysOpen}
                icon={<Icon id={1} open={alwaysOpen} />}
              >
                <AccordionHeader
                  onClick={() => handleAlwaysOpen(1)}
                  className="text-white hover:text-blue-300"
                >
                  <Typography className="text-sm text-white">
                    VIRTUAL-ACCOUNT
                  </Typography>
                </AccordionHeader>
                <AccordionBody className="mt-3">
                  <div className="flex flex-col gap-8 ">
                    <Radio
                      onChange={() => {
                        setOpenDetailPayment(true);
                        setCheckedPayment(1);
                      }}
                      checked={checkedPayment === 1}
                      name="description"
                      label={
                        <div className="flex flex-cols-2 -mt-[16px] space-x-4 bg-none">
                          <img
                            src={BCA1}
                            alt="BCA1"
                            className="w-7 h-7 object-cover"
                          />
                          <Typography className="-mt-[2px] text-white">
                            BCA Virtual account
                          </Typography>
                        </div>
                      }
                      containerProps={{
                        className: "-mt-5",
                      }}
                    />
                    <Radio
                      onChange={() => {
                        setOpenDetailPayment(true);
                        setCheckedPayment(2);
                      }}
                      checked={checkedPayment === 2}
                      name="description"
                      label={
                        <div className="flex flex-cols-2 -mt-[16px] space-x-4">
                          <img
                            src={Mandiri1}
                            alt="Mandiri"
                            className="w-7 h-7 object-cover"
                          />
                          <Typography className="-mt-[2px] text-white">
                            MANDIRI Virtual account
                          </Typography>
                        </div>
                      }
                      containerProps={{
                        className: "-mt-5",
                      }}
                    />
                    <Radio
                      onChange={() => {
                        setOpenDetailPayment(true);
                        setCheckedPayment(3);
                      }}
                      checked={checkedPayment === 3}
                      name="description"
                      label={
                        <div className="flex flex-cols-2 -mt-[16px] space-x-4">
                          <img
                            src={BNI}
                            alt="BNI"
                            className="w-7 h-7 object-cover"
                          />
                          <Typography className="-mt-[2px] text-white">
                            BNI Virtual account
                          </Typography>
                        </div>
                      }
                      containerProps={{
                        className: "-mt-5",
                      }}
                    />
                    <Radio
                      onChange={() => {
                        setOpenDetailPayment(true);
                        setCheckedPayment(4);
                      }}
                      checked={checkedPayment === 4}
                      name="description"
                      label={
                        <div className="flex flex-cols-2 -mt-[16px] space-x-4">
                          <img
                            src={Permata1}
                            alt="BCA2"
                            className="w-7 h-7 object-contain"
                          />
                          <Typography className="-mt-[2px] text-white">
                            PERMATA Virtual account
                          </Typography>
                        </div>
                      }
                      containerProps={{
                        className: "-mt-5",
                      }}
                    />
                    <Radio
                      onChange={() => {
                        setOpenDetailPayment(true);
                        setCheckedPayment(5);
                      }}
                      checked={checkedPayment === 5}
                      name="description"
                      label={
                        <div className="flex flex-cols-2 -mt-[16px] space-x-4">
                          <img
                            src={BCA2}
                            alt="BCA2"
                            className="w-7 h-7 object-cover"
                          />
                          <Typography className="-mt-[2px] text-white">
                            Bank lainnya
                          </Typography>
                        </div>
                      }
                      containerProps={{
                        className: "-mt-5",
                      }}
                    />
                  </div>
                  {/* <div className="border border-gray-150 mt-12" /> */}
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="text-white hover:text-blue-300"
                >
                  <Typography className="text-sm text-white">QRIS</Typography>
                </AccordionHeader>
                <AccordionBody className="mt-4">
                  <Radio
                    onChange={() => {
                      setOpenDetailPayment(true);
                      setCheckedPayment(6);
                    }}
                    checked={checkedPayment === 6}
                    name="description"
                    label={
                      <div className="flex flex-cols-2 -mt-[16px] space-x-4">
                        <img
                          src={Qris}
                          alt="BCA2"
                          className="w-7 h-7 object-cover"
                        />
                        <Typography className="-mt-[2px] text-white text-[10px]">
                          Scan QR dengan berbagai aplikasi pembayaran (mencakup
                          : OVO, DANA, Link aja, Blue indonesia )
                        </Typography>
                      </div>
                    }
                    containerProps={{
                      className: "-mt-5",
                    }}
                  />
                </AccordionBody>
              </Accordion>
            </div>
          </>
        )}
      </div>
      ;
    </>
  );
}

export default Infomation;
