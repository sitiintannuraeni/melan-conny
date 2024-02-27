import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { MapIcon, MapPinIcon, PowerIcon } from "@heroicons/react/24/solid";
import IconAddress from "../assets/addresIcon.png";
import {
  ArrowRightStartOnRectangleIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../slice/apiSlice";
import { toast } from "react-toastify";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const AccountInfo = () => {
    navigate(`/accountInfo`);
  };

  const MyOrder = () => {
    navigate(`/myOrder`);
  };

  const WishList = () => {
    navigate(`/wishlist`);
  };

  const Addres = () => {
    navigate(`/address`);
  };

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <Card className="h-[350px] w-full max-w-[20rem] bg-gray-50" shadow={false}>
      <List>
        <ListItem className="text-[#989898]" onClick={() => AccountInfo()}>
          <ListItemPrefix>
            <UserIcon className="h-6 w-6" />
          </ListItemPrefix>
          Account info
        </ListItem>
        <ListItem className="text-[#989898]" onClick={() => MyOrder()}>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-6 w-6" />
          </ListItemPrefix>
          My-Order
        </ListItem>
        <ListItem className="text-[#989898]" onClick={() => WishList()}>
          <ListItemPrefix>
            <HeartIcon className="h-6 w-6" />
          </ListItemPrefix>
          WishList
        </ListItem>
        <ListItem className="text-[#989898]" onClick={() => Addres()}>
          <ListItemPrefix>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-7"
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
          Address
        </ListItem>
        <ListItem className="text-[#989898]">
          {/* onClick={handleLogout()} */}
          <ListItemPrefix>
            <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
          </ListItemPrefix>
          Logout
        </ListItem>
      </List>
    </Card>
  );
}

export default Sidebar;
