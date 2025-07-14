import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import EraSelection from "./pages/EraSelection";
import ProductListing from "./pages/ProductListing";
import ReturnsOrders from "./pages/ReturnsOrders";
import WishlistPage from "./pages/WishlistPage";
import Cart from "./pages/Cart"; // Import the Cart component
import CheckoutPage from "./pages/CheckoutPage"; // Import the CheckoutPage component
import eraThemes from "./utils/eraThemes"; // Import eraThemes for consistent styling
import ChatbotWidget from "./components/ChatbotWidget";
import './components/ChatbotWidget.css';  // ✅ Correct path

function AnimatedRoutes({
  selectedEra,
  setSelectedEra,
  wishlist,
  setWishlist,
  orders,
  setOrders,
  cart, // Receive cart state
  setCart, // Receive setCart function
  handleAddToCart,
}) {
  const location = useLocation();

  const handleAddToWishlist = (product) => {
    if (!wishlist.some(item => item.id === product.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      console.log("Added to wishlist:", product);
    } else {
      console.log("Item already in wishlist:", product);
    }
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== productId));
    console.log("Removed from wishlist:", productId);
  };

  // Dummy function for placing an order
  const handlePlaceOrder = (cartItems) => {
    // This function will now be primarily triggered from CheckoutPage
    // The logic for adding to orders and clearing cart will be in CheckoutPage
    console.log("Placing order with items:", cartItems);
  };

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
              transition={{ duration: 0.5 }}
            >
              <EraSelection
                selectedEra={selectedEra}
                setSelectedEra={setSelectedEra}
              />
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
              transition={{ duration: 0.5 }}
            >
              <ProductListing
                selectedEra={selectedEra}
                setSelectedEra={setSelectedEra}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                cart={cart}
              />
            </motion.div>
          }
        />
        <Route
          path="/cart"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Cart
                cart={cart}
                setCart={setCart}
                selectedEra={selectedEra}
                handlePlaceOrder={handlePlaceOrder} // This will be removed or changed
              />
            </motion.div>
          }
        />
        <Route
          path="/checkout"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CheckoutPage
                cart={cart}
                setCart={setCart}
                orders={orders}
                setOrders={setOrders}
                selectedEra={selectedEra}
              />
            </motion.div>
          }
        />
        <Route
          path="/wishlist"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WishlistPage
                wishlist={wishlist}
                onRemoveFromWishlist={handleRemoveFromWishlist}
                onAddToCart={handleAddToCart}
                selectedEra={selectedEra}
              />
            </motion.div>
          }
        />
        <Route
          path="/returns-orders"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ReturnsOrders orders={orders} selectedEra={selectedEra} />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [selectedEra, setSelectedEra] = useState("80s");
  const [showSplash, setShowSplash] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState([]); // Cart state managed here

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productToAdd.id);
      if (existingItem) {
        // If item exists, update its quantity
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // If item is new, add it with quantity 1
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
    console.log("Product added to cart:", productToAdd);
  };

  if (showSplash) return <SplashScreen />;

  return (
    <Router>
      <AnimatedRoutes
        selectedEra={selectedEra}
        setSelectedEra={setSelectedEra}
        wishlist={wishlist}
        setWishlist={setWishlist}
        orders={orders}
        setOrders={setOrders}
        cart={cart} // Pass cart state
        setCart={setCart} // Pass setCart function
        handleAddToCart={handleAddToCart}
      />
      <ChatbotWidget selectedEra={selectedEra} /> {/* This will show chatbot on all pages */}
    </Router>
  );
}

export default App;