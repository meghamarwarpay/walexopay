
import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const CartContext = createContext();

// Custom Hook for using Cart Context
export const useCart = () => useContext(CartContext);

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [buyNowProduct, setBuyNowProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  // Load cart and wishlist from localStorage if available
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist"));

    if (savedCart) setCart(savedCart);
    if (savedWishlist) setWishlist(savedWishlist);
  }, []);

  // Save cart and wishlist to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [cart, wishlist]);

  // Add to Cart Function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  // Set Product for Buy Now
  const setBuyNow = (product, qty = 1) => {
    setBuyNowProduct({ ...product, qty });
  };

  // Remove Item from Cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    if (buyNowProduct && buyNowProduct._id === id) {
      setBuyNowProduct(null);
    }
  };

  // Update Quantity
  const updateQuantity = (id, qty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
    if (buyNowProduct && buyNowProduct._id === id) {
      setBuyNowProduct({ ...buyNowProduct, qty: Math.max(1, qty) });
    }
  };

  // Total Price for Cart
  const totalPrice = cart.reduce((acc, item) => acc + item.actualPrice * item.qty, 0);

  // Wishlist Management
  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item._id === product._id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== id));
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => item._id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        setBuyNow,
        buyNowProduct,
        removeFromCart,
        updateQuantity,
        totalPrice,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
