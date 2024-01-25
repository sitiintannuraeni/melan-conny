import { HeartIcon } from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function CardProduct(props) {
  const navigate = useNavigate();

  const detailProduct = () => {
    navigate("/detail");
  };
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          src={props.img}
          alt="product-img"
          className="rounded-lg w-full relative z-10"
          height={300}
        />
        <div className="absolute z-20 top-2 right-2 bg-transparent">
          <IconButton
            variant="text"
            size="sm"
            className="rounded-full bg-white"
          >
            <HeartIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="absolute z-20 bottom-2 right-2">
          <Button
            onClick={detailProduct}
            variant="outlined"
            size="lg"
            className="px-3 lg:flex hidden bg-black !bg-opacity-20 border-white border-[1px] text-white gap-2 justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
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
            <Typography className="font-['Helvetica'] font-medium">
              Quick View
            </Typography>
          </Button>
        </div>
      </div>
      <div className="py-2">
        <div className="flex flex-col justify-start items-start lg:items-center lg:flex-row lg:justify-between">
          <Typography
            variant="small"
            className="font-['Helvetica'] font-semibold"
          >
            Elegant basic shirt black
          </Typography>
          <Typography
            variant="small"
            className="font-['Helvetica'] font-normal text-right text-[13px] text-black"
          >
            Rp 185.000
          </Typography>
        </div>
        <Typography
          variant="small"
          className="font-['Helvetica'] text-black text-[13px] font-medium"
        >
          XLS S M
        </Typography>
        <Typography
          variant="small"
          className="font-['Helvetica'] text-[#7D7D7D] font-medium text-[13px]"
        >
          10.3080 sold out
        </Typography>
      </div>
    </div>
  );
}

export default CardProduct;
