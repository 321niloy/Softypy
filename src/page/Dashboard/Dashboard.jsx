import {
  FaBook,
  FaTshirt,
  FaCaravan,
  FaUsers,
  FaShoppingCart,
  FaHandsHelping,
} from "react-icons/fa";
import Chart from "../../component/chart/Chart";
import ComposetChart from "../../component/composed chart/ComposedChart";
import UnderChart from "../../component/UnderChart";

const DashBoard = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl text-white">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4 mt-7">
          {/* frist */}
          <div className="flex items-center  justify-between    bg-emerald-500 p-5 rounded-xl">
            <div className="text-white">
              <p>4</p>
              <h1>Total Stocks</h1>
            </div>
            <div>
              <FaShoppingCart className=" text-white size-6" />
            </div>
          </div>
          {/* 2 */}
          <div className="flex items-center justify-between   bg-emerald-500 p-5 rounded-xl">
            <div className="text-white">
              <p>4</p>
              <h1>Total Customer</h1>
            </div>
            <div>
              <FaUsers className=" text-white size-6" />
            </div>
          </div>
          {/* 3 */}
          <div className="flex items-center justify-between   bg-emerald-500 p-5 rounded-xl">
            <div className="text-white">
              <p>4</p>
              <h1>Total Sale</h1>
            </div>
            <div>
              <FaHandsHelping className=" text-white size-6" />
            </div>
          </div>
          {/* 4 */}
          <div className="flex items-center justify-between   bg-emerald-500 p-5 rounded-xl">
            <div className="text-white">
              <p>4</p>
              <h1>Total Category</h1>
            </div>
            <div>
              <FaBook className=" text-white size-6" />
            </div>
          </div>
          {/* 5 */}
          <div className="flex items-center  justify-between   bg-emerald-500 p-5 rounded-xl">
            <div className="text-white">
              <p>4</p>
              <h1>Total Products</h1>
            </div>
            <div>
              <FaTshirt className=" text-white size-6" />
            </div>
          </div>
          {/* 6 */}
          <div className="flex items-center  justify-between   bg-emerald-500 p-5 rounded-xl">
            <div className="text-white">
              <p>4</p>
              <h1>Total Suppliers</h1>
            </div>
            <div>
              <FaCaravan className=" text-white size-6" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-white mt-5">Analysis Using Chart</h1>
        <div className="flex gap-4">
          <div>
            <Chart></Chart>
            <UnderChart></UnderChart>
          </div>
          <div>
            <Chart></Chart>
            <UnderChart></UnderChart>
          </div>
        </div>

        <div>
          <ComposetChart></ComposetChart>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
