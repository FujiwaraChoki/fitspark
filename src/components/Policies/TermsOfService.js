import Link from "next/link";

const TermsOfService = () => {
    return (
        <>
            <h1 className="text-3xl font-semibold text-purple-600 mb-6">
                Fitspark Terms of Service
            </h1>
            <p className="text-gray-700 text-lg mb-4">Effective Date: 24.09.2023</p>
            <p className="text-gray-700 text-lg mb-4">
                Welcome to Fitspark! These Terms of Service ("Terms") govern your use
                of our AI fitness services. By using Fitspark, you agree to comply
                with these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-purple-600 mt-4">
                Use of Our Services
            </h2>
            <p className="text-gray-700 text-lg mb-4">
                You may use Fitspark for your personal fitness and wellness needs. You
                agree not to misuse our services, interfere with their operation, or
                attempt to access them using a method other than the interface and
                instructions we provide.
            </p>

            <h2 className="text-2xl font-semibold text-purple-600 mt-4">
                Privacy and Data
            </h2>
            <p className="text-gray-700 text-lg mb-4">
                Your use of Fitspark is also governed by our Privacy Policy. Please
                review our Privacy Policy to understand how we collect, use, and
                protect your personal information.
            </p>

            <h2 className="text-2xl font-semibold text-purple-600 mt-4">
                Termination
            </h2>
            <p className="text-gray-700 text-lg mb-4">
                We may terminate or suspend your access to Fitspark at our sole
                discretion, without prior notice, for conduct that violates these
                Terms or is harmful to other users or us.
            </p>

            <h2 className="text-2xl font-semibold text-purple-600 mt-4">
                Changes to the Terms
            </h2>
            <p className="text-gray-700 text-lg">
                Fitspark reserves the right to update or modify these Terms at any
                time. We will notify you of any changes by posting the updated Terms
                on this page. Continued use of our services after such modifications
                will constitute your acknowledgment of the modified Terms.
            </p>

            <p className="text-gray-700 text-lg mt-4">
                If you have any questions or concerns regarding our Terms of Service,
                please contact us at <Link className="text-purple-600 hover:underline" href="mailto:fitspark@proton.me">fitspark@proton.me</Link>.
            </p>
        </>
    );
};

export default TermsOfService;
