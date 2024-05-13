import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import {
  ArrowRightStartOnRectangleIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../slice/apiSlice";
import { toast } from "react-toastify";

function Sidebar() {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setActiveMenu(pathName);
  }, [pathName]);

  const handleDialogLogout = () => {
    dispatch(logout());
    toast.success("Logout Success!");
  };

  const listItemActive = "active:bg:black active:text-white";

  return (
    <Card
      className="h-[350px] w-full lg:max-w-[20rem] max-w-[25rem] bg-[#202020]"
      shadow={false}
    >
      <List>
        <ListItem
          selected={activeMenu === "account-info"}
          className={`text-[#989898]`}
          onClick={() => navigate("/account-info")}
        >
          <ListItemPrefix>
            <UserIcon className="h-6 w-6 text-white" />
          </ListItemPrefix>
          <Typography className="text-white">Account info</Typography>
        </ListItem>
        <ListItem
          selected={activeMenu === "my-order"}
          className={`text-[#989898]`}
          onClick={() => navigate("/my-order")}
        >
          <ListItemPrefix>
            <ShoppingBagIcon className="h-6 w-6 text-white" />
          </ListItemPrefix>
          <Typography className="text-white">My order</Typography>
        </ListItem>
        <ListItem
          selected={activeMenu === "wishlist"}
          className={`text-[#989898]`}
          onClick={() => navigate("/wishlist")}
        >
          <ListItemPrefix>
            <HeartIcon className="h-6 w-6 text-white" />
          </ListItemPrefix>
          <Typography className="text-white">Wishlist</Typography>
        </ListItem>
        <ListItem
          selected={activeMenu === "address"}
          className={`text-[#989898]`}
          onClick={() => navigate("/address")}
        >
          <ListItemPrefix>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-7 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </ListItemPrefix>
          <Typography className="text-white">Address</Typography>
        </ListItem>
        <ListItem
          selected={activeMenu === "logout"}
          className={`text-[#989898]`}
          onClick={handleDialogLogout}
        >
          <ListItemPrefix>
            <ArrowRightStartOnRectangleIcon className="h-6 w-6 text-white" />
          </ListItemPrefix>
          <Typography className="text-white">Logout</Typography>
        </ListItem>
      </List>
    </Card>
  );
}

export default Sidebar;
