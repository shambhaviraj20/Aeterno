// src/pages/ProductListing.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, MapPin, Search, Filter, ChevronDown, Sparkles, Heart } from "lucide-react";

// Define eraThemes
const eraThemes = {
  "80s": {
    primary: "from-rose-500 to-purple-600",
    secondary: "from-pink-500 to-cyan-400",
    background: "bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-400"
  },
  "90s": {
    primary: "from-emerald-500 to-teal-600",
    secondary: "from-slate-800 to-black",
    background: "bg-gradient-to-br from-slate-800 via-gray-900 to-black"
  },
  "2000s": {
    primary: "from-amber-500 to-orange-600",
    secondary: "from-blue-400 to-yellow-200",
    background: "bg-gradient-to-br from-blue-400 via-pink-300 to-yellow-200"
  },
  "Future": {
    primary: "from-violet-500 to-indigo-600",
    secondary: "from-indigo-900 to-black",
    background: "bg-gradient-to-br from-indigo-900 via-purple-900 to-black"
  }
};

// Define productsByEra
const productsByEra = {
  "80s": [
    {
      id: "80s-1",
      name: "Retro Boombox",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 4.5,
      reviews: 234
    },
    {
      id: "80s-2",
      name: "Neon Jacket",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      category: "Fashion",
      rating: 4.2,
      reviews: 156
    },
    {
      id: "80s-3",
      name: "Vinyl Records Set",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      category: "Music",
      rating: 4.8,
      reviews: 89
    },
    {
      id: "80s-4",
      name: "Rubik's Cube",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
      category: "Toys",
      rating: 4.6,
      reviews: 312
    }
  ],
  "90s": [
    {
      id: "90s-1",
      name: "Tamagotchi",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
      category: "Toys",
      rating: 4.3,
      reviews: 189
    },
    {
      id: "90s-2",
      name: "Flannel Shirt",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      category: "Fashion",
      rating: 4.1,
      reviews: 267
    },
    {
      id: "90s-3",
      name: "Game Boy",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      category: "Gaming",
      rating: 4.9,
      reviews: 445
    },
    {
      id: "90s-4",
      name: "CD Player",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 4.4,
      reviews: 178
    }
  ],
  "2000s": [
    {
      id: "2000s-1",
      name: "iPod Classic",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 4.7,
      reviews: 523
    },
    {
      id: "2000s-2",
      name: "Low-Rise Jeans",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      category: "Fashion",
      rating: 4.0,
      reviews: 234
    },
    {
      id: "2000s-3",
      name: "Flip Phone",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 4.2,
      reviews: 345
    },
    {
      id: "2000s-4",
      name: "Digital Camera",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 4.5,
      reviews: 289
    }
  ],
  "Future": [
    {
      id: "future-1",
      name: "Neural Interface",
      price: 999.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      category: "Technology",
      rating: 4.8,
      reviews: 67
    },
    {
      id: "future-2",
      name: "Holographic Display",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 4.9,
      reviews: 45
    },
    {
      id: "future-3",
      name: "Smart Fabric Suit",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      category: "Fashion",
      rating: 4.6,
      reviews: 123
    },
    {
      id: "future-4",
      name: "Anti-Gravity Shoes",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      category: "Fashion",
      rating: 4.7,
      reviews: 89
    }
  ]
};

// ProductCard Component
const ProductCard = ({ product, theme, onAddToCart, onAddToWishlist, era }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const handleAddToWishlist = () => {
    onAddToWishlist(product);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleAddToWishlist}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </motion.button>

        <div className="absolute top-3 left-3">
          <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
            <span className="text-sm text-gray-600 ml-1">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800">
            ${product.price}
          </span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className={`px-4 py-2 bg-gradient-to-r ${theme.primary} text-white rounded-lg font-medium hover:shadow-lg transition-all`}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

function ProductListing({ selectedEra, setSelectedEra, onAddToWishlist, onAddToCart, cart }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddressDropdown, setShowAddressDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null); // Define selectedAddress state here

  const theme = eraThemes[selectedEra] || eraThemes["80s"];
  const products = productsByEra[selectedEra] || [];
  const eras = ["80s", "90s", "2000s", "Future"];

  // Predefined addresses
  const addresses = [
    {
      id: "1",
      name: "Home",
      city: "Pune",
      pincode: "411015",
      fullAddress: "123 Retro Ave, Pune, Maharashtra 411015"
    },
    {
      id: "2",
      name: "Office",
      city: "Mumbai",
      pincode: "400001",
      fullAddress: "456 Business District, Mumbai, Maharashtra 400001"
    },
    {
      id: "3",
      name: "Family",
      city: "Bangalore",
      pincode: "560001",
      fullAddress: "789 Tech Park, Bangalore, Karnataka 560001"
    },
    {
      id: "4",
      name: "Friend's Place",
      city: "Delhi",
      pincode: "110001",
      fullAddress: "321 Central Avenue, Delhi 110001"
    }
  ];

  // Set default address if none selected
  useEffect(() => {
    if (!selectedAddress) {
      setSelectedAddress(addresses[0]);
    }
  }, [selectedAddress, addresses]);

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

  // Era-specific animated elements
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
                onClick={() => setShowAddressDropdown(!showAddressDropdown)}
                className="flex items-center gap-2 text-xs text-gray-600 hover:text-black cursor-pointer bg-gray-50 px-3 py-2 rounded-lg transition-colors"
              >
                <MapPin className="w-4 h-4 text-blue-600" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-500">Deliver to</p>
                  <p className="font-semibold text-[12px]">
                    {selectedAddress ? `${selectedAddress.city} ${selectedAddress.pincode}` : 'Select Address'}
                  </p>
                </div>
                <ChevronDown className="w-3 h-3 text-gray-500" />
              </motion.button>

              {/* Address Dropdown */}
              <AnimatePresence>
                {showAddressDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 w-72 bg-white border rounded-lg shadow-xl z-50 overflow-hidden"
                  >
                    <div className="p-3 border-b bg-gray-50">
                      <h3 className="font-semibold text-gray-800 text-sm">Select Delivery Address</h3>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      {addresses.map((address) => (
                        <motion.div
                          key={address.id}
                          whileHover={{ backgroundColor: "#f3f4f6" }}
                          onClick={() => {
                            setSelectedAddress(address);
                            setShowAddressDropdown(false);
                          }}
                          className={`p-3 cursor-pointer border-b last:border-b-0 ${
                            selectedAddress?.id === address.id ? 'bg-blue-50 border-blue-200' : ''
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className={`w-3 h-3 rounded-full border-2 ${
                                selectedAddress?.id === address.id
                                  ? 'bg-blue-500 border-blue-500'
                                  : 'border-gray-300'
                              }`}></div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-gray-800 text-sm">{address.name}</span>
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded">{address.city}</span>
                              </div>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                {address.fullAddress}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="p-3 border-t bg-gray-50">
                      <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800 font-medium">
                        + Add New Address
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search */}
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
              <Link to="/returns-orders" className="text-gray-700 hover:text-black font-medium">
                Orders
              </Link>

              {/* Wishlist Link */}
              <Link to="/wishlist" className="text-gray-700 hover:text-black font-medium flex items-center gap-1">
                <Heart className="w-4 h-4" /> Wishlist
              </Link>

              {/* Cart */}
              <Link to="/cart">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative cursor-pointer"
                >
                  <ShoppingCart className="w-6 h-6 text-gray-700" />
                  {cart.length > 0 && (
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
                  onAddToCart={onAddToCart}
                  onAddToWishlist={onAddToWishlist}
                  era={selectedEra}
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