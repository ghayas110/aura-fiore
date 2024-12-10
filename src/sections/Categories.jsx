"use client";

import React from "react";
import { useRouter } from "next/navigation";
const CategoriesPage = () => {
  const router = useRouter();
  const categories = [
    {
      id:1,
      title: "Bras",
      image: "/images/shirt.jpg",
      isLarge: true,
    },
    {
      id:2,
      title: "Panties",
      image: "/images/shirt2.jpg",
    },
    {
      id:3,
      title: "Night Wear",
      image: "/images/shirt3.jpg",
    },
    {
      id:4,
      title: "Inner Wear",
      image: "/images/shirt4.jpg",
    },
    {
      id:5,
      title: "Swim Wear",
      image: "/images/shirt5.jpg",
    },
  ];

  return (
    <section className="py-10 px-4 ">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Large Item */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-full cursor-pointer" onClick={() => router.push(`/cat/${categories[0].id}`) }>
            {/* Text Overlay */}
            <div className="w-full h-full" style={{position:"absolute" ,zIndex:"10",top:"0",left:"0",padding:"10px"}} >
            <h2 className="text-white font-bold" style={{fontSize:"30px"}}>
            {categories[0].title}
              </h2>
            </div>
            {/* Image */}
            <img
            style={{resize:"cover",objectFit:"cover",height:"100%"}}
              src={categories[0].image}
              alt={categories[0].title}
              className="w-full md:h-[500px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Small Items */}
        <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-4">
          {categories.slice(1).map((category, index) => (
            <div key={index} className="relative">
              {/* Text Overlay */}
              <div className=" w-full h-full  bg-opacity-40  z-10" style={{position:"absolute",zIndex:"100000",bottom:"0",padding:"10px"}}>
                <h2 className="text-white font-bold" style={{zIndex:"100000",fontSize:"30px"}}>
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
