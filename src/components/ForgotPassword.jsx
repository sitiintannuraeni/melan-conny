import { Button, Input, Typography } from "@material-tailwind/react";
import Banner from "../assets/auth.png";
import Logo from "../assets/logo-auth.png";

function ForgotPassword() {
  return (
    <>
      <div>
        <figure className="relative">
          <img
            src={Banner}
            alt="banner"
            className="w-full object-cover h-[570px]"
          />
          <figcaption className="absolute bottom-[350px] left-[505px]">
            <div className="">
              <img
                src={Logo}
                alt="logo"
                className="h-[235px] w-[235px] object-contain"
              />
            </div>
          </figcaption>
          <div className="absolute bottom-[360px] left-[370px] w-[500px]">
            <Input label="Email Or Phone Number" color="white" />
          </div>
          <div className="absolute bottom-[290px] left-[370px] w-[500px]">
            <Typography className="text-white">
              We will send you an email with instructions on how to reset your
              password.
            </Typography>
          </div>
          <div className="absolute bottom-[228px] left-[370px]">
            <Button className="w-[500px] bg-white ">
              <Typography className="text-sm text-black">SUBMIT</Typography>
            </Button>
          </div>
        </figure>
      </div>
    </>
  );
}
export default ForgotPassword;
