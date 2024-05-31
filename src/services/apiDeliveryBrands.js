import { apiCore } from "../../services/apiCore";

export const apiDeliveryBrands = apiCore.injectEndpoints({
  reducerPath: "apiDeliveryBrands",
  tagTypes: ["DeliveryBrands"],
  endpoints: (builder) => ({
    getDelivery: builder.query({
      query: () => "api/delivery-brands",
      transformResponse: (response) => response.data,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "DeliveryBrands",
                id,
              })),
              {
                type: "DeliveryBrands",
                id: "LIST",
              },
            ]
          : [
              {
                type: "DeliveryBrands",
                id: "LIST",
              },
            ],
    }),

    addToBrand: builder.mutation({
      // query: (body) => ({
      //   url: "api/delivery-brands",
      //   method: "POST",
      //   body: {
      //       name: body.name,
      //       logo: body.
      //   },
      // }),
      invalidatesTags: [
        {
          type: "DeliveryBrands",
          id: "LIST",
        },
      ],
    }),

    updateToDeliveryBrand: builder.mutation({
      query: ({ id, body }) => ({
        url: `api/delivery-brands/${id}`,
        method: "PUT",
        body: body,
      }),
    }),

    deleteFromDeliveryBrand: builder.mutation({
      query: ({ id }) => ({
        url: `api/delivery-brands/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetDeliveryQuery,
  useAddToBrandMutation,
  useUpdateToDeliveryBrandMutation,
  useDeleteFromDeliveryBrandMutation,
} = apiDeliveryBrands;
