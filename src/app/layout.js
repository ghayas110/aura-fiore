"use client"; // Ensure this is a client-side component

import { useEffect, useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [role, setRole] = useState(null); // State to store the role from localStorage

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);

    // Listen for changes in localStorage
    const handleStorageChange = () => {
      const updatedRole = localStorage.getItem("role");
      setRole(updatedRole);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Render Header only if role is not admin */}
        {role !== "admin" && <Header />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
