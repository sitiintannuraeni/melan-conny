import React from "react";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogDetailCardHome } from "../../slice/menuSlice";
import { useGetProductByIdQuery } from "../../services/apiProduct";
import DetailImageHome from "./DetailImageHome";
import DetailDescHome from "./DetailDescHome";
import DetailLink from "../detail/DetailLink";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SkeletonDetailHome from "./SkeletonDetailHome";

function DetailCardHome() {
  const { dialogDetailCardHome, idDetailDialogCardHome: productId } =
    useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const {
    data: product,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetProductByIdQuery(productId);

  let viewHtml = "";

  if (isLoading || isFetching) {
    console.log("is Loading Product");
    viewHtml = (
      <>
        <SkeletonDetailHome />
      </>
    );
  }

  if (isError) {
    console.log("is Loading Product");
    viewHtml = <></>;
  }

  if (isSuccess) {
    console.log(product.images);
    viewHtml = (
      <>
        <div className="flex justify-between text-black">
          <div className="grid lg:grid-cols-2">
            <DetailImageHome images={product.images} />
            <DetailDescHome
              product_name={product.product_name}
              price={product.price}
              total_sold={product.total_sold}
              size={product.size}
              material={product.material}
              features={product.features}
              overview={product.overview}
              desc={product.desc}
            />
            <DetailLink />
          </div>
          <a
            href="#"
            className="flex items-start hover:text-blue-500 text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeDialogDetailCardHome());
            }}
          >
            <XMarkIcon className="w-6 h-6" />
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <Dialog
        size="lg"
        open={dialogDetailCardHome}
        handler={() => dispatch(closeDialogDetailCardHome())}
        className="p-4"
      >
        {viewHtml}
      </Dialog>
    </>
  );
}

export default DetailCardHome;
