import React, { useEffect, useState } from "react";
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
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import ChatbotWidget from "./components/ChatbotWidget";
import "./components/ChatbotWidget.css";
import { supabase } from "./supabaseClient"; // ✅ Supabase client

function AnimatedRoutes(props) {
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
              transition={{ duration: 0.5 }}
            >
              <EraSelection
                selectedEra={props.selectedEra}
                setSelectedEra={props.setSelectedEra}
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
                selectedEra={props.selectedEra}
                onAddToCart={props.handleAddToCart}
                onAddToWishlist={props.handleAddToWishlist}
                cart={props.cart}
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
                cart={props.cart}
                setCart={props.setCart}
                selectedEra={props.selectedEra}
                handlePlaceOrder={props.handlePlaceOrder}
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
                cart={props.cart}
                setCart={props.setCart}
                orders={props.orders}
                setOrders={props.setOrders}
                selectedEra={props.selectedEra}
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
                wishlist={props.wishlist}
                onRemoveFromWishlist={props.handleRemoveFromWishlist}
                onAddToCart={props.handleAddToCart}
                selectedEra={props.selectedEra}
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
              <ReturnsOrders
                orders={props.orders}
                selectedEra={props.selectedEra}
              />
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
  const [cart, setCart] = useState([]);

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
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
    console.log("Product added to cart:", productToAdd);
  };

  const handleAddToWishlist = (product) => {
    if (!wishlist.some(item => item.id === product.id)) {
      setWishlist((prev) => [...prev, product]);
    }
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePlaceOrder = (cartItems) => {
    console.log("Order placed!", cartItems);
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
        cart={cart}
        setCart={setCart}
        handleAddToCart={handleAddToCart}
        handleAddToWishlist={handleAddToWishlist}
        handleRemoveFromWishlist={handleRemoveFromWishlist}
        handlePlaceOrder={handlePlaceOrder}
      />
      <ChatbotWidget selectedEra={selectedEra} />
    </Router>
  );
}

export default App;
