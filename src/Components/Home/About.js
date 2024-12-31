import Image from 'next/image';
import img from '../../assets/pinkcityimg/productsmarque/about.jpg';

export default function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Column (Image) */}
        <div className="col-md-6">
          <div className="image-container mb-4 mb-md-0">
            <Image
              src={img}
              alt="About Us"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        {/* Right Column (Content) */}
        <div className="col-md-6">
          <h1 className="text-pink mb-3">About Walexopay Technology Private Limited</h1>
          <p className="text-muted">
            At Walexopay Technology Private Limited, we aim to provide a seamless shopping experience for men, offering everything from gadgets to fashion and home essentials. With a customer-first approach, we have revolutionized the online shopping experience, combining affordability, quality, and convenience all in one platform.
          </p>

          <div className="vision mb-4">
            <h3 className="text-dark">Our Vision</h3>
            <p className="text-muted">
              Our vision is to be the leading online platform for men's products, ensuring quality, convenience, and satisfaction. We aspire to continuously improve, innovate, and provide the best shopping experience, empowering men with the tools to live their best lives.
            </p>
          </div>

          <div className="mission mb-4">
            <h3 className="text-dark">Our Mission</h3>
            <p className="text-muted">
              We are committed to enhancing the lives of our customers by delivering top-quality men's products at affordable prices. Our mission is to bridge the gap between the best brands and our customers, ensuring that every purchase brings joy and satisfaction. We focus on making shopping easier, faster, and more enjoyable.
            </p>
          </div>

          <div className="why-choose-us">
            <h3 className="text-dark mb-3">Why Choose Us?</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Wide Selection of Men's Products</li>
              <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Quality Assurance from Trusted Brands</li>
              <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Fast, Reliable, and Secure Delivery</li>
              <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Exceptional Customer Support, 24/7</li>
              <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Easy Returns and Hassle-free Refunds</li>
              <li><i className="bi bi-check-circle text-success"></i> Exclusive Deals and Discounts for Loyal Customers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
