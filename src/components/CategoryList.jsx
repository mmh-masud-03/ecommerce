import CategoryCard from "./CategoryCard";

const name = ["Electronics", "Home Appliance", "Phones", "Tablets", "Laptops"];
function CategoryList() {
  return (
    <div className="flex flex-col gap-2 mt-4 px-10">
      {name.map((cat, index) => (
        <CategoryCard name={cat} key={index} />
      ))}
    </div>
  );
}

export default CategoryList;
