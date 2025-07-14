import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Plus, Sparkles, ShoppingCart, MapPin, Search, Filter, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

// Define eraThemes - Comprehensive version
const eraThemes = {
  "80s": {
    primary: "from-rose-500 to-purple-600",
    secondary: "from-pink-500 to-cyan-400",
    background: "bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-400",
    headerBackground: "bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-cyan-400/20",
    headerText: "text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300",
    subHeaderText: "text-pink-200",
    cardBg: "bg-gradient-to-br from-pink-500/10 via-purple-500/20 to-cyan-400/10",
    accent: "from-pink-400 to-cyan-400",
    button: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
  },
  "90s": {
    primary: "from-emerald-500 to-teal-600",
    secondary: "from-slate-800 to-black",
    background: "bg-gradient-to-br from-slate-800 via-gray-900 to-black",
    headerBackground: "bg-gradient-to-r from-rose-400/20 via-purple-400/30 to-indigo-500/20", // Adjusted from original
    headerText: "text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-purple-300 to-indigo-300", // Adjusted from original
    subHeaderText: "text-rose-200", // Adjusted from original
    cardBg: "bg-gradient-to-br from-rose-400/10 via-purple-400/20 to-indigo-500/10", // Adjusted from original
    accent: "from-rose-400 to-indigo-500", // Adjusted from original
    button: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700" // Adjusted to match primary
  },
  "2000s": {
    primary: "from-amber-500 to-orange-600",
    secondary: "from-blue-400 to-yellow-200",
    background: "bg-gradient-to-br from-blue-400 via-pink-300 to-yellow-200",
    headerBackground: "bg-gradient-to-r from-lime-400/20 via-orange-500/30 to-fuchsia-500/20", // Adjusted from original
    headerText: "text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-orange-300 to-fuchsia-300", // Adjusted from original
    subHeaderText: "text-lime-200", // Adjusted from original
    cardBg: "bg-gradient-to-br from-lime-400/10 via-orange-500/20 to-fuchsia-500/10", // Adjusted from original
    accent: "from-lime-400 to-fuchsia-500", // Adjusted from original
    button: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" // Adjusted to match primary
  },
  "Future": {
    primary: "from-violet-500 to-indigo-600",
    secondary: "from-indigo-900 to-black",
    background: "bg-gradient-to-br from-indigo-900 via-purple-900 to-black",
    headerBackground: "bg-gradient-to-r from-cyan-400/20 via-blue-500/30 to-purple-600/20", // Adjusted from original
    headerText: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300", // Adjusted from original
    subHeaderText: "text-cyan-200", // Adjusted from original
    cardBg: "bg-gradient-to-br from-cyan-400/10 via-blue-500/20 to-purple-600/10", // Adjusted from original
    accent: "from-cyan-400 to-purple-600", // Adjusted from original
    button: "bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700" // Adjusted to match primary
  }
};

// Era-specific background styles (Copied from ProductListing.jsx)
const eraBackgrounds = {
  "80s": "bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-400",
  "90s": "bg-gradient-to-br from-slate-800 via-gray-900 to-black",
  "2000s": "bg-gradient-to-br from-blue-400 via-pink-300 to-yellow-200",
  "Future": "bg-gradient-to-br from-indigo-900 via-purple-900 to-black",
};

// Era-specific animated elements (Copied from ProductListing.jsx)
const EraBackground = ({ era }) => {
  switch (era) {
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
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                borderRadius: Math.random() > 0.5 ? "50%" : "0%",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="absolute">
              <defs>
                <pattern
                  id="zigzag"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0,20 L10,0 L20,20 L30,0 L40,20"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#zigzag)" />
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
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-white/30"
              style={{
                width: Math.random() * 200 + 100,
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
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
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                fontSize: Math.random() * 20 + 10,
              }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
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
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 3,
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
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
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
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
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
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                borderColor: [
                  "rgba(34, 211, 238, 0.4)",
                  "rgba(168, 85, 247, 0.4)",
                  "rgba(34, 211, 238, 0.4)",
                ],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      );

    default:
      return null;
  }
};


// Removed mockWishlist definition to rely on passed prop

function WishlistPage({
  wishlist, // Removed default mockWishlist
  onRemoveFromWishlist = () => {},
  onAddToCart = () => {}
}) {
  const [selectedEra, setSelectedEra] = useState("80s"); // Managed internally
  const theme = eraThemes[selectedEra] || eraThemes["80s"];

  // Helper for eraColors as in ProductListing.jsx
  const eraColors = {
    "80s": "from-rose-500 to-purple-600",
    "90s": "from-emerald-500 to-teal-600",
    "2000s": "from-amber-500 to-orange-600",
    "Future": "from-violet-500 to-indigo-600",
  };
  const eras = ["80s", "90s", "2000s", "Future"]; // For era switcher

  // State for dropdowns in navbar (copied from ProductListing for visual consistency)
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Define a dummy selectedAddress for display purposes in the navbar
  const [selectedAddress, setSelectedAddress] = useState({
    city: "Pune",
    pincode: "411015"
  });

  // Group wishlist items by era
  const groupedWishlist = (wishlist || []).reduce((acc, item) => { // Added check for wishlist being undefined/null
    (acc[item.era] = acc[item.era] || []).push(item);
    return acc;
  }, {});

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-50" // Base background, era background handled by section
    >
      {/* Enhanced Navbar - Copied from ProductListing.jsx */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="w-full bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-40 border-b"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo - Made clickable */}
            <Link to="/">
              <motion.h1
                whileHover={{ scale: 1.05 }}
                className={`text-2xl font-bold bg-gradient-to-r ${eraColors[selectedEra]} bg-clip-text text-transparent cursor-pointer`}
              >
                ATERENO
              </motion.h1>
            </Link>

            {/* Location with Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 text-xs text-gray-600 hover:text-black cursor-pointer bg-gray-50 px-3 py-2 rounded-lg transition-colors"
              >
                <MapPin className="w-4 h-4 text-blue-600" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-500">Deliver to</p>
                  <p className="font-semibold text-[12px]">
                    {selectedAddress.city} {selectedAddress.pincode}
                  </p>
                </div>
                <ChevronDown className="w-3 h-3 text-gray-500" />
              </motion.button>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md relative">
              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              {/* Categories Dropdown (Keeping for visual consistency, no functionality added) */}
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

              {/* Orders Link - Remains relevant */}
              <Link to="/returns-orders" className="text-gray-700 hover:text-black font-medium">
                Orders
              </Link>

              {/* Wishlist Link (Keeping for general site navigation) */}
              <Link to="/wishlist">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4" /> Wishlist
                </motion.div>
              </Link>

              {/* Cart (Keeping for general site navigation) */}
              <Link to="/cart">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative cursor-pointer"
                >
                  <ShoppingCart className="w-6 h-6 text-gray-700" />
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    3 {/* Dummy cart item count */}
                  </motion.span>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Hero Section with Era-Specific Backgrounds - Copied from ProductListing.jsx */}
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
                Your Wishlist
              </h2>
              <p className="text-white/80 text-lg">
                Your dream items from across the decades!
              </p>
            </motion.div>

            {/* Era Switcher - Copied from ProductListing.jsx */}
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

      <main className="max-w-6xl mx-auto relative z-10 py-12">
        {(!wishlist || wishlist.length === 0) ? ( // Check if wishlist is undefined/null or empty
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`text-center py-16 ${theme.cardBg} rounded-3xl backdrop-blur-lg border border-white/10 shadow-xl`}
          >
            <Heart className="w-16 h-16 mx-auto mb-4 text-white/60" />
            <p className="text-2xl font-semibold text-white/80 mb-2">Your wishlist is empty</p>
            <p className="text-white/60">Add some retro treasures to your collection!</p>
          </motion.div>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedWishlist).map(([era, items]) => {
              const eraTheme = eraThemes[era] || eraThemes["80s"];
              return (
                <motion.div
                  key={era}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.h2
                    className={`text-3xl font-bold mb-6 ${eraTheme.headerText} flex items-center gap-3`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {era} Era Collection
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                  </motion.h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence>
                      {items.map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white/5 rounded-3xl backdrop-blur-lg border border-white/10 overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300"
                          whileHover={{ y: -5 }}
                        >
                          <div className="relative h-48 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-t-3xl flex items-center justify-center">
                              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                <Sparkles className="w-8 h-8 text-white/60" />
                              </div>
                            </div>
                            
                            {/* Remove button */}
                            <motion.button
                              onClick={() => onRemoveFromWishlist(product.id)}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                              className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                            >
                              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                            </motion.button>

                            {/* Floating sparkles on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute"
                                  style={{
                                    left: `${20 + i * 15}%`,
                                    top: `${20 + (i % 2) * 30}%`,
                                  }}
                                  animate={{
                                    y: [-5, 5],
                                    opacity: [0, 1, 0],
                                    scale: [0.5, 1, 0.5],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                  }}
                                >
                                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                            
                            <div className="flex items-center gap-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'}`}
                                />
                              ))}\
                              <span className="text-xs text-white/60 ml-2">(4.2)</span>
                            </div>
                            
                            <p className="text-2xl font-bold text-white mb-4">{product.price}</p>
                            
                            <motion.button
                              onClick={() => onAddToCart(product)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`w-full py-3 rounded-2xl ${eraTheme.button} text-white font-medium transition-all duration-300 shadow-lg flex items-center justify-center gap-2`}
                            >
                              <Plus className="w-4 h-4" />
                              Add to Cart
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>
    </motion.div>
  );
}

export default WishlistPage;