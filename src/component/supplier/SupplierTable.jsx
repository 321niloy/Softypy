import {
  useDeletesuppliersMutation,
  useGetAllsuppliersQuery,
} from "../../redux/features/Suppliers/suppliersApi";
import { SuppliersEditModal } from "./SupplierUpdate";

export function SuppliersTable() {
  const [deletesuppliers] = useDeletesuppliersMutation();
  const { data } = useGetAllsuppliersQuery("lala");

  const delethandle = async (id) => {
    console.log("supp ID", id);
    const result = await deletesuppliers(id);
    console.log("delete", result);
  };
  return (
    <div className="overflow-x-auto rounded-xl mt-10">
      <table className="min-w-full border border-gray-200 bg-white rounded-xl shadow-lg">
        <thead>
          <tr className="bg-emerald-600 text-white">
            <th className="py-3 px-6 text-left font-semibold uppercase">
              SupplierId
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              SupplierName
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Email
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Phone
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              City
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              State
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
          {data?.data?.map((supplier, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-emerald-100" : "bg-emerald-50"
              } hover:bg-emerald-200`}
            >
              <td className="py-4 px-6 font-medium text-gray-800">
                {supplier.supplierId}
              </td>
              <td className="py-4 px-6 text-gray-700">
                {supplier.supplierName}
              </td>
              <td className="py-4 px-6 text-gray-700">{supplier.email}</td>
              <td className="py-4 px-6 text-gray-700">{supplier.phone}</td>
              <td className="py-4 px-6 text-gray-700">{supplier.city}</td>
              <td className="py-4 px-6 text-gray-700">{supplier.state}</td>

              <td className="py-4 px-6 text-center">
                <SuppliersEditModal supplier={supplier}></SuppliersEditModal>
              </td>
              <td className="py-4 px-6 text-center">
                <button
                  onClick={() => delethandle(supplier._id)}
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
