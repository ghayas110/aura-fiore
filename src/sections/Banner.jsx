"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const slides = [
    {
      image: "/images/girl.png",
      title: "Elegance Redefined",
      description:
        "Discover exquisite lingerie that blends comfort with sophistication. Embrace your beauty with our premium collection.",
    },
    {
      image: "/images/female2.png",
      title: "Feel Confident, Look Stunning",
      description:
        "Unleash your confidence with designs tailored to make every moment special. Explore our range today.",
    },
   
  ];

  return (
    <section
      className="relative w-full xl:px-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/female.jpg')",backgroundSize: "cover" }} // Replace with your background image path
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={70}
        centeredSlides={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex items-center">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:mt-20 ">
              <div className=" p-6 md:p-8 rounded-md shadow-md max-w-md w-full">
                <h2 className="text-white sm:text-2xl md:text-3xl font-bold mb-4" style={{ fontSize: "4.5rem" }}>
                  {slide.title}
                </h2>
                <p className="text-white text-sm sm:text-base mb-6">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="w-full md:w-auto mb-6 md:mb-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover h-50 md:h-80 lg:h-[500px] w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
