import React from "react";
import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
  <div className="h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-gradient-to-br from-yellow-100 to-pink-200 text-gray-800">
  <motion.div
    className="text-5xl font-extrabold tracking-wide"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    style={{ fontFamily: "'Orbitron', sans-serif" }}
  >
  🛍️ ShopTime
  </motion.div>
  <motion.p
    className="mt-4 text-lg tracking-wide text-gray-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
  >
  Shopping Through Time
  </motion.p>
  </div>
  );
  };

export default SplashScreen;