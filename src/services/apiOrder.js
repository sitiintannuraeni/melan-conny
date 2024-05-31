import { apiCore } from "./apiCore";

export const apiOrder = apiCore.injectEndpoints({
  reducerPath: "apiOrder",
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    getMyOrder: builder.query({
      query: () => "api/order/my-order",
      transformResponse: (response) => response.data,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Order",
                id,
              })),
              {
                type: "Order",
                id: "LIST",
              },
            ]
          : [
              {
                type: "Order",
                id: "LIST",
              },
            ],
    }),

    addPaymentOrder: builder.mutation({
      query: (body) => ({
        url: "api/order",
        method: "POST",
        body: body,
      }),
    }),

    updateToOrder: builder.mutation({
      query: ({ id, body }) => ({
        url: `api/order/${id}`,
        method: "PUT",
        body: body,
      }),
    }),

    deleteFromOrder: builder.mutation({
      query: ({ id }) => ({
        url: `api/order/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetMyOrderQuery,
  useAddPaymentOrderMutation,
  useUpdateToOrderMutation,
  useDeleteFromOrderMutation,
} = apiOrder;
