import {
  useDeleteitemsMutation,
  useGetallitemsQuery,
} from "../../redux/features/items/itemApi";
import { ItemsEditModal } from "./ItemsUpdate";

export function ItemsTable() {
  const [deleteitems] = useDeleteitemsMutation();

  const { data: allitems, isLoading: getloading } = useGetallitemsQuery("lala");

  if (getloading) return <p>Loading...</p>;

  const delethandle = async (id) => {
    const result = await deleteitems(id);
    console.log("delete", result);
  };

  return (
    <div className="overflow-x-auto rounded-xl mt-10">
      <table className="min-w-full border border-gray-200 bg-white rounded-xl shadow-lg">
        <thead>
          <tr className="bg-emerald-600 text-white">
            <th className="py-3 px-6 text-left font-semibold uppercase">
              ItemsId
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              ItemsName
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Category
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              CostPrice
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              SellingPrice
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
          {allitems?.data?.map((item, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-emerald-100" : "bg-emerald-50"
              } hover:bg-emerald-200`}
            >
              <td className="py-4 px-6 font-medium text-gray-800">
                {item.itemsCode}
              </td>
              <td className="py-4 px-6 text-gray-700">{item.itemsName}</td>
              <td className="py-4 px-6 text-gray-700">{item.categoryName}</td>
              <td className="py-4 px-6 text-gray-700">{item.costPrice}</td>
              <td className="py-4 px-6 text-gray-700">{item.sellingPrice}</td>

              <td className="py-4 px-6 text-center">
                <ItemsEditModal item={item}></ItemsEditModal>
              </td>
              <td className="py-4 px-6 text-center">
                <button
                  onClick={() => delethandle(item._id)}
                  className="text-emerald-500 hover:text-emerald-700 font-semibold transition duration-150"
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
