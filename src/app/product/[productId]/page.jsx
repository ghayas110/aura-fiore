"use client";

import React, { useState } from "react";

const ProductPage = () => {
  const product = {
    title: "Lace Bralette Set",
    description:
      "This lace bralette set is the perfect blend of comfort and elegance. Ideal for every occasion, it offers a soft fit and a sophisticated look.",
    price: 49.99,
    images: [
      "/images/shirt.jpg",
      "/images/shirt2.jpg",
      "/images/shirt3.jpg",
    ],
    colors: ["Black", "Red", "White"],
    sizes: ["S", "M", "L", "XL"],
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images[0]); // State for the main image

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1) setQuantity(value);
  };

  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="w-full">
            <img
              src={mainImage} // Dynamically set the main image
              alt={product.title}
              className="w-full h-[400px] md:h-[500px] object-contain rounded-md"
            />
          </div>
          <div className="flex gap-4 mt-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(image)} // Update the main image on click
                className={`w-24 h-24 object-cover rounded-md cursor-pointer border-2 ${
                  mainImage === image
                    ? "border-pink-500"
                    : "border-gray-300 hover:border-pink-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Price */}
          <div className="mt-4">
            <p className="text-2xl font-bold text-pink-500">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Colors */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Color:</h3>
            <div className="flex gap-4 mt-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full ${
                    selectedColor === color
                      ? "border-2 border-pink-500"
                      : "border border-gray-300"
                  }`}
                  style={{
                    backgroundColor: color.toLowerCase(),
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Size:</h3>
            <div className="flex gap-4 mt-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? "bg-pink-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Quantity:</h3>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="mt-2 w-20 p-2 border rounded-md"
            />
          </div>

          {/* Add to Cart */}
          <div className="mt-6">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
