'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://ajay.yunicare.in/api/product5/getproducts5"
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () =>
    setCurrentPage((prev) => (prev < Math.ceil(products.length / productsPerPage) ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  const handleViewDetails = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <Container className="mt-4">
      <Row>
        {currentProducts.map((product) => (
          <Col md={3} key={product._id} className="mb-4">
            <Card className="h-100 shadow-sm" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}>
              <Card.Img
                variant="top"
                src={product.images[0]}
                alt={product.productName}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-1">{product.productName}</Card.Title>
                <Card.Text className="text-muted mb-1">
                  {product.description}
                </Card.Text>
                <div className="mb-2">
                  <span style={{ color: "#ffc107" }}>★★★★☆</span>
                </div>
                <Button
                  // variant="primary"
                  className="mt-auto btnprimary"
                  onClick={() => handleViewDetails(product._id)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-between mt-3">
        <Button
          variant="outline-secondary"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="align-self-center">
          Page {currentPage} of {Math.ceil(products.length / productsPerPage)}
        </span>
        <Button
          variant="outline-secondary"
          onClick={nextPage}
          disabled={currentPage === Math.ceil(products.length / productsPerPage)}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default AllProduct;
