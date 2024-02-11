import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogSearch } from "../slice/menuSlice";

function SearchV2() {
  const dialogSearch = useSelector((state) => state.menu.dialogSearch);
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => dispatch(closeDialogSearch())}
        className={`w-full h-[100vh] bg-black/50 z-[999] ${dialogSearch ? "fixed" : "hidden"} top-0 overflow-hidden`}
      >
        <div className="w-full max-w-md mx-auto bg-white top-16 shadow-xl rounded-lg relative z-[999] ">
          <div className="">
            <input
              type="text"
              className="h-full w-full text-base outline-none rounded-xl block py-4 pl-3 pr-10 border-0 focus:right-0 text-gray-800 placeholder:text-gray-400"
              placeholder="Search Product..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-blue-500 text-black transition-colors">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchV2;
