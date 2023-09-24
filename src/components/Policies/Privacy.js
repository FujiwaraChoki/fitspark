import Link from "next/link";

const PrivacyPolicy = () => {
    return (
        <>
            <h1 className="text-3xl font-semibold text-purple-600 mb-6">
                Fitspark Privacy Policy
            </h1>
            <p className="text-gray-700 text-lg mb-4">
                Last Updated: 24.09.2023
            </p>
            <p className="text-gray-700 text-lg mb-4">
                Welcome to Fitspark! We are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your
                personal information when you use our AI fitness services.
            </p>

            <h2 className="text-2xl font-semibold text-purple-600 mt-4">
                Information We Collect
            </h2>
            <p className="text-gray-700 text-lg mb-4">
                When you use Fitspark, we may collect the following types of
                information:
            </p>
            <ul className="list-disc ml-6 text-gray-700 text-lg">
                <li>Personal information such as your name, email, and age.</li>
                <li>Health and fitness data provided by you.</li>
                <li>Usage data, including information about your interactions with our
                    AI fitness services.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-purple-600 mt-4">
                How We Use Your Information
            </h2>
            <p className="text-gray-700 text-lg mb-4">
                We may use your personal information for the following purposes:
            </p>
            <ul className="list-disc ml-6 text-gray-700 text-lg">
                <li>To provide personalized fitness recommendations.</li>
                <li>To improve our AI fitness services and develop new features.</li>
                <li>To send you updates, newsletters, and marketing communications
                    related to Fitspark (you can opt-out anytime).
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-purple-600 mt-4">
                Data Security
            </h2>
            <p className="text-gray-700 text-lg mb-4">
                We take data security seriously and implement measures to protect your
                personal information. However, please note that no method of
                transmission over the internet or electronic storage is completely
                secure, and we cannot guarantee the absolute security of your data.
            </p>

            <h2 className="text-2xl font-semibold text-purple-600 mt-4">
                Changes to this Privacy Policy
            </h2>
            <p className="text-gray-700 text-lg">
                Fitspark may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on this
                page. You are advised to review this Privacy Policy periodically for
                any changes.
            </p>

            <p className="text-gray-700 text-lg mt-4">
                If you have any questions or concerns regarding our privacy policy,
                please contact us at <Link className="text-purple-600 hover:underline" href="mailto:fitspark@proton.me">fitspark@proton.me</Link>.
            </p>
        </>
    );
};

export default PrivacyPolicy;
