// import React, { useState } from "react";

type item = {
  key: string;
  title: string;
  url: string;
}[];

const DUMMY_CATEGORIES: item = [
  {
    key: "i1",
    title: "Deals",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png",
  },
  {
    key: "i2",
    title: "Grocery",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/uber_grocery.png",
  },
  {
    key: "i3",
    title: "Convenience",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png",
  },
  {
    key: "i4",
    title: "Indian",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/indian.png",
  },
  {
    key: "i5",
    title: "Alcohol",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png",
  },
  {
    key: "i6",
    title: "Pharmacy",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/pharmacy-v2.png",
  },
  {
    key: "i7",
    title: "Baby",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/baby.png",
  },
  {
    key: "i8",
    title: "Pet Supplies",
    url: "https://cn-geo1.uber.com/static/mobile-content/eats/pet_supplies.png",
  },
  {
    key: "i9",
    title: "Flowers",
    url: "https://cn-geo1.uber.com/static/mobile-content/eats/flowers_transparent_background.png",
  },
  {
    key: "i10",
    title: "Baby",
    url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/baby.png",
  },
  {
    key: "i11",
    title: "Pet Supplies",
    url: "https://cn-geo1.uber.com/static/mobile-content/eats/pet_supplies.png",
  },
];

const Categories = () => {
  const prevHandler = () => {};

  const forwardHandler = () => {};

  return (
    <ul className="relative flex overflow-hidden space-x-4 mr-4 font-playpen md:mt-6">
      <button className="arrow-button left-4" onClick={prevHandler}>
        &#11104;
      </button>
      {DUMMY_CATEGORIES.map((item) => (
        <li className="flex flex-col h-[100px] w-[80px] items-center flex-shrink-0 ">
          <img src={item.url} alt={item.title} className="h-[80px] w-full " />
          <span className=" h-auto w-full text-center font-title text-sm">
            {item.title}
          </span>
        </li>
      ))}
      <button className="arrow-button right-0 " onClick={forwardHandler}>
        &#11106;
      </button>
    </ul>
  );
};

export default Categories;
