import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogSearch } from "../slice/menuSlice";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchProductQuery } from "../services/apiProduct";
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
    console.log("is Loading Search");
    resultView = (
      <>
        <div className="flex justify-center items-center p-4">
          <Spinner />
        </div>
      </>
    );
  }

  if (isError) {
    console.log("is Loading Search");
    resultView = (
      <>
        <Typography className="text-center p-4 text-gray-700">
          Data tidak ditemukan
        </Typography>
      </>
    );
  }

  if (isSuccess) {
    console.log(results, "results");
    resultView = (
      <>
        <List>
          {results.map((result, index) => (
            <ListItem key={index} onClick={() => detailProduct(result.id)}>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="candice"
                  src={result.images[0].url}
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {result.product_name}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  <NumberFormatCurrency value={result.price} />
                </Typography>
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
        className={`w-full h-[100vh] bg-black/50 z-[999] ${dialogSearch ? "fixed" : "hidden"} top-0 overflow-hidden`}
      >
        <div className="w-full max-w-xl mx-auto top-16" ref={myRef}>
          <div className="w-full mx-auto bg-white top-16 shadow-xl rounded-lg relative z-[999] ">
            <div className="">
              <input
                value={inputSearch}
                onChange={(e) => handleInputSearch(e)}
                type="text"
                ref={inputRef}
                className="h-full w-full text-base outline-none rounded-xl block py-4 pl-3 pr-10 border-0 focus:right-0 text-gray-800 placeholder:text-gray-400"
                placeholder="Search Product..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-blue-500 text-black transition-colors">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="w-full max-h-[400px] overflow-y-auto mt-1 bg-white top-16 shadow-xl rounded-lg relative z-[999] ">
            {resultView}
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchV2;