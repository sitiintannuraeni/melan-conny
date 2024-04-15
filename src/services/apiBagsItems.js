import {
  setPriceTotal,
  setQtyTotal,
  setBagId,
  setProducts,
} from "../slice/cartSlice";
import { apiCore } from "./apiCore";

export const apiBagItems = apiCore.injectEndpoints({
  reducerPath: "apiBagItems",
  tagTypes: ["BagItems"],
  endpoints: (builder) => ({
    getBagItems: builder.query({
      query: () => "api/bag_items",
      // transfromResponse: (response, meta, arg) => response.data,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "BagItems",
                id,
              })),
              {
                type: "BagItems",
                id: "LIST",
              },
            ]
          : [
              {
                type: "BagItems",
                id: "LIST",
              },
            ],
      async onQueryStarted(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          queryFulfilled,
          getCacheEntry,
          updateCachedData,
        }
      ) {
        try {
          const { data: response } = await queryFulfilled;
          const priceTotal = response.data.reduce((prevValue, curValue) => {
            return prevValue + curValue.quantity * curValue.product.price;
          }, 0);

          const qtyTotal = response.data.reduce((prevValue, curValue) => {
            return prevValue + curValue.quantity;
          }, 0);

          dispatch(setPriceTotal(priceTotal));
          dispatch(setQtyTotal(qtyTotal));
          dispatch(setBagId(response.data[0].bag_id));
          dispatch(setProducts(response.data));
        } catch (err) {
          console.log(err);
          dispatch(setPriceTotal(0));
          dispatch(setQtyTotal(0));
        }
      },
    }),

    addToBagItems: builder.mutation({
      query: (body) => ({
        url: "api/bag_items",
        method: "POST",
        body: body,
      }),
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: [
        {
          type: "BagItems",
          id: "LIST",
        },
      ],
      async onQueryStarted(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          queryFulfilled,
          getCacheEntry,
          updateCachedData,
        }
      ) {
        try {
          const { data: response } = await queryFulfilled;
          const qtyTotal = getState().cart.qtyTotal;

          if (qtyTotal === 0) {
            dispatch(setQtyTotal(1));
          }
        } catch (err) {
          console.log("error add to bag items", err);
        }
      },
    }),

    updateToBagItems: builder.mutation({
      query: ({ id, data }) => ({
        url: `api/bag_items/${id}`,
        method: "PUT",
        body: data,
      }),
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: [
        {
          type: "BagItems",
          id: "LIST",
        },
      ],
    }),

    deleteFromBagItems: builder.mutation({
      query: ({ id }) => ({
        url: `api/bag_items/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: [
        {
          type: "BagItems",
          id: "LIST",
        },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetBagItemsQuery,
  useAddToBagItemsMutation,
  useUpdateToBagItemsMutation,
  useDeleteFromBagItemsMutation,
} = apiBagItems;
