import { HeartIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { openDialogDetailCardHome } from "../slice/menuSlice";
import { useDispatch } from "react-redux";
import NumberFormatCurrency from "../utils";

function CardProduct({ id, img, name, price, items }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailProduct = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <Card
      className="flex flex-col mt-4 bg-transparent bg-white border border-gray-300 w-full relative h-[290px] lg:h-[450px] md:h-[400px]"
      shadow={false}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={img}
          alt="product-img"
          className="rounded-t-xl cursor-pointer relative z-20 w-full h-[170px] lg:h-[300px] md:h-[320px] object-cover"
          onClick={() => detailProduct(id)}
        />
        <div className="absolute z-20 top-3 right-[10px] bg-transparent">
          <IconButton
            variant="text"
            size="sm"
            className="rounded-full bg-white"
          >
            <HeartIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="absolute z-20 bottom-2 right-[10px]">
          <Button
            variant="outlined"
            size="sm"
            className="px-3 lg:flex hidden bg-black !bg-opacity-20 border-white border-[1px] text-white gap-2 justify-center items-center"
            onClick={() => dispatch(openDialogDetailCardHome(id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <Typography className="font-['Helvetica'] text-xs font-medium">
              Quick View
            </Typography>
          </Button>
        </div>
      </CardHeader>
      <CardBody className="p-3 lg:p-6 h-[17%] mt-2 lg:mt-0">
        <div className="">
          <div className="flex flex-col justify-start items-start text-start lg:flex-row">
            <Typography
              variant="small"
              className="font-['Helvetica'] lg:font-bold font-normal"
            >
              {name}
            </Typography>
          </div>
          <div className="flex justify-center items-center"></div>
          <div className="flex justify-start items-start">
            <Typography
              variant="small"
              className="font-['Helvetica'] text-[#7D7D7D] font-medium text-[13px] flex"
            >
              {items}
            </Typography>
          </div>
          <Typography className="lg:hidden font-normal" variant="small">
            <NumberFormatCurrency value={price} />
          </Typography>
        </div>
      </CardBody>
      <CardFooter>
        <Typography
          as="div"
          className="font-['Helvetica'] font-normal text-center text-black"
        >
          <Button variant="outlined" className="normal-case hidden lg:inline">
            <NumberFormatCurrency value={price} />
          </Button>
        </Typography>
      </CardFooter>
    </Card>
  );
}

export default CardProduct;
