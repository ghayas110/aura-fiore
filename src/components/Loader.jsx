// components/Loader.js
import React from "react";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-pink-700 flex items-center justify-center z-50">
      <div className="animate-pulse">
        <Image
          src="/images/aura-fiore.png" // Replace with your logo path
          alt="Aura-Fiore Logo"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
