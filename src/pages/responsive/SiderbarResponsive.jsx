import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import Logo from "../../assets/logo-auth.png";
import AccountInfo from "../account_info/AccountInfo";
import MyOrder from "../my_order/MyOrder";
import WishList from "../wishlist/WishListPage";
import Address from "../address/Address";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function SidebarResponsive() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="mt-7 lg:px-24 lg:pb-44 pb-16 cursor-default">
        <div className="pb-10">
          <div className="flex justify-center items-center pb-3">
            <img
              src={Logo}
              alt="logo"
              className="h-[122px] w-[150px] object-contain"
            />
          </div>
          <div className="grid grid-rows-2 justify-center ">
            <Typography className="text-center  ">
              MEN'S FASHION STORE Account
            </Typography>
            <Typography className="text-[#989898] text-center -mt-3">
              You can manage your account and track your order here
            </Typography>
          </div>
          <div className="border-b-[1px] border-black mt-10 w-full" />
        </div>
      </div>
      <div className="-mt-28 px-4 py-10">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)} className="text-lg">
            Account Info
          </AccordionHeader>
          <AccordionBody>
            <AccountInfo />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)} className="text-lg">
            My Order
          </AccordionHeader>
          <AccordionBody>
            <MyOrder />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)} className="text-lg">
            Wishlist
          </AccordionHeader>
          <AccordionBody>
            <WishList />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)} className="text-lg">
            Addres
          </AccordionHeader>
          <AccordionBody>
            <Address />
          </AccordionBody>
        </Accordion>
        <div className="mt-4">
          <Typography className="text-lg text-blue-gray-800 font-semibold select-none hover:text-blue-gray-900 transition-colors">
            Log out
          </Typography>
          <div className="border-b border-b-blue-gray-100 mt-4" />
        </div>
      </div>
    </>
  );
}

export default SidebarResponsive;
