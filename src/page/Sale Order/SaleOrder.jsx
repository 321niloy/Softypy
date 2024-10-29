import { SaleAdd } from "../../component/saleorder/SaleAdd";
import { SaleTable } from "../../component/saleorder/SaleTable";

const SaleOrder = () => {
  return (
    <div>
      <h1 className="text-2xl text-white">SaleOrder</h1>
      <SaleAdd></SaleAdd>
      <SaleTable></SaleTable>
    </div>
  );
};

export default SaleOrder;
