import { SuppliersAddModal } from "../../component/supplier/SupplierAdd";
import { SuppliersTable } from "../../component/supplier/SupplierTable";

const Suppliers = () => {
  return (
    <div>
      <h1 className="text-2xl text-white">Suppliers</h1>
      <SuppliersAddModal></SuppliersAddModal>
      <SuppliersTable></SuppliersTable>
    </div>
  );
};

export default Suppliers;
