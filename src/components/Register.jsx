// import {
//   EyeIcon,
//   EyeSlashIcon,
//   InformationCircleIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   Card,
//   CardBody,
//   CardFooter,
//   Checkbox,
//   Dialog,
//   Typography,
//   Button,
//   Input,
//   Select,
//   Option,
//   Alert,
// } from "@material-tailwind/react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { closeDialogRegister, openDialogLogin } from "../slice/menuSlice";
// import { useEffect } from "react";
// import { useAuthRegisterMutation } from "../services/apiAuth";
// import { useForm } from "react-hook-form";

// function FormRegister() {
//   const [errorSize, setErrorSize] = useState(false);
//   const [passwordType, setPasswordType] = useState("password");
//   const [confirmPasswordType, setConfirmPasswordType] = useState("password");
//   const [formRegister, { isLoading, isError, isSuccess, error }] =
//     useAuthRegisterMutation();

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

//   function handleConfirmPasswordType(e) {
//     e.preventDefault();
//     if (confirmPasswordType === "password") {
//       setConfirmPasswordType("text");
//     } else {
//       setConfirmPasswordType("password");
//     }
//   }

//   const onSubmit = (data) => {
//     formRegister({
//       name: data.name,
//       email: data.email,
//       phone: data.phone,
//       password: data.password,
//       confirm_password: data.confirm_password,
//       birthdate: data.birthdate,
//       gender: data.gender,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <div className="mb-2 mt-5">
//           <Input
//             variant="static"
//             label="Your Name*"
//             type="text"
//             // value={inputName}
//             // onChange={(e) => setInputName(e.target.value)}
//             placeholder="Enter Your Name..."
//             {...register("name", { required: true })}
//           />
//           <span className="text-red-500 text-xs">
//             {errors.name && <span>Name required</span>}
//           </span>
//         </div>
//       </div>
//       {errorSize && (
//         <Typography variant="small" className="text-red-700">
//           Size must be selected!
//         </Typography>
//       )}
//       <div>
//         <div className="mb-2 mt-5">
//           <Input
//             variant="static"
//             label="Your Email*"
//             type="email"
//             // value={inputEmail}
//             // onChange={(e) => setInputEmail(e.target.value)}
//             placeholder="Enter Your Email..."
//             {...register("email", { required: true })}
//           />
//           <span className="text-red-500 text-xs">
//             {errors.email && <span>Email required</span>}
//           </span>
//         </div>
//       </div>
//       <div>
//         <div className="mb-2 mt-5">
//           <Input
//             variant="static"
//             label="Phone*"
//             // value={inputPhone}
//             // onChange={(e) => setInputPhone(e.target.value)}
//             placeholder="Enter Your Phone..."
//             {...register("phone", { required: true })}
//           />
//           <span className="text-red-500 text-xs">
//             {errors.phone && <span>Phone required</span>}
//           </span>
//         </div>
//       </div>
//       <div>
//         <div className="mb-2 mt-5">
//           <Input
//             variant="static"
//             label="Password*"
//             placeholder="Enter Password"
//             className="text-[#] text-[17px]"
//             type={passwordType}
//             // value={inputPassword}
//             // onChange={(e) => setInputPassword(e.target.value)}
//             icon={
//               passwordType === "password" ? (
//                 <EyeSlashIcon
//                   className="h-5 cursor-pointer text-black"
//                   onClick={(e) => handlePasswordType(e)}
//                 />
//               ) : (
//                 <EyeIcon
//                   className="h-5 cursor-pointer text-black"
//                   onClick={(e) => handlePasswordType(e)}
//                 />
//               )
//             }
//             {...register("password", { required: true })}
//           />
//           <span className="text-red-500 text-xs">
//             {errors.password && <span>Password required</span>}
//           </span>
//         </div>
//       </div>
//       <div className="mb-2 text-[black]">
//         <Typography variant="small" className="font-['Helvetica'] mt-2 text-sm">
//           More than 8 character
//         </Typography>
//         <Typography variant="small" className="font-['Helvetica']">
//           1 uppercase
//         </Typography>
//         <div className="float-right -mt-12">
//           <Typography
//             variant="small"
//             className="font-['Helvetica'] mt-2 text-sm"
//           >
//             1 number
//           </Typography>
//           <Typography variant="small" className="font-['Helvetica']">
//             1 lowercase
//           </Typography>
//         </div>
//       </div>
//       <div>
//         <div className="mb-2 mt-6">
//           <Input
//             variant="static"
//             label="Confirm Password*"
//             placeholder="Confirm Password"
//             className="text-[#] text-[17px]"
//             type={confirmPasswordType}
//             // value={inputConfirmPassword}
//             // onChange={(e) => setInputConfirmPassword(e.target.value)}
//             icon={
//               confirmPasswordType === "password" ? (
//                 <EyeSlashIcon
//                   className="h-5 cursor-pointer text-black"
//                   onClick={(e) => handleConfirmPasswordType(e)}
//                 />
//               ) : (
//                 <EyeIcon
//                   className="h-5 cursor-pointer text-black"
//                   onClick={(e) => handleConfirmPasswordType(e)}
//                 />
//               )
//             }
//             {...register("confirmPassword", { required: true })}
//           />
//           <span className="text-red-500 text-xs">
//             {errors.confirmPassword && <span>Confirm Password required</span>}
//           </span>
//         </div>
//       </div>
//       <div>
//         <div className="mb-2 mt-6">
//           <Input
//             variant="static"
//             label="Birth Date*"
//             type="date"
//             // onChange={(e) => setInputBirthDate(e.target.value)}
//             {...register("birthDate", { required: true })}
//           />
//           <span className="text-red-500 text-xs">
//             {errors.birthDate && <span>Birthdate required</span>}
//           </span>
//         </div>
//         <div className="mb-2 mt-5">
//           <Select
//             variant="standard"
//             label="Gender"
//             // value={inputGender}
//             // onChange={(value) => setInputGender(value)}
//             {...register("gender")}
//           >
//             <Option value={"Male"}>Male</Option>
//             <Option value={"Female"}>Female</Option>
//           </Select>
//           <span className="text-red-500 text-xs">
//             {errors.birthDate && <span>Gender required</span>}
//           </span>
//         </div>
//       </div>
//       <div className="flex flex-col-2 gap-2">
//         <Checkbox />
//         <Typography className="text-[11px] mt-2 text-black">
//           i agree receive information and commercial offers from Heylocal and
//           World White Enterprise
//         </Typography>
//       </div>
//       <div className="mt-4">
//         <Button
//           type="submit"
//           disabled={isLoading}
//           loading={isLoading}
//           // onClick={() => handleClickRegister()}
//           fullWidth
//         >
//           Register
//         </Button>
//       </div>
//     </form>
//   );
// }

// function Register() {
//   const { dialogRegister } = useSelector((state) => state.menu);
//   const dispatch = useDispatch();
//   // const [, { isLoading, isError, isSuccess, error }] =
//   //   useAuthRegisterMutation();

//   useEffect(() => {
//     const body = document.querySelector("body");
//     if (body && dialogRegister) {
//       body.classList.add("overflow-hidden");
//     } else {
//       body.classList.remove("overflow-hidden");
//     }
//   }, [dialogRegister]);

//   return (
//     <>
//       <Dialog
//         size="xs"
//         open={dialogRegister}
//         handler={() => dispatch(closeDialogRegister())}
//         className="h-[90%] select-none"
//       >
//         <div className="absolute top-0 left-0 w-full h-full rounded-lg p-[2px]">
//           <div className="w-full h-full relative top-0 left-0 overflow-y-auto">
//             <div className="flex justify-between items-center sticky top-0 p-4 bg-white z-[1]">
//               <Typography variant="h6" color="blue-gray" className="text-lg">
//                 Register
//               </Typography>
//               <a
//                 href="#"
//                 className="-mt-5 flex items-center hover:text-blue-500 text-black transition-colors"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   dispatch(closeDialogRegister());
//                 }}
//               >
//                 <XMarkIcon className="w-6 h-6" />
//               </a>
//             </div>
//             <Card className="w-full h-full" shadow={false}>
//               <CardBody className="flex flex-col relative px-4 pt-0 pb-6">
//                 <FormRegister />
//               </CardBody>
//               <CardFooter className="pt-0 -mt-5 ">
//                 <div className="mt-5 flex justify-center gap-3 items-center w-full">
//                   <Typography
//                     variant="small"
//                     className="text-sm text-[black]"
//                     color="blue-gray"
//                   >
//                     Alredy have an account?
//                   </Typography>
//                   <Typography
//                     as="a"
//                     href="#signup"
//                     variant="small"
//                     className="text-sm text-[black] font-bold"
//                     color="blue-gray"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       dispatch(openDialogLogin());
//                       dispatch(closeDialogRegister());
//                     }}
//                   >
//                     Login
//                   </Typography>
//                 </div>
//               </CardFooter>
//             </Card>
//           </div>
//         </div>
//       </Dialog>
//     </>
//   );
// }

// export default Register;
