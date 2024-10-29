/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUpdateitemsMutation } from "../../redux/features/items/itemApi";
import Swal from "sweetalert2";

export function ItemsEditModal({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [itemsCode, setItemsCode] = useState(item.itemsCode);
  const [itemsName, setItemsName] = useState(item.itemsName);
  const [categoryName, setCategoryName] = useState(item.categoryName);
  const [sellingPrice, setSellingPrice] = useState(item.costPrice);
  const [costPrice, setCostPrice] = useState(item.sellingPrice);

  const [updateitems] = useUpdateitemsMutation();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleReset = () => {
    setItemsCode("");
    setItemsName("");
    setCategoryName("");
    setSellingPrice("");
    setCostPrice("");
  };

  const handleSubmitUpdate = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const itemsData = {
      id: item._id,
      items: {
        itemsCode,
        itemsName,
        categoryName,
        costPrice,
        sellingPrice,
      },
    };

    console.log("Update data for items:", itemsData);
    const result = await updateitems(itemsData);
    console.log(result);
    if (result?.error.data.error === "Please use a unique Items id") {
      Swal.fire({
        title: "Please use a unique Items id",

        icon: "error",
      });
    }
    if (result?.data?.success === true) {
      Swal.fire({
        title: "Updated Successfully",
        text: "Items updated successfully!",
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
              Update Your Items
            </h3>

            {/* Modal Body */}
            <form onSubmit={handleSubmitUpdate} className="space-y-4 mt-4">
              <div>
                <label
                  htmlFor="itemsCode"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Items Id
                </label>
                <input
                  id="itemsCode"
                  type="number"
                  value={itemsCode}
                  onChange={(e) => setItemsCode(e.target.value)}
                  placeholder="Code Number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="itemsName"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Items Name
                </label>
                <input
                  id="itemsName"
                  type="text"
                  value={itemsName}
                  onChange={(e) => setItemsName(e.target.value)}
                  placeholder="Items Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="categoryName"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Category Name
                </label>
                <input
                  id="categoryName"
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Category Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="costPrice"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Cost Price
                </label>
                <input
                  id="costPrice"
                  type="text"
                  value={costPrice}
                  onChange={(e) => setCostPrice(e.target.value)}
                  placeholder="Cost Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="sellingPrice"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Selling Price
                </label>
                <input
                  id="sellingPrice"
                  type="text"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                  placeholder="Selling Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <input
                className="w-full px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-600 focus:outline-none cursor-pointer"
                type="submit"
                value="Update Item"
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
