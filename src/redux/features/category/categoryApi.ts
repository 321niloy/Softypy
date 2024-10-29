import { baseApi } from "../../Api/baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (category) => {
        console.log("ALLpRODUCT", category);
        return {
          url: `/create-category`,
          method: "POST",
          body: category,
        };
      },
      invalidatesTags: ["category"],
    }),
    getAllcategory: builder.query({
      query: () => {
        return {
          url: "/category",
          method: "GET",
        };
      },
      providesTags: ["category"],
    }),

    getsingelCategory: builder.query({
      query: (id) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => {
        return {
          url: `/category/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["category"],
    }),

    updateCategory: builder.mutation({
      query: (categoriesData) => {
        console.log("laga maga", categoriesData);
        const { id, category } = categoriesData;
        console.log("update lala", id, category);
        return {
          url: `/category/${id}`,
          method: "PUT",
          body: category,
        };
      },
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetAllcategoryQuery,
  useGetsingelCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
