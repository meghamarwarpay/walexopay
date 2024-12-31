import Header from "@/Layout/Header";

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "40px" }}>
        <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-semibold" style={{ color: "rgb(78, 95, 219)" }}>
              Terms and Conditions
            </h1>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "rgb(78, 95, 219)" }}>
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              By using Walexopay Technology Private Limited's website and
              services, you agree to comply with the following Terms and
              Conditions. Please read them carefully.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "rgb(78, 95, 219)" }}>
              Use of the Website
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              You agree to use our website for lawful purposes only and will
              not engage in activities that may damage, disable, or impair the
              website's functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "rgb(78, 95, 219)" }}>
              Account Responsibility
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you create an account on our website, you are responsible for
              maintaining the confidentiality of your account information and
              for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "rgb(78, 95, 219)" }}>
              Payment and Orders
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              You agree to provide accurate payment information and accept
              responsibility for any orders placed through your account. We
              reserve the right to cancel any orders if deemed necessary.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "rgb(78, 95, 219)" }}>
              Limitation of Liability
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are not liable for any indirect, incidental, or consequential
              damages arising from the use of our website or services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "rgb(78, 95, 219)" }}>
              Changes to Terms
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We reserve the right to update or change these Terms and
              Conditions at any time. Any changes will be effective upon
              posting on this page.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "rgb(78, 95, 219)" }}>
              Contact Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you have any questions about these Terms and Conditions, feel
              free to contact us through our website or customer support.
            </p>
          </section>

          <footer className="text-center mt-12">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Walexopay Technology Private Limited.
              All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
