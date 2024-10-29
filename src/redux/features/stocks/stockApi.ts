import { baseApi } from "../../Api/baseApi";

export const stocksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addstocks: builder.mutation({
      query: (stocks) => {
        console.log("stocks maka", stocks);
        return {
          url: `/createStocks`,
          method: "POST",
          body: stocks,
        };
      },
      invalidatesTags: ["stocks"],
    }),
    getAllstocks: builder.query({
      query: () => {
        return {
          url: "/stocks",
          method: "GET",
        };
      },
      providesTags: ["stocks"],
    }),

    deletestocks: builder.mutation({
      query: (id) => {
        return {
          url: `/stock/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["stocks"],
    }),

    updatestocks: builder.mutation({
      query: (updatestocks) => {
        console.log("updatestocks", updatestocks);
        const { id, stocks } = updatestocks;
        return {
          url: `/stocks/${id}`,
          method: "PUT",
          body: stocks,
        };
      },
      invalidatesTags: ["stocks"],
    }),
  }),
});

export const {
  useAddstocksMutation,
  useDeletestocksMutation,
  useUpdatestocksMutation,
  useGetAllstocksQuery,
} = stocksApi;
