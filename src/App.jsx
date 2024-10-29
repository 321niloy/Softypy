import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="flex h-screen bg-[#252629fc]">
      <Sidebar />
      <div className="grow ml-[56px] md:ml-64 lg:ml-64 xl:ml-64 2xl:ml-64 h-full flex flex-col">
        <Navbar />
        <div className="bg-[#252629fc] flex-grow overflow-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
