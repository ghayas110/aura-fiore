"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manage sidebar state
  const router = useRouter();

  const menuItems = [
    { title: "Dashboard", route: "/dashboard" },
    { title: "Product", route: "/dashboard/product" },
    { title: "Categories", route: "/dashboard/category" },
  ];

  const handleLogout = () => {
    localStorage.clear(); // Clear all localStorage items
    window.dispatchEvent(new Event("storage")); // Trigger storage event manually
    router.push("/"); // Redirect to the home page
  };
  

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed z-40 inset-y-0 left-0 bg-pink-700 text-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center py-4">
            <h1 className="text-2xl font-bold">Aura-Fiore</h1>
          </div>
          <nav className="flex-1 px-4 space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                className="block py-2 px-4 rounded-md hover:bg-pink-800"
              >
                {item.title}
              </Link>
            ))}
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="block py-2 px-4 rounded-md hover:bg-pink-800 text-left w-full"
            >
              Logout
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Top Bar */}
        <header className="bg-white shadow-md p-4 flex items-center justify-between md:hidden">
          <button
            className="text-pink-700"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <h1 className="text-xl font-bold text-pink-700">Dashboard</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
