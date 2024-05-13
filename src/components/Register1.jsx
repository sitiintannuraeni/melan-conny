import { Option, Select, Typography } from "@material-tailwind/react";
import Banner from "../assets/banner-utama.png";

function Register() {
  return (
    <>
      <div className="select-none">
        <figure className="relative">
          <img
            src={Banner}
            alt="banner"
            className="w-full object-cover h-[573px]"
          />
          <div className="absolute bottom-[500px] left-[556px]">
            <Typography className="text-white text-2xl font-semibold">
              Registration
            </Typography>
          </div>
          <div className="absolute bottom-[490px] left-[300px] w-[500px]">
            <Typography className="text-white text-base font-semibold">
              Full Name
            </Typography>
          </div>
          <div className="absolute bottom-[434px] left-[300px] w-[680px] h-[40px] bg-white">
            <input type="text" className="w-full h-full px-2" />
          </div>
          <div className="absolute bottom-[375px] left-[300px] h-[40px] w-[500px] flex justify-between gap-14">
            <Typography className="text-white font-semibold">
              Province
            </Typography>
            <Typography className="text-white font-semibold">City</Typography>
          </div>
          <div className="absolute bottom-[330px] left-[300px] h-[40px] flex justify-between gap-14">
            <div className="w-72">
              <Select label="Select Version" className="bg-white">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
            <div className="w-[335px]">
              <Select label="Select Version" className="bg-white">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
          </div>
          <div className="absolute bottom-[290px] left-[300px] w-[500px]">
            <Typography className="text-white text-base font-semibold">
              Email
            </Typography>
          </div>
          <div className="absolute bottom-[235px] left-[300px] w-[680px] h-[40px] bg-white">
            <input type="text" className="w-full h-full px-2" />
          </div>
          <div className="absolute bottom-[200px] left-[300px] w-[500px]">
            <Typography className="text-white text-base font-semibold">
              Password
            </Typography>
          </div>
          <div className="absolute bottom-[145px] left-[300px] w-[680px] h-[40px] bg-white">
            <input type="text" className="w-full h-full px-2" />
          </div>
          <div className="absolute bottom-[105px] left-[300px] rounded-sm">
            <Typography className="text-white font-bold underline text-base">
              By clicking register,you agree To Our Terms of Service and privacy
              policy
            </Typography>
          </div>
          <div className="absolute bottom-[50px] left-[450px] h-[35px] w-[400px] bg-white flex justify-center items-center">
            <Typography className="text-black text-base font-semibold">
              Register
            </Typography>
          </div>
        </figure>
      </div>
    </>
  );
}

export default Register;
