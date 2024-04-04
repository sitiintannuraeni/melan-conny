import { apiCore } from "./apiCore";

export const apiContactInformation = apiCore.injectEndpoints({
  reducerPath: "apiContactInformation",
  tagTypes: ["ContactInformation"],
  endpoints: (builder) => ({
    getContactInformation: builder.query({
      query: () => "api/contact_information",
      transfromResponse: (response, meta, arg) => response.data,
      invalidatesTags: ["ContactInformation"],
    }),

    addToContactInformation: builder.mutation({
      query: (body) => ({
        url: "api/contact_information",
        method: "POST",
        body: body,
      }),
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: ["ContactInformation"],
    }),

    // updateToContactInformation: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `api/contact_information/${id}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   transformResponse: (response, meta, arg) => response.data,
    //   invalidatesTags: ["ContactInformation"],
    // }),

    // deleteFromContactInformation: builder.mutation({
    //   query: ({ id }) => ({
    //     url: `api/contact_information/${id}`,
    //     method: "DELETE",
    //   }),
    //   transformResponse: (response, meta, arg) => response.data,
    //   invalidatesTags: ["ContactInformation"],
    // }),
  }),
  overrideExisting: false,
});

export const {
  useGetContactInformationQuery,
  useAddToContactInformationMutation,
  //   useUpdateToContactInformationMutation,
  //   useDeleteFromContactInformationMutation,
} = apiContactInformation;
