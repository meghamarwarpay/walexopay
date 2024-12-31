'use client';
import { useCart } from "@/context/CartContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Header from "@/Layout/Header";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const router = useRouter();

  // Handle checkout functionality
  const handleCheckout = () => {
    // Pass cart items as query params or handle via context
    router.push({
      pathname: "/cartorderform",
      // query: { cartItems: JSON.stringify(cart) }, // Sending cart data to the next page
    });
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <div style={{ marginTop: "15%" }}>
          <h2>Cart Items</h2>
          {cart?.length === 0 || !cart ? (
            <p>Your cart is empty!</p>
          ) : (
            <Row>
              {/* Left Side: Product Details */}
              <Col md={8}>
                {cart.map((item) => (
                  <Row key={item._id} className="mb-3 align-items-center">
                    {/* Product Image */}
                    <Col md={3}>
                      <img
                        src={item.images?.[0] || "/default-image.jpg"}
                        alt={item.productName || "Product Image"}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </Col>

                    {/* Product Name */}
                    <Col md={3}>
                      <span>{item.productName || "Unnamed Product"}</span>
                    </Col>

                    {/* Product Price */}
                    <Col md={2}>₹{item.actualPrice?.toFixed(2)}</Col>

                    {/* Quantity Input */}
                    <Col md={2}>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) =>
                          updateQuantity(item._id, parseInt(e.target.value) || 1)
                        }
                        style={{ width: "60px" }}
                      />
                    </Col>

                    {/* Product Total */}
                    <Col md={2}>₹{(item.actualPrice * item.qty).toFixed(2)}</Col>

                    {/* Remove Button */}
                    <Col md={2}>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(item._id)}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                ))}
              </Col>

              {/* Right Side: Total Price and Checkout */}
              <Col md={4}>
                <Row className="mt-4">
                  <Col>
                    <div
                      className="p-3 border rounded"
                      style={{ backgroundColor: "#f8f9fa" }}
                    >
                      <h4>Total: ₹{totalPrice.toFixed(2)}</h4>
                      <Button
                        variant="success"
                        className="mt-2 btn-lg btn-block"
                        onClick={handleCheckout}
                      >
                        Proceed to Checkout
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </>
  );
};

export default Cart;
