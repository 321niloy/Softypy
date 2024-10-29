import {
  useDeletesalesMutation,
  useGetAllsalesQuery,
} from "../../redux/features/SaleOrders/saleApi";
import { SaleEdit } from "./SaleEdit";

export function SaleTable() {
  const [deletesales] = useDeletesalesMutation();
  const { data } = useGetAllsalesQuery("lala");
  console.log(data?.data);

  const delethandle = async (id) => {
    const result = await deletesales(id);
    console.log("delete", result);
  };

  return (
    <div className="overflow-x-auto rounded-xl mt-10">
      <table className="min-w-full border border-gray-200 bg-white rounded-xl shadow-lg">
        <thead>
          <tr className="bg-emerald-600 text-white">
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Serial
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Invoice Number
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Customer Name
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Phone
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Amount
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Date
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
          {data?.data?.map((sellsdata, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-emerald-100" : "bg-emerald-50"
              } hover:bg-emerald-200`}
            >
              <td className="py-4 px-6 font-medium text-gray-800">
                {index + 1}
              </td>{" "}
              {/* Serial using index */}
              <td className="py-4 px-6 text-gray-700">
                {sellsdata.invoiceNumber}
              </td>
              <td className="py-4 px-6 text-gray-700">{sellsdata.customer}</td>
              <td className="py-4 px-6 text-gray-700">
                {sellsdata.contactNumber}
              </td>
              <td className="py-4 px-6 text-gray-700">{sellsdata.amount}</td>
              <td className="py-4 px-6 text-gray-700">{sellsdata.date}</td>
              <td className="py-4 px-6 text-center">
                <SaleEdit sellsdata={sellsdata}></SaleEdit>
              </td>
              <td className="py-4 px-6 text-center">
                <button
                  onClick={() => delethandle(sellsdata._id)}
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
