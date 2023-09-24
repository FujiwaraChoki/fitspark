import Button from './Button';
import Lottie from 'react-lottie';
import * as runningAnimation from '../../public/running-animation.json';

import { useRouter } from 'next/router';

const HeroSection = () => {
    const router = useRouter();

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
                        <div className="flex items-center text-white mb-10">
                            <div className="mr-4">
                                <h2 className="text-3xl font-semibold">100K+</h2>
                                <p className="text-sm">Happy Users</p>
                            </div>
                            <div className="mr-4">
                                <h2 className="text-3xl font-semibold">30+</h2>
                                <p className="text-sm">Coaches</p>
                            </div>
                            <div className="mr-4">
                                <h2 className="text-3xl font-semibold">24/7</h2>
                                <p className="text-sm">Access</p>
                            </div>
                        </div>
                        <Button
                            text={"Start Your Fitness Journey"}
                            className={"bg-white text-purple-500 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-full font-semibold transition duration-300"}
                            onClick={() => {
                                router.push('/#pricing');
                            }}
                        />
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
