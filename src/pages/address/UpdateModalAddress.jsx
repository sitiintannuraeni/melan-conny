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
import {
  closeDialogAddress,
  closeDialogUpdateAddress,
} from "../../slice/menuSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useUpdateToAddressMutation } from "../../services/apiShippingAddress";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

function UpdateModalAddress() {
  const updateDialogAddres = useSelector(
    (state) => state.menu.updateDialogAddres
  );
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [inputAddressName, setInputAddressName] = useState("");
  const [inputRecipientsName, setInputRecipientsName] = useState("");
  const [inputProvince, setInputProvince] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputDistrict, setInputDistrict] = useState("");
  const [inputSubDistrict, setInputSubDistrict] = useState("");
  const [inputPostalCode, setInputPostalCode] = useState("");
  const [inputNumberPhone, setInputNumberPhone] = useState("");
  const [updateAddress, { isLoading, isError, isSuccess, error }] =
    useUpdateToAddressMutation();

  useEffect(() => {
    setInputRecipientsName(user.recipients_name);
    setInputAddressName(user.address);
    setInputProvince(user.province);
    setInputCity(user.city);
    setInputDistrict(user.district);
    setInputSubDistrict(user.sub_district);
    setInputPostalCode(user.postal_code);
    setInputNumberPhone(user.number_phone);
    if (isSuccess) {
      console.log({
        recipients_name: inputRecipientsName,
        address: inputAddressName,
        province: inputProvince,
        city: inputCity,
        district: inputDistrict,
        sub_district: inputSubDistrict,
        postal_code: inputPostalCode,
        number_phone: inputNumberPhone,
      });
    }
  }, [
    isSuccess,
    setInputRecipientsName,
    setInputAddressName,
    setInputProvince,
    setInputCity,
    setInputDistrict,
    setInputSubDistrict,
    setInputPostalCode,
    setInputNumberPhone,
    user,
  ]);

  function handleClickUpdateAddress() {
    updateAddress({
      id: user.id,
      body: {
        recipients_name: inputRecipientsName,
        address: inputAddressName,
        province: inputProvince,
        city: inputCity,
        district: inputDistrict,
        sub_district: inputSubDistrict,
        postal_code: inputPostalCode,
        number_phone: inputNumberPhone,
      },
    });
  }
  return (
    <>
      <Dialog
        open={updateDialogAddres}
        size="xs"
        handler={() => dispatch(closeDialogUpdateAddress())}
        className="lg:h-[85%] h-[65%] overflow-auto select-none"
      >
        <DialogHeader className="text-lg flex justify-between sticky top-0 p-4 bg-white z-[1]">
          <div>ADD NEW ADDRESS</div>
          <a
            href="#"
            className="flex items-center hover:text-blue-500 text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeDialogUpdateAddress());
            }}
          >
            <XMarkIcon className="w-6 h-6" />
          </a>
        </DialogHeader>
        <DialogBody className="px-3 ">
          <div className="border border-current h-[343px] px-5 rounded-md overflow-auto scrollbar-y">
            <div className="mt-2">
              <div className="text-black w-full mt-8 ">
                <Input
                  variant="static"
                  label="Address Name*"
                  placeholder="-"
                  // value={inputAddressName}
                  // onChange={(e) => setInputAddressName(e.target.value)}
                  className="text-[16px]"
                />
              </div>
              <div className="text-black w-full mt-8">
                <Input
                  variant="static"
                  label="Recipient’s Name*"
                  placeholder="-"
                  value={inputRecipientsName}
                  onChange={(e) => setInputRecipientsName(e.target.value)}
                  className="text-[16px]"
                />
              </div>
              <div className="text-black w-full mt-8">
                <Textarea
                  variant="static"
                  label="Address*"
                  placeholder="-"
                  value={inputAddressName}
                  onChange={(e) => setInputAddressName(e.target.value)}
                  className="text-[16px]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full mt-8">
              <div className="w-full">
                <Select
                  variant="standard"
                  label="Province*"
                  value={inputProvince}
                  onChange={(value) => setInputProvince(value)}
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
                placeholder="-"
                value={inputNumberPhone}
                onChange={(e) => setInputNumberPhone(e.target.value)}
                className="text-lg"
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="justify-start mt-[-30px]">
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
            <div className="items-center mt-[-80px] lg:pl-12 pl-4">
              <Button
                size="sm"
                className="bg-[#989898] rounded-md w-[250px] flex items-center justify-center"
                onClick={() => handleClickUpdateAddress()}
                loading={isLoading}
                disabled={isLoading}
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
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default UpdateModalAddress;
