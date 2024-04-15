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
      <div className="grid lg:grid-cols-2 grid-cols-1 animate-pulse px-4 py-14">
        <div className="w-full lg:max-w-md max-w-md md:max-w-screen-lg mx-auto">
          <Card shadow={false} className="lg:px-0">
            <CardHeader
              shadow={false}
              className="mx-0 mt-0 flex justify-center"
            >
              <div className="flex lg:h-[485px] h-[380px] md:h-[590px] lg:w-full w-full md:w-[620px] place-items-center justify-center rounded-lg bg-gray-400">
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
            <CardBody className="p-1 lg:mt-8 mt-5 md:mt-8">
              <div className="flex flex-row gap-3 w-full overflow-x-auto justify-center">
                <Typography className="lg:h-[100px] lg:w-[100px] h-[100px] w-[100px] md:h-[125px] md:w-[145px] bg-gray-400 justify-center items-center">
                  &nbsp;
                </Typography>
                <Typography className="lg:h-[100px] lg:w-[100px] h-[100px] w-[100px] md:h-[125px] md:w-[145px] bg-gray-400 justify-center items-center">
                  &nbsp;
                </Typography>
                <Typography className="lg:h-[100px] lg:w-[100px] h-[100px] w-[100px] md:h-[125px] md:w-[145px] bg-gray-400 justify-center items-center">
                  &nbsp;
                </Typography>
                <Typography className="lg:h-[100px] lg:w-[100px] h-[100px] w-[100px] md:h-[125px] md:w-[145px] bg-gray-400 justify-center items-center">
                  &nbsp;
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="flex flex-col h-full lg:mt-0 mt-4 md:mt-8">
          <div className="md:px-20 lg:px-0">
            <Typography className="h-7 lg:w-[70%] rounded-full bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-3 lg:w-[70%] rounded-full bg-gray-400 mt-2">
              &nbsp;
            </Typography>
            <Typography className="h-3 lg:w-[70%] rounded-full bg-gray-400 mt-2 text-xs">
              &nbsp;
            </Typography>
            <Typography className="h-3 lg:w-[70%] rounded-full bg-gray-400 mt-2 md:mt-[10px]">
              &nbsp;
            </Typography>
          </div>
          <div className="flex flex-col-6 lg:mt-4 mt-4 md:mt-8 gap-2 lg:px-0 md:px-20">
            <Typography className="h-[50px] lg:w-[8%] w-full rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[50px] lg:w-[8%] w-full rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[50px] lg:w-[8%] w-full rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[50px] lg:w-[8%] w-full rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[50px] lg:w-[8%] w-full rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[50px] lg:w-[8%] w-full rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
          </div>
          <div className="flex flex-col mt-3 md:px-20 lg:px-0">
            <Typography className="h-12 lg:w-[58.5%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
          </div>
          <div className="flex flex-col-6 mt-3 lg:gap-4 md:gap-6 gap-3 lg:px-0 md:px-20">
            <Typography className="h-12 lg:w-[43%] w-[80%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-12 lg:w-[13%] w-[16%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
          </div>
          <div className="mt-7 lg:px-0 md:px-20">
            <Typography className="h-7 lg:w-[67%] rounded-full bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-[10px] lg:w-[67%] rounded-full bg-gray-400 mt-3">
              &nbsp;
            </Typography>
          </div>
        </div>
      </div>
      <div className="animate-pulse">
        <div className="md:px-6 lg:px-20 px-4 lg:-mt-2 md:-mt-4 -mt-7">
          <Typography className="h-[25px] bg-gray-400 rounded-full">
            &nbsp;
          </Typography>
          <div className="flex justify-end items-end mt-6">
            <Typography className="h-[19px] w-[200px] bg-gray-400 rounded-full">
              &nbsp;
            </Typography>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 -mt-3 gap-4 lg:px-20 md:px-5 px-4 py-10">
          <div className="lg:h-[300px] md:h-[310px] h-[230px] bg-gray-400 rounded-md flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="lg:h-[100px] lg:w-[100px] md:h-[100px] md:w-[100px] h-[70px] w-[70px] text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <div className="lg:h-[300px] md:h-[310px] bg-gray-400 rounded-md flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="lg:h-[100px] lg:w-[100px] md:h-[100px] md:w-[100px] h-[70px] w-[70px] text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <div className="lg:h-[300px] md:h-[310px] bg-gray-400 rounded-md lg:flex justify-center hidden items-center md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="lg:h-[100px] lg:w-[100px] md:h-[100px] md:w-[100px] h-[70px] w-[70px] text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <div className="lg:h-[300px] md:h-[310px] bg-gray-400 rounded-md lg:flex justify-center hidden items-center md:hidden">
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
        </div>
      </div>
    </>
  );
}

export default SkeletonDetailPage;
