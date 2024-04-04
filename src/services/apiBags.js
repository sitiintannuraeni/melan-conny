import { apiBagItems } from "./apiBagsItems";
import { apiCore, baseUrlApi } from "./apiCore";

export const apiBags = apiCore.injectEndpoints({
  reducerPath: "apiBags",
  endpoints: (builder) => ({
    getBags: builder.query({
      query: () => "api/bags",
      transformResponse: (response) => response.data,
    }),

    addToBags: builder.mutation({
      query: (body) => ({
        url: "api/bags",
        method: "POST",
        body: {
          user_id: body.user_id,
          total_price: body.total_price,
        },
      }),
      transformResponse: (response, meta, arg) => {
        const { product_id, size_id, quantity } = arg;

        return {
          bag_id: response.data.bag_id,
          product_id: product_id,
          size_id: size_id,
          quantity: quantity,
        };
      },
    }),

    updateToBags: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `api/bags/${id}`,
        method: "PUT",
        body: body,
      }),
    }),

    deleteFromBags: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `api/bags/${id}`,
        method: "DELETE",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetBagsQuery,
  useAddToBagsMutation,
  useUpdateToBagsMutation,
  useDeleteFromBagsMutation,
} = apiBags;
