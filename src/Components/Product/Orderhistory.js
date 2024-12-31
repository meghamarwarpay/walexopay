"use client"

import { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Badge,
  Spinner,
  Button,
} from "react-bootstrap";
import { useRouter } from "next/navigation";

import { apiGet, apiDelete } from "@/api/apiMethods";
import Header from "@/Layout/Header";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingOrderId, setDeletingOrderId] = useState(null);
  const router = useRouter();

  const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  const apiEndpoint = "api/order5/orders5";
  const deleteEndpoint = "api/order5/orders5";

  // const fetchOrders = async () => {
  //   if (!token) {
  //     setError("No access token found. Please log in.");
  //     setLoading(false);
  //     alert("No Orders found. Please login.");
  //     router.push("/login");
  //     return;
  //   }

  //   try {
  //     const response = await apiGet(apiEndpoint);
  //     setOrders(response.data.orders);
  //     setFilteredOrders(response.data.orders);
  //   } catch (error) {
  //     setError("Error fetching orders. Please try again.");
  //     console.error("Error fetching orders:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchOrders = async () => {
  if (!token) {
    setError("No access token found. Please log in.");
    setLoading(false);
    alert("No orders found. Please log in.");
    router.push("/login");
    return;
  }

  try {
    const response = await apiGet(apiEndpoint);
    setOrders(response.data.orders);
    setFilteredOrders(response.data.orders);
  } catch (error) {
    if (error.response?.status === 403) {
      setError("Access denied. Please ensure you are logged in with the correct permissions.");
    } else {
      setError("Error fetching orders. Please try again later.");
    }
    console.error("Error fetching orders:", error); // Logs full error details for debugging
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {

    fetchOrders();
  }, []);

  const deleteOrder = async (orderId) => {
    if (!confirm("Are you sure you want to delete this order?")) return;

    setDeletingOrderId(orderId);

    try {
      await apiDelete(`${deleteEndpoint}/${orderId}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
      setFilteredOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== orderId)
      );
      alert("Order deleted successfully.");
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Failed to delete the order. Please try again.");
    } finally {
      setDeletingOrderId(null);
    }
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    const searchValue = e.target.value.trim().toLowerCase();
    const filtered = orders.filter((order) =>
      order._id.toLowerCase().includes(searchValue)
    );
    setFilteredOrders(filtered);
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const handleExport = () => {
            const exportData = filteredOrders.length > 0 ? filteredOrders : orders;
            const csvContent = [
              ["Order ID", "Customer Email", "Total Amount", "Status", "Payment Method"],
              ...exportData.map((order) => [
                order._id,
                order.customer.email,
                order.totalAmount,
                order.status,
                order.paymentMethod,
              ]),
            ]
              .map((row) => row.join(","))
              .join("\n");
        
            const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
        
            const link = document.createElement("a");
            link.href = url;
            link.download =
              filteredOrders.length > 0
                ? `order_${searchInput || "filtered"}.csv`
                : "orders.csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          };
        
          // const handleInvoiceClick = (orderId) => {
          //       window.open(`/invoice/${orderId}`, "_blank");
          //     };
 
          const handleInvoiceClick = (orderId) => {
            // Navigate to the Invoice Page with the orderId in the URL
            router.push(`/invoice/${orderId}`);
          };
          

  return (
    <>
      <Header />
      <div
        style={{
          position: "fixed",
          top: "110px",
          width: "100%",
          zIndex: "1",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "10px 10px 10px 10px",
        }}
      >
        <Container fluid>
          <Row className="align-items-center">
            <Col md={4} className="mb-3 mb-md-0 text-start">
              <h2 style={{ margin: "0", fontWeight: "bold" }}>Order Details</h2>
            </Col>
            <Col md={8}>
              <Row className="g-2">
                <Col xs={6}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by Order ID"
                      value={searchInput}
                      onChange={handleSearch}
                    />
                    <button className="btn btn-success" onClick={handleSearch}>
                      Search
                    </button>
                    </div>
                </Col>
                <Col xs={2} className="text-end">
                  <button className="btn btn-success w-100" onClick={handleExport}>
                     Export Orders
                  </button>
                 </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-5 pt-4">
        <div style={{marginTop:'10%'}}>
          {error && <p className="text-center text-danger">{error}</p>}
          {filteredOrders.length === 0 ? (
            <p className="text-center">No orders found.</p>
          ) : (
            filteredOrders.map((order) => {
              // Parse shippingAddress JSON string to object
              const shippingAddress = JSON.parse(order.shippingAddress || "{}");

              // Parse products from shippingAddress if they exist
              const products = shippingAddress.products ? JSON.parse(shippingAddress.products) : [];

              return (
                <Card key={order._id} className="mb-3">
                  <Card.Header className="d-flex justify-content-between">
                    <span>
                      <strong>Order ID:</strong> {order._id}
                    </span>
                    <Badge bg={order.status === "pending" ? "warning" : "success"}>
                      {order.status}
                    </Badge>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={4}>
                        {shippingAddress.productimages && (
                          <img
                            src={shippingAddress.productimages}
                            alt={shippingAddress.productName}
                            className="img-fluid rounded"
                            style={{ maxHeight: "150px", objectFit: "cover" }}
                          />
                        )}
                        {products.length > 0 && products[0]?.images?.length > 0 && (
                          <img
                            src={products[0]?.images[0]}
                            alt={products[0]?.productName}
                            className="img-fluid rounded mt-2"
                            style={{ maxHeight: "150px", objectFit: "cover" }}
                          />
                        )}
                      </Col>
                      <Col md={8}>
                      <p> <strong>Product </strong> {shippingAddress.productName}</p>
                        <p>
                          <strong>Total Amount:</strong> ₹{order.totalAmount}
                        </p>
                        <p>
                          {/* <strong>Customer:</strong> {order.userDetail.email} */}
                        </p>
                        <p>
                          <strong>Customer:</strong> {shippingAddress.email}
                        </p>
                        <p>
                          <strong>Customer Name:</strong> {shippingAddress.name}
                        </p>
                        <p>
                          <strong>Contact No:</strong> {shippingAddress.mobile}
                        </p>
                        <p>
                          <strong>Shipping Address:</strong>{" "}
                          {`${shippingAddress.address}, ${shippingAddress.state}, ${shippingAddress.country}, ${shippingAddress.pincode}`}
                        </p>
                        <p>
                          <strong>Order Date:</strong> {order.createdAt}
                        </p>

                        {/* Display Products */}
                        <div>
  <h5>Products:</h5>
  <Row>
    {products.map((product, index) => (
      <Col md={12} key={index}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          {/* Product Image */}
          {product.images && product.images.length > 0 && (
            <img
              src={product.images[0]}
              alt={product.productName}
              className="img-fluid rounded"
              style={{ maxHeight: "150px", objectFit: "cover" }}
            />
          )}

          {/* Product Details */}
          <div className="ms-3" style={{ flex: 1 }}>
            <p><strong>{product.productName}</strong></p>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
          </div>
        </div>
      </Col>
    ))}
  </Row>
</div>



                        <Button
                          variant="danger"
                          onClick={() => deleteOrder(order._id)}
                          disabled={deletingOrderId === order._id}
                        >
                          {deletingOrderId === order._id ? "Deleting..." : "Delete Order"}
                        </Button>
                        <Button
                          variant="primary" style={{marginLeft:'10px'}}
                          onClick={() => handleInvoiceClick(order._id)}>
                          Generate Invoice 
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              );
            })
          )}
        </div>
      </Container>
    </>
  );
};

export default OrderHistory;
