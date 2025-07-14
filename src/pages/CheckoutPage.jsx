// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, CheckCircle, Package, Plus, DollarSign, ShoppingCart, Heart, Search, Filter, ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

// Era themes matching ProductListing
const eraThemes = {
  "80s": {
    primary: "from-rose-500 to-purple-600",
    secondary: "from-pink-500 to-cyan-400",
    background: "bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-400",
    cardBg: "bg-white/10 backdrop-blur-md",
    button: "bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700",
    headerText: "text-white",
    headerBackground: "bg-white/20 backdrop-blur-sm"
  },
  "90s": {
    primary: "from-emerald-500 to-teal-600",
    secondary: "from-slate-800 to-black",
    background: "bg-gradient-to-br from-slate-800 via-gray-900 to-black",
    cardBg: "bg-white/10 backdrop-blur-md",
    button: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700",
    headerText: "text-white",
    headerBackground: "bg-white/20 backdrop-blur-sm"
  },
  "2000s": {
    primary: "from-amber-500 to-orange-600",
    secondary: "from-blue-400 to-yellow-200",
    background: "bg-gradient-to-br from-blue-400 via-pink-300 to-yellow-200",
    cardBg: "bg-white/10 backdrop-blur-md",
    button: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700",
    headerText: "text-white",
    headerBackground: "bg-white/20 backdrop-blur-sm"
  },
  "Future": {
    primary: "from-violet-500 to-indigo-600",
    secondary: "from-indigo-900 to-black",
    background: "bg-gradient-to-br from-indigo-900 via-purple-900 to-black",
    cardBg: "bg-white/10 backdrop-blur-md",
    button: "bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700",
    headerText: "text-white",
    headerBackground: "bg-white/20 backdrop-blur-sm"
  }
};

// Era-specific animated background component
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
        </div>
      );

    default:
      return null;
  }
};

const CheckoutPage = ({ cart, selectedEra, orders, setOrders, setCart }) => {
  const theme = eraThemes[selectedEra] || eraThemes["80s"];
  const navigate = useNavigate();

  const [addresses, setAddresses] = useState([
    {
      id: "1",
      name: "John Doe",
      street: "123 Retro Ave",
      city: "Synthville",
      state: "CA",
      zip: "90210",
      country: "USA",
    },
    {
      id: "2",
      name: "Jane Smith",
      street: "456 Neon Blvd",
      city: "Vaporwave City",
      state: "NY",
      zip: "10001",
      country: "USA",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState(addresses[0]?.id || "");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  // FIXED: Assuming item.price is now a number. Removed .replace()
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleAddNewAddress = (e) => {
    e.preventDefault();
    if (Object.values(newAddress).some(val => !val.trim())) {
      alert("Please fill in all fields for the new address.");
      return;
    }
    const newId = (addresses.length + 1).toString();
    const addressWithId = { ...newAddress, id: newId };
    setAddresses((prevAddresses) => [...prevAddresses, addressWithId]);
    setSelectedAddress(newId);
    setNewAddress({ name: "", street: "", city: "", state: "", zip: "", country: "" });
    setShowAddressForm(false);
  };

  const handlePlaceOrder = () => {
    if (!selectedAddress || !phoneNumber) {
      alert("Please select an address and enter your phone number.");
      return;
    }

    const newOrder = {
      id: `ORD-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      total: `₹${total.toLocaleString()}`,
      status: "Processing",
      items: cart,
      shippingAddress: addresses.find(addr => addr.id === selectedAddress),
      contactPhone: phoneNumber,
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setCart([]);
    setIsOrderPlaced(true);

    setTimeout(() => {
      navigate("/returns-orders");
    }, 3000);
  };

  const eraColors = {
    "80s": "from-rose-500 to-purple-600",
    "90s": "from-emerald-500 to-teal-600",
    "2000s": "from-amber-500 to-orange-600",
    "Future": "from-violet-500 to-indigo-600"
  };

  if (isOrderPlaced) {
    return (
      <motion.div
        className={`min-h-screen ${theme.background} flex flex-col items-center justify-center p-8 relative overflow-hidden`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <EraBackground era={selectedEra} />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className={`p-10 rounded-3xl shadow-2xl ${theme.cardBg} backdrop-blur-md border border-white/10 text-center relative z-10`}
        >
          <CheckCircle className="w-24 h-24 mx-auto mb-6 text-green-400" />
          <h2 className={`text-4xl font-bold ${theme.headerText} mb-4`}>Order Placed!</h2>
          <p className="text-white/80 text-lg mb-8">Thank you for your purchase. Your order is being processed.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/returns-orders")}
            className={`py-3 px-8 rounded-full ${theme.button} text-white font-semibold transition-all duration-300 shadow-lg`}
          >
            View Your Orders
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navbar - Same as ProductListing */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="w-full bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-40 border-b"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/"> {/* Added Link component here */}
              <motion.h1
                whileHover={{ scale: 1.05 }}
                className={`text-2xl font-bold bg-gradient-to-r ${eraColors[selectedEra]} bg-clip-text text-transparent`}
              >
                ATERENO
              </motion.h1>
            </Link>

            {/* Location */}
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <MapPin className="w-4 h-4 text-blue-600" />
              <div className="text-left">
                <p className="text-[10px] text-gray-500">Deliver to</p>
                <p className="font-semibold text-[12px]">Pune 411015</p>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              <Link to="/returns-orders" className="text-gray-700 hover:text-black font-medium">
                Orders
              </Link>
              <Link to="/wishlist" className="text-gray-700 hover:text-black font-medium flex items-center gap-1">
                <Heart className="w-4 h-4" /> Wishlist
              </Link>
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

      {/* Hero Section with Era Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${theme.background} relative overflow-hidden`}
      >
        <EraBackground era={selectedEra} />
        <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-white mb-2">
              Checkout - <span className="capitalize">{selectedEra}</span> Style
            </h2>
            <p className="text-white/80 text-lg">
              Complete your order in retro style
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.main
        className="max-w-6xl mx-auto px-6 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Shipping Address Section */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-pink-500" />
                Select a Shipping Address
              </h3>
              <div className="space-y-4">
                {addresses.map((address) => (
                  <label
                    key={address.id}
                    className={`flex items-start p-4 rounded-xl cursor-pointer transition-all duration-200 ease-in-out border ${
                      selectedAddress === address.id
                        ? "border-pink-400 bg-pink-50"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="address"
                      value={address.id}
                      checked={selectedAddress === address.id}
                      onChange={() => {
                        setSelectedAddress(address.id);
                        setShowAddressForm(false);
                      }}
                      className="mt-1 mr-3 accent-pink-500"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{address.name}</p>
                      <p className="text-gray-600 text-sm">{address.street}, {address.city}, {address.state} {address.zip}</p>
                      <p className="text-gray-500 text-sm">{address.country}</p>
                    </div>
                  </label>
                ))}
                <button
                  onClick={() => setShowAddressForm(!showAddressForm)}
                  className="w-full py-3 rounded-xl border border-dashed border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" /> {showAddressForm ? "Cancel Add Address" : "Add New Address"}
                </button>

                <AnimatePresence>
                  {showAddressForm && (
                    <motion.form
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleAddNewAddress}
                      className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-3"
                    >
                      <h4 className="text-lg font-semibold text-gray-800">New Address Details</h4>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={newAddress.name}
                        onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Street Address"
                        value={newAddress.street}
                        onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="City"
                          value={newAddress.city}
                          onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="State"
                          value={newAddress.state}
                          onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Zip Code"
                          value={newAddress.zip}
                          onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="Country"
                          value={newAddress.country}
                          onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 rounded-lg bg-gradient-to-r ${theme.primary} text-white font-semibold transition-all duration-300 shadow-lg`}
                      >
                        Save Address
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-green-500" />
                Payment Method
              </h3>
              <div className="space-y-4">
                <label className="flex items-center p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 cursor-pointer">
                  <input type="radio" name="payment" value="cod" defaultChecked className="mt-1 mr-3 accent-green-500" />
                  <span className="font-semibold text-gray-800">Cash on Delivery</span>
                </label>
                <label className="flex items-center p-4 rounded-xl border border-gray-200 opacity-50 cursor-not-allowed">
                  <input type="radio" name="payment" value="card" disabled className="mt-1 mr-3 accent-green-500" />
                  <span className="font-semibold text-gray-800">Credit/Debit Card (Coming Soon)</span>
                </label>
              </div>
            </div>

            {/* Phone Number Section */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-500" />
                Contact Phone Number
              </h3>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Review Items */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
                <Package className="w-6 h-6 text-purple-500" />
                Review Items
              </h3>
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      {/* FIXED: Assuming item.price is now a number. Removed .replace() */}
                      <p className="font-semibold text-gray-800">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-gray-200 shadow-lg p-6 h-fit sticky top-8 rounded-2xl"
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h4>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Items ({cart.length})</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-gray-800 text-xl font-bold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlaceOrder}
              disabled={cart.length === 0 || !selectedAddress || !phoneNumber}
              className={`w-full py-4 rounded-2xl bg-gradient-to-r ${theme.primary} text-white font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${
                (cart.length === 0 || !selectedAddress || !phoneNumber) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              Place Your Order
            </motion.button>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
};

export default CheckoutPage;