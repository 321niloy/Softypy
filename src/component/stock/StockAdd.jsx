import { useState } from "react";
import { useAddstocksMutation } from "../../redux/features/stocks/stockApi";

export function StockAddModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplier, setSupplier] = useState("");
  const [category, setCategory] = useState("");

  const [addstocks] = useAddstocksMutation();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleReset = () => {
    setProductName("");
    setSku("");
    setQuantity("");
    setSupplier("");
    setCategory("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here

    const allstock = {
      productName,
      sku,
      quantity,
      supplier,
      category,
    };
    const result = await addstocks(allstock);
    console.log("hahamm", result);
    console.log("all stock", allstock);
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-700 focus:outline-none mt-5"
      >
        Add Stock
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg relative">
            {/* Modal Header */}
            <h3 className="text-2xl font-semibold text-gray-800">
              Add New Stock
            </h3>

            {/* Modal Body */}
            <form
              className="grid grid-cols-2 gap-4 mt-4"
              onSubmit={handleSubmit}
            >
              <div className="col-span-1">
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <input
                  id="productName"
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Product Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="sku"
                  className="block text-sm font-medium text-gray-700"
                >
                  SKU
                </label>
                <input
                  id="sku"
                  type="text"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  placeholder="SKU"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Quantity"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="supplier"
                  className="block text-sm font-medium text-gray-700"
                >
                  Supplier
                </label>
                <input
                  id="supplier"
                  type="text"
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                  placeholder="Supplier Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <input
                  id="category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Category"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              {/* Add Stock Button */}
              <input
                className="col-span-2 w-full px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-600 focus:outline-none cursor-pointer"
                type="submit"
                value="Add Stock"
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
