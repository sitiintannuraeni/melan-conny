import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
  Input,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDrawerMenFashionStore,
  openDialogLogin,
} from "../slice/menuSlice";

function DrawerMenFashionStore() {
  const drawerMenFashionStore = useSelector(
    (state) => state.menu.drawerMenFashionStore
  );
  const dispatch = useDispatch();

  return (
    <>
      <Drawer
        placement="left"
        open={drawerMenFashionStore}
        onClose={() => dispatch(closeDrawerMenFashionStore())}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="mb-6 flex items-center space-x-3">
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={() => dispatch(closeDrawerMenFashionStore())}
            >
              <XMarkIcon className="text-black h-6" />
            </IconButton>
            <Typography color="blue-gray" className="text-md font-semibold">
              MEN'S FASHION STORE
            </Typography>
          </div>
        </div>
        <div className="w-full relative">
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </div>
            <input
              type="text"
              className="!border !border-gray-300 block w-full rounded-md focus:ring-1 focus:ring-inset focus:ring-black py-1.5 pl-10 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 transition-all focus:text-gray-900 bg-[#EAEAEA] focus:bg-white"
              placeholder="Search Product"
            />
          </div>
        </div>
        <div className="mt-4 h-[400px] overflow-y-auto">
          <List className="divide-y divide-gray-500">
            <ListItem className="rounded-none">
              <Typography className="w-full font-semibold">
                RAINY SEASON COLLECTION
              </Typography>
            </ListItem>
            <ListItem className="rounded-none">
              <Typography className="w-full font-semibold">
                AVAILABLE ITEMS
              </Typography>
            </ListItem>
            <ListItem className="rounded-none">
              <Typography className="w-full font-semibold">
                COLLECTION
              </Typography>
            </ListItem>
            <ListItem className="rounded-none">
              <Typography className="w-full font-semibold">
                ACCESSORIES
              </Typography>
            </ListItem>
            <ListItem className="rounded-none">
              <Typography className="w-full font-semibold">
                MEN'S LOCAL
              </Typography>
            </ListItem>
            <ListItem className="rounded-none">
              <Typography className="w-full font-semibold">
                ZOMA BASIC
              </Typography>
            </ListItem>
            <ListItem className="rounded-none">
              <Typography className="w-full font-semibold">
                PREPP STUDIO
              </Typography>
            </ListItem>
            <ListItem className="rounded-none">
              <Typography className="w-full font-semibold">BOONABOO</Typography>
            </ListItem>
            <ListItem className="rounded-none">
              <Typography className="w-full font-semibold">
                TRUCKING ORDER
              </Typography>
            </ListItem>
            <ListItem className="rounded-none">
              <Typography className="w-full font-semibold">ABOUT US</Typography>
            </ListItem>
            <ListItem>
              <div className="flex justify-start items-start space-x-4">
                <IconButton
                  variant="text"
                  className="h-6 w-6 rounded-full hover:bg-transparent active:bg-transparent"
                  ripple={false}
                >
                  <UserIcon className="h-6 w-6" />
                </IconButton>
                <Typography
                  className="font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(openDialogLogin());
                    dispatch(closeDrawerMenFashionStore());
                  }}
                >
                  LOG IN
                </Typography>
              </div>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default DrawerMenFashionStore;
