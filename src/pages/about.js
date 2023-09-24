import React from "react";
import Lottie from 'react-lottie';
import * as runningAnimation from '../../public/running-animation.json';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: runningAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500">
            <Navbar />
            <div className="container mx-auto px-4 py-12 sm:py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                    <div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                            Welcome to Fitspark 🏋️‍♂️
                        </h1>
                        <p className="text-lg text-gray-200 mb-6">
                            At Fitspark, we believe in a healthier and more active lifestyle. Our mission is to empower individuals with AI-driven fitness solutions, making it easier for everyone to achieve their fitness goals, no matter how busy their schedule.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <Lottie options={defaultOptions} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
