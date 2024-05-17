import HeroSection from "@/components/HeroSection";
import FlashSale from "@/components/FlashSale";
import AllCategories from "@/components/AllCategories";
import FilterProducts from "@/components/FilterProducts";
export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AllCategories />
      <FilterProducts />
      <FlashSale />
    </div>
  );
}
