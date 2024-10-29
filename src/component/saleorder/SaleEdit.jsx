/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUpdatesalesMutation } from "../../redux/features/SaleOrders/saleApi";
import Swal from "sweetalert2";

export function SaleEdit({ sellsdata }) {
  const [isOpen, setIsOpen] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState(sellsdata.invoiceNumber);
  const [customer, setCustomer] = useState(sellsdata.customer);
  const [contactNumber, setContactNumber] = useState(sellsdata.contactNumber);
  const [amount, setAmount] = useState(sellsdata.amount);
  const [date, setDate] = useState(sellsdata.date);

  const [updatesales] = useUpdatesalesMutation();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const salesData = {
      id: sellsdata._id,
      sales: {
        invoiceNumber,
        customer,
        contactNumber,
        amount,
        date,
      },
    };

    console.log("Update data for items:", salesData);
    const result = await updatesales(salesData);
    console.log(result);
    if (result?.data?.success === true) {
      Swal.fire({
        title: "Updated Successfully",
        text: "Sales updated successfully!",
        icon: "success",
      });
      closeModal(); // Close modal on successful update
    }
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="text-emerald-500 hover:text-emerald-700 font-semibold transition duration-150"
      >
        Edit
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg relative">
            {/* Modal Header */}
            <h3 className="text-2xl font-semibold text-gray-800">
              Update Sale
            </h3>

            {/* Modal Body */}
            <form
              className="grid grid-cols-2 gap-4 mt-4"
              onSubmit={handleSubmit}
            >
              <div className="col-span-1">
                <label
                  htmlFor="invoiceNumber"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Invoice Number
                </label>
                <input
                  id="invoiceNumber"
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  placeholder="Invoice Number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="customer"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Customer
                </label>
                <input
                  id="customer"
                  type="text"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  placeholder="Customer Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Contact Number
                </label>
                <input
                  id="contactNumber"
                  type="text"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Contact Number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Amount
                </label>
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              {/* Add Stock Button */}
              <input
                className="col-span-2 w-full px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-600 focus:outline-none cursor-pointer"
                type="submit"
                value="Edit Sale"
              />

              {/* Reset Button */}
            </form>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              &#10005;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
