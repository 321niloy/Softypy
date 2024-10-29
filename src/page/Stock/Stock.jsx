import { StockAddModal } from "../../component/stock/StockAdd";
import { StockTable } from "../../component/stock/StockTable";

const Stock = () => {
  return (
    <div>
      <h1 className="text-2xl text-white">Stock</h1>
      <StockAddModal></StockAddModal>
      <StockTable></StockTable>
    </div>
  );
};

export default Stock;
