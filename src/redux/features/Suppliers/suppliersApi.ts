import { baseApi } from "../../Api/baseApi";

export const suppliersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addsuppliers: builder.mutation({
      query: (suppliers) => {
        console.log("suppliers", suppliers);
        return {
          url: `/create-supplier`,
          method: "POST",
          body: suppliers,
        };
      },
      invalidatesTags: ["suppliers"],
    }),
    getAllsuppliers: builder.query({
      query: () => {
        return {
          url: "/supplier",
          method: "GET",
        };
      },
      providesTags: ["suppliers"],
    }),

    deletesuppliers: builder.mutation({
      query: (id) => {
        console.log("supp ID", id);
        return {
          url: `/suppliers/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["suppliers"],
    }),

    updatesuppliers: builder.mutation({
      query: (allsuppliers) => {
        console.log("laga maga api", allsuppliers);
        const { id, suppliers } = allsuppliers;
        return {
          url: `/supplier/${id}`,
          method: "PUT",
          body: suppliers,
        };
      },
      invalidatesTags: ["suppliers"],
    }),
  }),
});

export const {
  useAddsuppliersMutation,
  useDeletesuppliersMutation,
  useUpdatesuppliersMutation,
  useGetAllsuppliersQuery,
  useGetsingelsuppliersQuery,
} = suppliersApi;
