/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUpdateCategoryMutation } from "../../redux/features/category/categoryApi";
import Swal from "sweetalert2";

export function CategoryEdit({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryCode, setCategoryCode] = useState(item.categoryCode);
  const [categoryName, setCategoryName] = useState(item.categoryName);

  const [updateCategory] = useUpdateCategoryMutation();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUpdate = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const category = {
      categoryCode,
      categoryName,
    };

    const categoriesData = {
      id: item._id,
      category,
    };

    console.log("Update data:", categoriesData);
    const result = await updateCategory(categoriesData);

    if (result?.error?.data?.error === "Please use a unique category code") {
      Swal.fire({
        title: "Try using another code!",
        text: "Duplicate category code detected.",
        icon: "error",
      });
    } else if (result?.data?.success === true) {
      Swal.fire({
        title: "Updated Successfully",
        text: "Category updated successfully!",
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
              Update Your Category
            </h3>

            {/* Modal Body */}
            <form onSubmit={handleUpdate} className="space-y-4 mt-4">
              <div>
                <label
                  htmlFor="categoryCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category Code
                </label>
                <input
                  id="categoryCode"
                  type="text"
                  value={categoryCode}
                  onChange={(e) => setCategoryCode(e.target.value)}
                  placeholder="Category Code"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="categoryName"
                  className="block text-sm font-medium text-gray-700"
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

              {/* Update Category Button */}
              <input
                className="w-full px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-600 focus:outline-none cursor-pointer"
                type="submit"
                value="Update Category"
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
