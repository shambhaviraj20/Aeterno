import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import EraSelection from "./pages/EraSelection";
import ProductListing from "./pages/ProductListing";
import ReturnsOrders from "./pages/ReturnsOrders";
import SplashScreen from "./components/SplashScreen";
import { AnimatePresence, motion } from "framer-motion";

// Animated route wrapper
function AnimatedRoutes({ selectedEra, setSelectedEra }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <EraSelection setSelectedEra={setSelectedEra} />
            </motion.div>
          }
        />
        <Route
          path="/products"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProductListing
                selectedEra={selectedEra}
                setSelectedEra={setSelectedEra}
              />
            </motion.div>
          }
        />
        <Route
          path="/orders"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ReturnsOrders />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Main App
function App() {
  const [selectedEra, setSelectedEra] = useState("80s");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <Router>
      <AnimatedRoutes
        selectedEra={selectedEra}
        setSelectedEra={setSelectedEra}
      />
    </Router>
  );
}

export default App;
