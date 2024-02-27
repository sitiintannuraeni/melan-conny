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
        className="h-[90%] overflow-auto"
      >
        <DialogHeader className="text-lg flex justify-between">
          <div>ADD NEW ADDRESS</div>
          <a
            href="#"
            className="-mt-3 flex items-center hover:text-blue-500 text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeDialogAddress());
            }}
          >
            <XMarkIcon className="w-6 h-6 mt-1" />
          </a>
        </DialogHeader>
        <DialogBody className="px-3 ">
          <div className="border border-current h-[380px] px-5 rounded-md overflow-auto">
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
                <Input
                  variant="static"
                  label="Address*"
                  placeholder="Enter your address"
                  className="text-[16px]"
                />
              </div>
              <div className="flex w-72 flex-col gap-6 mt-8">
                <Select variant="static" label="Select Version">
                  <div className="h-[220px] overflow-auto">
                    <Option className="bg-transparent text-[12px]">BALI</Option>
                    <Option className="bg-transparent text-[12px]">
                      BANGKA BELITUNG
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      BANTEN
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      BENGKULU
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      D.I. YOGYAKARTA
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      D.I. JAKARTA
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      BANGKA BELITUNG
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      BANTEN
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      BENGKULU
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      D.I. YOGYAKARTA
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      D.I. JAKARTA
                    </Option>
                  </div>
                </Select>
                <Select
                  variant="static"
                  label="Address*"
                  placeholder="Enter your address"
                  className="text-[16px]"
                >
                  <div className="h-[220px] overflow-auto">
                    <Option className="bg-transparent text-[12px]">BALI</Option>
                    <Option className="bg-transparent text-[12px]">
                      BANGKA BELITUNG
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      BANTEN
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      BENGKULU
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      D.I. YOGYAKARTA
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      D.I. JAKARTA
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      GORONTALO
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      JAMBI
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      JAWA BARAT
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      JAWA TENGAH
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      JAWA TIMUR
                    </Option>
                    <Option className="bg-transparent text-[12px]">
                      KALIMANTAN BARAT
                    </Option>
                  </div>
                </Select>
              </div>
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
            <div className="items-center mt-[-90px] pl-12">
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
