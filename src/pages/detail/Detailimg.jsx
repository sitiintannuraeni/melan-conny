import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import product1 from "../../assets/product-1.png";
import detailProduct from "../../assets/detail-p1.png";
import detailProduct1 from "../../assets/detail-p2.png";
import detailProduct2 from "../../assets/detail-p3.png";
import detailProduct3 from "../../assets/detail-p4.png";

function DetailImages() {
  return (
    <>
      <div className="mt-16">
        <div className="w-full max-w-md mx-auto">
          <Card shadow={false} className="px-0">
            <CardHeader shadow={false} floated={false} className="mx-0 mt-0">
              <img
                src={product1}
                alt="product1"
                className="h-[500px] w-[450px] flex justify-center items-center"
              />
            </CardHeader>
            <CardBody className="p-1 mt-8">
              <div className="flex flex-row gap-3 h-[130px] w-[100px]">
                <img
                  src={detailProduct}
                  alt="product"
                  className="object-cover"
                />
                <img
                  src={detailProduct1}
                  alt="product"
                  className="object-cover"
                />
                <img
                  src={detailProduct2}
                  alt="product"
                  className="object-cover"
                />
                <img
                  src={detailProduct3}
                  alt="product"
                  className="object-cover"
                />
              </div>
              <div className="flex justify-end">
                <div className="flex flex-row-reverse mt-4">
                  <div className="w-[217px]">
                    <div className="border-black border-b-[5px]"></div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
export default DetailImages;
