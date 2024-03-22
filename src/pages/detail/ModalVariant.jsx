import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { closeDialogVariant, openDialogVariant } from "../../slice/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowDownLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image1 from "../../assets/product-1.png";
import Image2 from "../../assets/product-2.png";
import Image3 from "../../assets/product-3.png";
import Image4 from "../../assets/product-4.png";
import Image5 from "../../assets/product-5.png";
import Image6 from "../../assets/product-6.png";
import { useState } from "react";
function ModalVariant() {
  const dispatch = useDispatch();
  const dialogVariant = useSelector((state) => state.menu.dialogVariant);
  const [isSize, setIsSize] = useState(false);

  return (
    <>
      <Dialog
        open={dialogVariant}
        size="md"
        handler={() => dispatch(closeDialogVariant())}
        className="h-[550px]"
      >
        <DialogHeader className="flex justify-between items-start mt-3">
          <div className="flex flex-col-2">
            <div className="bg-green w-[360px] px-6">
              <img
                src={Image1}
                alt="image1"
                className="h-[330px] w-full object-cover"
              />
            </div>
            <div className="flex items-center w-[270px]">
              <div>
                <Typography>Elgant Basic Shirt Clean Look Black</Typography>
                <Typography>Rp 185.000</Typography>
                <Typography className="text-[#989898]">Stok:1342</Typography>
              </div>
            </div>
          </div>
          <div className="">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault;
                dispatch(closeDialogVariant());
              }}
            >
              <XMarkIcon className="w-6 h-6" />
            </a>
          </div>
        </DialogHeader>
        <DialogBody className="px-[39px] h-[220px] overflow-auto">
          <div className="border border-x-2 border-black/15" />
          {isSize ? (
            <div onClick={() => setIsSize(false)}>
              <Typography className="text-black mt-2 cursor-pointer">
                Size Guide:
              </Typography>
            </div>
          ) : (
            <div className="flex justify-between mt-2">
              <Typography className="text-black">Warna:</Typography>
              <div
                className="flex flex-col-2 cursor-pointer"
                onClick={() => setIsSize(true)}
              >
                <Typography className="text-black">Size Guide </Typography>
                <ChevronRightIcon className="w-7 h-6 mt-[2px] text-black" />
              </div>
            </div>
          )}

          {isSize ? (
            <div className="h-[116px] overflow-auto">
              <div className="grid grid-cols-6 h-[50px] gap-7 mt-8">
                <Button variant="outlined" className="text-base rounded-md">
                  XS
                </Button>
                <Button variant="outlined" className="text-base rounded-md">
                  S
                </Button>
                <Button variant="outlined" className="text-base rounded-md">
                  M
                </Button>
                <Button variant="outlined" className="text-base rounded-md">
                  L
                </Button>
                <Button variant="outlined" className="text-base rounded-md">
                  XL
                </Button>
                <Button variant="outlined" className="text-base rounded-md">
                  XXL
                </Button>
              </div>
              <div className="flex justify-between py-7 mt-2">
                <Button
                  variant="outlined"
                  className="flex justify-center items-center gap-2"
                >
                  <HeartIcon className="w-5 h-5" />
                  <Typography>ADD TO WISHLIST</Typography>
                </Button>
                <Button variant="outlined" className="w-[210px]">
                  <Typography>CHEKOUT</Typography>
                </Button>
              </div>
            </div>
          ) : (
            <div className="w-full h-[113px] overflow-auto mt-3">
              <div className="h-[400px] w-[465px] grid grid-cols-2 gap-3">
                <div className="bg-gray-200 h-[90px] flex flex-col-2 gap-2 px-3">
                  <div className="w-[100px] h-[80px] mt-[5.4px]">
                    <img
                      src={Image2}
                      alt="image2"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-[140px] flex items-center ">
                    <Typography className="text-xs text-black">
                      Elgant Basic Shirt Maroon
                    </Typography>
                  </div>
                </div>
                <div className="bg-gray-200 h-[90px] flex flex-col-2 gap-2 px-3">
                  <div className="w-[100px] h-[80px] mt-[5.4px]">
                    <img
                      src={Image3}
                      alt="image2"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-[140px] flex items-center ">
                    <Typography className="flex items-center text-xs text-black">
                      Elgant Basic Shirt White
                    </Typography>
                  </div>
                </div>
                <div className="bg-gray-200 h-[90px] flex flex-col-2 gap-2 px-3">
                  <div className="w-[100px] h-[80px] mt-[5.4px]">
                    <img
                      src={Image3}
                      alt="image2"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-[140px] flex items-center ">
                    <Typography className="flex items-center text-xs text-black">
                      Elgant Basic Shirt Grey
                    </Typography>
                  </div>
                </div>
                <div className="bg-gray-200 h-[90px] flex flex-col-2 gap-2 px-3">
                  <div className="w-[100px] h-[80px] mt-[5.4px]">
                    <img
                      src={Image3}
                      alt="image2"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-[140px] flex items-center ">
                    <Typography className="flex items-center text-xs text-black">
                      Elgant Basic Shirt Sky Blue
                    </Typography>
                  </div>
                </div>
                <div className="bg-gray-200 h-[90px] flex flex-col-2 gap-2 px-3">
                  <div className="w-[100px] h-[80px] mt-[5.4px]">
                    <img
                      src={Image3}
                      alt="image2"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-[140px] flex items-center ">
                    <Typography className="flex items-center text-xs text-black">
                      Elgant Basic Shirt Clean Look Choco
                    </Typography>
                  </div>
                </div>
                <div className="bg-gray-200 h-[90px] flex flex-col-2 gap-2 px-3">
                  <div className="w-[100px] h-[80px] mt-[5.4px]">
                    <img
                      src={Image3}
                      alt="image2"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-[140px] flex items-center ">
                    <Typography className="flex items-center text-xs text-black">
                      Elgant Basic Shirt Clean Look Choco
                    </Typography>
                  </div>
                </div>
                <div className="bg-gray-200 h-[90px] flex flex-col-2 gap-2 px-3">
                  <div className="w-[100px] h-[80px] mt-[5.4px]">
                    <img
                      src={Image3}
                      alt="image2"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-[140px] flex items-center ">
                    <Typography className="flex items-center text-xs text-black">
                      Elgant Basic Shirt Clean Look Choco
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex justify-between py-7 mt-1">
                <Button
                  variant="outlined"
                  className="flex justify-center items-center gap-2"
                >
                  <HeartIcon className="w-5 h-5" />
                  <Typography>ADD TO WISHLIST</Typography>
                </Button>
                <Button variant="outlined" className="w-[210px]">
                  <Typography>CHEKOUT</Typography>
                </Button>
              </div>
            </div>
          )}
        </DialogBody>
      </Dialog>
    </>
  );
}
export default ModalVariant;
