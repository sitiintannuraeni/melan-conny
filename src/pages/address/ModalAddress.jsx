import {
  Button,
  Dialog,
  Select,
  Option,
  Typography,
  Checkbox,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogAddress } from "../../slice/menuSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAddToAddressMutation } from "../../services/apiShippingAddress";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function FormModalAddress() {
  const [inputRecipientsName, setInputRecipientsName] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputProvince, setInputProvince] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputDistrict, setInputDistrict] = useState("");
  const [inputSubDistrict, setInputSubDistrict] = useState("");
  const [inputPostalCode, setInputPostalCode] = useState("");
  const [inputNumberPhone, setInputNumberPhone] = useState("");
  const dialogAddress = useSelector((state) => state.menu.dialogAddress);

  const [addToAddress, { isLoading, isError, isSuccess, error }] =
    useAddToAddressMutation();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body && dialogAddress) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
    if (isSuccess) {
      setInputRecipientsName("");
      setInputAddress("");
      setInputProvince("");
      setInputCity("");
      setInputDistrict("");
      setInputSubDistrict("");
      setInputPostalCode("");
      setInputNumberPhone("");
    }
  }, [dialogAddress, isSuccess]);

  if (isError) {
    console.log("is Error Address", error);
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addToAddress({
      user_id: user.id,
      recipients_name: inputRecipientsName,
      address: inputAddress,
      province: inputProvince,
      city: inputCity,
      district: inputDistrict,
      sub_district: inputSubDistrict,
      postal_code: inputPostalCode,
      number_phone: inputNumberPhone,
    });
    // homePage();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border-[1.4px] border-current border-white h-[343px] px-5 rounded-md overflow-auto scrollbar-y">
          <div className="mt-2">
            <div className="text-black w-full mt-8 ">
              <Input
                variant="static"
                // value={inputAddress}
                // onChange={(e) => setInputAddress(e.target.value)}
                label="Address Name*"
                placeholder="Address Name"
                className="text-[16px]"
                color="white"
                {...register("addressName", { required: true })}
              />
              <span className="text-red-500 text-xs">
                {errors.addressName && <span>Address Name required</span>}
              </span>
            </div>
            <div className="text-black w-full mt-8">
              <Input
                variant="static"
                // value={inputRecipientsName}
                // onChange={(e) => setInputRecipientsName(e.target.value)}
                label="Recipient’s Name*"
                placeholder="Enter recipient’s name "
                className="text-[16px]"
                color="white"
                {...register("name", { required: true })}
              />
              <span className="text-red-500 text-xs">
                {errors.name && <span>Name required</span>}
              </span>
            </div>
            <div className="text-black w-full mt-8">
              <Textarea
                variant="static"
                label="Address*"
                placeholder="Enter your address"
                className="text-[16px]"
                {...register("address", { required: true })}
              />

              <span className="text-red-500 text-xs">
                {errors.address && <span>Address required</span>}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 w-full mt-8">
            <div className="w-full">
              <Select
                variant="standard"
                label="Province*"
                // value={inputProvince}
                // onChange={(value) => setInputProvince(value)}
              >
                <Option value={"JAWA BARAT"}>JAWA BARAT</Option>
                <Option value={"JAWA TENGAH"}>JAWA TENGAH</Option>
                <Option value={"JAWA TIMUR"}>JAWA TIMUR</Option>
                <Option value={"DKI JAKARTA"}>DKI DJAKARTA</Option>
                <Option value={"GORONTALO"}>GORONTALO</Option>
              </Select>
            </div>
            <div className="w-full">
              <Select
                variant="standard"
                label="City*"
                value={inputCity}
                onChange={(value) => setInputCity(value)}
              >
                <Option value={"KAB BOGOR"}>KAB BANDUNG</Option>
                <Option value={"KAB BEKASI"}>KAB BEKASI</Option>
                <Option value={"KAB CIAMIS"}>KAB CIAMIS</Option>
                <Option value={"KAB CIANJUR"}>KAB CIANJUR</Option>
                <Option value={"KAB KARAWANG"}>KAB KARAWANG</Option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 w-full py-7">
            <div className="w-full">
              <Select
                variant="standard"
                label="District*"
                value={inputDistrict}
                onChange={(value) => setInputDistrict(value)}
              >
                <Option value={"CIGOMBONG"}>CIGOMBONG</Option>
                <Option value={"CARINGIN"}>CARINGIN</Option>
                <Option value={"CICURUG"}>CICURUG</Option>
                <Option value={"CISARUA"}>CISARUA</Option>
                <Option value={"CIAWI"}>CIAWI</Option>
              </Select>
            </div>
            <div className="w-full">
              <Select
                variant="standard"
                label="Sub District*"
                value={inputSubDistrict}
                onChange={(value) => setInputSubDistrict(value)}
              >
                <Option value={"Kopo"}>Kopo</Option>
                <Option value={"Leuwimalang"}>Leuwimalang</Option>
                <Option value={"Cilember"}>Cilember</Option>
                <Option value={"Citeko"}>Citeko</Option>
                <Option value={"Cibeurem"}>Cibeurem</Option>
              </Select>
            </div>
          </div>
          <div className="text-black w-full mt-3">
            <Input
              variant="static"
              label="Postal code*"
              value={inputPostalCode}
              onChange={(e) => setInputPostalCode(e.target.value)}
              className="text-lg"
            />
          </div>
          <div className="text-black w-full py-7">
            <Input
              variant="static"
              label="Phone*"
              placeholder="+62 Your phone number"
              value={inputNumberPhone}
              onChange={(e) => setInputNumberPhone(e.target.value)}
              className="text-lg"
            />
          </div>
        </div>
        <div className="grid grid-rows pb-24">
          <Checkbox
            label={
              <Typography className="flex font-medium text-black text-[12px]">
                Set as default address
              </Typography>
            }
          />
        </div>
        <div className="flex grid-cols-2 justify-center">
          <div className="items-center mt-[-80px] lg:pl-3 pl-4">
            <Button
              type="submit"
              size="sm"
              className="bg-[#989898] rounded-md w-[250px] flex items-center justify-center"
              disabled={isLoading}
              loading={isLoading}
              onClick={() => {
                handleClickSave();
                setIsShippingAddres(true);
              }}
            >
              SAVE
            </Button>
            <div className="mt-3 pl-[100px]">
              <Typography
                className="underline text-black cursor-pointer"
                onClick={() => dispatch(closeDialogAddress())}
              >
                Cancel
              </Typography>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

function ModalAddress() {
  const { user } = useSelector((state) => state.auth);
  const dialogAddress = useSelector((state) => state.menu.dialogAddress);

  const dispatch = useDispatch();

  // function handleClickSave() {
  //   addToAddress({
  //     user_id: user.id,
  //     recipients_name: inputRecipientsName,
  //     address: inputAddress,
  //     province: inputProvince,
  //     city: inputCity,
  //     district: inputDistrict,
  //     sub_district: inputSubDistrict,
  //     postal_code: inputPostalCode,
  //     number_phone: inputNumberPhone,
  //   });
  //   dispatch(closeDialogAddress());
  // }

  return (
    <>
      <Dialog
        open={dialogAddress}
        size="xs"
        handler={() => dispatch(closeDialogAddress())}
        className="lg:h-[85%] h-[65%] overflow-auto select-none bg-black p-3"
      >
        <DialogHeader className="text-lg flex justify-between sticky top-0 p-4 z-10">
          <Typography className="text-white text-lg">
            ADD NEW ADDRESS
          </Typography>
          <a
            href="#"
            className="flex items-center hover:text-blue-500 text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeDialogAddress());
            }}
          >
            <XMarkIcon className="w-6 h-6 text-white" />
          </a>
        </DialogHeader>
        <DialogBody className="px-3 ">
          <FormModalAddress />
        </DialogBody>
      </Dialog>
    </>
  );
}
export default ModalAddress;
