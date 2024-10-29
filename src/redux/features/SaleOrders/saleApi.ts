import { baseApi } from "../../Api/baseApi";

export const salesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addsales: builder.mutation({
      query: (sales) => {
        console.log("sales", sales);
        return {
          url: `/create-sales`,
          method: "POST",
          body: sales,
        };
      },
      invalidatesTags: ["sales"],
    }),
    getAllsales: builder.query({
      query: () => {
        return {
          url: "/sales",
          method: "GET",
        };
      },
      providesTags: ["sales"],
    }),

    deletesales: builder.mutation({
      query: (id) => {
        return {
          url: `/salesOrder/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["sales"],
    }),

    updatesales: builder.mutation({
      query: (salesData) => {
        console.log("ham achu", salesData);
        const { id, sales } = salesData;
        return {
          url: `/sales/${id}`,
          method: "PUT",
          body: sales,
        };
      },
      invalidatesTags: ["sales"],
    }),
  }),
});

export const {
  useAddsalesMutation,
  useDeletesalesMutation,
  useUpdatesalesMutation,
  useGetAllsalesQuery,
} = salesApi;
