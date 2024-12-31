import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cartItems")) || [];
    }
    return [];
  });

  // Sync cartItems with localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        const updatedCart = [...prev];
        updatedCart[existingItemIndex].quantity += item.quantity;
        return updatedCart;
      }
      return [...prev, item];
    });
  };

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Function to update the quantity of an item
  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId); // Remove item if quantity is zero or less
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === itemId ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);







const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [shippingData, setShippingData] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("shippingData")) || {};
    }
    return {};
  });

  const saveShippingData = (data) => {
    setShippingData((prev) => ({ ...prev, ...data }));
    if (typeof window !== "undefined") {
      localStorage.setItem("shippingData", JSON.stringify({ ...shippingData, ...data }));
    }
  };

  return (
    <ShippingContext.Provider value={{ shippingData, saveShippingData }}>
      {children}
    </ShippingContext.Provider>
  );
};

export const useShipping = () => useContext(ShippingContext);
