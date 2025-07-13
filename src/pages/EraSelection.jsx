import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Radio, Gamepad, Headphones, Rocket, Star } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const eras = [
  {
    label: "80s",
    icon: Radio,
    gradient: "from-pink-500 via-purple-500 to-cyan-400",
    bgGradient: "from-pink-500/20 via-purple-500/30 to-cyan-400/20",
    glowColor: "shadow-pink-500/50",
    desc: "Neon dreams & synthwave vibes",
    theme: "vintage-vibrant"
  },
  {
    label: "90s",
    icon: Gamepad,
    gradient: "from-rose-400 via-purple-400 to-indigo-500",
    bgGradient: "from-rose-400/20 via-purple-400/30 to-indigo-500/20",
    glowColor: "shadow-rose-400/50",
    desc: "Romantic grunge meets digital",
    theme: "romantic-tech"
  },
  {
    label: "2000s",
    icon: Headphones,
    gradient: "from-lime-400 via-orange-500 to-fuchsia-500",
    bgGradient: "from-lime-400/20 via-orange-500/30 to-fuchsia-500/20",
    glowColor: "shadow-lime-400/50",
    desc: "Funky Y2K tech explosion",
    theme: "funky-tech"
  },
  {
    label: "Future",
    icon: Rocket,
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    bgGradient: "from-cyan-400/20 via-blue-500/30 to-purple-600/20",
    glowColor: "shadow-cyan-400/50",
    desc: "Cyberpunk AI dystopia",
    theme: "cyberpunk-ai"
  },
];

const EraSelection = ({ setSelectedEra }) => {
  const [sparkles, setSparkles] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setSparkles(newSparkles);
  }, []);

  const handleSelect = (era) => {
    setSelectedEra(era);
    navigate("/products"); // Uncomment this line to navigate
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/30 to-blue-600/20"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.3), rgba(37, 99, 235, 0.2))",
            "linear-gradient(225deg, rgba(37, 99, 235, 0.2), rgba(6, 182, 212, 0.2), rgba(147, 51, 234, 0.3))",
            "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.3), rgba(37, 99, 235, 0.2))"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
          style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
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

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 z-10"
      >
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
          Choose Your Era
        </h1>
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 rounded-full mb-4 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <p className="text-slate-300 text-lg">Travel through time and discover your style</p>
      </motion.div>

      {/* Era Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl w-full z-10">
        {eras.map((era, index) => {
          const IconComponent = era.icon;
          return (
            <motion.div
              key={era.label}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.3 }}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect(era.label)}
              className={`cursor-pointer group relative h-64 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 overflow-hidden shadow-lg ${era.glowColor} hover:shadow-xl transition-all duration-300`}
            >
              {/* Hover gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${era.bgGradient} opacity-0 group-hover:opacity-60`}
                transition={{ duration: 0.3 }}
              />

              {/* Animated border effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${era.gradient} opacity-0 group-hover:opacity-30 blur-sm`}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`mb-4 p-3 rounded-full bg-gradient-to-r ${era.gradient} shadow-lg`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h3
                  className={`text-2xl font-bold bg-gradient-to-r ${era.gradient} bg-clip-text text-transparent mb-2`}
                  whileHover={{ scale: 1.1 }}
                >
                  {era.label}
                </motion.h3>

                <motion.p
                  className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {era.desc}
                </motion.p>

                {/* Themed floating elements on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {era.theme === "vintage-vibrant" && [...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-pink-400 rounded-full"
                      style={{
                        left: `${10 + i * 10}%`,
                        top: `${20 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}

                  {era.theme === "romantic-tech" && [...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-rose-300"
                      style={{
                        left: `${15 + i * 12}%`,
                        top: `${25 + (i % 2) * 25}%`,
                      }}
                      animate={{
                        y: [-3, 3, -3],
                        opacity: [0, 1, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      ♥
                    </motion.div>
                  ))}

                  {era.theme === "funky-tech" && [...Array(7)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-lime-400 font-bold"
                      style={{
                        left: `${20 + i * 8}%`,
                        top: `${30 + (i % 3) * 15}%`,
                      }}
                      animate={{
                        scale: [0.5, 1.2, 0.5],
                        rotate: [0, 360],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.25,
                      }}
                    >
                      ◆
                    </motion.div>
                  ))}

                  {era.theme === "cyberpunk-ai" && [...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-cyan-400 font-mono text-xs"
                      style={{
                        left: `${25 + i * 10}%`,
                        top: `${35 + (i % 2) * 20}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    >
                      {['01', '10', '11', '00', '01'][i]}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 text-slate-400 text-sm flex items-center space-x-2"
      >
        <span>Start your journey</span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ✨
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EraSelection;