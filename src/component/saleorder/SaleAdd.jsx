import { useState } from "react";
import { useAddsalesMutation } from "../../redux/features/SaleOrders/saleApi";
import Swal from "sweetalert2";

export function SaleAdd() {
  const [isOpen, setIsOpen] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [customer, setCustomer] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [addsales] = useAddsalesMutation();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleReset = () => {
    setInvoiceNumber("");
    setCustomer("");
    setContactNumber("");
    setAmount("");
    setDate("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sales = {
      invoiceNumber,
      customer,
      contactNumber,
      amount,
      date,
    };

    const result = await addsales(sales);
    if (result.data.success) {
      Swal.fire({
        title: "Sale Added Success!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
    console.log(result);
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-700 focus:outline-none mt-5"
      >
        Add Sale Order
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg relative">
            {/* Modal Header */}
            <h3 className="text-2xl font-semibold text-gray-800">Sale Order</h3>

            {/* Modal Body */}
            <form
              className="grid grid-cols-2 gap-4 mt-4"
              onSubmit={handleSubmit}
            >
              <div className="col-span-1">
                <label
                  htmlFor="invoiceNumber"
                  className="block text-sm font-medium text-gray-700"
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
                  className="block text-sm font-medium text-gray-700"
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
                  className="block text-sm font-medium text-gray-700"
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
                  className="block text-sm font-medium text-gray-700"
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
                  className="block text-sm font-medium text-gray-700"
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
                value="Add Sale"
              />

              {/* Reset Button */}
              <button
                type="button"
                onClick={handleReset}
                className="col-span-2 w-full px-4 py-2 mt-2 text-white bg-emerald-500 border border-emerald-800 rounded hover:bg-emerald-600 focus:outline-none"
              >
                Reset
              </button>
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
