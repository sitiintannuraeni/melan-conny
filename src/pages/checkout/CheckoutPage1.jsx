import {
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import NumberFormatCurrency from "../../utils";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetBagItemsQuery } from "../../services/apiBagsItems";
import { baseUrlApi } from "../../services/apiCore";

function CartItem({ product }) {
  return (
    <>
      <div>
        <div className="bg-black rounded-2xl grid grid-cols-2 mt-4 p-3">
          <div className="flex flex-col-2  w-[500px]">
            <Checkbox className="border-[1.5px] border-white" color="pink" />
            <div className="flex flex-col-2 gap-4">
              <div className="flex items-center">
                <img
                  src={`${baseUrlApi}/${product.product.images[0].path}`}
                  alt="product"
                  className="h-[80px] w-[80px] object-cover"
                />
              </div>
              <div>
                <Typography className="text-white font-semibold">
                  {product.product.product_name}
                </Typography>
                <div className="flex flex-col-3 gap-2 items-center">
                  <Typography className="text-gray-400 text-xs">
                    Black
                  </Typography>
                  <Typography className="text-gray-400 text-xs">-</Typography>
                  <Typography className="text-gray-400 text-xs">
                    {product.size.size_name}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-rows-2">
            <div className="flex justify-end ">
              <Typography className="text-white">
                <NumberFormatCurrency value={product.product.price} />
              </Typography>
            </div>
            <div className="flex flex-col-5 gap-2 justify-end mt-7 items-center">
              <IconButton variant="text">
                <HeartIcon className="h-5 w-5 text-white" />
              </IconButton>
              <IconButton variant="text">
                <TrashIcon className="h-5 w-5 text-white" />
              </IconButton>
              <IconButton
                variant="outlined"
                className="h-[30px] w-[30px]"
                color="white"
              >
                <MinusIcon className="h-5 w-5 text-white" />
              </IconButton>
              <Typography className="text-white">1</Typography>
              <IconButton
                variant="outlined"
                className=" h-[30px] w-[30px]"
                color="white"
              >
                <PlusIcon className="h-5 w-5 text-white" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CheckoutPage1() {
  const navigate = useNavigate();
  const { priceTotal, qtyTotal } = useSelector((state) => state.cart);

  const {
    data: cartProduct,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetBagItemsQuery();

  if (isSuccess) {
    return (
      <>
        <div className="mt-7 lg:px-8 lg:pb-44 pb-16 cursor-default select-none">
          <div className="flex items-center gap-8">
            <a href="/" className="">
              <ArrowLeftIcon className="h-6 w-6 text-white" />
            </a>
            <Breadcrumbs className=" bg-transparent">
              <a href="/" className="text-[#FF0386]">
                <Typography>Home</Typography>
              </a>
              <a href="#" className="text-[#FF0386]">
                <Typography>Cart</Typography>
              </a>
            </Breadcrumbs>
          </div>
          <div className="grid grid-cols-2 mt-5 gap-2">
            <div className="w-[770px]">
              <div className="bg-black flex-col-2 flex items-center p-3 rounded-t-3xl">
                <Checkbox
                  className="border-[1.5px] border-white"
                  color="pink"
                />
                <Typography className="text-white">Pilih Semua</Typography>
              </div>
              {cartProduct.data.map((product, idx) => {
                return <CartItem product={product} key={idx} />;
              })}
            </div>
            <div className="flex justify-end">
              <Card className="w-[390px] rounded-2xl bg-black h-[230px]">
                <CardBody>
                  <Typography className="text-white text-lg mb-2">
                    Total Price
                  </Typography>
                  <div className="flex justify-between">
                    <div className="flex flex-col-2 ">
                      <Typography className="text-white text-xs w-[230px]">
                        Melanconny
                      </Typography>
                      <Typography className="text-white w-[50px] text-xs">
                        {qtyTotal}
                      </Typography>
                    </div>
                    <div className="w-[70px]">
                      <Typography className="text-white text-xs">
                        12222222
                      </Typography>
                      <div className="border" />
                      <Typography className="text-white text-xs">
                        {priceTotal}
                      </Typography>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="pt-8">
                  <Button className="bg-[#FF0386] w-full rounded-xl">
                    Checkout
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CheckoutPage1;
