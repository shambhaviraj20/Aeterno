// src/pages/ReturnsOrders.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  RotateCcw,
  XCircle,
  Clock,
  Package,
  ShoppingCart,
  MapPin,
  Search,
  Filter,
  ChevronDown,
  Sparkles,
} from "lucide-react";

// Define eraThemes - Simplified to match ProductListing.jsx exactly
const eraThemes = {
  "80s": {
    primary: "from-rose-500 to-purple-600",
    secondary: "from-pink-500 to-cyan-400",
    background: "bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-400",
  },
  "90s": {
    primary: "from-emerald-500 to-teal-600",
    secondary: "from-slate-800 to-black",
    background: "bg-gradient-to-br from-slate-800 via-gray-900 to-black",
  },
  "2000s": {
    primary: "from-amber-500 to-orange-600",
    secondary: "from-blue-400 to-yellow-200",
    background: "bg-gradient-to-br from-blue-400 via-pink-300 to-yellow-200",
  },
  "Future": {
    primary: "from-violet-500 to-indigo-600",
    secondary: "from-indigo-900 to-black",
    background: "bg-gradient-to-br from-indigo-900 via-purple-900 to-black",
  },
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

const orderStatuses = {
  processing: { icon: Clock, color: "text-blue-400", label: "Processing", bg: "bg-blue-500/20" },
  shipped: { icon: Truck, color: "text-yellow-400", label: "Shipped", bg: "bg-yellow-500/20" },
  delivered: { icon: Package, color: "text-green-400", label: "Delivered", bg: "bg-green-500/20" },
  returned: { icon: RotateCcw, color: "text-red-400", label: "Returned", bg: "bg-red-500/20" },
  cancelled: { icon: XCircle, color: "text-gray-400", label: "Cancelled", bg: "bg-gray-500/20" },
};

const mockOrders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "delivered",
    total: "$129.99",
    items: [
      { name: "Retro Walkman", quantity: 1, price: "$79.99", image: "/api/placeholder/100/100" },
      { name: "Neon Sunglasses", quantity: 2, price: "$50.00", image: "/api/placeholder/100/100" },
    ],
  },
  {
    id: "ORD-002",
    date: "2024-01-10",
    status: "shipped",
    total: "$89.99",
    items: [
      { name: "Vintage Gamepad", quantity: 1, price: "$89.99", image: "/api/placeholder/100/100" },
    ],
  },
];

function ReturnsOrders({ orders = mockOrders }) { // Removed selectedEra, setSelectedEra from props
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
  // Removed showAddressDropdown state and logic as it's not relevant for this page's functionality
  const [searchQuery, setSearchQuery] = useState("");


  // Define a dummy selectedAddress for display purposes in the navbar
  const [selectedAddress, setSelectedAddress] = useState({
    city: "Pune",
    pincode: "411015"
  });


  return (
    <div className="min-h-screen bg-gray-50">
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
                  placeholder="Search orders..."
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
              <Link to="/wishlist" className="text-gray-700 hover:text-black font-medium flex items-center gap-1">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
                    3
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
                Your Orders & Returns
              </h2>
              <p className="text-white/80 text-lg">
                Track and manage your time-traveling purchases.
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
                  onClick={() => setSelectedEra(era)} // This now uses the internal state setter
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

      {/* Main content with orders */}
      <main className="max-w-6xl mx-auto relative z-10 py-12">
        {orders.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            // Adjusted cardBg to use theme.background with opacity for consistency
            className={`text-center py-16 ${theme.background.replace('from-', 'from-').replace('to-', 'to-').replace('bg-gradient-to-br', 'bg-gradient-to-br').replace('via-', 'via-').replace('from-pink-500', 'from-pink-500/10').replace('via-purple-600', 'via-purple-600/20').replace('to-cyan-400', 'to-cyan-400/10')} rounded-3xl backdrop-blur-lg border border-white/10 shadow-xl`}
          >
            <Package className="w-16 h-16 mx-auto mb-4 text-white/60" />
            <p className="text-2xl font-semibold text-white/80 mb-2">No orders yet</p>
            <p className="text-white/60">Start your time-traveling shopping journey!</p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence>
              {orders.map((order, index) => {
                const statusInfo = orderStatuses[order.status] || orderStatuses.processing;
                return (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    // Adjusted cardBg to use theme.background with opacity for consistency
                    className={`${theme.background.replace('from-', 'from-').replace('to-', 'to-').replace('bg-gradient-to-br', 'bg-gradient-to-br').replace('via-', 'via-').replace('from-pink-500', 'from-pink-500/10').replace('via-purple-600', 'via-purple-600/20').replace('to-cyan-400', 'to-cyan-400/10')} rounded-3xl backdrop-blur-lg border border-white/10 shadow-xl p-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}
                  >
                    {/* Animated background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${theme.primary} opacity-0 group-hover:opacity-5`}
                      animate={{
                        background: [
                          `linear-gradient(45deg, ${theme.primary})`,
                          `linear-gradient(225deg, ${theme.primary})`,
                          `linear-gradient(45deg, ${theme.primary})`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    <div className="flex flex-col lg:flex-row gap-6 relative z-10">
                      {/* Order Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h2 className="text-2xl font-bold text-white">#{order.id}</h2>
                          <div
                            className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusInfo.bg} backdrop-blur-sm`}
                          >
                            <statusInfo.icon className={`w-4 h-4 ${statusInfo.color}`} />
                            <span className={`text-sm font-medium ${statusInfo.color}`}>
                              {statusInfo.label}
                            </span>
                          </div>
                        </div>

                        <p className="text-white/70 mb-6">
                          {new Date(order.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>

                        {/* Items */}
                        <div className="space-y-3">
                          {order.items.map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 + 0.3 }}
                              className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 backdrop-blur-sm"
                            >
                              <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center">
                                <Package className="w-6 h-6 text-white/60" />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-white">{item.name}</p>
                                <p className="text-sm text-white/60">Qty: {item.quantity}</p>
                              </div>
                              <p className="font-semibold text-white">{item.price}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Total & Actions */}
                      <div className="lg:text-right">
                        <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm mb-4">
                          <p className="text-white/70 mb-2">Total</p>
                          <p className="text-3xl font-bold text-white">{order.total}</p>
                        </div>

                        <button
                          className={`w-full lg:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r ${theme.primary} text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg`}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
}

export default ReturnsOrders;