import { useGetAllcategoryQuery } from "../../redux/features/category/categoryApi";
import { useGetAllcustomerQuery } from "../../redux/features/Customers/CustomersApi";
import { useGetallitemsQuery } from "../../redux/features/items/itemApi";
import { useGetAllsalesQuery } from "../../redux/features/SaleOrders/saleApi";
import { useGetAllstocksQuery } from "../../redux/features/stocks/stockApi";
import { useGetAllsuppliersQuery } from "../../redux/features/Suppliers/suppliersApi";

const Reports = () => {
  // category
  const { data: categories } = useGetAllcategoryQuery("lala");
  //  Items
  const { data: allitems } = useGetallitemsQuery("items");
  // Supplier
  const { data: supplierData } = useGetAllsuppliersQuery("lala");
  // Customers
  const { data: customerData } = useGetAllcustomerQuery("customer");
  // Stocks
  const { data: stocks } = useGetAllstocksQuery();
  // Sales Order
  const { data: Salesorder } = useGetAllsalesQuery("lala");

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-8">Reports</h1>

      {/* Categories */}
      <h2 className="text-xl font-semibold text-white mb-4">Categories</h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-emerald-500 text-white">
            <tr>
              <th className="py-4 px-6 font-semibold text-left uppercase tracking-wider">
                Category Code
              </th>
              <th className="py-4 px-6 font-semibold text-left uppercase tracking-wider">
                Category Name
              </th>
            </tr>
          </thead>
          <tbody>
            {categories?.data?.length > 0 ? (
              categories.data.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-emerald-100" : "bg-white"
                  } hover:bg-emerald-200`}
                >
                  <td className="py-4 px-6 font-medium text-gray-800">
                    {item.categoryCode}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {item.categoryName}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="py-4 px-6 text-center text-gray-500">
                  No categories available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* categories End */}
      {/* Item */}
      <h2 className="text-xl font-semibold text-white mt-4">Items</h2>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* item end */}

      {/* Supplier */}
      <h2 className="text-xl font-semibold text-white mt-4">Supplier</h2>
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
            </tr>
          </thead>
          <tbody>
            {supplierData?.data?.map((supplier, index) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Supplier End */}
      {/* Customers */}
      <h2 className="text-xl font-semibold text-white mt-4">Customers</h2>
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
            </tr>
          </thead>
          <tbody>
            {customerData?.data?.map((customer, index) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Customers End */}
      {/* Stocks */}
      <h2 className="text-xl font-semibold text-white mt-4">Stocks</h2>
      <div className="overflow-x-auto rounded-xl mt-10">
        <table className="min-w-full border border-gray-200 bg-white rounded-xl shadow-lg">
          <thead>
            <tr className="bg-emerald-600 text-white">
              <th className="py-3 px-6 text-left font-semibold uppercase">
                Product Name
              </th>
              <th className="py-3 px-6 text-left font-semibold uppercase">
                SKU
              </th>
              <th className="py-3 px-6 text-left font-semibold uppercase">
                Quantity
              </th>
              <th className="py-3 px-6 text-left font-semibold uppercase">
                Supplier
              </th>
              <th className="py-3 px-6 text-left font-semibold uppercase">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {stocks?.data?.map((stock, index) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Stocks End */}
      {/* Sales Order */}
      <h2 className="text-xl font-semibold text-white mt-4">Sales Order</h2>
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
            </tr>
          </thead>
          <tbody>
            {Salesorder?.data?.map((sellsdata, index) => (
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
                <td className="py-4 px-6 text-gray-700">
                  {sellsdata.customer}
                </td>
                <td className="py-4 px-6 text-gray-700">
                  {sellsdata.contactNumber}
                </td>
                <td className="py-4 px-6 text-gray-700">{sellsdata.amount}</td>
                <td className="py-4 px-6 text-gray-700">{sellsdata.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
