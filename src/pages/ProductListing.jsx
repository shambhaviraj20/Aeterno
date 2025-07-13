// src/pages/ProductListing.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, MapPin, Search, Filter, ChevronDown, Sparkles, Heart } from "lucide-react"; // Import Heart icon
import { Link } from "react-router-dom";
import eraThemes from "../utils/eraThemes";
import productsByEra from "../utils/products";
import ProductCard from "../components/ProductCard";

function ProductListing({ selectedEra, setSelectedEra, onAddToWishlist, onAddToCart, cart }) { // Add 'cart' prop
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // const [cart, setCart] = useState([]); // Removed local cart state
  const [showNotification, setShowNotification] = useState(false);

  const theme = eraThemes[selectedEra] || eraThemes["80s"];
  const products = productsByEra[selectedEra] || [];
  const eras = ["80s", "90s", "2000s", "Future"];

  // const handleAddToCart = (product) => { // Removed local handleAddToCart
  //   setCart([...cart, product]);
  //   setShowNotification(true);
  //   setTimeout(() => setShowNotification(false), 2000);
  // };

  const eraColors = {
    "80s": "from-rose-500 to-purple-600",
    "90s": "from-emerald-500 to-teal-600",
    "2000s": "from-amber-500 to-orange-600",
    "Future": "from-violet-500 to-indigo-600"
  };

  // Era-specific background styles
  const eraBackgrounds = {
    "80s": "bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-400",
    "90s": "bg-gradient-to-br from-slate-800 via-gray-900 to-black",
    "2000s": "bg-gradient-to-br from-blue-400 via-pink-300 to-yellow-200",
    "Future": "bg-gradient-to-br from-indigo-900 via-purple-900 to-black"
  };

  // Era-specific animated elements (EraBackground component remains the same)
  const EraBackground = ({ era }) => {
    switch(era) {
      case "80s":
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-white/30"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  borderRadius: Math.random() > 0.5 ? '50%' : '0%'
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" className="absolute">
                <defs>
                  <pattern id="zigzag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0,20 L10,0 L20,20 L30,0 L40,20" stroke="white" strokeWidth="2" fill="none"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#zigzag)"/>
              </svg>
            </div>
          </div>
        );
      
      case "90s":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400"
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%'
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-white/30"
                style={{
                  width: Math.random() * 200 + 100,
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scaleX: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: Math.random() * 4 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        );
      
      case "2000s":
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white/60"
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  fontSize: Math.random() * 20 + 10
                }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                ✨
              </motion.div>
            ))}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-yellow-300 rounded-full"
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%'
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-30"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%'
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        );
      
      case "Future":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"/>
              </svg>
            </div>
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%'
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-cyan-400/40 rounded-lg"
                style={{
                  width: Math.random() * 150 + 100,
                  height: Math.random() * 100 + 50,
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%'
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  borderColor: ['rgba(34, 211, 238, 0.4)', 'rgba(168, 85, 247, 0.4)', 'rgba(34, 211, 238, 0.4)'],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: Math.random() * 5 + 4,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add to Cart Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Added to cart!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="w-full bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-40 border-b"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-bold bg-gradient-to-r ${eraColors[selectedEra]} bg-clip-text text-transparent`}
            >
              ATERENO
            </motion.h1>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 text-xs text-gray-600 hover:text-black cursor-pointer bg-gray-50 px-3 py-2 rounded-lg"
            >
              <MapPin className="w-4 h-4 text-blue-600" />
              <div>
                <p className="text-[10px] text-gray-500">Deliver to</p>
                <p className="font-semibold text-[12px]">Pune 411015</p>
              </div>
            </motion.div>

            {/* Enhanced Search */}
            <div className="flex-1 max-w-md relative">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              {/* Categories Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-1 text-gray-700 hover:text-black font-medium"
                >
                  <Filter className="w-4 h-4" />
                  Categories
                  <ChevronDown className="w-4 h-4" />
                </motion.button>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full mt-2 w-48 bg-white border rounded-lg shadow-xl z-50"
                    >
                      {["Electronics", "Fashion", "Gaming", "Home", "Toys"].map((category) => (
                        <motion.div
                          key={category}
                          whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                          className="px-4 py-2 text-sm text-gray-700 cursor-pointer"
                        >
                          {category}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Orders Link */}
              <Link to="/orders" className="text-gray-700 hover:text-black font-medium">
                Orders
              </Link>

              {/* Wishlist Link (NEW) */}
              <Link to="/wishlist" className="text-gray-700 hover:text-black font-medium flex items-center gap-1">
                <Heart className="w-4 h-4" /> Wishlist
              </Link>

              {/* Cart */}
              <Link to="/cart"> {/* Link to Cart page */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative cursor-pointer"
                >
                  <ShoppingCart className="w-6 h-6 text-gray-700" />
                  {cart.length > 0 && ( // This needs to be connected to the global cart state
                  <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      {cart.length}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Hero Section with Era-Specific Backgrounds */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${eraBackgrounds[selectedEra]} relative overflow-hidden`}
      >
        {/* Era-specific animated background */}
        <EraBackground era={selectedEra} />

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-2">
                Welcome to the <span className="capitalize">{selectedEra}</span>
              </h2>
              <p className="text-white/80 text-lg">
                Discover era-defining products & experiences
              </p>
            </motion.div>

            {/* Era Switcher */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-2 bg-white/20 backdrop-blur-sm rounded-2xl p-2"
            >
              {eras.map((era) => (
                <motion.button
                  key={era}
                  onClick={() => setSelectedEra(era)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedEra === era
                      ? "bg-white text-gray-800 shadow-lg"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {era}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Product Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {selectedEra} Collection
          </h3>
          <p className="text-gray-600">
            {products.length} products available
          </p>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="wait">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <ProductCard
                  product={product}
                  theme={theme}
                  onAddToCart={onAddToCart} // Use the onAddToCart prop from App.js
                  onAddToWishlist={onAddToWishlist} // This ensures the prop is passed
                  era={selectedEra} // This ensures the era is passed for wishlist
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}

export default ProductListing;