import CategoryCard from "./TopCategoryCard";

const name = ["Smartphones", "Computers", "Audio", "Tablets", "Smart Home"];
function TopCategoryList() {
  return (
    <div className="flex flex-col gap-2 mt-4 px-10">
      {name.map((cat, index) => (
        <CategoryCard name={cat} key={index} />
      ))}
    </div>
  );
}

export default TopCategoryList;
