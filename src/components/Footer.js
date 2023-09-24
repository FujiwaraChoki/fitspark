import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-violet-700 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="md:order-2">
                        <div className="flex items-center justify-center md:justify-end">
                            <Link href="#">
                                <Image src="/Fit-Spark-Logo.png" alt="Logo" width={100} height={100} />
                            </Link>
                        </div>
                        <p className="text-xl font-semibold text-white text-center mt-2">Stay Fit, Stay Healthy</p>
                    </div>
                    <div className="flex mt-4 md:mt-0 md:order-1">
                        <Link href="/policy/tos" className="text-white hover:text-gray-300 hover:underline mx-3 transition-colors duration-300">
                            Terms of Service
                        </Link>
                        <Link href="/policy/privacy" className="text-white hover:text-gray-300 hover:underline mx-3 transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link href="/contact" className="text-white hover:text-gray-300 hover:underline mx-3 transition-colors duration-300">
                            Contact Us
                        </Link>
                    </div>
                </div>
                <p className="text-gray-400 text-center mt-4">
                    © 2023 fitspark. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
