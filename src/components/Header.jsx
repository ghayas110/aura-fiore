"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); 
const router = useRouter();
const nav=[
  {
    id:1,
    title: "New Arival",
    image: "/images/shirt.jpg",
    isLarge: true,
  },
  {
    id:2,
    title: "Bras",
    image: "/images/shirt.jpg",
    isLarge: true,
  },
  {
    id:3,
    title: "Panties",
    image: "/images/shirt2.jpg",
  },
  {
    id:4,
    title: "Night Wear",
    image: "/images/shirt3.jpg",
  },
  {
    id:5,
    title: "Inner Wear",
    image: "/images/shirt4.jpg",
  },
  {
    id:6,
    title: "Swim Wear",
    image: "/images/shirt5.jpg",
  },

]
const closeModal = () => {
  setIsModalOpen(false);
};
  return (
    <header className="bg-white shadow-md  w-full z-10">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link className="mb-5.5 inline-block " href="/">
            <Image
                  className=" dark:block"
                  src={"/images/aura-fiore.png"}
                  alt="Logo"
                  width={150}
                  height={12}
                />
              </Link>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden md:flex flex-grow mx-6">
          <div className="relative w-full">
          
          <input
              type="text"
              placeholder="What do you want to buy?"
              className="w-full px-4 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />

          
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {
            nav.map((item) => (
              <div key={item.id} className="text-md font-semibold text-gray-700 cursor-pointer hover:underline" onClick={() => router.push(`/cat/${item.id}`)}>
                {item.title}
              </div>
            ))
          }
     
         
          <div href="#" className="text-sm font-medium text-gray-700 hover:underline" onClick={() => router.push("/cart")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</div>

         
          <button className="text-sm font-medium text-white bg-pink-500 hover:bg-pink-700 px-4 py-2 rounded-md" onClick={() => setIsModalOpen(true)}>
            Log in
          </button>
          {/* <button className="text-sm font-medium text-white bg-pink-500 hover:bg-pink-700 px-4 py-2 rounded-md" onClick={() => router.push("/signup")}>
            Sign up
          </button> */}
        </div>

        {/* Hamburger Menu (visible on small screens) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col items-start space-y-4 px-6 py-4">
          {
            nav.map((item) => (
              <div key={item.id} className="text-sm font-medium text-gray-700 hover:underline" onClick={() => router.push(`/cat/${item.id}`)}>
                {item.title}
              </div>
            ))
          }
         
         
            <button className="w-full text-sm font-medium text-black hover:bg-gray-100 px-4 py-2 rounded-md border" onClick={() => router.push("/signin")}>
              Log in
            </button>
            <button className="w-full text-sm font-medium text-white bg-pink-500 hover:bg-gray-800 px-4 py-2 rounded-md" onClick={() => router.push("/signup")}>
              Sign up
            </button>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 bg-pink-500 bg-opacity-50  flex justify-center items-center " style={{zIndex:10000000}}>
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-7xl flex">
            {/* Left Section */}
            <div className="absolute top-0 left-0 p-10 z-50 cursor-pointer" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


            </div>

            <button
                className="cursor-pointer  text-gray-600 hover:text-gray-800 "
                onClick={closeModal}
              >
                &times;
              </button>
            <div className="w-full md:w-1/2 p-8 flex justify-center flex-col">
            
              <h2 className="text-2xl font-bold mb-4">
                {isSignUp ? "Create an Account" : "Log in to your Account"}
              </h2>
              <p className="text-gray-600 mb-6">
                {isSignUp ? "Join us today!" : "Welcome back!"}
              </p>
              <form>
                {/* Name Field (only for Sign Up) */}
                {isSignUp && (
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                )}
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div className="mb-4 relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                {/* Additional Fields */}
                {!isSignUp && (
                  <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Remember me
                    </label>
                    <a href="#" className="text-pink-500 hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-2 rounded-md"
                >
                  {isSignUp ? "Sign Up" : "Login"}
                </button>
              </form>
              <p className="mt-4 text-center">
                {isSignUp
                  ? "Already have an account? "
                  : "Don’t have an account? "}
                <span
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-pink-500 hover:underline cursor-pointer"
                >
                  {isSignUp ? "Log in" : "Create an account"}
                </span>
              </p>
            </div>

            {/* Right Section */}
            <div className="hidden md:block w-1/2 bg-cover bg-center">
              <Image
                src="/images/shirt3.jpg"
                alt="Modal Image"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
