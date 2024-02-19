import CategoryBox from "./category-box";

const CategoriesBar = () => {
  return (
    <div className=" sticky top-16 z-30 bg-white py-5 border-b mb-4">
      <div className="flex items-center gap-4 overflow-auto p-2 ">
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
      </div>
    </div>
  );
};

export default CategoriesBar;
