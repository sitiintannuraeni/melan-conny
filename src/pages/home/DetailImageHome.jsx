import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { useState } from "react";
import { useEffect } from "react";

function DetailImageHome({ images }) {
  const [thumbnell, setThumbnell] = useState("");
  useEffect(() => {
    setThumbnell(images[0].url);
  }, [images[0].url]);
  return (
    <>
      <div className="">
        <div className="p-8 w-full max-w-md mx-auto">
          <Card shadow={false} className="px-0">
            <CardHeader shadow={false} floated={false} className="mx-0 mt-0">
              <img
                src={thumbnell}
                alt="product1"
                className="h-[380px] rounded-3xl w-[400px] flex justify-center items-center object-cover"
              />
            </CardHeader>
            <CardBody className="p-1 mt-8 border">
              <div className="flex flex-row gap-3 w-full overflow-x-auto">
                {images.map((image, index) => {
                  return (
                    <img
                      key={index}
                      src={image.url}
                      alt="product"
                      className="object-cover h-[90px] w-[85px] flex-shrink-0 cursor-pointer rounded-3xl"
                      onClick={() => setThumbnell(image.url)}
                    />
                  );
                })}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
export default DetailImageHome;
