import React from "react";
import { Dialog, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogShareLink } from "../../slice/menuSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ImageA from "../../assets/image 1.svg";
import ImageB from "../../assets/image 2.svg";
import ImageC from "../../assets/image 3.svg";
import ImageLine from "../../assets/line.webp";
import ImageE from "../../assets/image 5.svg";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";

function CardLink({ img, text }) {
  return (
    <>
      <Card
        className="overflow-hidden w-[60px] h-[105px] rounded-none"
        shadow={false}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none h-[70px] flex justify-center items-center"
        >
          <img src={img} alt="imageA" className="h-14 w-14 object-cover" />
        </CardHeader>
        <CardBody className="p-0 flex justify-center">
          <Typography className="text-sm">{text}</Typography>
        </CardBody>
      </Card>
    </>
  );
}

function DetailLink() {
  const dialogShareLink = useSelector((state) => state.menu.dialogShareLink);
  const dispatch = useDispatch();
  return (
    <>
      <Dialog
        size="xs"
        open={dialogShareLink}
        handler={() => dispatch(closeDialogShareLink())}
        className="p-4 h-[300px]"
      >
        <div className="flex justify-between mb-4 px-4">
          <Typography className="mt-2 font-medium text-black text-lg">
            Share to
          </Typography>
          <a
            href="#"
            className="flex items-center hover:text-blue-500 text-black transition-colors"
            onClick={() => dispatch(closeDialogShareLink())}
          >
            <XMarkIcon className="w-6 h-6" />
          </a>
        </div>
        <div className="w-full h-[220px] lg:px-7 px-0">
          <div className="grid grid-cols-4 gap-2">
            <CardLink img={ImageA} text={"Twitter"} />
            <CardLink img={ImageB} text={"Facebook"} />
            <CardLink img={ImageC} text={"Whatsap"} />
            <CardLink img={ImageLine} text={"Line"} />
            <CardLink img={ImageE} text={"Email"} />
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default DetailLink;
