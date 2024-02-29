import { apiCore } from "./apiCore";

export const apiBags = apiCore.injectEndpoints({
  reducerPath: "apiBags",
  endpoints: (builder) => ({
    addToBags: builder.mutation({
      query: (body) => ({
        url: "api/bags",
        method: "POST",
        body: body,
      }),
    }),
    addBagToItems: builder.mutation({
      query: (body) => ({
        url: "api/bag_items",
        method: "POST",
        body: body,
      }),
    }),
  }),
});
export const { useAddToBagsMutation, useAddToBagItemMutation } = apiBags;
