import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [notification, setNotification] = useState("");

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showNotification(`${product.title} added to cart`);
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const placeOrder = () => {
    if (cart.length === 0) return;

    const order = {
      id: Date.now(),
      items: cart,
      total: cart.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
      ),
      date: new Date().toLocaleString(),
    };

    setOrders([...orders, order]);
    setCart([]);
    showNotification("Order placed successfully!");
  };

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 2200);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        placeOrder,
        notification,
        orders,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
