import { apiCore } from "./apiCore";

export const apiWishList = apiCore.injectEndpoints({
  reducerPath: "apiWishlist",
  tagTypes: ["Wishlist"],
  endpoints: (builder) => ({
    getWishList: builder.query({
      query: () => "api/my-wishlist",
      // transformResponse: (response) => response.data,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Wishlist",
                id,
              })),
              {
                type: "Wishlist",
                id: "LIST",
              },
            ]
          : [
              {
                type: "Wishlist",
                id: "LIST",
              },
            ],
    }),

    addToWishlist: builder.mutation({
      query: (body) => ({
        url: "api/whislist",
        method: "POST",
        body: body,
      }),
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: [
        {
          type: "Wishlist",
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
        } catch (err) {
          console.log("error add to wishlist", err);
        }
      },
    }),

    deleteFromWishlist: builder.mutation({
      query: ({ id }) => ({
        url: `api/whislist`,
        method: "POST",
        body: { product_id: id },
      }),
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: [
        {
          type: "Wishlist",
          id: "LIST",
        },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetWishListQuery,
  useAddToWishlistMutation,
  useDeleteFromWishlistMutation,
} = apiWishList;
