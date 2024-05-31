import {
  Breadcrumbs,
  Button,
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
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../slice/apiSlice";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
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
    <Card className="w-full bg-black p-0" shadow={false}>
      <List className="hover:none">
        <ListItem
          selected={activeMenu === "account-info"}
          className={`bg-transparent flex justify-center`}
          onClick={() => {
            navigate("/account-info");
          }}
        >
          <Button className="text-white w-full" color="white">
            <Typography className="text-xs text-black font-semibold">
              Account info
            </Typography>
          </Button>
        </ListItem>
        <ListItem
          selected={activeMenu === "my-order"}
          className={`bg-transparent flex justify-center`}
          onClick={() => navigate("/my-order")}
        >
          <Button className="text-white w-full" color="white">
            <Typography className="text-xs text-black font-semibold">
              My order
            </Typography>
          </Button>
        </ListItem>
        <ListItem
          selected={activeMenu === "wishlist"}
          className={`bg-transparent flex justify-center `}
          onClick={() => navigate("/wishlist")}
        >
          <Button className="text-white w-full" color="white">
            <Typography className="text-xs text-black font-semibold">
              Wishlist
            </Typography>
          </Button>
        </ListItem>
        <ListItem
          selected={activeMenu === "address"}
          className={`bg-transparent flex justify-center`}
          onClick={() => navigate("/address")}
        >
          <Button className="text-white w-full" color="white">
            <Typography className="text-xs text-black font-semibold">
              Address
            </Typography>
          </Button>
        </ListItem>
      </List>
    </Card>
  );
}

export default Sidebar;
