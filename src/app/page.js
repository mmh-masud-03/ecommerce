"use client";
import { Provider } from "react-redux";
import store from "@/store";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <Provider store={store}>
      <HeroSection />{" "}
    </Provider>
  );
}
