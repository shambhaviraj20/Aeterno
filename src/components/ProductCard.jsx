// src/components/ProductCard.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Star, Zap } from "lucide-react";

function ProductCard({ product, theme, onAddToCart, onAddToWishlist, era }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await new Promise(resolve => setTimeout(resolve, 600)); // Simulate API call
    onAddToCart(product);
    setIsAdding(false);
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    if (newLikedState) {
      onAddToWishlist({ ...product, era }); // Pass product with era for wishlist
    } else {
      // In a real app, you'd handle removing from wishlist here
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group relative"
    >
      {/* Product Image Container */}
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          whileHover={{ rotate: [0, -2, 2, 0] }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Floating elements for visual flair */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: 0
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Like Button */}
        <motion.button
          onClick={handleLikeClick}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Heart
            className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
        </motion.button>

        {/* Quick View Badge */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Zap className="w-3 h-3 inline mr-1" />
          Quick View
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <motion.h3
              className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors"
              whileHover={{ x: 5 }}
            >
              {product.name}
            </motion.h3>
            
            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
              <span className="text-xs text-gray-500 ml-1">(4.2)</span>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-right"
          >
            <p className="text-xl font-bold text-gray-800">{product.price}</p>
            <p className="text-xs text-gray-500 line-through">₹{(parseFloat(product.price.replace('₹', '').replace('$', '')) * 1.2).toFixed(2)}</p>
          </motion.div>
        </div>

        <motion.p
          className="text-sm text-gray-600 mb-4 line-clamp-2"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {product.description}
        </motion.p>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          disabled={isAdding}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 flex items-center justify-center gap-2 ${theme.button} font-medium rounded-xl transition-all duration-300 relative overflow-hidden group/btn`}
        >
          {/* Button background animation */}
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          
          {isAdding ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            <>
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <ShoppingBag className="w-4 h-4" />
              </motion.div>
              <span className="relative z-10">Add to Cart</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
}

export default ProductCard;