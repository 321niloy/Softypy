import { useState, useRef } from "react";
import { useAddCategoryMutation } from "../../redux/features/category/categoryApi";
import Swal from "sweetalert2";

export function CategoryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryCode, setCategoryCode] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const emailRef = useRef(null);

  // Hooks for adding and getting categories
  const [addCategory, { isLoading: isAdding }] = useAddCategoryMutation();

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      emailRef.current?.focus(); // Focus the email input when modal opens
    }, 0);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAdd = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const category = {
      categoryCode,
      categoryName,
    };
    const result = await addCategory(category);
    console.log("Khapa khap", result);
    if (result?.error?.data?.error == "Try using another code") {
      Swal.fire({
        title: "Try using another code!",
        text: "You clicked the button!",
        icon: "failed",
      });
    }
  };

  const handleReset = () => {
    setCategoryCode("");
    setCategoryName("");
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-700 focus:outline-none mt-5"
      >
        Add Category
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg relative">
            {/* Modal Header */}
            <h3 className="text-2xl font-semibold text-gray-800">
              Add Your Category
            </h3>

            {/* Modal Body */}
            <form onSubmit={handleAdd} className="space-y-4 mt-4">
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category Code
                </label>
                <input
                  id="number"
                  type="number"
                  ref={emailRef}
                  value={categoryCode}
                  onChange={(e) => setCategoryCode(e.target.value)}
                  placeholder="Category Number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Category Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              {/* Add Category Button */}
              <input
                className={`w-full px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-600 focus:outline-none cursor-pointer ${
                  isAdding ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                value={isAdding ? "Adding..." : "Add Category"}
                disabled={isAdding} // Disable the button while adding
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
