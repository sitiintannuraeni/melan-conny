import { apiCore } from "./apiCore.js";
export const apiProduct = apiCore.injectEndpoints({
  reducerPath: "apiProducts",
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/products",
      transformResponse: (response) => response.data,
    }),
    getProductById: builder.query({
      query: (id) => ({ url: `/api/product/${id}` }),
      transformResponse: (response) => response.data,
    }),

    searchProduct: builder.query({
      query: (inputSearch) => ({
        url: `/api/products/search?search=${inputSearch}`,
      }),
      transformResponse: (response) => response.data,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useSearchProductQuery,
} = apiProduct;
