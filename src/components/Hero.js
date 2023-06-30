import Lottie from 'react-lottie';

import * as runningAnimation from '../../public/running-animation.json';

const HeroSection = () => {
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
            <div className="container mx-auto px-4 py-12 sm:py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                    <div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                            Your Personal AI Fitness Coach
                        </h1>
                        <p className="text-lg text-gray-200 mb-6">
                            Get in shape, stay active, and lead a healthier lifestyle with our AI-powered fitness coach. Designed for busy urban professionals with sedentary lifestyles, we offer personalized workouts, stress management strategies, and mobile accessibility.
                        </p>
                        <a
                            href="#signup"
                            className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-full font-semibold transition duration-300"
                        >
                            Start Your Fitness Journey
                        </a>
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <Lottie options={defaultOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
