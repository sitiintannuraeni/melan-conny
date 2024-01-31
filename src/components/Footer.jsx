import { Button, IconButton, Typography } from "@material-tailwind/react";
import logo from "../assets/logo.png";
import { PlusIcon } from "@heroicons/react/24/outline";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 h-[510px] justify-center items-center mt-36">
        <div className="bg-[#D9D9D973] h-full">
          <div className="flex justify-center items-center ">
            <div className="grid justify-center items-center w-[860px] h-[380px]">
              <div className="flex flex-col h-[400px] justify-center items-center">
                <div className="p-4 flex items-center justify-center h-[57px] w-[200px]">
                  <img src={logo} alt="logo" height="60" width="60" />
                  <br />
                </div>
                <div className="flex items-center justify-center h-[160px]">
                  <div className="p-52 text-center text-[#857F7F] text-sm">
                    Kreasi Sawala Nusantara
                    <hr className="my-10 flex items-center border-[#B0B0B0] w-[470px]" />
                    <Typography className="text-[#000000] font-medium text-md">
                      Order Number Trucking
                    </Typography>
                  </div>
                </div>
                <div className="flex justify-center text-sm leading-6">
                  <div className="flex space-x-1.5 ">
                    <div className="flex flex-col space-y-1.5">
                      <div className="flex items-center justify-center">
                        <div className="w-[230px] h-[20px] text-[#857F7F] text-sm">
                          Insert Order Number...
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="w-[240px] border-b-[1px] border-[#000000] " />
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-[250px] h-[20px] flex items-center justify-end">
                          <button
                            className="align-middle select-none flex justify-center items-center text-sm py-4 px-6 rounded-lg bg-[#857F7F] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 mt-8 w-[215px] h-[10px] font-semibold"
                            type="button "
                          >
                            SUBMIT
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-8 h-[22px] flex items-center justify-center">
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-[32px] max-h-[34px] rounded-md text-xs border-2 border-black text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.75]"
                        type="button"
                      >
                        <PlusIcon className="h-[27px] w-[px] flex justify-center items-center"></PlusIcon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
