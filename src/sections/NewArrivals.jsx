"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NewArrivals = () => {
  const products = [
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

  return (
    <section className="new-arrivals bg-gray-50 p-20 " style={{margin:"50px"}}>
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-20" style={{color:"black",fontSize:"40px"}}>
          New Arrivals
        </h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          loop={true}
          className="new-arrivals-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-[300px] h-[400px] mx-auto">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrivals;
