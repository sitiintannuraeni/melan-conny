import {
  Button,
  Input,
  Option,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useUpdateUserMutation } from "../../services/apiAuth";
import { useDispatch, useSelector } from "react-redux";
import { openDialogChangePasswod } from "../../slice/menuSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ViewAccountInfo() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  if (user) {
    return (
      <>
        <div className="border border-current border-white rounded-md">
          <div className="h-full w-full px-3 mt-10">
            <div className="h-[0.5px] w-full bg-white mt-3" />
            <div className="pb-3">
              <Typography className="text-[14px] text-[#C4C4C4] mt-3">
                Name
              </Typography>
              <Typography className="text-sm mt-2 text-white">
                {user.name}
              </Typography>
            </div>
            <div className="pb-5">
              <Typography className="text-[14px] text-[#C4C4C4]">
                Email
              </Typography>
              <Typography className="text-sm mt-2 text-white">
                {user.email}
              </Typography>
            </div>
            <div className="pb-3">
              <Typography className="text-[14px] text-[#C4C4C4]">
                Birthday
              </Typography>
              <Typography className="text-sm mt-2 text-white">
                {user.birthdate}
              </Typography>
            </div>
            <div className="pb-3">
              <Typography className="text-[14px] text-[#C4C4C4]">
                Phone number
              </Typography>
              <Typography className="text-sm mt-2 text-white">
                {user.phone}
              </Typography>
            </div>
            <div className="pb-3">
              <Typography className="text-[14px] text-[#C4C4C4]">
                Gender
              </Typography>
              <Typography>{user.gender}</Typography>
            </div>
            <div className="pb-3">
              <Typography className="text-[14px] text-[#C4C4C4]">
                Profession
              </Typography>
              <Typography>{user.profession}</Typography>
            </div>
            <div className="pb-3">
              <Typography className="text-[14px] text-[#C4C4C4]">
                Instagram
              </Typography>
              <Link
                to={user.instagram}
                target={"_blank"}
                className="text-blue-500 hover:underline hover:text-blue-800"
              >
                {user.name}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between border border-current border-white mt-3 rounded-md px-3 h-14 items-center">
          <div>
            <Typography className="text-white">Password</Typography>
          </div>
          <div
            className="underline text-white cursor-pointer"
            onClick={() => dispatch(openDialogChangePasswod())}
          >
            <Typography className="text-normal text-white ">
              Change Password
            </Typography>
          </div>
        </div>
      </>
    );
  }
}

function EditAccountInfo() {
  const { user } = useSelector((state) => state.auth);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputBirthday, setInputBirthday] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputProfession, setInputProfession] = useState("");
  const [inputInstagram, setInputInstagram] = useState("");
  const [updateAccountInfo, { isLoading, isError, isSuccess, error }] =
    useUpdateUserMutation();

  useEffect(() => {
    setInputName(user.name);
    setInputEmail(user.email);
    setInputBirthday(user.birthdate);
    setInputPhoneNumber(user.phone);
    setInputGender(user.gender);
    setInputProfession(user.profession);
    setInputInstagram(user.instagram);
    if (isSuccess) {
      console.log({
        name: inputName,
        email: inputEmail,
        birthdate: inputBirthday,
        phone: inputPhoneNumber,
        gender: inputGender,
        profession: inputProfession,
        instagram: inputInstagram,
      });
    }
  }, [
    isSuccess,
    setInputName,
    setInputEmail,
    setInputBirthday,
    setInputPhoneNumber,
    setInputGender,
    setInputProfession,
    setInputInstagram,
    user,
  ]);

  function handleClickSaveAccountInfo() {
    updateAccountInfo({
      id: user.id,
      body: {
        name: inputName,
        email: inputEmail,
        birthdate: inputBirthday,
        phone: inputPhoneNumber,
        gender: inputGender,
        profession: inputProfession,
        instagram: inputInstagram,
      },
    });
  }
  return (
    <>
      <div className="border border-current rounded-md border-white">
        <div className="h-full w-full px-3">
          <div className="mt-10">
            <div className="h-[0.5px] w-full bg-white mt-3" />
            <div className="mt-6">
              <Input
                variant="static"
                label="Name"
                placeholder="-"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                color="white"
              />
            </div>
            <div className="mt-6">
              <Input
                variant="static"
                label="Email"
                placeholder="-"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                color="white"
              />
            </div>
            <div className="mt-6">
              <Input
                variant="static"
                label="Birthday"
                placeholder="-"
                value={inputBirthday}
                onChange={(e) => setInputBirthday(e.target.value)}
                color="white"
              />
            </div>
            <div className="mt-6">
              <Input
                variant="static"
                label="Phone number"
                placeholder="-"
                value={inputPhoneNumber}
                onChange={(e) => setInputPhoneNumber(e.target.value)}
                color="white"
              />
            </div>
          </div>
          <div className="mt-5">
            <Select
              variant="standard"
              label="Gender"
              value={inputGender}
              onChange={(value) => setInputGender(value)}
              color="green"
              className="text-white"
            >
              <Option value={"Male"}>Male</Option>
              <Option value={"Female"}>Female</Option>
            </Select>
          </div>
          <div className="mt-5">
            <Select
              variant="standard"
              label="Profesion"
              value={inputProfession}
              onChange={(value) => setInputProfession(value)}
              color="green"
              className="text-white"
            >
              <Option value={"Karyawan"}>Karyawan</Option>
              <Option value={"Pelajar/Mahasiswa"}>Pelajar/Mahasiswa</Option>
              <Option value={"Wiraswasta/Wirausaha"}>
                Wiraswasta/Wirausaha
              </Option>
            </Select>
          </div>
          <div className="py-3 mt-6">
            <Input
              variant="static"
              label="Instagram"
              placeholder="-"
              value={inputInstagram}
              onChange={(e) => setInputInstagram(e.target.value)}
              color="white"
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Button
          className="w-full bg-[#F62C85]"
          onClick={() => handleClickSaveAccountInfo()}
          loading={isLoading}
          disabled={isLoading}
        >
          SAVE
        </Button>
      </div>
    </>
  );
}

function AccountInfo() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <Typography className="font-semibold pl-5 lg:pl-3 text-white">
        Account Info
      </Typography>
      <div className="pl-[25px] relative mt-8">
        <div className="flex justify-between mt-1 lg:w-[686px] w-[310px] md:w-[738px] absolute">
          <Typography className="text-white">My Details</Typography>
          {isEdit ? (
            <Typography
              className="underline cursor-pointer text-white"
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </Typography>
          ) : (
            <Typography
              className="underline cursor-pointer text-white"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </Typography>
          )}
        </div>
      </div>
      <div className="h-full w-full px-3">
        {isEdit ? <EditAccountInfo /> : <ViewAccountInfo />}
      </div>
    </>
  );
}

export default AccountInfo;
