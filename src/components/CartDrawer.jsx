// src/components/CartDrawer.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function CartDrawer({ isOpen, onClose, cartItems }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 px-4 py-6 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-blue-600">🧺 Time Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-600 text-lg"
            >
              ✕
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">No items in cart.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={index} className="border rounded-lg p-3 shadow-sm">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-500">Era: {item.era}</div>
                  <div className="text-blue-600 font-medium mt-1">₹{item.price.toFixed(2)}</div>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
