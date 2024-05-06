import { Button, Input, Typography } from "@material-tailwind/react";
import BCA from "../../assets/BCA.png";
import Mandiri from "../../assets/mandiri.png";
import BRI from "../../assets/bank-bri.png";
import BNI from "../../assets/bni.png";
import PermataBank from "../../assets/permata_bank.png";
import ShopeePay from "../../assets/shopee-pay.png";
import Checkout from "../../assets/checkout.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetBagItemsQuery } from "../../services/apiBagsItems";
import { setProducts } from "../../slice/cartSlice";
import { baseUrlApi } from "../../services/apiCore";
import NumberFormatCurrency from "../../utils";
import { useEffect } from "react";
import { useState } from "react";

function ShoppingCatalog() {
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
        {cartProduct.data.map((product, idx) => {
          return (
            <div key={idx}>
              <div className="grid grid-cols-2 h-[130px] lg:space-x-[-130px] space-x-[-96px] mt-4">
                <div className="mt-1">
                  <img
                    src={`${baseUrlApi}/${product.product.images[0].path}`}
                    alt="checkout"
                    className="h-[115px] w-[90px] object-cover rounded-md"
                  />
                </div>
                <div className="mt-3">
                  <Typography className="text-base text-white">
                    {product.product.product_name}
                  </Typography>
                  <div className="flex justify-between">
                    <Typography className="text-xs text-white">
                      10,486'items sold
                    </Typography>
                    <Typography className="text-xs text-white">
                      <NumberFormatCurrency value={product.product.price} />
                    </Typography>
                  </div>
                  <Typography className="text-white text-sm mt-3">
                    Quantity: {product.quantity}
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

function ShoppingBag() {
  const navigate = useNavigate();
  const { priceTotal, qtyTotal } = useSelector((state) => state.cart);

  return (
    <>
      <div className="lg:pl-[90px] pl-none mt-4">
        <div className="flex justify-between">
          <Typography className="text-lg font-normal text-white">
            Shopping Bag
          </Typography>
          <Typography
            className="text-sm underline cursor-pointer text-white"
            onClick={() => navigate("/view-bag")}
          >
            Edit
          </Typography>
        </div>
        <Typography className="text-xs mt-2 text-white">
          Total {qtyTotal} item(s)
        </Typography>
        <div className="border border-b-[1px] mt-1 border-white" />
        <ShoppingCatalog />
        <div className="border border-b-[1px] mt-3 border-white" />
        <div className="flex justify-between mt-4">
          <div className="lg:w-80 w-[280px]">
            <input
              type="text"
              className="lg:block lg:pl-3 pl-2 w-full font-medium rounded-md focus:ring-gray-50 py-1.5 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-base border hover:border-gray-100 sm:leading-6 transition-all focus:text-gray-900"
              placeholder="Input discount code here"
            />
          </div>
          <Button
            variant="outlined"
            className="w-[50px] flex justify-center text-[#857F7F] bg-white font-medium"
          >
            ADD
          </Button>
        </div>
        <div className="flex justify-between mt-4">
          <Typography className="text-base text-white">Order Values</Typography>
          <Typography className="text-sm text-white">
            <NumberFormatCurrency value={priceTotal} />
          </Typography>
        </div>
        <div className="flex justify-between mt-1">
          <Typography className="text-base text-white">Delivery Fee</Typography>
          <Typography className="text-sm  text-white">Rp 0</Typography>
        </div>
        <div className="flex justify-between mt-1">
          <Typography className="text-base text-white"> TOTAL </Typography>
          <Typography className="text-sm text-white">
            <NumberFormatCurrency value={priceTotal} />
          </Typography>
        </div>
        <div
          className="flex justify-center items-center mt-7"
          onClick={() => navigate("/member-order")}
        >
          <Button className="w-full bg-[#F62C85]">PAY NOW</Button>
        </div>
        <div className="py-10 -mt-5">
          <div className="flex justify-center items-center flex-cols-4 gap-3 ">
            <img src={BCA} alt="BCA" className="h-14 w-14 object-cover" />
            <img
              src={Mandiri}
              alt="Mandiri"
              className="h-14 w-14 object-cover"
            />
            <img src={BRI} alt="BRI" className="h-14 w-14 object-cover" />
            <img src={BNI} alt="BNI" className="h-14 w-14 object-cover" />
          </div>
          <div className="flex justify-center items-center gap-4">
            <img src={PermataBank} alt="permataBank" className="h-12 w-12" />
            <img src={ShopeePay} alt="ShopeePay" className="h-12 w-12" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingBag;

//   const navigate = useNavigate();
//   const { priceTotal, qtyTotal } = useSelector((state) => state.cart);

//   const {
//     data: cartProduct,
//     isLoading,
//     isFetching,
//     isSuccess,
//     isError,
//     error,
//   } = useGetBagItemsQuery();

//   if (isSuccess) {
//     console.log({ cartProduct });
//     return (
//       <>
//         {cartProduct.data.map((product, idx) => {
//           return (
//             <div className="lg:pl-[90px] pl-none mt-4" key={idx}>
//               <div className="flex justify-between">
//                 <Typography className="text-lg font-normal text-white">
//                   Shopping Bag
//                 </Typography>
//                 <Typography
//                   className="text-sm underline cursor-pointer text-white"
//                   onClick={() => navigate("/view-bag")}
//                 >
//                   Edit
//                 </Typography>
//               </div>
//               <Typography className="text-xs mt-2 text-white">
//                 Total {qtyTotal} item(s)
//               </Typography>
//               <div className="border border-b-[1px] mt-1 border-white" />
// <div className="grid grid-cols-2 h-[130px] lg:space-x-[-120px] space-x-[-96px] mt-8">
//   <div>
//     <img
//       src={`${baseUrlApi}/${product.product.images[0].path}`}
//       alt="checkout"
//       className="h-[130px] w-[100px] object-cover rounded-md"
//     />
//   </div>
//   <div className="mt-3">
//     <Typography className="text-base text-white">
//       {product.product.product_name}
//     </Typography>
//     <div className="flex justify-between">
//       <Typography className="text-xs text-white">
//         10,486'items sold
//       </Typography>
//       <Typography className="text-xs text-white">
//         <NumberFormatCurrency value={product.product.price} />
//       </Typography>
//     </div>
//   </div>
// </div>
//               <div className="border border-b-[1px] mt-4 border-white" />
//               <div className="flex justify-between mt-4">
//                 <div className="lg:w-80 w-[280px]">
//                   <input
//                     type="text"
//                     className="lg:block lg:pl-3 pl-2 w-full font-medium rounded-md focus:ring-gray-50 py-1.5 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-base border hover:border-gray-100 sm:leading-6 transition-all focus:text-gray-900"
//                     placeholder="Input discount code here"
//                   />
//                 </div>
//                 <Button
//                   variant="outlined"
//                   className="w-[50px] flex justify-center text-[#857F7F] bg-white font-medium"
//                 >
//                   ADD
//                 </Button>
//               </div>
//               <div className="mt-3">
//                 <div className="flex justify-between">
//                   <Typography className="text-base text-white">
//                     Order Values
//                   </Typography>
//                   <Typography className="text-sm text-white">
//                     <NumberFormatCurrency
//                       value={product.quantity * product.product.price}
//                     />
//                   </Typography>
//                 </div>
//                 <div className="flex justify-between mt-1">
//                   <Typography className="text-base text-white">
//                     Delivery Fee
//                   </Typography>
//                   <Typography className="text-sm  text-white">Rp 0</Typography>
//                 </div>
//                 <div className="flex justify-between mt-1">
//                   <Typography className="text-base text-white">
//                     TOTAL
//                   </Typography>
//                   <Typography className="text-sm text-white">
//                     <NumberFormatCurrency
//                       value={product.quantity * product.product.price}
//                     />
//                   </Typography>
//                 </div>
//               </div>
//               <div
//                 className="flex justify-center items-center mt-7"
//                 onClick={() => navigate("/member-order")}
//               >
//                 <Button className="w-full bg-[#F62C85]">PAY NOW</Button>
//               </div>
//               <div className="py-10 -mt-5">
//                 <div className="flex justify-center items-center flex-cols-4 gap-3 ">
//                   <img src={BCA} alt="BCA" className="h-14 w-14 object-cover" />
//                   <img
//                     src={Mandiri}
//                     alt="Mandiri"
//                     className="h-14 w-14 object-cover"
//                   />
//                   <img src={BRI} alt="BRI" className="h-14 w-14 object-cover" />
//                   <img src={BNI} alt="BNI" className="h-14 w-14 object-cover" />
//                 </div>
//                 <div className="flex justify-center items-center gap-4">
//                   <img
//                     src={PermataBank}
//                     alt="permataBank"
//                     className="h-12 w-12"
//                   />
//                   <img src={ShopeePay} alt="ShopeePay" className="h-12 w-12" />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </>
//     );
//   }
// }
