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

function ModalAddress() {
  const dialogAddress = useSelector((state) => state.menu.dialogAddress);
  const dispatch = useDispatch();
  return (
    <>
      <Dialog
        open={dialogAddress}
        size="xs"
        handler={() => dispatch(closeDialogAddress())}
        className="lg:h-[85%] h-[65%] overflow-auto"
      >
        <DialogHeader className="text-lg flex justify-between sticky top-0 p-4 bg-white z-[1]">
          <div>ADD NEW ADDRESS</div>
          <a
            href="#"
            className="flex items-center hover:text-blue-500 text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeDialogAddress());
            }}
          >
            <XMarkIcon className="w-6 h-6" />
          </a>
        </DialogHeader>
        <DialogBody className="px-3 ">
          <div className="border border-current h-[380px] px-5 rounded-md overflow-auto scrollbar-y">
            <div className="mt-2">
              <div className="text-black w-full mt-8 ">
                <Input
                  variant="static"
                  label="Address Name*"
                  placeholder="Address Name"
                  className="text-[16px]"
                />
              </div>
              <div className="text-black w-full mt-8">
                <Input
                  variant="static"
                  label="Recipient’s Name*"
                  placeholder="Enter recipient’s name "
                  className="text-[16px]"
                />
              </div>
              <div className="text-black w-full mt-8">
                <Textarea
                  variant="static"
                  label="Address*"
                  placeholder="Enter your address"
                  className="text-[16px]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full mt-8">
              <div className="w-full">
                <Select className="select2" variant="static" label="Province*">
                  <Option>Jawa Barat</Option>
                  <Option>Jawa Timur</Option>
                  <Option>Jawa Tengah</Option>
                  <Option>Kalimantan</Option>
                  <Option>Sumatra Utara</Option>
                </Select>
              </div>
              <div className="w-full">
                <Select variant="static" label="City*" className="select2">
                  <Option>Bandung</Option>
                  <Option>Bekasi</Option>
                  <Option>Bogor</Option>
                  <Option>Cirebon</Option>
                  <Option>Majalengka</Option>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full py-7">
              <div className="w-full">
                <Select className="select2" variant="static" label="District*">
                  <Option>Bandung</Option>
                  <Option>Bogor</Option>
                  <Option>Cirebon</Option>
                  <Option>Garut</Option>
                </Select>
              </div>
              <div className="w-full">
                <Select
                  variant="static"
                  label="Sub District*"
                  className="select2"
                >
                  <Option>Bogor Selatan</Option>
                  <Option>Bogor Selatan</Option>
                  <Option>Bogor Selatan</Option>
                  <Option>Bogor Selatan</Option>
                  <Option>Bogor Selatan</Option>
                </Select>
              </div>
            </div>
            <div className="text-black w-full mt-3">
              <Input
                variant="static"
                label="Postal code*"
                placeholder="Postal code"
                className="text-[16px]"
              />
            </div>
            <div className="text-black w-full py-7">
              <Input
                variant="static"
                label="Phone*"
                placeholder="+62 Your phone number"
                className="text-[16px]"
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
              >
                small
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
export default ModalAddress;
