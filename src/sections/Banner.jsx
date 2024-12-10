"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css"; // Assuming you're using an external CSS file

const Banner = () => {
  const slides = [
    {
      image: "/slide2.png",
      title: "Elegance Redefined",
      description:
        "Discover exquisite lingerie that blends comfort with sophistication. Embrace your beauty with our premium collection.",
    },
    {
      image: "/slide2.png",
      title: "Feel Confident, Look Stunning",
      description:
        "Unleash your confidence with designs tailored to make every moment special. Explore our range today.",
    },
  ];

  return (
    <section
      className="relative w-full xl:p-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/female.jpg')",
        backgroundSize: "cover",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
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
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:mt-20">
              <div className="p-6 md:p-8  max-w-md w-full">
                <h3
                  className="text-white font-bold mb-4"
                  style={{ fontSize: "70px" }}
                >
                  {slide.title}
                </h3>
                <p className="text-white text-sm sm:text-base mb-6"
                    style={{ fontSize: "20px", lineHeight: "1.5" }}>
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                
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
