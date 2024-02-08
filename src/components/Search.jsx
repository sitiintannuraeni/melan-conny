import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogSearch } from "../slice/menuSlice";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Search() {
  const dialogSearch = useSelector((state) => state.menu.dialogSearch);
  const dispatch = useDispatch();
  return (
    <>
      <Dialog
        open={dialogSearch}
        size="xs"
        handler={() => dispatch(closeDialogSearch())}
      >
        <DialogHeader className="p-[4px] rounded-lg">
          <div className="w-full">
            <div className="">
              <input
                type="text"
                className="h-full w-full text-base outline-none rounded-lg block py-4 pl-3 pr-10 border-0 focus:right-0 text-gray-800 placeholder:text-gray-400"
                placeholder="Search Product..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-blue-500 transition-colors">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
        </DialogHeader>
        <DialogBody className="hidden">&nbsp;</DialogBody>
      </Dialog>
    </>
  );
}

export default Search;
