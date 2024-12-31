// pages/refund-policy.js

import Header from "@/Layout/Header";

export default function RefundPolicy() {
  return (
    <><Header/>
        <div style={{marginTop:'40px'}} >
    <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-pink-600">Refund Policy</h1>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-pink-500 mb-4">Introduction</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Walexopay Technology private limited, we are committed to providing a smooth and satisfactory shopping experience. This Refund Policy outlines our procedures regarding refunds and returns.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-pink-500 mb-4">Eligibility for Refunds</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          You are eligible for a refund if:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Product is defective or damaged upon receipt.</li>
          <li>Product does not match the description provided on the website.</li>
          <li>Product delivery is significantly delayed (more than 7 days beyond the expected delivery time).</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-pink-500 mb-4">How to Request a Refund</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          To request a refund, please contact our customer support team within 30 days of receiving your order. You can reach out via the contact information provided on our website.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-pink-500 mb-4">Refund Processing Time</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Once your refund request is approved, it may take up to 7-10 business days to process and receive the refund. The actual time frame will depend on your payment method.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-pink-500 mb-4">Exceptions to the Refund Policy</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Refunds may not be provided in cases where:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Products are returned without all original packaging and accessories.</li>
          <li>Products are damaged due to misuse or negligence by the customer.</li>
          <li>Products are perishable or made-to-order items.</li>
        </ul>
      </section>
    </div>
    </div></>
  );
}
