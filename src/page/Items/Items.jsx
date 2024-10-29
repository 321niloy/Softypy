import { ItemsAddModal } from "../../component/items/ItemsAdd";
import { ItemsTable } from "../../component/items/ItemsTable";

const Items = () => {
  return (
    <div>
      <h1 className="text-2xl text-white">Items</h1>
      <ItemsAddModal></ItemsAddModal>
      <ItemsTable></ItemsTable>
    </div>
  );
};

export default Items;
