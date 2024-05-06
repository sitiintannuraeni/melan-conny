import { Button, IconButton, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Empty() {
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:mt-[50px] mt-[100px]">
        <div className="flex justify-center items-center">
          <IconButton variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-white"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
        </div>
        <Typography className="flex justify-center items-center text-base mt-4 text-white">
          Your bag is empty.
        </Typography>
        <Typography className="flex justify-center items-center text-base text-white">
          Let's add one, shall we
        </Typography>
        <div className="flex justify-center items-center -mt-[140px] py-[180px]">
          <Button
            className="w-[170px]"
            size="lg"
            onClick={() => navigate("/")}
            color="white"
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </>
  );
}

export default Empty;
