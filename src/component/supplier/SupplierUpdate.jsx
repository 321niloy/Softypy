/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUpdatesuppliersMutation } from "../../redux/features/Suppliers/suppliersApi";
import Swal from "sweetalert2";
export function SuppliersEditModal({ supplier }) {
  const [isOpen, setIsOpen] = useState(false);
  const [supplierId, setSupplierId] = useState(supplier.supplierId);
  const [supplierName, setSupplierName] = useState(supplier.supplierName);
  const [email, setEmail] = useState(supplier.email);
  const [phone, setPhone] = useState(supplier.phone);
  const [city, setCity] = useState(supplier.city);
  const [state, setState] = useState(supplier.state);

  const [updatesuppliers] = useUpdatesuppliersMutation();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleReset = () => {
    setSupplierId("");
    setSupplierName("");
    setEmail("");
    setPhone("");
    setCity("");
    setState("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allsuppliers = {
      id: supplier._id,
      suppliers: {
        supplierId,
        supplierName,
        email,
        phone,
        city,
        state,
      },
    };

    try {
      const result = await updatesuppliers(allsuppliers);

      if (result?.data?.success) {
        Swal.fire({
          title: "Updated Successfully",
          text: "Supplier updated successfully!",
          icon: "success",
        });
        closeModal();
      } else if (result?.error) {
        Swal.fire({
          title: "Error",
          text: result.error.data?.message || "Failed to update supplier.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error updating supplier:", error);
    }
  };
  return (
    <>
      {/* Button to open modal */}
      <button onClick={openModal} className=" text-emerald-700   ">
        Edit
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg relative">
            {/* Modal Header */}
            <h3 className="text-2xl font-semibold text-gray-800">
              Update Your Supplier
            </h3>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label
                  htmlFor="supplierId"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Supplier ID
                </label>
                <input
                  id="supplierId"
                  type="text"
                  value={supplierId}
                  onChange={(e) => setSupplierId(e.target.value)}
                  placeholder="Supplier ID"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="supplierName"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Supplier Name
                </label>
                <input
                  id="supplierName"
                  type="text"
                  value={supplierName}
                  onChange={(e) => setSupplierName(e.target.value)}
                  placeholder="Supplier Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="State"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              {/* Add Supplier Button */}
              <input
                className="w-full px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-600 focus:outline-none cursor-pointer"
                type="submit"
                value="Update Supplier"
              />

              {/* Reset Button */}
              <button
                type="button"
                onClick={handleReset}
                className="w-full px-4 py-2 mt-2 text-white bg-emerald-500 border border-emerald-800 rounded hover:bg-emerald-600 focus:outline-none"
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
