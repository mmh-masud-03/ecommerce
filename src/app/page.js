"use client";
import { Provider } from "react-redux";
import store from "@/store";
export default function Home() {
  return <Provider store={store}>hello</Provider>;
}
