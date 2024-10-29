import { CustomersAddModal } from "../../component/customers/CustomersAdd";
import { CustomersTable } from "../../component/customers/CustomersTable";

const Customers = () => {
  return (
    <div>
      <h1 className="text-2xl text-white">Customers</h1>
      <CustomersAddModal></CustomersAddModal>
      <CustomersTable></CustomersTable>
    </div>
  );
};

export default Customers;
