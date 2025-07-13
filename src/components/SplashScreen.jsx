import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Gem, Rocket, Crown, ShoppingCart, Zap, Star, Shield, Truck, CreditCard, Gift } from "lucide-react";

const SplashScreen = () => {
  const [sparkles, setSparkles] = useState([]);
  const [currentEra, setCurrentEra] = useState(0);

  const eras = [
    { name: "Vintage", icon: Clock, color: "from-amber-400 to-orange-600" },
    { name: "Modern", icon: Gem, color: "from-blue-400 to-purple-600" },
    { name: "Future", icon: Rocket, color: "from-cyan-400 to-teal-600" },
    { name: "Classic", icon: Crown, color: "from-yellow-400 to-pink-500" }
  ];

  // Generate random sparkles
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 25; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through eras
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEra((prev) => (prev + 1) % eras.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const CurrentEraIcon = eras[currentEra].icon;

  return (
    <div className="h-screen w-full overflow-hidden relative flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Dynamic background gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/30 to-blue-600/20"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.3), rgba(37, 99, 235, 0.2))",
            "linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(37, 99, 235, 0.2), rgba(6, 182, 212, 0.2))",
            "linear-gradient(45deg, rgba(37, 99, 235, 0.2), rgba(6, 182, 212, 0.2), rgba(147, 51, 234, 0.3))",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            boxShadow: `0 0 ${sparkle.size * 4}px rgba(255, 255, 255, 0.8)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, sparkle.size, 0],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Pulsing background circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-600/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-pink-400/30 to-purple-500/30 blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Animated logo with shopping cart element */}
        <motion.div
          className="mb-6 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          <motion.div
            className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl relative"
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 3, 0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="text-white text-2xl font-bold">A</div>
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            >
              <ShoppingCart className="w-3 h-3 text-slate-800" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main title with gradient text */}
        <motion.div
          className="text-6xl md:text-7xl font-black tracking-wider mb-2 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Atereno
        </motion.div>

        {/* Era tagline */}
        <motion.div
          className="text-lg font-semibold text-purple-200 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Era-Based E-Commerce Platform
        </motion.div>

        {/* Animated underline */}
        <motion.div
          className="h-2 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 rounded-full mb-6 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        />

        {/* Era showcase */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r ${eras[currentEra].color} text-white font-semibold shadow-lg`}
            key={currentEra}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CurrentEraIcon className="w-6 h-6" />
            <span>Shop {eras[currentEra].name} Era</span>
          </motion.div>
        </motion.div>

        {/* Subtitle with professional tagline */}
        <motion.p
          className="text-xl font-medium text-slate-300 tracking-wide mb-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Discover timeless collections across every era of style and innovation
        </motion.p>

        {/* E-commerce feature icons */}
        <motion.div
          className="flex justify-center space-x-8 text-3xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          {[
            { icon: ShoppingCart, label: "Shop", color: "text-purple-300" },
            { icon: Zap, label: "Fast", color: "text-yellow-300" },
            { icon: Star, label: "Premium", color: "text-blue-300" },
            { icon: Shield, label: "Secure", color: "text-green-300" },
            { icon: Truck, label: "Delivery", color: "text-pink-300" },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                animate={{
                  y: [-3, 3, -3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className={`hover:scale-125 transition-transform cursor-pointer ${item.color}`}
                  whileHover={{ scale: 1.3 }}
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>
                <span className="text-xs text-slate-400 mt-1">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pulsing glow effect */}
        <motion.div
          className="absolute -inset-6 bg-gradient-to-r from-purple-400/20 to-blue-600/20 rounded-3xl blur-xl"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Loading indicator with professional styling */}
      <motion.div
        className="absolute bottom-16 flex flex-col items-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <motion.p
          className="text-sm text-slate-400 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading your era of shopping...
        </motion.p>
      </motion.div>

      {/* Floating commerce elements */}
      <motion.div
        className="absolute top-20 left-20"
        animate={{
          y: [-10, 10, -10],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <CreditCard className="w-10 h-10 text-purple-300" />
      </motion.div>

      <motion.div
        className="absolute top-32 right-24"
        animate={{
          y: [10, -10, 10],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Gift className="w-8 h-8 text-pink-300" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16"
        animate={{
          y: [-8, 8, -8],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Star className="w-8 h-8 text-yellow-300" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-20"
        animate={{
          y: [8, -8, 8],
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 2.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <Gem className="w-8 h-8 text-blue-300" />
      </motion.div>
    </div>
  );
};

export default SplashScreen;