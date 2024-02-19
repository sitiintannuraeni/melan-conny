import { PhotoIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

function SkeletonCard() {
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col bg-white h-[390px] border border-gray-400 rounded-xl">
        <div className="bg-gray-400 rounded-t-xl h-[310px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-[100px] w-[100px] text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <div className="bg-white rounded-b-xl h-[80px] mt-[110px]">
          <div className="grid grid-rows-4 px-2 mt-3 items-center">
            <Typography className="bg-gray-400 h-5 rounded-xl">
              &nbsp;
            </Typography>
            <Typography className="bg-gray-400 h-3 rounded-xl mt-1">
              &nbsp;
            </Typography>
            <Typography className="bg-gray-400 h-3 rounded-xl">
              &nbsp;
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

function SkeletonCardHome() {
  return (
    <>
      <div className="animate-pulse">
        <div className="flex justify-between items-center px-20 mt-10 animate-pulse pb-5">
          <Typography className="rounded-lg bg-gray-400 h-[20px] w-[20%]">
            &nbsp;
          </Typography>
          <Typography className="rounded-lg bg-gray-400 h-[20px] w-[20%]">
            &nbsp;
          </Typography>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-20 pb-10">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </>
  );
}

export default SkeletonCardHome;
