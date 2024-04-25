// import { Button, Typography } from "@material-tailwind/react";
// import banner from "../../assets/banner.png";
// import { useGetProductsByGroupCategoryQuery } from "../../services/apiProduct.js";
// import DetailCardHome from "./DetailCardHome.jsx";
// import CardProduct from "../../components/CardProduct.jsx";
// import SkeletonCardHome from "./SkeletonCardHome.jsx";
// import HomeBanner from "../../components/HomeBanner.jsx";
// import { baseUrlApi } from "../../services/apiCore.js";
// import { useNavigate } from "react-router-dom";
// import React, { useEffect, useState } from "react";

// function ListProductByCategory() {
//   const navigate = useNavigate();
//   const {
//     data: productByCategory,
//     isLoading,
//     isFetching,
//     isSuccess,
//     isError,
//     error,
//   } = useGetProductsByGroupCategoryQuery();

//   console.log({ productByCategory });

//   if (isLoading || isFetching) {
//     return (
//       <>
//         <SkeletonCardHome />
//       </>
//     );
//   }

//   if (isError) {
//     console.log("is Error Product");
//     return <></>;
//   }

//   if (isSuccess) {
//     return (
//       <>
//         {productByCategory.map((category, categoryIndex) => (
//           <div key={categoryIndex}>
//             <div className="flex justify-between mb-5 lg:mb-12 md:mb-10 md:mt-14 px-5 lg:px-20 md:px-10 items-center">
//               <div className="w-[250px] lg:w-[85%] md:w-[85%]">
//                 <Typography className="lg:text-lg text-base md:text-lg font-bold">
//                   {category.category_name}
//                 </Typography>
//               </div>
//               <Button
//                 variant="outlined"
//                 size="sm"
//                 className="rounded-md text-[8px] lg:text-[11px] md:text-[10px]"
//                 onClick={() => navigate("/view-all")}
//               >
//                 View All
//               </Button>
//             </div>
//             <div className="grid grid-cols-2 px-7 gap-3 lg:grid-cols-4 lg:gap-4 lg:px-20 md:gap-4 md:px-10 pb-10">
//               {category.products.map((product, index) => {
//                 return (
//                   <CardProduct
//                     key={index}
//                     id={product.id}
//                     img={`${baseUrlApi}/${product.images[0].path}`}
//                     name={product.product_name}
//                     price={product.price}
//                     items={`${product.total_sold} items sold`}
//                     is_wishlist={product.is_wishlist}
//                   />
//                 );
//               })}
//             </div>
//             {categoryIndex + 1 < productByCategory.length ? (
//               <HomeBanner />
//             ) : (
//               <></>
//             )}
//           </div>
//         ))}
//       </>
//     );
//   }
// }

// function HomePage() {
//   useEffect(() => {
//     let snapToken = "5518d3bb-9612-4166-af70-4b058280a199";
//     // Saat snapToken berubah, tampilkan layar pembayaran
//     // if (snapToken) {
//     //     // Panggil fungsi Snap SDK untuk menampilkan pembayaran
//     //     window.snap.pay(snapToken, {
//     //         onSuccess: function(result) {
//     //             console.log('Pembayaran berhasil:', result);
//     //             // Tampilkan pesan sukses atau navigasi ke halaman terima kasih
//     //         },
//     //         onError: function(result) {
//     //             console.error('Error pembayaran:', result);
//     //             // Tampilkan pesan error kepada pengguna
//     //         },
//     //         onClose: function() {
//     //             console.log('Pembayaran ditutup tanpa selesai');
//     //             // Tampilkan pesan bahwa pembayaran ditutup tanpa selesai
//     //         }
//     //     });
//     // }
//   }, []);

//   return (
//     <>
//       <div className="">
//         <figure className="relative lg:h-[717px] md:h-[440px] h-[350px] w-full ">
//           <img
//             className="object-contain absolute w-full h-full left-0 top-0"
//             src={banner}
//             alt="nature image"
//           />
//           <figcaption className="lg:h-full h-[286px] md:h-full lg:mt-0 -mt-6 w-full flex flex-col justify-center items-center relative z-[1]">
//             <div className="flex gap-3 items-center lg:mt-0 mt-16">
//               <Typography className="lg:text-4xl md:text-4xl text-lg font-bold lg:-ml-[72px] md:-ml-[52px] -ml-5">
//                 VERSA
//               </Typography>
//               <Typography className="lg:text-4xl md:text-4xl text-lg text-white font-bold">
//                 TEES
//               </Typography>
//             </div>
//             <div className="flex lg:gap-4 gap-2 items-center py-1">
//               <Typography className="lg:text-lg md:text-lg text-xs font-medium lg:-ml-14 md:-ml-10 -ml-3">
//                 Regular Vit
//               </Typography>
//               <div className="lg:h-[20px] h-[16px] lg:w-[2px] w-[1px] bg-black"></div>
//               <Typography className="lg:text-lg  md:text-lg text-xs text-white font-medium">
//                 Oversided fit
//               </Typography>
//             </div>
//             <div className="px-6 mx-auto max-w-xl w-full">
//               <Typography className="text-[#5E5C5C] md:text-[15px] lg:text-[19px] text-[10px] text-center lg:-ml-14 ml-1">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </Typography>
//             </div>
//           </figcaption>
//         </figure>
//         <div className="px-3 lg:px-40 lg:py-5 -mt-10 lg:-mt-0 md:mt-4 flex items-center justify-center mb-8">
//           <div className="lg:border-[8px] border-[6px] border-black rounded-lg lg:w-[90px] w-[50px]" />
//         </div>
//         <DetailCardHome />
//       </div>
//       <div>
//         <ListProductByCategory />
//       </div>
//     </>
//   );
// }
// export default HomePage;
