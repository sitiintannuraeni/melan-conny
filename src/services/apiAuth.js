import { setAuthToken } from "../slice/apiSlice.js";
import { toast } from "react-toastify";
import { closeDialogLogin } from "../slice/menuSlice.js";
import { apiCore } from "./apiCore.js";

export const apiAuth = apiCore.injectEndpoints({
  reducerPath: "apiAuth",
  endpoints: (builder) => ({
    auth: builder.mutation({
      query: (credentials) => ({
        url: `/api/login`,
        method: "POST",
        body: credentials,
      }),
      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
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
  }),
  overrideExisting: false,
});

export const { useAuthMutation, useGetUserQuery } = apiAuth;
