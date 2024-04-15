import { Typography } from "@material-tailwind/react";
import Image1 from "../../assets/product-1.png";
import Image2 from "../../assets/product-2.png";
import Image3 from "../../assets/product-3.png";
import Image4 from "../../assets/product-6.png";
import Image5 from "../../assets/product-4.png";
import Image6 from "../../assets/product-7.png";
import Image7 from "../../assets/product-8.png";
import Image8 from "../../assets/product-5.png";
import Image9 from "../../assets/pants1.png";
import Image10 from "../../assets/pants2.png";
import CardProduct from "../../components/CardProduct";

import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function ViewAllHome() {
  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <>
      <div className="py-10">
        <Typography className="flex justify-center">
          SHORT AND LONG T-SHIRT
        </Typography>
        <div className="grid grid-cols-2 px-7 gap-3 lg:grid-cols-4 lg:gap-4 lg:px-20 pb-10 mt-6">
          <CardProduct
            img={Image1}
            name={"Elgant Basic Shirt Black"}
            items={"10,486 items sold"}
          />
          <CardProduct
            img={Image2}
            name={"Elgant Short Sleeve Shirt Black"}
            items={"2,905 items sold"}
          />
          <CardProduct
            img={Image3}
            name={"Elgant Basic Shirt Clean Look Sky Blue"}
            items={"1,486 items sold"}
          />
          <CardProduct
            img={Image4}
            name={"Elgant Short Sleeve Shirt  Sky Blue"}
            items={"395 items sold"}
          />
          <CardProduct
            img={Image5}
            name={"Elgant Basic Shirt Clean Look Black"}
            items={"1,486 items sold"}
          />
          <CardProduct
            img={Image6}
            name={"Elgant Basic Shirt Clean Look Sky"}
            items={"395 items sold"}
          />
          <CardProduct
            img={Image7}
            name={"Elgant Basic Shirt White"}
            items={"10,486 items sold"}
          />
          <CardProduct
            img={Image8}
            name={"Elgant Short Sleeve Shirt White"}
            items={"2,905 items sold"}
          />
          <CardProduct
            img={Image9}
            name={"Stylem Pants Regular Black"}
            items={"10,486 items sold"}
          />
          <CardProduct
            img={Image10}
            name={"Stylem Pants Off White"}
            items={"10,486 items sold"}
          />
        </div>
        <div className="flex items-center lg:gap-4 gap-2 md:gap-4 justify-center mt-2">
          <Button
            variant="text"
            className="flex items-center lg:gap-2 gap-3"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            <Typography className="lg:text-xs text-[9px] md:text-xs font-bold">
              Previous
            </Typography>
          </Button>
          <div className="flex items-center gap-2">
            <IconButton
              {...getItemProps(1)}
              className="h-6 w-6 lg:rounded-md rounded-sm md:rounded-md 
              lg:h-9 lg:w-9 lg:text-xs md:w-9 md:h-9 md:text-xs text-[8px]"
            >
              1
            </IconButton>
            <IconButton
              {...getItemProps(2)}
              className="h-6 w-6 lg:rounded-md rounded-sm md:rounded-md 
              lg:h-9 lg:w-9 lg:text-xs md:w-9 md:h-9 md:text-xs text-[8px]"
            >
              2
            </IconButton>
            <IconButton
              {...getItemProps(3)}
              className="h-6 w-6 lg:rounded-md rounded-sm md:rounded-md 
              lg:h-9 lg:w-9 lg:text-xs md:w-9 md:h-9 md:text-xs text-[8px]"
            >
              3
            </IconButton>
            <IconButton
              {...getItemProps(4)}
              className="h-6 w-6 lg:rounded-md rounded-sm md:rounded-md 
              lg:h-9 lg:w-9 lg:text-xs md:w-9 md:h-9 md:text-xs text-[8px]"
            >
              4
            </IconButton>
            <IconButton
              {...getItemProps(5)}
              className="h-6 w-6 lg:rounded-md rounded-sm md:rounded-md 
              lg:h-9 lg:w-9 lg:text-xs md:w-9 md:h-9 md:text-xs text-[8px]"
            >
              5
            </IconButton>
          </div>
          <Button
            variant="text"
            className="flex items-center lg:gap-2 gap-3"
            onClick={next}
            disabled={active === 5}
          >
            <Typography className="lg:text-xs text-[9px] md:text-xs font-bold">
              Next
            </Typography>
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
export default ViewAllHome;
