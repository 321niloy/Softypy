import {
  useDeletestocksMutation,
  useGetAllstocksQuery,
} from "../../redux/features/stocks/stockApi";
import { StockEditModal } from "./StockEdit";

export function StockTable() {
  const [deletestocks] = useDeletestocksMutation();
  const { data } = useGetAllstocksQuery();

  const delethandle = async (id) => {
    const result = await deletestocks(id);
    console.log("delete", result);
  };

  return (
    <div className="overflow-x-auto rounded-xl mt-10">
      <table className="min-w-full border border-gray-200 bg-white rounded-xl shadow-lg">
        <thead>
          <tr className="bg-emerald-600 text-white">
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Product Name
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">SKU</th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Quantity
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Supplier
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Category
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
          {data?.data?.map((stock, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-emerald-100" : "bg-emerald-50"
              } hover:bg-emerald-200`}
            >
              <td className="py-4 px-6 font-medium text-gray-800">
                {stock.productName}
              </td>
              <td className="py-4 px-6 text-gray-700">{stock.sku}</td>
              <td className="py-4 px-6 text-gray-700">{stock.quantity}</td>
              <td className="py-4 px-6 text-gray-700">{stock.supplier}</td>
              <td className="py-4 px-6 text-gray-700">{stock.category}</td>
              <td className="py-4 px-6 text-center">
                <StockEditModal stock={stock}></StockEditModal>
              </td>
              <td className="py-4 px-6 text-center">
                <button
                  onClick={() => delethandle(stock._id)}
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
