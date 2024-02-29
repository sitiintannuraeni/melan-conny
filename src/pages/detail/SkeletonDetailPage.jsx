import { PhotoIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";

function SkeletonDetailPage() {
  return (
    <>
      <div className="grid lg:grid-cols-2 mt-16 animate-pulse ">
        <div className="w-full max-w-md mx-auto">
          <Card shadow={false} className="px-0">
            <CardHeader shadow={false} className="mx-0 mt-0">
              <div className="grid h-[485px] w-[450px] place-items-center rounded-lg bg-gray-400">
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
            </CardHeader>
            <CardBody className="p-1 mt-8">
              <div className="flex flex-row gap-3 w-full overflow-x-auto">
                <Typography className="h-[100px] w-[100px] bg-gray-400 justify-center items-center">
                  &nbsp;
                </Typography>
                <Typography className="h-[100px] w-[100px] bg-gray-400 justify-center items-center">
                  &nbsp;
                </Typography>
                <Typography className="h-[100px] w-[100px] bg-gray-400 justify-center items-center">
                  &nbsp;
                </Typography>
                <Typography className="h-[100px] w-[100px] bg-gray-400 justify-center items-center">
                  &nbsp;
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="px-3 flex flex-col h-full">
          <div className="">
            <Typography className="h-7 w-[70%] rounded-full bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-3 w-[70%] rounded-full bg-gray-400 mt-2">
              &nbsp;
            </Typography>
            <Typography className="h-3 w-[70%] rounded-full bg-gray-400 mt-2 text-xs">
              &nbsp;
            </Typography>
            <Typography className="h-3 w-[30%] rounded-full bg-gray-400 mt-[7.5%]">
              &nbsp;
            </Typography>
          </div>
          <div className="flex flex-col-6 mt-4 gap-2">
            <Typography className="h-[50px] w-[8%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[50px] w-[8%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[50px] w-[8%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[50px] w-[8%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[50px] w-[8%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[50px] w-[8%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
          </div>
          <div className="flex flex-col mt-3">
            <Typography className="h-12 w-[58.5%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
          </div>
          <div className="flex flex-col-6 mt-3 gap-4">
            <Typography className="h-12 w-[43%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-12 w-[13%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
          </div>
          <div className="mt-7">
            <Typography className="h-7 w-[67%] rounded-full bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-2">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-2">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-2">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] w-[67%] rounded-full bg-gray-400 mt-2">
              &nbsp;
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkeletonDetailPage;
