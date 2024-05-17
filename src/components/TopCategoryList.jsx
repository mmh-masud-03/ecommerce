import CategoryCard from "./TopCategoryCard";

const name = ["Electronics", "Home Appliance", "Phones", "Tablets", "Laptops"];
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
