import {
  useDeleteCategoryMutation,
  useGetAllcategoryQuery,
} from "../../redux/features/category/categoryApi";
import { CategoryEdit } from "../updateCategory/UpdateCategory";

export function CategoryTable() {
  const [deleteCategory] = useDeleteCategoryMutation();
  const { data: categoies, isLoading: getloading } =
    useGetAllcategoryQuery("lala");

  if (getloading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  const delethandle = async (id) => {
    const result = await deleteCategory(id);
    console.log("delete", result);
  };
  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full border border-gray-200 bg-white rounded-xl shadow-lg">
        <thead>
          <tr className="bg-emerald-600 text-white">
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Category Code
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Category Name
            </th>
            <th className="py-3 px-6 text-center font-semibold uppercase">
              Edit
            </th>
            <th className="py-3 px-6 text-center font-semibold uppercase">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {categoies?.data?.map((item, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-emerald-100" : "bg-emerald-50"
              } hover:bg-emerald-200`}
            >
              <td className="py-4 px-6 font-medium text-gray-800">
                {item.categoryCode}
              </td>
              <td className="py-4 px-6 text-gray-700">{item.categoryName}</td>
              <td className="py-4 px-6 text-center">
                <CategoryEdit item={item}></CategoryEdit>
              </td>
              <td className="py-4 px-6 text-center">
                <button
                  onClick={() => delethandle(item._id)}
                  className="text-red-500 hover:text-red-700 font-semibold transition duration-150"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
