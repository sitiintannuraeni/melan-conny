import { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { MobileView } from "react-device-detect";
import ProductSwipper from "./ProductSwipper";

function DetailCard() {
  return (
    <>
      <MobileView className="flex justify-center items-center lg:flex-none -mt-5 md:mt-4">
        <Typography className="text-xl font-medium">
          Products Recomendation
        </Typography>
      </MobileView>
      <div className="flex justify-end mt-6 lg:mt-0 px-3">
        <Button variant="outlined" size="sm" className="rounded-md">
          View All
        </Button>
      </div>
      <ProductSwipper />
    </>
  );
}

export default DetailCard;
