import { useState } from "react";
import { useAdditemsMutation } from "../../redux/features/items/itemApi";
import Swal from "sweetalert2";

export function ItemsAddModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [itemsCode, setitemscode] = useState("");
  const [itemsName, setItemsName] = useState("");
  const [categoryName, setCategory] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [costPrice, setCostprice] = useState("");

  const [additems] = useAdditemsMutation();
  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {}, 0);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleReset = () => {
    setitemscode("");
    setItemsName("");
    setCategory("");
    setSellingPrice("");
    setCostprice("");
  };

  const handleAdd = async (e) => {
    e.preventDefault(); // Fixed the typo here
    const allItems = {
      itemsCode: itemsCode,
      itemsName: itemsName,
      categoryName,
      costPrice,
      sellingPrice,
    };
    console.log("lllll", allItems);

    const result = await additems(allItems);
    if (result.data.success == true) {
      Swal.fire({
        title: "Item Added Success!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
    console.log("laliga", result);
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-700 focus:outline-none mt-5"
      >
        Add Items
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg relative">
            {/* Modal Header */}
            <h3 className="text-2xl font-semibold text-gray-800">
              Add Your Items
            </h3>

            {/* Modal Body */}
            <form onSubmit={handleAdd} className="space-y-4 mt-4">
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Items Id
                </label>
                <input
                  id="number"
                  type="number"
                  value={itemsCode}
                  onChange={(e) => setitemscode(e.target.value)}
                  placeholder="Code Number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Items Name
                </label>
                <input
                  id="name"
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
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Category Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cost price
                </label>
                <input
                  id="name"
                  type="text"
                  value={costPrice}
                  onChange={(e) => setCostprice(e.target.value)}
                  placeholder="Cost price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Selling price
                </label>
                <input
                  id="name"
                  type="text"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                  placeholder="Selling Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              {/* Add Category Button */}
              <input
                className="w-full px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-600 focus:outline-none cursor-pointer"
                type="submit"
                value="Add Category"
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
