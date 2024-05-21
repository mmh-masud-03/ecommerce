"use client";
import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

function FlashSale() {
  const [timer, setTimer] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const today = new Date();
  const tomorrow = new Date(today.getTime() + 86400000); // 86400000 ms = 1 day
  tomorrow.setHours(0, 0, 0, 0); // Set the target time to 12:00 AM (midnight) of the next day

  const timeRemaining = tomorrow - new Date(timer);

  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  // const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-col gap-3 mx-2 md:mx-8">
      <span className="text-xl">Just For You</span>
      <span className="text-xl font-medium">
        Sale Ends in:{" "}
        <span className="text-red-600">
          {" "}
          {hours}h {minutes}m
        </span>
      </span>
      <ProductList />
    </div>
  );
}

export default FlashSale;
