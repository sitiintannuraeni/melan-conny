import { build } from "vite";
import { apiCore } from "../../services/apiCore";

export const apiDeliveryTypes = apiCore.injectEndpoints({
  reducerPath: "apiDeliveryTypes",
  tagTypes: ["DeliveryTypes"],
  endpoints: (builder) => ({
    getAllDeliveryTypes: builder.query({
      query: () => "api/delivery-types",
      transformResponse: (response) => response.data,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "DeliveryTypes",
                id,
              })),
              {
                type: "DeliveryTypes",
                id: "LIST",
              },
            ]
          : [
              {
                type: "DeliveryTypes",
                id: "LIST",
              },
            ],
    }),

    addToDeliveryTypes: builder.mutation({
      query: (body) => ({
        url: "api/delivery-types",
        method: "POST",
        body: {
          delivery_brand_id: body.delivery_brand_id,
          name: body.name,
          price: body.price,
          estimation: body.estimation,
          description: body.description,
        },
      }),
      invalidatesTags: [
        {
          type: "DeliveryTypes",
          id: "LIST",
        },
      ],
    }),

    updateToDeliveryTypes: builder.mutation({
      query: ({ id, body }) => ({
        url: `api/delivery-types/${id}`,
        method: "PUT",
        body: body,
      }),
    }),

    deleteFromDeliveryTypes: builder.mutation({
      query: ({ id }) => ({
        url: `api/delivery-types/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllDeliveryTypesQuery,
  useAddToDeliveryTypesMutation,
  useUpdateToDeliveryTypesMutation,
  useDeleteFromDeliveryTypesMutation,
} = apiDeliveryTypes;
