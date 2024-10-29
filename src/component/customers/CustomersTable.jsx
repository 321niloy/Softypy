import {
  useDeletecustomerMutation,
  useGetAllcustomerQuery,
} from "../../redux/features/Customers/CustomersApi";
import { CustomersEditModal } from "./CustomersEdit";

export function CustomersTable() {
  const [deletecustomer] = useDeletecustomerMutation();
  const { data } = useGetAllcustomerQuery("lala");
  console.log("customer", data);

  const delethandle = async (id) => {
    const result = await deletecustomer(id);
    console.log("delete", result);
  };

  return (
    <div className="overflow-x-auto rounded-xl mt-10">
      <table className="min-w-full border border-gray-200 bg-white rounded-xl shadow-lg">
        <thead>
          <tr className="bg-emerald-600 text-white">
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Name
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Email
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Phone
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              Address
            </th>

            <th className="py-3 px-6 text-left font-semibold uppercase">
              State
            </th>
            <th className="py-3 px-6 text-left font-semibold uppercase">
              District
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
          {data?.data?.map((customer, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-emerald-100" : "bg-emerald-50"
              } hover:bg-emerald-200`}
            >
              <td className="py-4 px-6 font-medium text-gray-800">
                {customer.name}
              </td>
              <td className="py-4 px-6 text-gray-700">{customer.email}</td>
              <td className="py-4 px-6 text-gray-700">{customer.phone}</td>
              <td className="py-4 px-6 text-gray-700">{customer.address}</td>

              <td className="py-4 px-6 text-gray-700">{customer.state}</td>
              <td className="py-4 px-6 text-gray-700">{customer.district}</td>

              <td className="py-4 px-6 text-center">
                <CustomersEditModal customer={customer}></CustomersEditModal>
              </td>
              <td className="py-4 px-6 text-center">
                <button
                  onClick={() => delethandle(customer._id)}
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
