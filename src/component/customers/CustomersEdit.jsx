/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUpdatecustomerMutation } from "../../redux/features/Customers/CustomersApi";
import Swal from "sweetalert2";

export function CustomersEditModal({ customer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(customer.name);
  const [lastName, setLastName] = useState(customer.lastName);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [address, setAddress] = useState(customer.address);
  const [state, setState] = useState(customer.state);
  const [district, setDistrict] = useState(customer.district);

  const [updatecustomer] = useUpdatecustomerMutation();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customerData = {
      id: customer._id,
      customers: {
        name,
        lastName,
        email,
        phone,
        address,
        state,
        district,
      },
    };

    const result = await updatecustomer(customerData);
    console.log("Update data for customerData:", result);
    if (result?.data?.success === true) {
      Swal.fire({
        title: "Updated Successfully",
        text: "Customer updated successfully!",
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
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg relative">
            {/* Modal Header */}
            <h3 className="text-2xl font-semibold text-gray-800">
              Edit New Customer
            </h3>

            {/* Modal Body */}
            <form
              className="grid grid-cols-2 gap-4 mt-4"
              onSubmit={handleSubmit}
            >
              <div className="col-span-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  First Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-1">
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
                  placeholder="Email Address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-1">
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
                  placeholder="Phone Number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-1">
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

              <div className="col-span-2">
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  District
                </label>
                <input
                  id="district"
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="District"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              {/* Add Customer Button */}
              <input
                className="col-span-2 w-full px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-600 focus:outline-none cursor-pointer"
                type="submit"
                value="Update Customer"
              />
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
