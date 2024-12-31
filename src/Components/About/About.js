// pages/about.js

import Image from "next/image";
import img from '../../assets/pinkcityimg/productsmarque/about.jpg'

export default function About() {
  return (
    <>
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
            <h1 className="text-primary mb-3">About Walexopay Technology Private Limited</h1>
            <p className="text-muted ">
              At Walexopay Technology Private Limited, we strive to be the ultimate shopping destination for men, offering everything from gadgets and grooming products to the latest fashion trends and fitness essentials. Our platform is designed with men in mind, providing quality, affordability, and convenience all in one place.
            </p>

            <div className="vision mb-4">
              <h3 className="text-dark">Our Vision</h3>
              <p className="text-muted">
                To empower men with the tools and products they need to look, feel, and perform their best. Whether you’re upgrading your wardrobe, enhancing your grooming routine, or gearing up for your next adventure, Walexopay is here to make it happen.
              </p>
            </div>

            <div className="mission mb-4">
              <h3 className="text-dark">Our Mission</h3>
              <p className="text-muted">
                To deliver a curated shopping experience that meets the unique needs of men. Our mission is to connect you with premium brands, exclusive deals, and a seamless shopping journey that saves you time and money.
              </p>
            </div>

            <div className="why-choose-us">
              <h3 className="text-dark mb-3">Why Choose Us?</h3>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Exclusive Men’s Collections</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Quality Products from Trusted Brands</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Fast and Secure Delivery</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Expert Customer Support</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Hassle-Free Returns and Refunds</li>
                <li><i className="bi bi-check-circle text-success"></i> Special Deals for Loyal Customers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-blue-600">Empowering Men Everywhere</h1>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Focus</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Walexopay Technology Private Limited is dedicated to serving the modern man. From cutting-edge gadgets to stylish apparel, we bring together the best products to help you stay ahead of the curve.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">Why Men Choose Us?</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">✔</span> <strong>Tailored Selections:</strong> Products curated for men’s needs.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">✔</span> <strong>Quality Assurance:</strong> Trusted brands with top-notch quality.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">✔</span> <strong>Fast Delivery:</strong> Get your essentials when you need them.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">✔</span> <strong>24/7 Support:</strong> We’re here whenever you need us.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Walexopay Technology Private Limited began with a vision to redefine shopping for men. Today, we’re proud to be a trusted platform offering everything a man could need, from daily essentials to luxury items.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to providing an unparalleled shopping experience for men. With exclusive collections, competitive pricing, and exceptional service, Walexopay is your go-to destination for all your needs.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
