import { baseApi } from "../../Api/baseApi";

export const customersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCustomers: builder.mutation({
      query: (customer) => {
        console.log("Customer", customer);
        return {
          url: `/create-customer`,
          method: "POST",
          body: customer,
        };
      },
      invalidatesTags: ["customer"],
    }),
    getAllcustomer: builder.query({
      query: () => {
        return {
          url: "/customer",
          method: "GET",
        };
      },
      providesTags: ["customer"],
    }),

    getsingelcustomer: builder.query({
      query: (id) => ({
        url: `/customer/${id}`,
        method: "GET",
      }),
      providesTags: ["customer"],
    }),

    deletecustomer: builder.mutation({
      query: (id) => {
        console.log("delete", id);
        return {
          url: `/customer/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["customer"],
    }),

    updatecustomer: builder.mutation({
      query: (customerData) => {
        console.log("laga maga api", customerData);
        const { id, customers } = customerData;
        return {
          url: `/customers/${id}`,
          method: "PUT",
          body: customers,
        };
      },
      invalidatesTags: ["customer"],
    }),
  }),
});

export const {
  useAddCustomersMutation,
  useDeletecustomerMutation,
  useUpdatecustomerMutation,
  useGetAllcustomerQuery,
  useGetsingelcustomerQuery,
} = customersApi;
