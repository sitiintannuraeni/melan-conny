import {apiCore} from "./apiCore.js";
export const apiProduct = apiCore.injectEndpoints({
  reducerPath: 'apiProducts',
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/api/products',
      transformResponse: (response) => response.products,
      providesTags: (result) =>
      result
      ? [...result.map(({id}) => ({type: 'Products', id})), {type: 'Products', id: 'LIST'}]
      : [{type: 'Products', id: 'LIST'}]
    }),
    getProductById: builder.query({
      query: (id) => ({url: `/api/product/${id}`}),
      transformResponse: (response) => response.data,
      providesTags: (result, error, id) => [{type: 'Products', id}]
    })
  }),
  overrideExisting: true
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery
} = apiProduct
