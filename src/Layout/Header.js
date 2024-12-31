'use client';

import Link from "next/link";
import logo from "../assets/pinkcityimg/logo.png";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { apiGet, apiPost } from "@/api/apiMethods";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cart, wishlist } = useCart();  // Destructure cart and wishlist from CartContext
  const cartItems = cart || [];
  const wishlistItems = wishlist || [];
  const router = useRouter();

  useEffect(() => {
    // Fetch products and extract unique categories
    const fetchCategories = async () => {
      try {
        // const response = await axios.get('https://ajay.yunicare.in/api/product2/getproducts2');
        const response = await apiGet('api/product5/getproducts5');
        const uniqueCategories = [...new Set(response.data.products.map((p) => p.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // Check token and update login state
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
    }
  }, []);

  const handleLogout = async () => {
    try {
      await apiPost("api/auth5/logOut5");
      localStorage.removeItem("accessToken");
      toast.success("Logged out successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed, please try again", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="headerfix">
      {/* Top Bar */}
      <div className="bg-dangers text-white py-2 px-4 d-flex justify-content-end align-items-center">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="btn btn-link text-white mx-3 hover:text-primary"
          >
            Logout
          </button>
        ) : (
          <Link href="/login" className="text-white hover:text-primary mx-3">
            Login
          </Link>
        )}

        <div className="d-flex align-items-center ml-3">
          {/* Cart Button */}
          <Link href="/cart" className="btn btn-outline-secondary me-2 position-relative">
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.8rem" }}
              >
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Wishlist Button */}
          <Link href="/wishlist" className="btn btn-outline-secondary me-2 position-relative">
            <AiFillHeart color="#ff4081" />
            {wishlistItems.length > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.8rem" }}
              >
                {wishlistItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Header and Navigation */}
      <header className="header bg-dark">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link href="/" passHref className="navbar-brand">
              <Image
                src={logo}
                className="logo rounded"
                alt="logo"
                width={50}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon bg-white"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    href="/"
                    className="text-white hover:text-primary mx-3"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/about"
                    className="text-white hover:text-primary mx-3"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                    }}
                    className="text-white hover:text-primary mx-3 droplinkstyle"
                  >
                    <button onClick={toggleDropdown}>Products</button>
                    {dropdownVisible && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: "0",
                          background: "white",
                          border: "1px solid #ccc",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          zIndex: 1000,
                          borderRadius: "5px",
                          width: "200px",
                        }}
                      >
                        {categories.length > 0 ? (
                          categories.map((category) => (
                            <Link
                              href={`/products/${category}`}
                              key={category} style={{color:'#000'}} 
                            >
                              <div
                                style={{
                                  padding: "8px 16px",
                                  cursor: "pointer",
                                  borderBottom: "1px solid #f0f0f0",
                                }}
                                onClick={() => setDropdownVisible(false)}
                              >
                                {category}
                              </div>
                            </Link>
                          ))
                        ) : (
                          <div
                            style={{
                              padding: "8px 16px",
                              color: "#888",
                            }}
                          >
                            No categories found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    href="/orderhistory"
                    className="text-white hover:text-primary mx-3"
                  >
                    Order History
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/contact"
                    className="text-white hover:text-primary mx-3"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
}
