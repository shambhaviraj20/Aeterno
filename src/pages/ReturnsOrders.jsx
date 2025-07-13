import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, RotateCcw, XCircle, Clock, Star, Package } from "lucide-react";

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
      { name: "Neon Sunglasses", quantity: 2, price: "$50.00", image: "/api/placeholder/100/100" }
    ]
  },
  {
    id: "ORD-002",
    date: "2024-01-10",
    status: "shipped",
    total: "$89.99",
    items: [
      { name: "Vintage Gamepad", quantity: 1, price: "$89.99", image: "/api/placeholder/100/100" }
    ]
  }
];

function ReturnsOrders({ orders = mockOrders, selectedEra = "80s" }) {
  const theme = eraThemes[selectedEra] || eraThemes["80s"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen ${theme.background} text-white py-8 px-4 relative overflow-hidden`}
    >
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
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
        
        <h1 className={`text-5xl font-black mb-2 ${theme.headerText} relative z-10`}>
          Your Orders
        </h1>
        <p className={`${theme.subHeaderText} text-lg relative z-10`}>
          Track your purchases across time and space ✨
        </p>
      </motion.header>

      <main className="max-w-6xl mx-auto relative z-10">
        {orders.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`text-center py-16 ${theme.cardBg} rounded-3xl backdrop-blur-lg border border-white/10 shadow-xl`}
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
                    className={`${theme.cardBg} rounded-3xl backdrop-blur-lg border border-white/10 shadow-xl p-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}
                  >
                    {/* Animated background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${theme.accent} opacity-0 group-hover:opacity-5`}
                      animate={{
                        background: [
                          `linear-gradient(45deg, ${theme.accent})`,
                          `linear-gradient(225deg, ${theme.accent})`,
                          `linear-gradient(45deg, ${theme.accent})`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    <div className="flex flex-col lg:flex-row gap-6 relative z-10">
                      {/* Order Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h2 className="text-2xl font-bold text-white">#{order.id}</h2>
                          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusInfo.bg} backdrop-blur-sm`}>
                            <statusInfo.icon className={`w-4 h-4 ${statusInfo.color}`} />
                            <span className={`text-sm font-medium ${statusInfo.color}`}>
                              {statusInfo.label}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-white/70 mb-6">
                          {new Date(order.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
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
                        
                        <button className={`w-full lg:w-auto px-6 py-3 rounded-2xl ${theme.button} text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg`}>
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
    </motion.div>
  );
}

export default ReturnsOrders;