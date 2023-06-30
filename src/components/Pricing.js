import { useRouter } from 'next/router';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

const PricingSection = () => {
    const router = useRouter();

    const handleChosePlan = (plan) => {
        router.push('/signup?plan_id=' + plan);
    };

    return (
        <section className="py-12" id="pricing">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Choose a Subscription Plan
                </h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="bg-gray-100 rounded-lg p-6 shadow-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic</h3>
                            <div className="flex justify-center items-center mb-4">
                                <span className="text-2xl font-semibold">$14.99</span>
                                <span className="text-gray-600 ml-2">/month</span>
                            </div>
                            <ul className="text-gray-600 text-center">
                                <li>
                                    <span role="img" aria-label="Workout Plans">🏋️‍♂️</span> Personalized Workout Plans
                                </li>
                                <li>
                                    <span role="img" aria-label="Progress Tracking">📈</span> Basic progress tracking
                                </li>
                                <li>
                                    <span role="img" aria-label="Email Support">✉️</span> Email support
                                </li>
                            </ul>
                            <div className="flex justify-center mt-6">
                                <button className="bg-violet-700 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
                                    onClick={() => handleChosePlan(1)}
                                >
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-violet-700 rounded-lg p-6 border-2 border-white">
                            <h3 className="text-xl font-semibold text-white mb-4">Most Popular</h3>
                            <div className="flex justify-center items-center mb-4">
                                <span className="text-2xl font-semibold text-white">$24.99</span>
                                <span className="text-white ml-2">/month</span>
                            </div>
                            <ul className="text-white text-center">
                                <li>
                                    <span role="img" aria-label="Workout Plans">🏋️‍♂️</span> All Basic features
                                </li>
                                <li>
                                    <span role="img" aria-label="Progress Tracking">📈</span> Advanced progress tracking
                                </li>
                                <li>
                                    <span role="img" aria-label="Chatbot">🤖</span> AI Fitness Chatbot
                                </li>
                                <li>
                                    <span role="img" aria-label="Live Chat Support">💬</span> Live chat support
                                </li>
                            </ul>
                            <div className="flex justify-center mt-6">
                                <button className="bg-white hover:bg-gray-200 text-violet-700 font-semibold py-2 px-6 rounded-full transition-colors duration-300"
                                    onClick={() => handleChosePlan(2)}
                                >
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-gray-100 rounded-lg p-6 border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium</h3>
                            <div className="flex justify-center items-center mb-4">
                                <span className="text-2xl font-semibold">$49.99</span>
                                <span className="text-gray-600 ml-2">/month</span>
                            </div>
                            <ul className="text-gray-600 text-center">
                                <li>
                                    <span role="img" aria-label="Workout Plans">🏋️‍♂️</span> All Popular features
                                </li>
                                <li>
                                    <span role="img" aria-label="Coaching">🎯</span> Personalized coaching
                                </li>
                                <li>
                                    <span role="img" aria-label="Premium Content">🔒</span> Access to premium content
                                </li>
                                <li>
                                    <span role="img" aria-label="Chatbot">🤖</span> AI Fitness Chatbot
                                </li>
                                <li>
                                    <span role="img" aria-label="Priority Support">🔝</span> Priority support
                                </li>
                            </ul>
                            <div className="flex justify-center mt-6">
                                <button className="bg-violet-700 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
                                    onClick={() => handleChosePlan(3)}
                                >
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default PricingSection;
