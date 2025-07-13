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
import eraThemes from "./utils/eraThemes"; // Import eraThemes for consistent styling

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
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add items before placing an order.");
      return;
    }

    const newOrderId = `ORD-${Date.now()}`;
    const newOrder = {
      id: newOrderId,
      date: new Date().toLocaleDateString(),
      items: cartItems,
      total: cartItems.reduce((acc, item) => acc + (item.price.replace('₹', '') * item.quantity || 1), 0), // Calculate total
      status: "Pending",
      era: selectedEra,
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setCart([]); // Clear cart after placing order
    alert(`Order ${newOrderId} placed successfully!`);
    console.log("Order placed:", newOrder);
  };

  const currentTheme = eraThemes[selectedEra] || eraThemes["80s"];

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/select-era"
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
                onAddToWishlist={handleAddToWishlist}
                onAddToCart={handleAddToCart} // Pass handleAddToCart from App
                cart={cart} // Pass cart state to ProductListing
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
              <ReturnsOrders orders={orders} selectedEra={selectedEra} />
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
              transition={{ duration: 0.6 }}
            >
              <WishlistPage
                wishlist={wishlist}
                selectedEra={selectedEra}
                onRemoveFromWishlist={handleRemoveFromWishlist}
                onAddToCart={(product) => {
                  // This is called from WishlistPage
                  // Ensure this product has a quantity property for the cart
                  handleAddToCart({ ...product, quantity: 1 });
                  handleRemoveFromWishlist(product.id); // Optionally remove from wishlist
                }}
              />
            </motion.div>
          }
        />
        {/* New Route for Cart.jsx */}
        <Route
          path="/cart"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Cart
                cart={cart} // Pass the cart state
                setCart={setCart} // Pass the setCart function
                theme={currentTheme} // Pass the current era theme for styling
                handlePlaceOrder={handlePlaceOrder} // Pass the handlePlaceOrder function
              />
            </motion.div>
          }
        />
        <Route path="/" element={<SplashScreen />} />{" "}
        {/* Default route to SplashScreen */}
        {/* Fallback route - consider a more robust solution for unknown paths */}
        <Route path="*" element={<p>404 Not Found</p>} />
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
    </Router>
  );
}

export default App;