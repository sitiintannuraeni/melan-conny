import { Alert, Dialog, DialogBody } from "@material-tailwind/react";
import ModalImgHome from "./ModalImgHome";
import ModalDescHome from "./ModalDescHome";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { closeDialogDetailCardHome } from "../../slice/menuSlice";
import { useGetProductByIdQuery } from "../../services/apiProduct";
import { useParams } from "react-router-dom";

function ModalCardHome({ id: productId }) {
  const dispatch = useDispatch();

  const {
    data: product,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetProductByIdQuery(productId);

  console.log({ product });

  if (isLoading || isFetching) {
    return (
      <>
        <Alert />
      </>
    );
  }

  if (isSuccess) {
    return (
      <>
        <div>
          <div className="grid grid-cols-2 gap-16">
            <ModalImgHome images={product.images} />
            <div className="flex flex-col-2">
              <ModalDescHome
                id={product.id}
                product_name={product.product_name}
                size={product.size}
                desc={product.desc}
                // image={product.images[0].url}
                price={product.price}
                total_sold={product.total_sold}
              />
              <div
                className="flex justify-center mt-7"
                onClick={() => dispatch(closeDialogDetailCardHome())}
              >
                <XMarkIcon className="h-6 w-6 text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function ModalHome() {
  const { dialogDetailCardHome, idDetailDialogCardHome: productId } =
    useSelector((state) => state.menu);

  return (
    <>
      <div>
        <div>
          <Dialog
            size="md"
            open={dialogDetailCardHome}
            handler={() => closeDialogDetailCardHome()}
            className="select-none bg-black"
          >
            <DialogBody className="p-3 px-12">
              {productId !== 0 ? (
                <ModalCardHome productId={productId} />
              ) : (
                <></>
              )}
            </DialogBody>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default ModalHome;
