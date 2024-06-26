import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogSearch } from "../slice/menuSlice";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetProductsByGroupCategoryQuery,
  useSearchProductQuery,
} from "../services/apiProduct";
import {
  Avatar,
  List,
  ListItem,
  ListItemPrefix,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useDebounce } from "@uidotdev/usehooks";
import NumberFormatCurrency from "../utils";

function SearchV2() {
  const dialogSearch = useSelector((state) => state.menu.dialogSearch);
  const dispatch = useDispatch();
  const [clickedOutside, setClickedOutside] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const myRef = useRef();
  const inputRef = useRef();
  const navigate = useNavigate();
  const debouncedSearchQuery = useDebounce(inputSearch, 500);
  const {
    data: results,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useSearchProductQuery(debouncedSearchQuery, {
    skip: debouncedSearchQuery == "",
  });
  let resultView = "";

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
      dispatch(closeDialogSearch());
    }
  };

  const detailProduct = (id) => {
    setClickedOutside(true);
    dispatch(closeDialogSearch());
    navigate(`/detail/${id}`);
  };

  const handleClickInside = () => setClickedOutside(false);

  const handleInputSearch = (e) => {
    setInputSearch(e.target.value);
  };

  useEffect(() => {
    if (dialogSearch) {
      setClickedOutside(false);
      setInputSearch("");
      inputRef?.current.focus();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dialogSearch, setInputSearch, inputRef]);

  if (isLoading || isFetching) {
    console.log("is Loading Search?");
    resultView = (
      <>
        <div className="flex justify-center items-center p-4">
          <Spinner className="text-white" />
        </div>
      </>
    );
  }

  if (isError) {
    console.log("data tidak ditemukan");
    resultView = (
      <>
        <Typography className="text-center p-4 text-white">
          Data tidak ditemukan
        </Typography>
      </>
    );
  }

  if (isSuccess) {
    resultView = (
      <>
        <List>
          {results.map((result, index) => (
            <ListItem key={index} onClick={() => detailProduct(result.id)}>
              <ListItemPrefix>
                <Avatar
                  variant="rounded"
                  alt="candice"
                  src={result.images[0].url}
                  size="xl"
                  className="bg-transparent"
                />
              </ListItemPrefix>
              <div className="grid grid-rows-2 lg:gap-0 gap-2 -mt-2">
                <div className="bg-[#1E1E1E] w-[75px] h-5 flex justify-center items-center rounded-full mt-2">
                  <Typography
                    color="blue-gray"
                    className="lg:text-[11px] text-[13px] font-bold text-gray-400"
                  >
                    category
                  </Typography>
                </div>
                <div className="-mt-[6px]">
                  <Typography
                    color="blue-gray"
                    className="lg:text-sm text-[13px] font-bold text-white"
                  >
                    {result.product_name}
                  </Typography>
                  <Typography
                    color="gray"
                    className="font-normal lg:text-base text-sm lg:mt-0 -mt-[2px] text-white"
                  >
                    <NumberFormatCurrency value={result.price} />
                  </Typography>
                </div>
              </div>
            </ListItem>
          ))}
        </List>
      </>
    );
  }

  return (
    <>
      <div
        className={`w-full h-[100vh] bg-black/50 z-[999] ${dialogSearch ? "fixed" : "hidden"} top-0`}
      >
        <div className="w-full max-w-xl mx-auto px-4 top-16 " ref={myRef}>
          <div className="w-full mx-auto bg-black lg:top-16 top-4 shadow-xl rounded-lg relative z-[999] ">
            <div className="">
              <input
                value={inputSearch}
                onChange={(e) => handleInputSearch(e)}
                type="text"
                ref={inputRef}
                className="h-full w-full text-base outline-none rounded-xl block py-4 pl-3 pr-10 border-0 focus:right-0 text-white placeholder:text-gray-400 bg-black"
                placeholder="Search Product"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-white transition-colors">
                <MagnifyingGlassIcon className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
          <div className="w-full max-h-[400px] sw-10 overflow-y-auto mt-1 bg-black lg:top-16 top-4 shadow-xl rounded-lg relative z-[999] ">
            {resultView}
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchV2;
