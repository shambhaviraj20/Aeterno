// src/pages/Cart.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingCart, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const eraThemes = {
  "80s": {
    background: "bg-gradient-to-br from-pink-900 via-purple-900 to-cyan-900",
    headerBackground: "bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-cyan-400/20",
    headerText: "text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300",
    subHeaderText: "text-pink-200",
    cardBg: "bg-gradient-to-br from-pink-500/10 via-purple-500/20 to-cyan-400/10",
    accent: "from-pink-400 to-cyan-400",
    button: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
  },
  "90s": {
    background: "bg-gradient-to-br from-rose-900 via-purple-900 to-indigo-900",
    headerBackground: "bg-gradient-to-r from-rose-400/20 via-purple-400/30 to-indigo-500/20",
    headerText: "text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-purple-300 to-indigo-300",
    subHeaderText: "text-rose-200",
    cardBg: "bg-gradient-to-br from-rose-400/10 via-purple-400/20 to-indigo-500/10",
    accent: "from-rose-400 to-indigo-500",
    button: "bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
  },
  "2000s": {
    background: "bg-gradient-to-br from-lime-900 via-orange-900 to-fuchsia-900",
    headerBackground: "bg-gradient-to-r from-lime-400/20 via-orange-500/30 to-fuchsia-500/20",
    headerText: "text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-orange-300 to-fuchsia-300",
    subHeaderText: "text-lime-200",
    cardBg: "bg-gradient-to-br from-lime-400/10 via-orange-500/20 to-fuchsia-500/10",
    accent: "from-lime-400 to-fuchsia-500",
    button: "bg-gradient-to-r from-lime-500 to-orange-600 hover:from-lime-600 hover:to-orange-700"
  },
  "Future": {
    background: "bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900",
    headerBackground: "bg-gradient-to-r from-cyan-400/20 via-blue-500/30 to-purple-600/20",
    headerText: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300",
    subHeaderText: "text-cyan-200",
    cardBg: "bg-gradient-to-br from-cyan-400/10 via-blue-500/20 to-purple-600/10",
    accent: "from-cyan-400 to-purple-600",
    button: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
  }
};

function Cart({ cart, setCart, selectedEra = "80s", handlePlaceOrder }) {
  const theme = eraThemes[selectedEra] || eraThemes["80s"];

  const updateQuantity = (id, delta) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    );
    setCart(updated);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + (parseFloat(item.price.replace('₹', '')) * item.quantity), 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen ${theme.background} text-white py-8 px-4 relative overflow-hidden`}
    >
      {/* Era-specific floating elements */}
      <div className="fixed inset-0 pointer-events-none">
        {selectedEra === "80s" && [...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-400 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        
        {selectedEra === "90s" && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-300"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [-3, 3], opacity: [0, 1, 0], rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          >
            ♥
          </motion.div>
        ))}
        
        {selectedEra === "2000s" && [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-lime-400 font-bold"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [0.5, 1.2, 0.5], rotate: [0, 360], opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25 }}
          >
            ◆
          </motion.div>
        ))}
        
        {selectedEra === "Future" && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400 font-mono text-xs"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
          >
            {['01', '10', '11', '00', '01', '10'][i]}
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`max-w-6xl mx-auto rounded-3xl p-8 mb-8 ${theme.headerBackground} backdrop-blur-lg border border-white/10 shadow-2xl relative overflow-hidden`}
      >
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${theme.accent} opacity-10`}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        
        <div className="flex items-center gap-4 mb-2 relative z-10">
          <ShoppingCart className="w-8 h-8 text-white" />
          <h1 className={`text-5xl font-black ${theme.headerText}`}>
            Shopping Cart
          </h1>
        </div>
        <p className={`${theme.subHeaderText} text-lg relative z-10`}>
          Your retro treasures await checkout! 🛒
        </p>
      </motion.header>

      <main className="max-w-6xl mx-auto relative z-10">
        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`text-center py-16 ${theme.cardBg} rounded-3xl backdrop-blur-lg border border-white/10 shadow-xl`}
          >
            <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-white/60" />
            <p className="text-2xl font-semibold text-white/80 mb-4">Your cart is empty</p>
            <p className="text-white/60 mb-6">Start exploring products from the past!</p>
            <Link to="/products" className={`inline-block px-8 py-3 rounded-2xl ${theme.button} text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg`}>
              Shop Now
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cart.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${theme.cardBg} rounded-3xl backdrop-blur-lg border border-white/10 shadow-xl p-6 relative overflow-hidden group`}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${theme.accent} opacity-0 group-hover:opacity-5`}
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                    
                    <div className="flex items-center gap-6 relative z-10">
                      <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Star className="w-8 h-8 text-white/60" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                        <p className="text-white/70">{item.price}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center bg-white/10 rounded-2xl backdrop-blur-sm">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-3 text-white/80 hover:text-white transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          <span className="px-4 text-white font-medium">{item.quantity}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-3 text-white/80 hover:text-white transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeItem(item.id)}
                          className="p-3 text-red-400 hover:text-red-300 bg-red-500/10 rounded-full transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={`${theme.cardBg} rounded-3xl backdrop-blur-lg border border-white/10 shadow-xl p-6 h-fit sticky top-8`}
            >
              <h4 className="text-2xl font-bold text-white mb-6">Order Summary</h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-white/80">
                  <span>Items ({cart.length})</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between text-white text-xl font-bold">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePlaceOrder(cart)}
                className={`w-full py-4 rounded-2xl ${theme.button} text-white font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2`}
              >
                <Heart className="w-5 h-5" />
                Proceed to Checkout
              </motion.button>
            </motion.div>
          </div>
        )}
      </main>
    </motion.div>
  );
}

export default Cart;