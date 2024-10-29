import {
  FaTachometerAlt,
  FaBook,
  FaTshirt,
  FaCaravan,
  FaUsers,
  FaShoppingCart,
  FaHandsHelping,
  FaClipboardList,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#252629fc]  text-white h-screen px-4 fixed w-30 md:w-64 lg:w-64 xl:w-64 2xl:w-64  md:max-w-64 border-r border-emerald-500">
      <h1 className="text-2xl mt-5 text-center italic font-bold hidden md:block">
        Export Import
      </h1>
      <ul className="flex flex-col mt-5  text-xl">
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-md hover:cursor-pointer hover:bg-white hover:text-emerald-500 hover:font-bold">
          <FaTachometerAlt className=" text-emerald-500" />
          <Link to="/" className="hidden md:inline">
            Dashboard
          </Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-md hover:cursor-pointer hover:bg-white hover:text-emerald-500 hover:font-bold">
          <FaBook className=" text-emerald-500" />
          <Link to="/category" className="hidden md:inline">
            Category
          </Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-md hover:cursor-pointer hover:bg-white hover:text-emerald-500 hover:font-bold">
          <FaTshirt className=" text-emerald-500" />
          <Link to="/items" className="hidden md:inline">
            Items
          </Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-md hover:cursor-pointer hover:bg-white hover:text-emerald-500 hover:font-bold">
          <FaCaravan className=" text-emerald-500" />
          <Link to="/supplier" className="hidden md:inline">
            Suppliers
          </Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-md hover:cursor-pointer hover:bg-white hover:text-emerald-500 hover:font-bold">
          <FaUsers className=" text-emerald-500" />
          <Link to="/customers" className="hidden md:inline">
            Customers
          </Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-md hover:cursor-pointer hover:bg-white hover:text-emerald-500 hover:font-bold">
          <FaShoppingCart className=" text-emerald-500" />
          <Link to="/stock" className="hidden md:inline">
            Stock
          </Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-md hover:cursor-pointer hover:bg-white hover:text-emerald-500 hover:font-bold">
          <FaHandsHelping className=" text-emerald-500" />
          <Link to="/saleorder" className="hidden md:inline">
            Sale Order
          </Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-md hover:cursor-pointer hover:bg-white hover:text-emerald-500 hover:font-bold">
          <FaClipboardList className=" text-emerald-500" />
          <Link to="/reports" className="hidden md:inline">
            Reports
          </Link>
        </li>
        {/* <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-md hover:cursor-pointer hover:bg-white hover:text-emerald-500 hover:font-bold">
          <FaCog className=" text-emerald-500" />
          <Link to="/managewebsite" className="hidden md:inline">
            Manage Website
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
