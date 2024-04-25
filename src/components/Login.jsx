// import {
//   EyeIcon,
//   EyeSlashIcon,
//   InformationCircleIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   Alert,
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   Dialog,
//   Input,
//   Typography,
// } from "@material-tailwind/react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   closeDialogLogin,
//   openDialogAsGuest,
//   openDialogRegister,
// } from "../slice/menuSlice";
// import { useAuthMutation } from "../services/apiAuth";
// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { Form } from "react-router-dom";

// function FormLogin() {
//   const dispatch = useDispatch();
//   const [passwordType, setPasswordType] = useState("password");
//   const [login, { isLoading, isError, isSuccess, error }] = useAuthMutation();

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   function handlePasswordType(e) {
//     e.preventDefault();
//     if (passwordType === "password") {
//       setPasswordType("text");
//     } else {
//       setPasswordType("password");
//     }
//   }

//   const onSubmit = (data) => {
//     login({
//       email: data.email,
//       password: data.password,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="flex justify-between items-center">
//         <Typography variant="h4" color="blue-gray">
//           Login
//         </Typography>
//         <a
//           href="#"
//           className="flex items-center -mt-3 hover:text-blue-500 text-black transition-colors"
//           onClick={(e) => {
//             e.preventDefault();
//             dispatch(closeDialogLogin());
//           }}
//         >
//           <XMarkIcon className="w-6 h-6" />
//         </a>
//       </div>
//   <div className="mt-3">
//     {isError && (
//       <div className="border border-current border-red-200 px-3 rounded-md py-3 flex flex-col-2 space-x-2">
//         <InformationCircleIcon className=" w-6 h-6 text-red-300" />
//         <Typography className="text-sm text-red-300">
//           Your account and/or password is incorrect, please try again
//         </Typography>
//       </div>
//     )}
//   </div>
//       <div className="mt-7">
//         <Input
//           variant="static"
//           label="Email*"
//           type="email"
//           // value={inputEmail}
//           // onChange={(e) => setInputEmail(e.target.value)}
//           placeholder="Enter Your Email..."
//           {...register("email", { required: true })}
//         />
//         <span className="text-red-500 text-xs">
//           {errors.email && <span>Email required</span>}
//         </span>
//       </div>
//       <div className="mt-7">
//         <Input
//           variant="static"
//           label="Password*"
//           placeholder="Enter Your Password..."
//           className="text-[#] text-[17px]"
//           type={passwordType}
//           // value={inputPassword}
//           // onChange={(e) => setInputPassword(e.target.value)}
//           icon={
//             passwordType === "password" ? (
//               <EyeSlashIcon
//                 className="h-5 cursor-pointer text-black"
//                 onClick={(e) => handlePasswordType(e)}
//               />
//             ) : (
//               <EyeIcon
//                 className="h-5 cursor-pointer text-black"
//                 onClick={(e) => handlePasswordType(e)}
//               />
//             )
//           }
//           {...register("password", { required: true })}
//         />
//         <span className="text-red-500 text-xs">
//           {errors.password && <span>Password required</span>}
//         </span>
//       </div>
//       <div className="mt-7">
//         <Button
//           type="submit"
//           disabled={isLoading}
//           loading={isLoading}
//           // onClick={() => handleClickLogin()}
//           fullWidth
//         >
//           Login
//         </Button>
//       </div>
//     </form>
//   );
// }

// function Login() {
//   const { dialogLogin } = useSelector((state) => state.menu);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const body = document.querySelector("body");
//     if (body && dialogLogin) {
//       body.classList.add("overflow-hidden");
//     } else {
//       body.classList.remove("overflow-hidden");
//     }
//   }, [dialogLogin]);

//   return (
//     <>
//       <Dialog
//         size="xs"
//         open={dialogLogin}
//         handler={() => dispatch(closeDialogLogin())}
//         className="bg-transparent shadow-none select-none"
//       >
//         <Card className="mx-auto w-full max-w-sm">
//           <CardBody className="flex flex-col gap-4">
//             <FormLogin />
//           </CardBody>
//           <CardFooter className="pt-0 -mt-6">
//             <div className="py-4 flex items-center justify-center">
//               <div className="border-b-[1px] border-[#B0B0B0] flex-grow"></div>
//               <Typography className="text-center mx-4 text-[black]">
//                 OR
//               </Typography>
//               <div className="border-b-[1px] border-[#B0B0B0] flex-grow"></div>
//             </div>

//             <Button
//               type="button"
//               variant="outlined"
//               fullWidth
//               className="text-sm"
//               onClick={() => {
//                 dispatch(openDialogAsGuest());
//                 dispatch(closeDialogLogin());
//               }}
//             >
//               CONTINUE AS GUEST
//             </Button>

//             <Typography
//               variant="small"
//               className="mt-4 flex justify-center text-[black]"
//             >
//               Doesn't have an account?
//             </Typography>
//             <Typography
//               as="a"
//               href="#signup"
//               variant="small"
//               color="blue-gray"
//               className="font-bold text-center mt-3 text-[black] underline"
//               onClick={(e) => {
//                 e.preventDefault();
//                 dispatch(closeDialogLogin());
//                 dispatch(openDialogRegister());
//               }}
//             >
//               Register Now
//             </Typography>
//           </CardFooter>
//         </Card>
//       </Dialog>
//     </>
//   );
// }

// export default Login;
