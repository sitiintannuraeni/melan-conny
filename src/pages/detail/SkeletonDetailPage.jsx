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
      <div className="grid lg:grid-cols-2 grid-cols-1 animate-pulse px-10 py-14">
        <div className="w-full lg:max-w-md max-w-md md:max-w-screen-lg mx-auto">
          <Card shadow={false} className="lg:0 ">
            <CardHeader
              shadow={false}
              className="mx-0 mt-0 flex justify-center"
            >
              <div className="flex lg:h-[460px] h-[380px] md:h-[590px] lg:w-full w-full md:w-[620px] place-items-center justify-center bg-gray-400">
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
          </Card>
        </div>

        <div className="flex flex-col h-full lg:mt-0 mt-4 md:mt-8 px-6">
          <div className="md:px-20 lg:px-0">
            <Typography className="h-7 lg:w-[70%] rounded-full bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-3 lg:w-[70%] rounded-full bg-gray-400 mt-2">
              &nbsp;
            </Typography>
            <div className="border border-white mt-4 w-[70%]" />
            <Typography className="h-3 lg:w-[70%] rounded-full bg-gray-400 mt-4">
              &nbsp;
            </Typography>
            <Typography className="h-3 lg:w-[70%] rounded-full bg-gray-400 mt-2">
              &nbsp;
            </Typography>
            <Typography className="h-3 lg:w-[70%] rounded-full bg-gray-400 mt-2">
              &nbsp;
            </Typography>
            <div className="border border-white mt-4  w-[70%]" />
          </div>
          <Typography className="h-3 lg:w-[61.4%] rounded-full bg-gray-400 mt-7">
            &nbsp;
          </Typography>
          <div className="flex flex-col-6 lg:mt-4 mt-4 md:mt-8 gap-2 lg:px-0 md:px-20">
            <Typography className="h-[43px] lg:w-[9%] w-full rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[43px] lg:w-[9%] w-full rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[43px] lg:w-[9%] w-full rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[43px] lg:w-[9%] w-full rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[43px] lg:w-[9%] w-full rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[43px] lg:w-[9%] w-full rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
          </div>
          <Typography className="h-3 lg:w-[61.4%] rounded-full bg-gray-400 mt-4">
            &nbsp;
          </Typography>
          <div className="flex flex-col mt-3 md:px-20 lg:px-0">
            <Typography className="h-12 lg:w-[61%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
          </div>
          <div className="flex flex-col-6 mt-3 lg:gap-4 md:gap-6 gap-3 lg:px-0 md:px-20">
            <Typography className="h-12 lg:w-[45%] w-[80%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-12 lg:w-[13%] w-[16%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
          </div>
          =
        </div>
      </div>
    </>
  );
}

export default SkeletonDetailPage;
