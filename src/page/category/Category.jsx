import { CategoryModal } from "../../component/categoryModal/CategoryModal";
import { CategoryTable } from "../../component/categoryTable/CategoryTable";

const Category = () => {
  return (
    <div>
      <h1 className="text-2xl text-white">Category Jsx</h1>
      <div>
        <CategoryModal></CategoryModal>
        <div className="mt-7">
          <CategoryTable></CategoryTable>
        </div>
      </div>
    </div>
  );
};

export default Category;
