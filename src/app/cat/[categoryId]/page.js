"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Categories = () => {

  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [activeAccordion, setActiveAccordion] = useState(null); // Track which accordion is open
  const courses = [
    {
      image: "/images/girl.png",
      name: "Lace Bralette Set",
      price: "$49.99",
    },
    {
      image: "/images/female2.png",
      name: "Satin Nightwear",
      price: "$59.99",
    },
    {
      image: "/images/female2.png",
      name: "Mesh Bodysuit",
      price: "$39.99",
    },
  ];

  const toggleAccordion = (accordion) => {
    setActiveAccordion(activeAccordion === accordion ? null : accordion);
  };

  return (
    <div className="max-w-8xl mx-auto mt-12 h-screen px-20">
      {/* Header */}
      <h1 className="text-xl font-bold mb-4">Lingerie</h1>

      {/* Info Banner */}
      <div className="text-gray-700 text-sm p-3 rounded-md flex items-center mb-4">
        <span className="material-icons text-gray-600 mr-2">info</span>
        {/* <p>Not sure? All courses have a 30-day money-back guarantee</p> */}
      </div>

    
      <div className="flex flex-row  ">
        {/* Left Section */}
        <div className="flex flex-col flex-2">
        
          {/* Filter and Sort Buttons */}
          <div className="flex flex-row">

        
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2 hover:bg-gray-300"
          >
            Filter (6)
          </button>
          {/* Sort Dropdown */}
          <div className="flex flex-col space-x-2">
            <span>Sort by:</span>
            <select className="bg-gray-200 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-300">
              <option>Newest</option>
              <option>Oldest</option>
              <option>Most Popular</option>
            </select>
          </div>
          </div>
           {/* Sidebar */}
          <div className=" p-4 rounded-md xl:block sm:hidden ">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          {/* Accordion Filters */}
          {["Ratings", "Video Duration", "Topic", "Subcategory", "Level", "Language"].map((filter, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(filter)}
                className="w-full text-left font-bold text-gray-700 border-b pb-2"
              >
                {filter}
              </button>
              {activeAccordion === filter && (
                <div className="mt-2 pl-4 text-gray-600">
                  {/* Placeholder content for each filter */}
                  <p>Select options for {filter}...</p>
                </div>
              )}
            </div>
          ))}
          {/* Close Sidebar */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="bg-pink-600 text-white px-4 py-2 rounded-md mt-4"
          >
            Close Filters
          </button>
        </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col flex-1">
        <div className=" flex flex-row justify-between flex-1 p-5">
        <p className="text-gray-500 text-sm mt-4 text-purple-900">Clear filters</p>
          <p className="text-gray-500 text-sm mt-4">1 result</p>
        </div>
        <div className="flex flex-row flex-wrap xl:flex sm:hidden md:hidden">
        {courses.map((product,index) => (
               <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-[300px] h-[400px] " key={index}>
               <img
                 src={product.image}
                 alt={product.name}
                 className="object-cover h-48 w-full rounded-md mb-4"
               />
               <h3 className="text-lg font-semibold text-center">
                 {product.name}
               </h3>
               <p className="text-gray-600 text-center">{product.price}</p>
               <button className="mt-auto bg-pink-700 text-white px-6 py-2 rounded-md hover:bg-gray-800">
                 Shop Now
               </button>
             </div>
            ))}
          </div>
        </div>

      </div>
      <div>
      <div className="flex flex-row flex-wrap xl:hidden sm:block md:block">
            {courses.map((product,index) => (
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-[300px] h-[400px] mx-auto" key={index}>
              <img
                src={product.image}
                alt={product.name}
                className="object-cover h-48 w-full rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-center">
                {product.name}
              </h3>
              <p className="text-gray-600 text-center">{product.price}</p>
              <button className="mt-auto bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                Shop Now
              </button>
            </div>
            ))}
          </div>
      </div>
       
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="absolute top-0 left-0 bg-white shadow-lg p-4 w-64 h-full z-50">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          {/* Accordion Filters */}
          {["Ratings", "Video Duration", "Topic", "Subcategory", "Level", "Language"].map((filter, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(filter)}
                className="w-full text-left font-bold text-gray-700 border-b pb-2"
              >
                {filter}
              </button>
              {activeAccordion === filter && (
                <div className="mt-2 pl-4 text-gray-600">
                  {/* Placeholder content for each filter */}
                  <p>Select options for {filter}...</p>
                </div>
              )}
            </div>
          ))}
          {/* Close Sidebar */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="bg-purple-600 text-white px-4 py-2 rounded-md mt-4"
          >
            Close Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
