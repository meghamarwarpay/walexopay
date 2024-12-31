import Header from "@/Layout/Header";

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <div style={{ marginTop: '40px' }}>
                <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-semibold text-blue-600">Privacy Policy</h1>
                    </header>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Introduction</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At Walexopay Technology Private Limited, we prioritize your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our website or services tailored for men's needs.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Information We Collect</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We may gather the following types of information to enhance your experience:
                        </p>
                        <ul className="list-disc pl-6 text-lg text-gray-700">
                            <li>Personal information such as name, email, and contact details.</li>
                            <li>Preferences related to men's fashion, grooming, and accessories.</li>
                            <li>Usage data including pages visited, time spent on the site, and browsing patterns.</li>
                            <li>Payment details for handling your transactions securely.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">How We Use Your Information</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The information we collect helps us provide better services, such as:
                        </p>
                        <ul className="list-disc pl-6 text-lg text-gray-700">
                            <li>Processing and managing your orders seamlessly.</li>
                            <li>Offering personalized recommendations for men's products and styles.</li>
                            <li>Keeping you informed about new collections, offers, and updates.</li>
                            <li>Enhancing security and preventing fraudulent activities.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Data Protection</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We employ advanced security measures to ensure your personal data remains safe and confidential.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Changes to This Policy</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We may revise this Privacy Policy periodically. Updated versions will be posted on this page. Please review it regularly to stay informed about our practices.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}
