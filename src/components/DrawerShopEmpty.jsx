import { Button, IconButton, Typography } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { closeDrawerShoppingCart } from "../slice/menuSlice";
import { useNavigate } from "react-router-dom";

function EmptyState() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCloseDrawer = () => {
    dispatch(closeDrawerShoppingCart());
    navigate("/");
  };
  return (
    <>
      <div className="mt-[210px] lg:mt-[175px]">
        <div className="flex justify-center items-center">
          <IconButton variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
        </div>
        <Typography className="flex justify-center items-center text-lg">
          Your bag is empty.
        </Typography>
        <Typography className="flex justify-center items-center text-lg">
          Let's add one, shall we
        </Typography>
        <div className="flex justify-center items-center lg:mt-[220px] mt-[225px]">
          <Button className="w-full" size="lg" onClick={handleCloseDrawer}>
            SHOP NOW
          </Button>
        </div>
      </div>
    </>
  );
}

export default EmptyState;
