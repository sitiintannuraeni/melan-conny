import { Button } from "@material-tailwind/react";
import Logo from "../../assets/logo1.png";
import BCA from "../../assets/bca-1.png";
import Timer from "../../assets/timer-icon.png";
import { GifIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useCopyToClipboard } from "@uidotdev/usehooks";

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

function MemberOrder() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  return (
    <>
      <div className="mt-5 lg:px-0 px-3">
        <div className="flex justify-center pr-[6.5px]">
          <img
            src={Logo}
            alt="logo"
            className="h-[110px] w-[120px] object-cover"
          />
        </div>
        <Typography className="flex justify-center pr-[6.5px] text-base text-black/90 font-medium">
          Waiting for payment confirmation
        </Typography>
        <div className="flex justify-center mt-4">
          <div className="border border-l-8 border-[#D9D9D9] h-[76px]" />
          <div className="bg-black/5 p-3 mb-4 w-[391px] h-[76px] px-2 ">
            <div className="flex flex-col-2 space-x-4 px-3">
              <div>
                <Typography className="text-[#989898] text-sm">
                  Payment Deadline:
                </Typography>
                <div className="flex items-center space-x-3 mt-2">
                  <img
                    src={Timer}
                    alt="timer"
                    className="h-5 w-3 object-contain"
                  />
                  <Typography className="text-sm text-black font-medium">
                    15-Mar-2024 13:30
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border border-black/20 lg:w-[400px] w-[369px] md:w-[400px] px-3 py-6 rounded-md">
            <Typography className="-mt-2 text-sm text-black/40">
              Order ID
            </Typography>
            <div className="mt-3">
              <Typography className="font-medium text-sm">
                MAL24031513556483272075308950
              </Typography>
              <div className="border border-x-2 border-black/10 mt-2" />
            </div>
            <Typography className="mt-2  text-sm text-black/40">
              Total Amount
            </Typography>
            <div className="mt-2">
              <Typography className="text-sm">Rp 130.500</Typography>
              <div className="border border-x-2 border-black/10 mt-2" />
            </div>
            <Typography className="mt-3 text-sm text-black/40">
              Virtual Account
            </Typography>
            <div className="flex justify-between">
              <div className="mt-2 flex flex-col-2 gap-3">
                <div className="w-[41px]">
                  <img src={BCA} alt="BCA" className="h-10 w-10" />
                </div>
                <div className="lg:w-[330px] w-[300px] md:w-[320px]">
                  <div className="flex items-center lg:gap-x-24 gap-x-16 md:gap-x-44">
                    <div className="w-[200px]">
                      <Typography className="text-[12px] text-[#989898]">
                        BCA Virtual Account
                      </Typography>
                      <Typography className="text-base">3331209324</Typography>
                    </div>
                    <IconButton
                      onMouseLeave={() => setCopied(false)}
                      onClick={() => {
                        copy("3331209324");
                        setCopied(true);
                      }}
                      variant="text"
                    >
                      {copied ? (
                        <CheckIcon className="h-5 w-5" />
                      ) : (
                        <DocumentDuplicateIcon className="h-6 w-7" />
                      )}
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-x-2 border-black/10 mt-5" />
            <Typography className="mt-2  text-sm text-black/40">
              How to pay:
            </Typography>
            <div>
              <div className="mt-2 border border-black/15 px-3 rounded-md text-black">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="text-sm text-black/80 font-medium"
                  >
                    Mobile Banking / m-BCA
                  </AccordionHeader>
                  <AccordionBody className="text-black/90 font-medium">
                    <Typography className="text-xs ">
                      Untuk Mobile Buka aplikasi M-BCA.
                    </Typography>
                    <Typography className="text-xs ">
                      Pilih m-Transfer
                    </Typography>
                    <Typography className="text-xs">Pilih Transfer</Typography>
                    <Typography className="text-xs">
                      Pilih BCA Virtual Account
                    </Typography>
                    <Typography className="text-xs">
                      Pilih nomor rekening yang akan digunakan untuk pembayaran
                    </Typography>
                    <Typography className="text-xs">
                      Masuka nomor BCA Virtual Account yang ada di invoice, lalu
                    </Typography>
                    <Typography className="text-xs">Pilih OK</Typography>
                    <Typography className="text-xs">
                      Nomor BCA Virtual Account dan nomor Rekening anda akan
                    </Typography>
                    <Typography className="text-xs">
                      Terlihat di halaman konfimasi rekening
                    </Typography>
                    <Typography className="text-xs">
                      Pilih OK pada halaman konfirmasi pembayaran
                    </Typography>
                    <Typography className="text-xs">
                      Masukan PIN BCA untuk mengotorisasi pembayaran
                    </Typography>
                    <Typography className="text-xs">
                      Transaksi Anda selesai
                    </Typography>
                  </AccordionBody>
                </Accordion>
              </div>
              <div className="border border-black/15 px-3 rounded-md text-black">
                <Accordion
                  open={open === 2}
                  icon={<Icon id={2} open={open} c />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="text-sm font-medium"
                  >
                    Klik BCA/Internet Banking BCA
                  </AccordionHeader>
                  <AccordionBody className="text-black/90 font-medium">
                    <Typography className="text-xs ">
                      Pilih Menu Transfer Dana.
                    </Typography>
                    <Typography className="text-xs">
                      Pilih Transfer ke BCA Virtual Account.
                    </Typography>
                    <Typography className="text-xs">
                      Masukan nomor BCA Virtual Account.
                    </Typography>
                    <Typography className="text-xs">
                      Pilih Virtual Account.
                    </Typography>
                    <Typography className="text-xs">
                      Jumlah yang akan ditransfer, nomor rekening dan nama
                    </Typography>
                    <Typography className="text-xs">
                      merchant akan muncul di halaman konfirmasi pembayaran,
                      jika
                    </Typography>
                    <Typography className="text-xs">
                      informasi benar klik Lanjutkan.
                    </Typography>
                    <Typography className="text-xs">
                      Masukkan respon KEYBCA APPLI 1 yang muncul pada Token
                    </Typography>
                    <Typography className="text-xs">
                      BCA Anda, lalu klik tombol Kirim.
                    </Typography>
                    <Typography className="text-xs">
                      Transaksi Anda selesai.
                    </Typography>
                  </AccordionBody>
                </Accordion>
              </div>
              <div className="border border-black/15 px-3 rounded-md">
                <Accordion
                  open={open === 3}
                  icon={<Icon id={3} open={open} c />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="text-sm font-medium"
                  >
                    ATM BCA
                  </AccordionHeader>
                  <AccordionBody className="text-black/90 font-medium">
                    <Typography className="text-xs">
                      Pada menu utama, pilih Transaksi Lainnya.
                    </Typography>
                    <Typography className="text-xs">Pilih Transfer.</Typography>
                    <Typography className="text-xs">
                      Pilih ke Rek BCA Virtual Account.
                    </Typography>
                    <Typography className="text-xs">
                      Masukan nomor Virtual Account lalu tekan Benar.
                    </Typography>
                    <Typography className="text-xs">
                      Pada halaman konfirmasi transfer akan muncul detail
                      pembayaran Anda.
                    </Typography>
                    <Typography className="text-xs">
                      jika infromasi telah sesuai tekan Ya.
                    </Typography>
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-3">
          <div className="w-[400px]">
            <div className="flex flex-col-2 gap-2">
              <a href="">
                <InformationCircleIcon className="h-6 w-6" />
              </a>
              <Typography className="text-sm mt-[1px] text-[#989898]">
                Your order will be proceed after the payment is verified.
              </Typography>
            </div>
            <div className="-mt-7 py-10" onClick={() => navigate("/my-order")}>
              <Button className="w-full rounded-md font-medium">
                SEE DETAIL
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MemberOrder;
