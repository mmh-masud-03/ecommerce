"use client";
import { Provider } from "react-redux";
import store from "@/store";
import HeroSection from "@/components/HeroSection";
import FlashSale from "@/components/FlashSale";
export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex flex-col">
        <HeroSection />

        <FlashSale />
      </div>
    </Provider>
  );
}
