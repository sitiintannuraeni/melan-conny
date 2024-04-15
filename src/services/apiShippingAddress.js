import { apiCore } from "./apiCore";

export const apiAddress = apiCore.injectEndpoints({
  reducertPath: "apiAddress",
  tagTypes: ["ShippingAddress"],

  endpoints: (builder) => ({
    getAddress: builder.query({
      query: () => "api/shipping_address",
      // transformResponse: (response) => response.data,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "ShippingAddress",
                id,
              })),
              {
                type: "ShippingAddress",
                id: "LIST",
              },
            ]
          : [
              {
                type: "ShippingAddress",
                id: "LIST",
              },
            ],
    }),

    addToAddress: builder.mutation({
      query: (body) => ({
        url: "api/shipping_address",
        method: "POST",
        body: body,
      }),
      invalidatesTags: [
        {
          type: "ShippingAddress",
          id: "LIST",
        },
      ],
    }),

    updateToAddress: builder.mutation({
      query: ({ id, body }) => ({
        url: `api/shipping_address/${id}`,
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
                recipients_name: user.recipients_name,
                address: user.address,
                province: user.province,
                city: user.city,
                district: user.district,
                sub_district: user.sub_district,
                postal_code: user.postal_code,
                number_phone: user.number_phone,
              })
            );
            toast.success(message, {
              toastId: "update success",
            });
          }
        } catch (error) {
          console.log("update gagal", error);
        }
      },
      // invalidatesTags: [
      //   {
      //     type: "ShippingAddress",
      //     id: "LIST",
      //   },
      // ],
    }),

    deleteFromAddress: builder.mutation({
      query: ({ id }) => ({
        url: `api/shipping_address/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        {
          type: "ShippingAddress",
          id: "LIST",
        },
      ],
    }),
  }),
});

export const {
  useGetAddressQuery,
  useAddToAddressMutation,
  useUpdateToAddressMutation,
  useDeleteFromAddressMutation,
} = apiAddress;
