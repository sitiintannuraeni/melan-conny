import {
  Button,
  Input,
  Option,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useGetUserQuery, useUpdateUserMutation } from "../../services/apiAuth";
import { useDispatch, useSelector } from "react-redux";
import { openDialogChangePasswod } from "../../slice/menuSlice";
import { useState } from "react";
// const [update, { isLoading, isError, isSuccess, error }] =
//   useUpdateUserMutation();
// console.log({ update });

// if (isError) {
//   console.log("is Error Login", error);
// }

function EditAccountInfo() {
  return (
    <>
      <div className="pb-3">
        <div className="mt-6">
          <Input variant="static" label="Name" placeholder="-" />
        </div>
        <div className="mt-6">
          <Input variant="static" label="Email" placeholder="-" />
        </div>
        <div className="mt-6">
          <Input variant="static" label="Birthday" placeholder="-" />
        </div>
        <div className="mt-6">
          <Input variant="static" label="Phone number" placeholder="-" />
        </div>
      </div>
      <div className="mt-2">
        <Select variant="standard" label="Gender">
          <Option>Male</Option>
          <Option>Female</Option>
        </Select>
      </div>
      <div className="mt-4">
        <Select variant="standard" label="Profesion">
          <Option>Karyawan</Option>
          <Option>Pelajar/Mahasiswa</Option>
          <Option>Wiraswasta/Wirausaha</Option>
        </Select>
      </div>
      <div className="py-6">
        <Input
          variant="static"
          label="Instagram"
          placeholder="Enter Your Instagram"
        />
      </div>
    </>
  );
}

function AccountInfo() {
  const [isEdit, setIsEdit] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (user) {
    return (
      <>
        <div className="lg:px-0 px-4">
          <div className="fond-semibold pb-4">
            <Typography className="font-semibold">Account Info</Typography>
          </div>
          <div className="border border-current rounded-md">
            <div className="h-full w-full px-3">
              <div className="flex justify-between mt-1">
                <Typography>My Details</Typography>
                {isEdit ? (
                  <Typography
                    className="border-y-yellow-950 underline cursor-pointer"
                    onClick={() => setIsEdit(false)}
                  >
                    Cancel
                  </Typography>
                ) : (
                  <Typography
                    className="border-y-yellow-950 underline cursor-pointer"
                    onClick={() => setIsEdit(true)}
                  >
                    Edit
                  </Typography>
                )}
              </div>
              <div className="border-b-[1px] border-[#989898] w-full mt-1 " />
              {isEdit ? (
                <EditAccountInfo />
              ) : (
                <div>
                  <div className="pb-3">
                    <Typography className="text-[14px] text-[#989898] mt-3">
                      Name
                    </Typography>
                    <Typography className="text-sm">{user.name}</Typography>
                  </div>
                  <div className="pb-3">
                    <Typography className="text-[14px] text-[#989898]">
                      Email
                    </Typography>
                    <Typography className="text-sm">{user.email}</Typography>
                  </div>
                  <div className="pb-3">
                    <Typography className="text-[14px] text-[#989898]">
                      Birthday
                    </Typography>
                    <Typography className="text-sm">
                      {user.birthdate}
                    </Typography>
                  </div>
                  <div className="pb-3">
                    <Typography className="text-[14px] text-[#989898]">
                      Phone number
                    </Typography>
                    <Typography className="text-sm">{user.phone}</Typography>
                  </div>
                  <div className="pb-3">
                    <Typography className="text-[14px] text-[#989898]">
                      Gender
                    </Typography>
                    <Typography>-</Typography>
                  </div>
                  <div className="pb-3">
                    <Typography className="text-[14px] text-[#989898]">
                      Profession
                    </Typography>
                    <Typography>-</Typography>
                  </div>
                  <div className="pb-3">
                    <Typography className="text-[14px] text-[#989898]">
                      Instagram
                    </Typography>
                    <Typography>-</Typography>
                  </div>
                </div>
              )}
            </div>
          </div>
          {isEdit ? (
            <div className="mt-3">
              <Button className="w-full bg-[#a3a3a3]">SAVE</Button>
            </div>
          ) : (
            <div className="flex justify-between border border-current mt-3 rounded-md px-3 h-14 items-center">
              <div>
                <Typography>Password</Typography>
              </div>
              <div
                className="underline cursor-pointer"
                onClick={() => dispatch(openDialogChangePasswod())}
              >
                <Typography className="text-normal">Change Password</Typography>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default AccountInfo;
