import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

function SkeletonDetailHome() {
  return (
    <>
      <div className="flex justify-between animate-pulse">
        <div className="p-8 grid lg:grid-cols-2 gap-[68px]">
          <div className="w-full max-w-md mx-auto">
            <Card shadow={false} className="px-0">
              <CardHeader shadow={false} className="mx-0 mt-0">
                <div className="grid h-[370px] w-[386px] place-items-center rounded-xl bg-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-[90px] text-gray-500 flex items-center justify-center"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 14.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
              </CardHeader>
              <CardBody className="p-1 mt-5">
                <div className="flex flex-cols-4 gap-3">
                  <Typography className="p-2 h-[100px] w-[86px] bg-gray-400">
                    &nbsp;
                  </Typography>
                  <Typography className="p-2 h-[100px] w-[86px] bg-gray-400">
                    &nbsp;
                  </Typography>
                  <Typography className="p-2 h-[100px] w-[86px] bg-gray-400">
                    &nbsp;
                  </Typography>
                  <Typography className="p-2 h-[100px] w-[86px] bg-gray-400">
                    &nbsp;
                  </Typography>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="mt-[6px]">
            <Typography className="h-5 w-[90%] rounded-lg bg-gray-400">
              &nbsp;
            </Typography>
            <Typography className="h-3 w-[90%] rounded-lg bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-3 w-[90%] rounded-lg bg-gray-400 mt-2">
              &nbsp;
            </Typography>
            <Typography className="h-3 w-[40%] rounded-lg bg-gray-400 mt-7">
              &nbsp;
            </Typography>
            <div className="flex flex-col-6 mt-3 gap-1">
              <Typography className="h-12 w-[14%] rounded-lg bg-gray-400">
                &nbsp;
              </Typography>
              <Typography className="h-12 w-[14%] rounded-lg bg-gray-400">
                &nbsp;
              </Typography>
              <Typography className="h-12 w-[14%] rounded-lg bg-gray-400">
                &nbsp;
              </Typography>
              <Typography className="h-12 w-[14%] rounded-lg bg-gray-400">
                &nbsp;
              </Typography>
              <Typography className="h-12 w-[14%] rounded-lg bg-gray-400">
                &nbsp;
              </Typography>
              <Typography className="h-12 w-[14%] rounded-lg bg-gray-400">
                &nbsp;
              </Typography>
            </div>
            <Typography className="h-12 w-[90%] rounded-lg bg-gray-400 mt-4">
              &nbsp;
            </Typography>
            <div className="flex flex-col-2 gap-4 mt-5">
              <Typography className="h-12 w-[69%] rounded-lg bg-gray-400">
                &nbsp;
              </Typography>
              <Typography className="h-12 w-[17%] rounded-lg bg-gray-400">
                &nbsp;
              </Typography>
            </div>
            <Typography className="h-6 w-[90%] rounded-lg bg-gray-400 mt-7">
              &nbsp;
            </Typography>
            <Typography className="h-2 w-[90%] rounded-lg bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-2 w-[90%] rounded-lg bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-2 w-[90%] rounded-lg bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-2 w-[90%] rounded-lg bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-2 w-[90%] rounded-lg bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-2 w-[90%] rounded-lg bg-gray-400 mt-3">
              &nbsp;
            </Typography>
            <Typography className="h-2 w-[90%] rounded-lg bg-gray-400 mt-3">
              &nbsp;
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkeletonDetailHome;
