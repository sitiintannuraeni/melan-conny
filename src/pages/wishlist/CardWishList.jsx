import { HeartIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

function CardWishList({ img, name, price }) {
  return (
    <Card
      className="max-w-[10rem] mt-7 rounded-t-lg border border-gray-200"
      shadow={false}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 h-62 relative rounded-none pb-3"
      >
        <img src={img} alt="" />
        <div className="absolute z-20 top-3 right-[10px] bg-transparent">
          <IconButton
            variant="text"
            size="sm"
            className="rounded-full bg-white "
          >
            <HeartIcon className="h-4 w-4" />
          </IconButton>
        </div>
      </CardHeader>
      <CardBody className="flex justify-start items-start p-0 h-10 px-3">
        <Typography className="text-sm text-black">{name}</Typography>
      </CardBody>
      <CardFooter className="h-8 p-0 text-black text-sm px-3">
        {price}
      </CardFooter>
    </Card>
  );
}

export default CardWishList;
