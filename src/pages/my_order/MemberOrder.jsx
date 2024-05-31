import { Button } from "@material-tailwind/react";
import Logo from "../../assets/logo-auth.png";
import BCA from "../../assets/bca-1.png";
import Timer from "../../assets/timer-icon.png";
import { GifIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";

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

function IniSnap() {
  useEffect(() => {
    // You can also change below url value to any script url you wish to load,
    // for example this is snap.js for Sandbox Env (Note: remove .sandbox from url if you want to use production version)
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    // Optional: set script attribute, for example snap.js have data-client-key attribute
    // (change the value according to your client-key)
    const myMidtransClientKey = import.meta.env.MIDTRANS_CLIENT_KEY;
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);
}

function SnapPayment() {
  const navigate = useNavigate();
  const { token: snapToken } = useParams();

  const showSnap = useCallback(() => {
    const options = {
      embedId: "snap-container",
      onSuccess: function (result) {
        /* You may add your own implementation here */
        alert("payment success!");
        console.log(result);
      },
      onPending: function (result) {
        /* You may add your own implementation here */
        alert("wating your payment!");
        console.log(result);
      },
      onError: function (result) {
        /* You may add your own implementation here */
        alert("payment failed!");
        console.log(result);
      },
      onClose: function () {
        /* You may add your own implementation here */
        alert("you closed the popup without finishing the payment");
        navigate("/");
      },
    };

    window.snap.embed(snapToken, options);
  }, [snapToken]);

  useEffect(() => {
    setTimeout(() => {
      showSnap();
    }, 500);
  }, [showSnap]);

  return (
    <>
      <div className="mt-5 lg:px-0 px-3 pb-28 select-none">
        <div className="flex justify-center pr-[6.5px] -mt-5">
          <img
            src={Logo}
            alt="logo"
            className="h-[150px] w-[150px] object-contain"
          />
        </div>
        <div
          className="flex justify-center items-cente -mt-3"
          id="snap-container"
        ></div>
      </div>
    </>
  );
}

function MemberOrder() {
  return (
    <>
      <IniSnap />
      <SnapPayment />
    </>
  );
}
export default MemberOrder;
