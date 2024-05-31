// import React from "react";
// import { Dialog } from "@material-tailwind/react";
// import { useDispatch, useSelector } from "react-redux";
// import { closeDialogDetailCardHome } from "../../slice/menuSlice";
// import { useGetProductByIdQuery } from "../../services/apiProduct";
// import DetailImageHome from "./DetailImageHome";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import SkeletonDetailHome from "./SkeletonDetailHome";
// import DetailLinkHome from "./DetailLinkHome";
// import ModalDescHome from "./ModalDescHome";

// function DetailCardHomeView({ productId }) {
//   const {
//     data: product,
//     isLoading,
//     isFetching,
//     isSuccess,
//     isError,
//     error,
//   } = useGetProductByIdQuery(productId);

//   console.log({ product });

//   if (isLoading || isFetching) {
//     return <SkeletonDetailHome />;
//   }

//   if (isError) {
//     return <></>;
//   }

//   if (isSuccess) {
//     return (
//       <>
//         <div className="grid lg:grid-cols-2 py-6">
//           <div className="w-full max-w-md mx-auto px-7">
//             <DetailImageHome images={product.images} />
//           </div>
//           <div>
//             <></>
//             <ModalDescHome
//               id={product.id}
//               product_name={product.product_name}
//               price={product.price}
//               total_sold={product.total_sold}
//               size={product.size}
//               material={product.material}
//               features={product.features}
//               overview={product.overview}
//               desc={product.desc}
//             />
//           </div>
//           <DetailLinkHome />
//         </div>
//       </>
//     );
//   }
// }

// function DetailCardHome() {
//   const { dialogDetailCardHome, idDetailDialogCardHome: productId } =
//     useSelector((state) => state.menu);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <Dialog
//         size="lg"
//         open={dialogDetailCardHome}
//         handler={() => {
//           dispatch(closeDialogDetailCardHome());
//         }}
//         className="p-4 h-[90%]"
//       >
//         <a
//           href="#"
//           className="absolute top-4 right-4 hover:text-blue-500 text-black transition-colors"
//           onClick={(e) => {
//             e.preventDefault();
//             dispatch(closeDialogDetailCardHome());
//           }}
//         >
//           <XMarkIcon className="w-6 h-6" />
//         </a>
//         {productId !== 0 ? <DetailCardHomeView productId={productId} /> : <></>}
//       </Dialog>
//     </>
//   );
// }

// export default DetailCardHome;
