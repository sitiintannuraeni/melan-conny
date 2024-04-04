import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
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
import {
  useAddToAddressMutation,
  useGetAddressQuery,
} from "../../services/apiShippingAddress";
import { useGetContactInformationQuery } from "../../services/apiContactInformation";
import { useSelector } from "react-redux";

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

function Icon1({ id, open1 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open1 ? "rotate-180" : ""} h-5 w-5 transition-transform`}
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
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = (value) => setOpen1(open1 === value ? 0 : value);
  const [alwaysOpen, setAlwaysOpen] = useState(false);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [openDetailPayment, setOpenDetailPayment] = useState(false);
  const [checkedPayment, setCheckedPayment] = useState(0);
  const [isContactInformation, setIsContactInformation] = useState(false);
  const [isShippingAddress, setIsShippingAddres] = useState(false);

  const [inputRecipientsName, setInputRecipientsName] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputProvince, setInputProvince] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputDistrict, setInputDistrict] = useState("");
  const [inputSubDistrict, setInputSubDistrict] = useState("");
  const [inputPostalCode, setInputPostalCode] = useState("");
  const [inputNumberPhone, setInputNumberPhone] = useState("");
  const { user } = useSelector((state) => state.auth);

  const handleAlwaysOpen = (value) => {
    setAlwaysOpen(alwaysOpen === value ? 0 : value);
  };

  const {
    data: shippingAddress,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetAddressQuery();

  const {
    data: contacts,
    isLoading: isLoadingContact,
    isFetching: isFetchingContact,
    isSuccess: isSuccessContact,
    isError: isErrorContact,
    error: errorContact,
  } = useGetContactInformationQuery();

  const [
    addToAddress,
    {
      isLoading: isLoadingAddToAddress,
      isError: isErrorAddToAddress,
      isSuccess: isSuccessAddToAddress,
      error: erroraddToAddress,
    },
  ] = useAddToAddressMutation();

  if (isErrorAddToAddress) {
    console.log("is Error Address", error);
  }

  function handleClickSave() {
    addToAddress({
      user_id: user.id,
      recipients_name: inputRecipientsName,
      address: inputAddress,
      province: inputProvince,
      city: inputCity,
      district: inputDistrict,
      sub_district: inputSubDistrict,
      postal_code: inputPostalCode,
      number_phone: inputNumberPhone,
    });
  }

  return (
    <>
      <div className="border rounded-lg lg:border-black/100 border-black/20 px-3 mt-5 select-none">
        {isContactInformation ? (
          <div>
            <div className="flex justify-between">
              <Typography className="mt-3 cursor-default font-semibold">
                Contact Infomation
              </Typography>
              <div onClick={() => setIsContactInformation(false)}>
                <Typography className="mt-3 underline text-xs cursor-pointer">
                  Close
                </Typography>
              </div>
            </div>
            {contacts.data.map((contact, index) => (
              <div key={index}>
                <div className="mt-2">
                  <Typography className="text-xs text-[#989898]">
                    Your Name
                  </Typography>
                  <Typography className="text-sm mt-1">
                    {contact.name}
                  </Typography>
                </div>
                <div className="border border-x-2 mt-2 border-black/10" />
                <div className="mt-2">
                  <Typography className="text-xs text-[#989898]">
                    Email Address*
                  </Typography>
                  <Typography className="text-sm mt-1">
                    Alexajy@gmail.com
                  </Typography>
                </div>
                <div className="border border-x-2 mt-2 border-black/10" />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex justify-between">
              <Typography className="mt-3 cursor-default font-semibold">
                Contact Infomation
              </Typography>
              <div onClick={() => setIsContactInformation(true)}>
                <Typography className="mt-3 underline text-xs cursor-pointer">
                  Change
                </Typography>
              </div>
            </div>
            <div className="mt-5">
              <Input
                variant="static"
                label="Your Name*"
                placeholder="Your Name"
                className="flex text-base"
              />
            </div>
            <div className="mt-5">
              <Input
                variant="static"
                label="Your Email*"
                placeholder="Your Email"
                className="flex text-base"
              />
            </div>
          </div>
        )}
        {isShippingAddress ? (
          <div>
            <div className="flex justify-between">
              <Typography className="mt-3 cursor-default font-semibold">
                Shipping Address
              </Typography>
              <div onClick={() => setIsShippingAddres(false)}>
                <Typography className="mt-3 underline text-xs cursor-pointer">
                  Change
                </Typography>
              </div>
            </div>
            {shippingAddress.map((shipping, index) => (
              <div key={index} id={shipping.id}>
                <Typography className="text-[16px] mt-3">
                  {shipping.recipients_name}
                </Typography>
                <div className="flex gap-2 mt-1">
                  <Typography className="text-[16px]">
                    {shipping.district}, {shipping.address},{" "}
                    {shipping.sub_district}, {shipping.postal_code}
                  </Typography>
                </div>
              </div>
            ))}
            <div className="border border-x-2 mt-4 border-black/10" />
            <div className="mt-3">
              <Accordion
                open={open1 === 1}
                icon={<Icon1 id={1} open1={open1} />}
              >
                <AccordionHeader
                  onClick={() => handleOpen1(1)}
                  className="border-none"
                >
                  <Typography className="font-semibold">Delivery</Typography>
                </AccordionHeader>
                <AccordionBody className="-mt-[25px] border-none pl-2">
                  <div className="flex flex-col-2 mt-3 space-x-2">
                    <Radio ripple={false} />
                    <div>
                      <Typography className="text-sm mt-1">
                        Sicepat - Regular(1-2) hari
                      </Typography>
                      <Typography className="text-xs">Rp 11.500</Typography>
                    </div>
                  </div>
                  <div className="flex flex-col-2 mt-3 space-x-2">
                    <Radio ripple={false} />
                    <div>
                      <Typography className="text-sm mt-1">
                        JNE - REG(1-2) hari
                      </Typography>
                      <Typography className="text-sm">Rp 10.500</Typography>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
              <Typography className="text-xs text-[#989898] -mt-5 py-4 font-semibold">
                Please complete your shipping address
              </Typography>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <div>
                <Typography className="mt-3 font-semibold">
                  Shipping Address
                </Typography>
                <div className="mt-7 ">
                  <Input
                    variant="static"
                    value={inputRecipientsName}
                    onChange={(e) => setInputRecipientsName(e.target.value)}
                    label="Recipient's Name*"
                    placeholder="Enter Your recipient’s name"
                    className="flex text-[15px]"
                  />
                </div>
                <div className="mt-7">
                  <Input
                    variant="static"
                    value={inputAddress}
                    onChange={(e) => setInputAddress(e.target.value)}
                    label="Address*"
                    placeholder="Enter Your address"
                    className=""
                  />
                </div>
                <div className="grid grid-cols-2 lg:gap-6 gap-20 mt-5">
                  <Select
                    variant="standard"
                    label="Province*"
                    value={inputProvince}
                    onChange={(value) => setInputProvince(value)}
                  >
                    <Option value={"JAWA BARAT"}>JAWA BARAT</Option>
                    <Option value={"JAWA TENGAH"}>JAWA TENGAH</Option>
                    <Option value={"JAWA TIMUR"}>JAWA TIMUR</Option>
                    <Option value={"DKI JAKARTA"}>DKI DJAKARTA</Option>
                    <Option value={"GORONTALO"}>GORONTALO</Option>
                  </Select>
                  <Select
                    variant="standard"
                    label="City*"
                    value={inputCity}
                    onChange={(value) => setInputCity(value)}
                  >
                    <Option value={"KAB BOGOR"}>KAB BANDUNG</Option>
                    <Option value={"KAB BEKASI"}>KAB BEKASI</Option>
                    <Option value={"KAB CIAMIS"}>KAB CIAMIS</Option>
                    <Option value={"KAB CIANJUR"}>KAB CIANJUR</Option>
                    <Option value={"KAB KARAWANG"}>KAB KARAWANG</Option>
                  </Select>
                  <Select
                    variant="standard"
                    label="District*"
                    value={inputDistrict}
                    onChange={(value) => setInputDistrict(value)}
                  >
                    <Option value={"CIGOMBONG"}>CIGOMBONG</Option>
                    <Option value={"CARINGIN"}>CARINGIN</Option>
                    <Option value={"CICURUG"}>CICURUG</Option>
                    <Option value={"CISARUA"}>CISARUA</Option>
                    <Option value={"CIAWI"}>CIAWI</Option>
                  </Select>
                  <Select
                    variant="standard"
                    label="Sub District*"
                    value={inputSubDistrict}
                    onChange={(value) => setInputSubDistrict(value)}
                  >
                    <Option value={"Kopo"}>Kopo</Option>
                    <Option value={"Leuwimalang"}>Leuwimalang</Option>
                    <Option value={"Cilember"}>Cilember</Option>
                    <Option value={"Citeko"}>Citeko</Option>
                    <Option value={"Cibeurem"}>Cibeurem</Option>
                  </Select>
                </div>
                <div className="mt-9 ">
                  <Input
                    variant="static"
                    label="Postal code*"
                    value={inputPostalCode}
                    onChange={(e) => setInputPostalCode(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div className="mt-5 ">
                  <Input
                    variant="static"
                    label="Phone*"
                    placeholder="+62 Your phone number"
                    value={inputNumberPhone}
                    onChange={(e) => setInputNumberPhone(e.target.value)}
                    className="text-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Button
                className="w-full text-sm bg-[#989898]"
                disabled={isLoadingAddToAddress}
                loading={isLoadingAddToAddress}
                onClick={() => {
                  handleClickSave();
                  setIsShippingAddres(true);
                }}
              >
                SAVE
              </Button>
            </div>
            <div className="border border-b-[1px] mt-4" />
            <div className="mt-5">
              <Typography className="font-semibold">Delivery</Typography>
              <Typography className="text-xs text-[#989898] py-7 -mt-6 font-semibold">
                Please complete your shipping address
              </Typography>
            </div>
          </div>
        )}
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
