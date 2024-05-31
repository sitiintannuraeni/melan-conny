// import {
//   ChevronDoubleRightIcon,
//   HeartIcon,
//   ShareIcon,
//   ShoppingBagIcon,
// } from "@heroicons/react/24/outline";
// import { Button, Typography } from "@material-tailwind/react";
// import {
//   closeDialogDetail,
//   closeDialogDetailCardHome,
//   openDialogLogin,
//   openDialogShareLink,
// } from "../../slice/menuSlice";
// import { useDispatch, useSelector } from "react-redux";
// import NumberFormatCurrency from "../../utils";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useAddToBagsMutation } from "../../services/apiBags";
// import {
//   useAddToBagItemsMutation,
//   useUpdateToBagItemsMutation,
// } from "../../services/apiBagsItems";
// import { useState } from "react";
// import { useCallback } from "react";
// import { useEffect } from "react";
// import Image2 from "../../assets/product-2.png";
// import { toast } from "react-toastify";
// import { setAuthLoginRedirect } from "../../slice/apiSlice";

// function ModalDescHome({
//   id,
//   product_name,
//   image,
//   price,
//   total_sold,
//   size,
//   material,
//   features,
//   overview,
//   desc,
// }) {
//   const { isLoggedIn } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [sizeId, setSizeId] = useState(0);
//   const [sizeName, setSizeName] = useState("");
//   const [errorSize, setErrorSize] = useState(false);
//   const [activeSize, setActiveSize] = useState(0);
//   const {
//     qtyTotal,
//     bagId,
//     products: cartProducts,
//   } = useSelector((state) => state.cart);
//   const location = useLocation();
//   const { user } = useSelector((state) => state.auth);
//   const [isClickDetail, setIsClickDetail] = useState(false);

//   const [
//     addToBags,
//     { data: responseApiBag, isLoading, isError, isSuccess, error },
//   ] = useAddToBagsMutation();

//   console.log({ responseApiBag });

//   const [
//     addToBagItems,
//     {
//       data: responseBagItems,
//       isLoading: isLoadingBagItems,
//       isError: isErrorBagItems,
//       isSuccess: isSuccessBagItems,
//       error: errorBagItems,
//     },
//   ] = useAddToBagItemsMutation();

//   const [
//     updateItem,
//     {
//       isLoading: isUpdating,
//       isError: isUpdateError,
//       isSuccess: isUpdateSuccess,
//     },
//   ] = useUpdateToBagItemsMutation();

//   const handleAddToBagItems = useCallback(() => {
//     if (isSuccess) {
//       console.log("hit endpont api bag items");
//       addToBagItems(responseApiBag);
//     }
//   }, [isSuccess]);

//   useEffect(() => {
//     handleAddToBagItems();
//   }, [handleAddToBagItems]);

//   const handleAddToBag = (data) => {
//     if (!isLoggedIn) {
//       dispatch(setAuthLoginRedirect(location.pathname));
//       dispatch(openDialogLogin());
//     } else {
//       if (data.size_id === 0) {
//         return setErrorSize(true);
//       } else {
//         const dataBody = {
//           user_id: user.id,
//           total_price: data.price,
//           product_id: data.product_id,
//           size_id: data.size_id,
//           quantity: 1,
//         };

//         if (qtyTotal === 0) {
//           console.log("add to bag");
//           addToBags(dataBody);
//           toast.success("Success add to cart");
//           dispatch(closeDialogDetailCardHome());
//         } else {
//           console.log("add to bag items");
//           toast.success("Success add to cart");
//           dispatch(closeDialogDetailCardHome());

//           // hit endpoint add to bag items
//           // tambahkan validasi untuk size yang sudah ada dikeranjang
//           // contoh : ketika size m di tambahkan quantity akan di plus 1

//           const currentItem = exsisItem(data.product_id, data.size_id);
//           if (!currentItem.status) {
//             addToBagItems({
//               bag_id: bagId,
//               product_id: data.product_id,
//               size_id: data.size_id,
//               quantity: currentItem.quantity + 1,
//             });
//           } else {
//             const body = {
//               bag_id: bagId,
//               product_id: data.product_id,
//               size_id: data.size_id,
//               quantity: currentItem.quantity + 1,
//             };
//             updateItem({ id: currentItem.id, data: body });
//           }
//         }
//       }
//     }
//   };

//   const handleSelectSize = (size) => {
//     setSizeId(size.id);
//     setSizeName(size.size_name);
//     setActiveSize(size.id);
//     setErrorSize(false);
//   };

//   const exsisItem = useCallback(
//     (productId, sizeId) => {
//       const index = cartProducts.findIndex(
//         (item) => item.product_id === productId && item.size_id === sizeId
//       );
//       console.log("result index", index);
//       if (index !== -1) {
//         return {
//           id: cartProducts[index].id,
//           quantity: cartProducts[index].quantity,
//           status: true,
//         };
//       } else {
//         return {
//           id: 0,
//           quantity: 0,
//           status: false,
//         };
//       }
//     },
//     [cartProducts]
//   );

//   return (
//     <>
//       <div className="w-full select-none">
//         {isClickDetail ? (
//           <div className="h-full select-none -mt-[25px]">
//             <div
//               className="text-md font-semibold mt-5 text-black hover:text-blue-500 underline cursor-pointer"
//               onClick={() => setIsClickDetail(false)}
//             >
//               Back
//             </div>
//             <div className="h-[480px] overflow-y-auto scrollbar-y overflow-x-hidden">
//               <Typography className="mt-4 font-semibold text-[14px] text-[#857F7F]">
//                 {product_name}
//               </Typography>
//               <div className="grid grid-cols-2 w-[200px] mt-[20px] text-base tracking-wider">
//                 <div className="font-semibold text-[#857F7F] text-sm">
//                   Material :
//                 </div>
//                 <div className="text-[#B0B0B0] text-sm mt-[1px]">
//                   {material}
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 w-[200px] mt-[20px] text-base tracking-wider gap-1">
//                 <div className="font-semibold text-[#857F7F] text-sm">
//                   Features :
//                 </div>
//                 <div className="text-[#B0B0B0] text-sm">{features}</div>
//               </div>
//               <div className="grid grid-cols-1 w-[450px] mt-[30px] text-base tracking-wider gap-1">
//                 <div className="font-semibold text-[#857F7F] text-sm">
//                   Overview :
//                 </div>
//                 <div className="text-[#B0B0B0] text-sm">
//                   <Typography className="text-sm">{overview}</Typography>
//                 </div>
//               </div>
//               <div className="font-semibold text-[#857F7F] mt-9 text-sm">
//                 Size Chart : <br /> Length x Chest x Shoulder
//               </div>
//               <div className="text-[#B0B0B0] mt-2">
//                 {size.map((ukuran, index) => {
//                   return (
//                     <Typography key={index} className="text-sm">
//                       {ukuran.label}
//                     </Typography>
//                   );
//                 })}
//               </div>
//               <div className="text-[#857F7F] mt-8">
//                 <Typography className="text-md font-semibold text-sm">
//                   Talent
//                 </Typography>
//               </div>
//               <div className="text-[#B0B0B0] text-sm">
//                 - Tinggi : 180 cm
//                 <br /> - Berat : 70 kg <br /> - Menggunakan size L
//               </div>
//               <div className="text-[#B0B0B0] mt-9">
//                 <Typography className="text-sm">{desc}</Typography>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <Typography className="font-medium tracking-wide text-md text-black -mt-1">
//               {product_name}
//             </Typography>
//             <Typography className="font-medium tracking-wide text-sm mt-2 text-black">
//               <NumberFormatCurrency value={price} />
//             </Typography>
//             <Typography className="text-[#989898] text-[11px]">
//               {total_sold} items sold
//             </Typography>
//             <Typography className="text-[#000000] mt-6 text-sm">
//               Select Size
//             </Typography>
//             <div className="flex gap-[7px] mt-2">
//               {size.map((ukuran, index) => {
//                 return (
//                   <Button
//                     key={index}
//                     variant={activeSize === ukuran.id ? "filled" : "outlined"}
//                     onClick={() => handleSelectSize(ukuran)}
//                     className="text-sm hover:text-white h-[40px] w-[10px] flex justify-center items-center hover:bg-black/100"
//                   >
//                     {ukuran.size_name}
//                   </Button>
//                 );
//               })}
//             </div>
//             {errorSize && (
//               <Typography variant="small" className="text-red-700">
//                 Size must be selected!
//               </Typography>
//             )}
//             <div className="w-[400px]">
//               <div className="grid grid-cols-3 gap-2 mt-6  h-[128px] overflow-auto scrollbar-y">
//                 <div className="bg-gray-200 h-[60px] flex flex-col-2 gap-2 px-3">
//                   <div className="w-[120px] h-[50px] mt-[5.4px]">
//                     <img
//                       src={Image2}
//                       alt="image2"
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <div className="w-[140px] mt-4">
//                     <div className="flex items-center ">
//                       <Typography className="text-xs text-black">
//                         Maroon
//                       </Typography>
//                     </div>
//                     <Typography className="text-[10.7px] text-black/60">
//                       stok 1237
//                     </Typography>
//                   </div>
//                 </div>
//                 <div className="bg-gray-200 h-[60px] flex flex-col-2 gap-2 px-3">
//                   <div className="w-[120px] h-[50px] mt-[5.4px]">
//                     <img
//                       src={Image2}
//                       alt="image2"
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <div className="w-[140px] mt-4 ">
//                     <div className="flex items-center ">
//                       <Typography className="text-xs text-black">
//                         Blue
//                       </Typography>
//                     </div>
//                     <Typography className="text-[10.7px] text-black/60">
//                       stok 1234
//                     </Typography>
//                   </div>
//                 </div>
//                 <div className="bg-gray-200 h-[60px] flex flex-col-2 gap-2 px-3">
//                   <div className="w-[120px] h-[50px] mt-[5.4px]">
//                     <img
//                       src={Image2}
//                       alt="image2"
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <div className="w-[140px] mt-4 ">
//                     <div className="flex items-center ">
//                       <Typography className="text-xs text-black">
//                         Green
//                       </Typography>
//                     </div>
//                     <Typography className="text-[10.7px] text-black/60">
//                       stok 1222
//                     </Typography>
//                   </div>
//                 </div>
//                 <div className="bg-gray-200 h-[60px] flex flex-col-2 gap-2 px-3">
//                   <div className="w-[120px] h-[50px] mt-[5.4px]">
//                     <img
//                       src={Image2}
//                       alt="image2"
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <div className="w-[140px] mt-4 ">
//                     <div className="flex items-center ">
//                       <Typography className="text-xs text-black">
//                         Black
//                       </Typography>
//                     </div>
//                     <Typography className="text-[10.7px] text-black/60">
//                       stok 1123
//                     </Typography>
//                   </div>
//                 </div>
//                 <div className="bg-gray-200 h-[60px] flex flex-col-2 gap-2 px-3">
//                   <div className="w-[120px] h-[50px] mt-[5.4px]">
//                     <img
//                       src={Image2}
//                       alt="image2"
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <div className="w-[140px] mt-4 ">
//                     <div className="flex items-center ">
//                       <Typography className="text-xs text-black">
//                         Brown
//                       </Typography>
//                     </div>
//                     <Typography className="text-[10.7px] text-black/60">
//                       stok 1555
//                     </Typography>
//                   </div>
//                 </div>
//                 <div className="bg-gray-200 h-[60px] flex flex-col-2 gap-2 px-3">
//                   <div className="w-[120px] h-[50px] mt-[5.4px]">
//                     <img
//                       src={Image2}
//                       alt="image2"
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <div className="w-[140px] mt-4 ">
//                     <div className="flex items-center ">
//                       <Typography className="text-xs text-black">
//                         Pink
//                       </Typography>
//                     </div>
//                     <Typography className="text-[10.7px] text-black/60">
//                       stok 1666
//                     </Typography>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col-2 mt-6 gap-2">
//               <div className="flex flex-col-2">
//                 <Button
//                   className="w-[161px] size-12 text-xs flex flex-col-2 gap-2"
//                   loading={isLoading}
//                   disabled={isLoading}
//                   onClick={() => {
//                     handleAddToBag({
//                       product_id: id,
//                       product_name: product_name,
//                       image: image,
//                       price: price,
//                       qty: 1,
//                       size_id: sizeId,
//                       size_name: sizeName,
//                     });
//                   }}
//                 >
//                   <a href="">
//                     <ShoppingBagIcon className="h-4 w-4 mt-[1px]" />
//                   </a>
//                   <Typography className="text-xs font-bold mt-[2px]">
//                     Add to Bag
//                   </Typography>
//                 </Button>
//               </div>
//               <Button
//                 className="w-[161px] size-12 text-xs bg-black/40 text-black"
//                 variant="outlined"
//                 onClick={() => navigate("/checkout")}
//               >
//                 Checkout
//               </Button>
//             </div>
//             <div className="grid grid-cols-5 gap-4 w-[90%] mt-5 font-bold">
//               <div className="col-span-3 flex justify-between">
//                 <Button
//                   variant="outlined"
//                   className="flex justify-center items-center gap-3"
//                   fullWidth
//                 >
//                   <HeartIcon className="h-4 w-4" />
//                   <Typography className="font-bold text-sm">
//                     ADD TO WISHLIST
//                   </Typography>
//                 </Button>
//               </div>
//               <div className="flex justify-center items-center">
//                 <Button
//                   fullWidth
//                   variant="outlined"
//                   onClick={() => dispatch(openDialogShareLink())}
//                 >
//                   <ShareIcon className="h-5 w-7 " />
//                 </Button>
//               </div>
//             </div>
//             <div
//               className="flex flex-col-1 mt-5 space-x-2 cursor-pointer select-none text-md font-semibold text-black hover:text-blue-600 underline"
//               onClick={() => setIsClickDetail(true)}
//             >
//               <div>Details</div>
//               <ChevronDoubleRightIcon className="h-5 w-5 mt-1" />
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default ModalDescHome;
