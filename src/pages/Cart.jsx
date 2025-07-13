import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

function Cart({ cart, setCart, theme }) {
  const updateQuantity = (id, delta) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCart(updated);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-gray-800">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Items */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-4 bg-white shadow rounded-lg p-4 border"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1 w-full">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                  <p className="font-bold">₹{item.price}</p>
                  <div className="flex items-center mt-2 gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 border rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 border rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white shadow rounded-lg p-6 border">
            <h4 className="text-lg font-semibold mb-4">Summary</h4>
            <p className="text-gray-600 mb-2">
              Items: <strong>{cart.length}</strong>
            </p>
            <p className="text-gray-600 mb-4">
              Total: <strong>₹{total.toLocaleString()}</strong>
            </p>
            <button
              className={`w-full py-2 rounded-md font-medium ${theme.button}`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
