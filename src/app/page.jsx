import CategoryBox from "@/components/ui/general/category-box";

export default function Home() {
  return (
    <>
      <div className="my-5 flex flex-wrap gap-y-4 transition-all duration-700">
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
      </div>
    </>
  );
}
