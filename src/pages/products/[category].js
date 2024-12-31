'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/Layout/Header';
import { useCart } from "@/context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

// Function to fetch products
const fetchProducts = async () => {
  const response = await fetch('https://ajay.yunicare.in/api/product5/getproducts5');
  const data = await response.json();
  return data.products;
};

const ProductsByCategory = ({ products, category }) => {
  const router = useRouter();
  const { addToCart, setBuyNow } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to handle "Add to Cart"
  const handleAddToCart = (product) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      addToCart(product);
      toast.success("Product added to cart!");
    } else {
      toast.error("Login First");
      router.push("/login");
    }
  };

  const handleBuyNow = (productId) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setBuyNow(productId);
      router.push(`/product/${productId}`);
    } else {
      router.push("/login");
    }
  };

  // Only render the component on the client-side
  if (!isClient) {
    return null; // Avoid rendering on the server
  }

  return (
    <div>
      <Header />
      <div className='container'>
        <div style={{ marginTop: '15%' }}>
          <h1 style={{ textAlign: 'center' }}>{category} Products</h1>
          <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {products.map((product) => (
              <div
                key={product._id}
                style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <img
                  src={product.images[0]}
                  alt={product.productName}
                  style={{ width: '100%', borderRadius: '5px', backgroundColor: '#f8f8f8' }}
                />
                <h2 style={{ margin: '10px 0' }}>{product.productName}</h2>
                <p style={{ fontSize: '14px', color: '#666' }}>{product.description}</p>
                <p>
                  <strong>Price: ₹{product.actualPrice}</strong>{' '}
                  <span style={{ textDecoration: 'line-through', color: '#999' }}>
                    MRP: ₹{product.price}
                  </span>
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', margin: '10px 0' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{product.rating}</span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <svg
                          key={index}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={index < Math.floor(product.rating) ? '#ffc107' : '#e4e5e9'}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <button
                    onClick={() => handleAddToCart(product)} // Pass product
                    style={{
                      flex: 1,
                      backgroundColor: '#4caf50',
                      color: 'white',
                      padding: '10px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleBuyNow(product._id)} // Pass product._id
                    style={{
                      flex: 1,
                      backgroundColor: '#f44336',
                      color: 'white',
                      padding: '10px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { category } = context.params;
  const products = await fetchProducts();
  const filteredProducts = products
    .filter((product) => product.category === category)
    .map((product) => ({
      ...product,
      rating: (Math.random() * (5 - 3) + 3).toFixed(1), // Random rating for SSR
    }));

  return { props: { products: filteredProducts, category } };
}

export default ProductsByCategory;
