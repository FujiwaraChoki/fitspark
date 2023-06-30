import Image from 'next/image';

const Benefits = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Our AI Fitness Coach</h2>
                    <p className="text-gray-600 mb-8">
                        Our AI fitness coach is designed specifically for urban professionals with sedentary lifestyles. Here's how it can help you transform your health and well-being:
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="rounded-full p-4">
                            <Image src="/time.svg" alt="Time-Efficient Workouts" width={64} height={64} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">Time-Efficient Workouts</h3>
                        <p className="text-gray-600 mt-2">
                            Fit quick and effective workouts into your busy schedule with our time-efficient routines.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-full p-4">
                            <Image src="/office.svg" alt="Office-Friendly Exercises" width={64} height={64} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">Office-Friendly Exercises</h3>
                        <p className="text-gray-600 mt-2">
                            Stay active even at work with exercises you can perform in your office or during work breaks.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-full p-4">
                            <Image src="/stress.svg" alt="Stress Management Strategies" width={64} height={64} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">Stress Management Strategies</h3>
                        <p className="text-gray-600 mt-2">
                            Learn stress reduction techniques, mindfulness practices, and achieve a better work-life balance.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-full p-4">
                            <Image src="/mobile.svg" alt="Mobile Accessibility" width={64} height={64} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">Mobile Accessibility</h3>
                        <p className="text-gray-600 mt-2">
                            Access workouts and guidance on the go, as our fitness coaching platform is mobile-friendly.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-full p-4">
                            <Image src="/healthy.svg" alt="Accountability and Motivation" width={64} height={64} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">Accountability and Motivation</h3>
                        <p className="text-gray-600 mt-2">
                            Stay motivated and committed to your fitness goals with tracking tools, progress monitoring, and support.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-full p-4">
                            <Image src="/accountability.svg" alt="Healthy Lifestyle Integration" width={64} height={64} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">Healthy Lifestyle Integration</h3>
                        <p className="text-gray-600 mt-2">
                            Adopt a holistic approach to wellness with nutrition advice, meal planning support, and healthy habit tips.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
