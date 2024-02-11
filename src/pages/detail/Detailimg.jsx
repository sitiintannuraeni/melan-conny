import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import product1 from "../../assets/product-1.png";
import detailProduct from "../../assets/detail-p1.png";
import detailProduct1 from "../../assets/detail-p2.png";
import detailProduct2 from "../../assets/detail-p3.png";
import detailProduct3 from "../../assets/detail-p4.png";
import { useState } from "react";
import { useEffect } from "react";

function DetailImages({ images }) {
  const [thumbnell, setThumbnell] = useState("");
  useEffect(() => {
    setThumbnell(images[0].url);
  }, [images[0].url]);
  return (
    <>
      <div className="">
        <div className="w-full max-w-md mx-auto">
          <Card shadow={false} className="px-0">
            <CardHeader shadow={false} floated={false} className="mx-0 mt-0">
              <img
                src={thumbnell}
                alt="product1"
                className="h-[500px] w-[450px] flex justify-center items-center object-cover"
              />
            </CardHeader>
            <CardBody className="p-1 mt-8">
              <div className="flex flex-row gap-3 w-full overflow-x-auto">
                {images.map((image, index) => {
                  return (
                    <img
                      key={index}
                      src={image.url}
                      alt="product"
                      className="object-cover h-[100px] w-[100px] flex-shrink-0 cursor-pointer"
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
export default DetailImages;
