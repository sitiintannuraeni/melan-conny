import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Option,
  Radio,
  Select,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import BCA1 from "../../assets/bca-1.png";
import Mandiri1 from "../../assets/mandiri-1.png";
import BNI from "../../assets/bni-1.png";
import Permata1 from "../../assets/permata-1.png";
import BCA2 from "../../assets/bca-2.png";
import Qris from "../../assets/qris.png";

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

function Information() {
  const [open, setOpen] = useState(false);
  const [alwaysOpen, setAlwaysOpen] = useState(false);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [openDetailPayment, setOpenDetailPayment] = useState(false);
  const [checkedPayment, setCheckedPayment] = useState(0);
  const handleAlwaysOpen = (value) => {
    setAlwaysOpen(alwaysOpen === value ? 0 : value);
  };

  return (
    <>
      <div className="border rounded-lg lg:border-black/100 border-black/20 px-3 mt-5">
        <div className="flex justify-between">
          <Typography className="mt-3 cursor-default font-semibold">
            Contact Infomation
          </Typography>
          <Typography className="mt-3 underline text-xs cursor-pointer">
            Close
          </Typography>
        </div>
        <div className="mt-5">
          <Input
            variant="static"
            label="Your Name*"
            placeholder="Your Name"
            className="flex text-base"
          />
        </div>
        <div>
          <Typography className="mt-3 font-semibold">
            Shipping Address
          </Typography>
          <div className="mt-7 ">
            <Input
              variant="static"
              label="Recipient's Name*"
              placeholder="Enter Your recipient’s name"
              className="flex text-[15px]"
            />
          </div>
          <div className="mt-7">
            <Input
              variant="static"
              label="Address*"
              placeholder="Enter Your address"
              className=""
            />
          </div>
          <div className="grid grid-cols-2 lg:gap-6 gap-20 mt-5">
            <Select variant="standard" label="Province*">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
            <Select variant="standard" label="City*">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
            <Select variant="standard" label="District*">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
            <Select variant="standard" label="Sub District*">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <div className="mt-9 ">
            <Input variant="static" label="Postal code*" className="text-lg" />
          </div>
          <div className="mt-5 ">
            <Input
              variant="static"
              label="Phone*"
              placeholder="+62 Your phone number"
              className="text-lg"
            />
          </div>
          <div className="flex justify-center mt-4">
            <Button className="w-full text-sm bg-[#989898]">SAVE</Button>
          </div>
          <div className="border border-b-[1px] mt-4" />
          <div className="mt-5">
            <Typography className="font-semibold">Delivery</Typography>
            <Typography className="text-xs text-[#989898] py-7 -mt-6 font-semibold">
              Please complete your shipping address
            </Typography>
          </div>
        </div>
      </div>
      <div className="-mt-5 py-10">
        <Typography className="px-3 text-lg font-semibold">Payment</Typography>
        {openDetailPayment ? (
          <Card
            floated={false}
            shadow={false}
            className="border lg:border-black/100 border-black/20 mt-5 rounded-lg"
          >
            <CardBody shadow={false}>
              <div className="flex justify-between -mt-2">
                <Typography className="text-sm">VIRTUAL-ACCOUNT</Typography>
                <Typography
                  className="underline text-sm cursor-pointer"
                  onClick={() => setOpenDetailPayment(false)}
                >
                  Change
                </Typography>
              </div>
              <div className="flex flex-cols-2 space-x-4 bg-none mt-5 px-3">
                <img
                  src={Mandiri1}
                  alt="mandiri"
                  className="w-7 h-7 object-cover"
                />
                <div className="grid grid-rows-3 gap-2">
                  <Typography className="">MANDIRI Virtual Account</Typography>
                  <Typography className="text-sm -mt-4">
                    Pembayaran hanya dapat dilakukan oleh nasabah Bank Mandiri
                    melalui ATM, Internet Banking, dan Mandiri Online.
                  </Typography>
                  <div>
                    <Typography className="text-sm">
                      - Segera lakukan pembayaran agar pesanan anda tidak
                      dibatalkan.
                    </Typography>
                    <Typography className="text-sm">
                      - Setelah Anda bayar, validasi akan di lakukan secara
                      otomatis.
                    </Typography>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ) : (
          <>
            <div className="border lg:border-black/100 border-black/20  mt-5 rounded-lg px-3">
              <Accordion
                open={alwaysOpen}
                icon={<Icon id={1} open={alwaysOpen} />}
              >
                <AccordionHeader onClick={() => handleAlwaysOpen(1)}>
                  <Typography className="text-sm">VIRTUAL-ACCOUNT</Typography>
                </AccordionHeader>
                <AccordionBody className="mt-3">
                  <div className="flex flex-col gap-8 ">
                    <Radio
                      onChange={() => {
                        setOpenDetailPayment(true);
                        setCheckedPayment(1);
                      }}
                      checked={checkedPayment === 1}
                      name="description"
                      label={
                        <div className="flex flex-cols-2 -mt-[16px] space-x-4 bg-none">
                          <img
                            src={BCA1}
                            alt="BCA1"
                            className="w-7 h-7 object-cover"
                          />
                          <Typography className="-mt-[2px]">
                            BCA Virtual account
                          </Typography>
                        </div>
                      }
                      containerProps={{
                        className: "-mt-5",
                      }}
                    />
                    <Radio
                      onChange={() => {
                        setOpenDetailPayment(true);
                        setCheckedPayment(2);
                      }}
                      checked={checkedPayment === 2}
                      name="description"
                      label={
                        <div className="flex flex-cols-2 -mt-[16px] space-x-4">
                          <img
                            src={Mandiri1}
                            alt="Mandiri"
                            className="w-7 h-7 object-cover"
                          />
                          <Typography className="-mt-[2px]">
                            MANDIRI Virtual account
                          </Typography>
                        </div>
                      }
                      containerProps={{
                        className: "-mt-5",
                      }}
                    />
                    <Radio
                      onChange={() => {
                        setOpenDetailPayment(true);
                        setCheckedPayment(3);
                      }}
                      checked={checkedPayment === 3}
                      name="description"
                      label={
                        <div className="flex flex-cols-2 -mt-[16px] space-x-4">
                          <img
                            src={BNI}
                            alt="BNI"
                            className="w-7 h-7 object-cover"
                          />
                          <Typography className="-mt-[2px]">
                            BNI Virtual account
                          </Typography>
                        </div>
                      }
                      containerProps={{
                        className: "-mt-5",
                      }}
                    />
                    <Radio
                      onChange={() => {
                        setOpenDetailPayment(true);
                        setCheckedPayment(4);
                      }}
                      checked={checkedPayment === 4}
                      name="description"
                      label={
                        <div className="flex flex-cols-2 -mt-[16px] space-x-4">
                          <img
                            src={Permata1}
                            alt="BCA2"
                            className="w-8 h-7 object-cover"
                          />
                          <Typography className="-mt-[2px]">
                            PERMATA Virtual account
                          </Typography>
                        </div>
                      }
                      containerProps={{
                        className: "-mt-5",
                      }}
                    />
                    <Radio
                      onChange={() => {
                        setOpenDetailPayment(true);
                        setCheckedPayment(5);
                      }}
                      checked={checkedPayment === 5}
                      name="description"
                      label={
                        <div className="flex flex-cols-2 -mt-[16px] space-x-4">
                          <img
                            src={BCA2}
                            alt="BCA2"
                            className="w-7 h-7 object-cover"
                          />
                          <Typography className="-mt-[2px]">
                            Bank lainnya
                          </Typography>
                        </div>
                      }
                      containerProps={{
                        className: "-mt-5",
                      }}
                    />
                  </div>
                  {/* <div className="border border-gray-150 mt-12" /> */}
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  <Typography className="text-sm">QRIS</Typography>
                </AccordionHeader>
                <AccordionBody className="mt-4">
                  <Radio
                    onChange={() => {
                      setOpenDetailPayment(true);
                      setCheckedPayment(6);
                    }}
                    checked={checkedPayment === 6}
                    name="description"
                    label={
                      <div className="flex flex-cols-2 -mt-[16px] space-x-4">
                        <img
                          src={Qris}
                          alt="BCA2"
                          className="w-7 h-7 object-cover"
                        />
                        <Typography className="-mt-[2px] text-[10px]">
                          Scan QR dengan berbagai aplikasi pembayaran (mencakup
                          : OVO, DANA, Link aja, Blue indonesia )
                        </Typography>
                      </div>
                    }
                    containerProps={{
                      className: "-mt-5",
                    }}
                  />
                </AccordionBody>
              </Accordion>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Information;
