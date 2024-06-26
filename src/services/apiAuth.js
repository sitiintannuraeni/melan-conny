import { setAuthToken, setAuthUser } from "../slice/apiSlice.js";
import { toast } from "react-toastify";
import {
  closeDialogChangePassword,
  closeDialogLogin,
  closeDialogRegister,
} from "../slice/menuSlice.js";
import { apiCore, baseUrlApi } from "./apiCore.js";

export const apiAuth = apiCore.injectEndpoints({
  reducerPath: "apiAuth",
  endpoints: (builder) => ({
    authRegister: builder.mutation({
      query: (registers) => ({
        url: `/api/register`,
        method: "POST",
        body: registers,
      }),
      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          const res = await fetch(`${baseUrlApi}/api/user`, {
            headers: {
              Authorization: `Bearer ${data.data.token}`,
            },
          });
          const user = await res.json();

          if (res.ok) {
            dispatch(
              setAuthUser({
                id: user.id,
                phone: user.phone,
                email: user.email,
                name: user.name,
                birthdate: user.birthdate,
              })
            );
          }
          dispatch(
            setAuthToken({
              token: data.data.token,
              data: {
                name: data.data.name,
              },
              isLoggedIn: true,
            })
          );
          dispatch(closeDialogRegister());
          toast.success("Register Success!", {
            toastId: "RegisterSuccess",
          });
        } catch (error) {
          dispatch(
            setAuthToken({
              token: "",
              isLoggedIn: false,
              data: {},
            })
          );
        }
      },
    }),

    auth: builder.mutation({
      query: (credentials) => ({
        url: `/api/login`,
        method: "POST",
        body: credentials,
      }),
      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          const res = await fetch(`${baseUrlApi}/api/user`, {
            headers: {
              Authorization: `Bearer ${data.data.token}`,
            },
          });

          const user = await res.json();

          if (res.ok) {
            dispatch(
              setAuthUser({
                id: user.id,
                phone: user.phone,
                email: user.email,
                name: user.name,
                birthdate: user.birthdate,
                gender: user.gender,
                profession: user.profession,
                instagram: user.instagram,
              })
            );
          }

          dispatch(
            setAuthToken({
              token: data.data.token,
              data: {
                name: data.data.name,
                email: data.data.email,
              },
              isLoggedIn: true,
            })
          );
          dispatch(closeDialogLogin());
          toast.success("Login Success!", {
            toastId: "loginSuccess",
          });
        } catch (error) {
          dispatch(
            setAuthToken({
              token: "",
              isLoggedIn: false,
              data: {},
            })
          );
        }
      },
    }),

    getUser: builder.query({
      query: () => "/api/user",
    }),

    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `api/users/${id}`,
        method: "PUT",
        body: body,
      }),
      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const { data: response } = await queryFulfilled;
          const { success, message, data: user } = response;

          if (success) {
            dispatch(
              setAuthUser({
                id: user.id,
                phone: user.phone,
                email: user.email,
                name: user.name,
                birthdate: user.birthdate,
                gender: user.gender,
                profession: user.profession,
                instagram: user.instagram,
              })
            );
            toast.success(message, {
              toastId: "loginSuccess",
            });
          }
        } catch (error) {
          console.log("update gagal", error);
        }
      },
    }),

    changePassword: builder.mutation({
      query: (body) => ({
        url: `/api/changepassword`,
        method: "POST",
        body: body,
      }),
      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        dispatch(closeDialogChangePassword());
        // toast.success("success confirm new password", {
        //   toastId: "Success",
        // });
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useAuthRegisterMutation,
  useAuthMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useChangePasswordMutation,
} = apiAuth;
