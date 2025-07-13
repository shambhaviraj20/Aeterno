import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

function ProductCard({ product, theme, onAddToCart }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col justify-between"
    >
      <div className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{product.description}</p>
        <p className="text-md font-bold text-gray-700">₹{product.price}</p>
      </div>

      <button
        onClick={() => onAddToCart(product)}
        className={`w-full py-2 flex items-center justify-center gap-2 ${theme.button} font-medium rounded-b-xl`}
      >
        <ShoppingBag className="w-4 h-4" /> Add to Cart
      </button>
    </motion.div>
  );
}

export default ProductCard;
