import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Radio,
  Gamepad,
  Headphones,
  Rocket,
} from "lucide-react"; // Icons for each era

const eras = [
  {
    label: "80s",
    icon: <Radio className="w-12 h-12 text-rose-500" />,
    color: "from-rose-100 to-rose-200",
  },
  {
    label: "90s",
    icon: <Gamepad className="w-12 h-12 text-sky-500" />,
    color: "from-sky-100 to-blue-200",
  },
  {
    label: "2000s",
    icon: <Headphones className="w-12 h-12 text-yellow-500" />,
    color: "from-yellow-100 to-yellow-200",
  },
  {
    label: "Future",
    icon: <Rocket className="w-12 h-12 text-purple-500" />,
    color: "from-indigo-100 to-purple-200",
  },
];

const EraSelection = ({ setSelectedEra }) => {
  const navigate = useNavigate();

  const handleSelect = (era) => {
    setSelectedEra(era);
    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-lime-100 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl font-serif font-semibold text-gray-800 mb-6 tracking-wide text-center">
        Choose Your Shopping Era ✨
      </h1>
      <p className="text-gray-600 text-center mb-10 text-sm max-w-md font-light">
        Step into a different decade. Pick an era to start your journey.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full">
        {eras.map((era) => (
          <motion.div
            key={era.label}
            onClick={() => handleSelect(era.label)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`cursor-pointer rounded-lg shadow-md bg-gradient-to-br ${era.color} transition duration-300 overflow-hidden group p-6 flex flex-col items-center justify-center`}
          >
            <div className="mb-4">{era.icon}</div>
            <h2 className="text-xl font-semibold font-serif text-gray-800 tracking-wide">
              {era.label}
            </h2>
            <p className="text-xs text-gray-600 mt-1 font-light text-center">
              Explore iconic styles & moments
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EraSelection;
