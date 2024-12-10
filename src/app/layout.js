"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "@/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true); // Show loader
    const handleComplete = () => setLoading(false); // Hide loader

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Loader */}
        {loading && (
          <div className="fixed inset-0 bg-pink-700 z-50 flex items-center justify-center">
            <div className="animate-pulse">
              <img
                src="/logo.svg" // Replace with your logo path
                alt="Loading"
                className="h-20 w-20"
              />
            </div>
          </div>
        )}

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
