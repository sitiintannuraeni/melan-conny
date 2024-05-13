import { apiCore } from "./apiCore.js";

export const apiProduct = apiCore.injectEndpoints({
  reducerPath: "apiProducts",
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProductsByGroupCategory: builder.query({
      query: () => "/api/products/grouped-by-category",
      transformResponse: (response) => response.data,
    }),

    invalidatesTags: (result, error, id) => [
      { type: "Products", id },
      { type: "Products", id: "PARTIAL-LIST" },
    ],

    getProductById: builder.query({
      query: (id) => ({ url: `/api/product/${id}` }),
      transformResponse: (response) => response.data,
    }),

    searchProduct: builder.query({
      query: (inputSearch) => ({
        url: `/api/products/search`,
        // url: `/api/products/search?search=${inputSearch}`,
      }),
      transformResponse: (response) => response.data,
    }),

    getProductByCategory: builder.query({
      query: (categoryId) => ({ url: `api/products/category/${categoryId}` }),
      transformResponse: (response) => response.data,
    }),

    getProductBySales: builder.query({
      query: () => ({
        url: `api/products/sort-by-sales`,
      }),
      transformResponse: (response) => response.data,
    }),

    // getProductByStock: builder.query({
    //   query: () => ({
    //     url: `api/`

    //   })
    // })
  }),
  overrideExisting: true,
});

export const {
  useGetProductsByGroupCategoryQuery,
  useGetProductByIdQuery,
  useSearchProductQuery,
  useGetProductByCategoryQuery,
  useGetProductBySalesQuery,
} = apiProduct;
