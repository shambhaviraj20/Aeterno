import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Plus, Sparkles } from "lucide-react";

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

const mockWishlist = [
  { id: 1, name: "Retro Walkman", price: "$79.99", image: "/api/placeholder/200/200", era: "80s" },
  { id: 2, name: "Neon Sunglasses", price: "$29.99", image: "/api/placeholder/200/200", era: "80s" },
  { id: 3, name: "Vintage Gamepad", price: "$89.99", image: "/api/placeholder/200/200", era: "90s" },
  { id: 4, name: "Y2K Phone", price: "$159.99", image: "/api/placeholder/200/200", era: "2000s" }
];

function WishlistPage({ 
  wishlist = mockWishlist, 
  selectedEra = "80s", 
  onRemoveFromWishlist = () => {}, 
  onAddToCart = () => {} 
}) {
  const theme = eraThemes[selectedEra] || eraThemes["80s"];

  // Group wishlist items by era
  const groupedWishlist = wishlist.reduce((acc, item) => {
    (acc[item.era] = acc[item.era] || []).push(item);
    return acc;
  }, {});

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen ${theme.background} text-white py-8 px-4 relative overflow-hidden`}
    >
      {/* Floating hearts */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Heart className="w-4 h-4 text-pink-400/40 fill-pink-400/40" />
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
          <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
          <h1 className={`text-5xl font-black ${theme.headerText}`}>
            Wishlist
          </h1>
          <Sparkles className="w-8 h-8 text-yellow-400 fill-yellow-400" />
        </div>
        <p className={`${theme.subHeaderText} text-lg relative z-10`}>
          Your dream items from across the decades!
        </p>
      </motion.header>

      <main className="max-w-6xl mx-auto relative z-10">
        {wishlist.length === 0 ? (
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
                              ))}
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