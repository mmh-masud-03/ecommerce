import { FaCircleDot } from "react-icons/fa6";
function CategoryCard({ name }) {
  return (
    <div className=" flex flex-row text-lg gap-1 items-center px-2">
      <FaCircleDot className="text-slate-600" />
      <span>{name}</span>
    </div>
  );
}

export default CategoryCard;
