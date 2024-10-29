import { baseApi } from "../../Api/baseApi";
import { useGetsingelCategoryQuery } from "../category/categoryApi";

export const itemsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    additems: builder.mutation({
      query: (items) => {
        console.log("items", items);
        return {
          url: `/items/createitem`,
          method: "POST",
          body: items,
        };
      },
      invalidatesTags: ["items"],
    }),
    getallitems: builder.query({
      query: () => {
        return {
          url: "/items/items",
          method: "GET",
        };
      },
      providesTags: ["items"],
    }),

    deleteitems: builder.mutation({
      query: (id) => {
        console.log("delete item", id);
        return {
          url: `/items/item/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["items"],
    }),

    updateitems: builder.mutation({
      query: (itemsData) => {
        console.log("laga maga api", itemsData);
        const { id, items } = itemsData;

        return {
          url: `/items/item/${id}`,
          method: "PUT",
          body: items,
        };
      },
      invalidatesTags: ["items"],
    }),
  }),
});

export const {
  useAdditemsMutation,
  useDeleteitemsMutation,
  useUpdateitemsMutation,
  useGetallitemsQuery,
} = itemsApi;
