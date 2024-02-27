import Sidebar from "../../components/Sidebar";
import Logo from "../../assets/logo1.png";
import Image1 from "../../assets/wishlist1.png";
import Image2 from "../../assets/wishlist2.png";
import Image3 from "../../assets/wishlist3.png";
import Image4 from "../../assets/wishlist4.png";
import { Card, Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../services/apiAuth";

function AccountInfo() {
  const {
    data: user,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetUserQuery();

  console.log(user, "user");

  if (isLoading || isFetching) {
    console.log("is Loading User");
    return <></>;
  }

  if (isError) {
    console.log("is Error User");
    return <></>;
  }

  if (isSuccess) {
    return (
      <>
        <div className="mt-7 px-24 pb-44 cursor-default">
          <div className="pb-10">
            <div className="flex justify-center items-center pb-3">
              <img
                src={Logo}
                alt="logo"
                className="h-[122px] w-[150px] object-cover"
              />
            </div>
            <div className="grid grid-rows-2 justify-center">
              <Typography className="text-center  ">
                MEN'S FASHION STORE Account
              </Typography>
              <Typography className="text-[#989898]">
                You can manage your account and track your order here
              </Typography>
            </div>
            <div className=" border-b-[1px] border-black mt-12 w-full" />
          </div>
          <div className="flex flex-col-2 gap-20 w-full">
            <div>
              <Sidebar />
            </div>
            <div className="w-full">
              <div className="fond-semibold pb-4">
                <Typography className="font-semibold">Account Info</Typography>
              </div>
              <div className="border border-current rounded-md">
                <div className="h-full w-full px-3">
                  <div className="flex justify-between mt-1">
                    <Typography>My Details</Typography>
                    <Typography className="border-y-yellow-950 underline cursor-pointer">
                      Edit
                    </Typography>
                  </div>
                  <div className="border-b-[1px] border-[#989898] w-full mt-1 " />
                  <div>
                    <div className="pb-3">
                      <Typography className="text-[14px] text-[#989898] mt-3">
                        Name
                      </Typography>
                      <Typography className="text-sm">{user.name}</Typography>
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
                </div>
              </div>
              <div className="flex justify-between border border-current mt-3 rounded-md px-3 h-14 items-center">
                <Typography>Password</Typography>
                <Typography className="underline cursor-pointer">
                  Change Password
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AccountInfo;
