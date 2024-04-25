import Image1 from "../assets/product-1.png";
import Image2 from "../assets/product-2.png";
import Image3 from "../assets/product-3.png";
import Logo from "../assets/melanconny-logo.png";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardProduct1({ img, name }) {
  return (
    <div>
      <Card className="flex flex-col mt-4 bg-transparent rounded-md bg-white border border-gray-300 w-full relative select-none">
        <CardBody className="p-0 relative">
          <img
            src={img}
            alt="product-image"
            className="rounded-md cursor-pointer relative z-20 w-full h-[122px] lg:h-[300px] md:h-[360px] object-cover"
          />
          <div className="absolute z-20 top-3 left-[10px] ">
            <img
              src={Logo}
              alt="logo"
              className="h-12 w-12 -mt-4 object-contain"
            />
          </div>
        </CardBody>
      </Card>
      <Typography className="mt-3 bg-[#202020] text-white font-semibold">
        {name}
      </Typography>
    </div>
  );
}
