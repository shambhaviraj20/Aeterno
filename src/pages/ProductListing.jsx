import React, { useEffect, useState } from "react";
import eraThemes from "../utils/eraThemes";
import productsByEra from "../utils/products";
import ProductCard from "../components/ProductCard";
import { ShoppingCart, MapPin } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";


function ProductListing({ selectedEra, setSelectedEra }) {
    const [showDropdown, setShowDropdown] = useState(false);

  const theme = eraThemes[selectedEra] || eraThemes["80s"];
  const products = productsByEra[selectedEra] || [];
  

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddToCart = (product) => {
    const updated = [...cart, product];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const eras = ["80s", "90s", "2000s", "Future"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
            {/* Logo */}
            <h1 className="text-xl font-bold text-gray-900">🕒 ShopTime</h1>

            {/* Location */}
            <div className="flex items-start gap-2 text-xs text-gray-600 hover:text-black cursor-pointer leading-tight">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                    <p className="text-[11px] text-gray-500">Deliver to</p>
                    <p className="font-semibold text-[13px] text-gray-800">
                    Shambhavi – Pune 411015
                    </p>
                </div>
            </div>


            {/* Search Bar */}
            <div className="flex-1 min-w-[250px] max-w-md">
            <input
                type="text"
                placeholder="Search ShopTime..."
                className="w-full px-4 py-1.5 rounded-md border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>

            {/* Nav Links */}
            <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
            {/* Categories Dropdown */}
            <div className="relative">
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-1 hover:text-black"
                >
                    Categories
                    <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                    {showDropdown && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute top-full mt-2 w-48 bg-white border rounded-md shadow-lg z-50"
                    >
                        {["Electronics", "Toys", "Fashion", "Home", "Gaming"].map((category) => (
                        <Link
                            key={category}
                            to={`/category/${category.toLowerCase()}`}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                        >
                            {category}
                        </Link>
                        ))}
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Link to="/orders" className="hover:text-black">
            Returns & Orders
            </Link>


            {/* Cart */}
            <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {cart.length}
                </span>
                )}
            </div>
            </div>
        </div>
        </header>


      {/* Hero + Era Switch */}
      <section className={`${theme.background} border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold mb-1 text-gray-900">
                Shop the <span className={`${theme.text} capitalize`}>{selectedEra}</span> Era
            </h2>

              <p className="text-sm text-gray-600">
                Nostalgic gadgets & futuristic essentials curated just for you.
              </p>
            </div>
            <div className="flex gap-2">
              {eras.map((era) => (
                <button
                  key={era}
                  onClick={() => setSelectedEra(era)}
                  className={`px-4 py-1.5 rounded-full text-sm border ${
                    selectedEra === era
                      ? `${theme.button}`
                      : "border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {era}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              theme={theme}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductListing;
