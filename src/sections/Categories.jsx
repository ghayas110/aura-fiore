"use client";

import React from "react";

const CategoriesPage = () => {
  const categories = [
    {
      title: "Shirt Dresses",
      image: "/images/shirt.jpg",
      isLarge: true,
    },
    {
      title: "Wedding Dresses",
      image: "/images/shirt2.jpg",
    },
    {
      title: "Best Shirt",
      image: "/images/shirt3.jpg",
    },
    {
      title: "Best Pants",
      image: "/images/shirt4.jpg",
    },
    {
      title: "Sport Wear",
      image: "/images/shirt5.jpg",
    },
  ];

  return (
    <section className="py-10 px-4 ">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Large Item */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-full">
            {/* Text Overlay */}
            <div className="absolute top-0 left-0 w-full h-full  bg-opacity-40 flex items-center justify-center " >
              <h2 className="text-white text-2xl md:text-4xl font-bold" style={{zIndex:"100000"}}>
                {categories[0].title}
              </h2>
            </div>
            {/* Image */}
            <img
              src={categories[0].image}
              alt={categories[0].title}
              className="w-full h-[300px] md:h-[500px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Small Items */}
        <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-4">
          {categories.slice(1).map((category, index) => (
            <div key={index} className="relative">
              {/* Text Overlay */}
              <div className="absolute top-0 left-0 w-full h-full  bg-opacity-40 flex items-center justify-center z-10">
                <h2 className="text-white text-lg md:text-xl font-bold">
                  {category.title}
                </h2>
              </div>
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[200px] md:h-[240px] object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
