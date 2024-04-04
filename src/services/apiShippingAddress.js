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

    // updateToAddress: builder.mutation({
    //   query: { id, ...body }({
    //     url: `api/shipping_address/${1}`,
    //     method: "PUT",
    //     body: body,
    //   }),
    // }),

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
