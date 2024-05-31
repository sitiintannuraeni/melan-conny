import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

function CardSkeleton() {
  return (
    <>
      <div className="grid grid-rows">
        <div className="bg-gray-400 rounded-lg h-60 w-[225px] flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-20 w-20 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <Typography className="w-[225px] h-3 bg-gray-400 mt-3 rounded-xl">
          &nbsp;
        </Typography>
        <Typography className="w-[225px] h-2 bg-gray-400 mt-3 rounded-xl">
          &nbsp;
        </Typography>
        <Typography className="w-[225px] h-2 bg-gray-400 mt-3 rounded-xl">
          &nbsp;
        </Typography>
        <Typography className="w-[225px] h-2 bg-gray-400 mt-3 rounded-xl">
          &nbsp;
        </Typography>
      </div>
    </>
  );
}

function SkeletonHomePage() {
  return (
    <>
      <div className="animate-pulse mt-10 px-32 pb-14">
        <Typography className="bg-gray-400 rounded-xl h-6 w-[225px]">
          &nbsp;
        </Typography>
        <div className="grid grid-cols-4 gap-8 mt-10">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </>
  );
}
export default SkeletonHomePage;
