"use client";
import Image from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CategoryList from "./TopCategoryList";
import ExploreButton from "./ExploreButton";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <React.Fragment key="carousel-item-1">
    <Image
      src="/assets/carousel1_copy.jpg"
      width={800}
      height={400}
      alt="item 1"
      onDragStart={handleDragStart}
      role="presentation"
      className="mx-auto rounded-lg"
    />
  </React.Fragment>,
  <React.Fragment key="carousel-item-2">
    <Image
      src="/assets/carousel2_copy.jpg"
      width={800}
      height={400}
      onDragStart={handleDragStart}
      alt="item 2"
      className="mx-auto rounded-lg"
      role="presentation"
    />
  </React.Fragment>,
  <React.Fragment key="carousel-item-3">
    <Image
      src="/assets/carousel3_copy.jpg"
      width={800}
      height={400}
      onDragStart={handleDragStart}
      alt="item 3"
      className="mx-auto rounded-lg"
      role="presentation"
    />
  </React.Fragment>,
  <React.Fragment key="carousel-item-4">
    <Image
      src="/assets/carousel4_copy.jpg"
      width={800}
      height={400}
      onDragStart={handleDragStart}
      alt="item 4"
      className="mx-auto rounded-lg"
      role="presentation"
    />
  </React.Fragment>,
];

const HeroSection = () => (
  <div className=" flex flex-row gap-2 justify-between mt-4">
    <div className="hidden md:flex flex-col">
      <span className="text-2xl font-semibold mx-10 mt-5">Top Categories</span>
      <CategoryList />
      <ExploreButton />
    </div>
    <div className="w-full md:w-3/4 md:ml-4 ">
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        animationDuration={2000}
        disableButtonsControls
      />
    </div>
  </div>
);

export default HeroSection;
