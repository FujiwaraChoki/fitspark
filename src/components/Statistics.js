const StatisticsSection = () => {
    return (
        <div className="bg-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 py-12 sm:py-24">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                            Transforming Lives
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Our AI fitness coach has helped countless urban professionals adopt a healthier lifestyle and achieve their fitness goals.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-purple-500 mb-2">+85%</h3>
                        <p className="text-gray-800">Average Increase in Physical Activity</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-purple-500 mb-2">-10 lbs</h3>
                        <p className="text-gray-800">Average Weight Loss</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-purple-500 mb-2">+50%</h3>
                        <p className="text-gray-800">Stress Reduction</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-purple-500 mb-2">98%</h3>
                        <p className="text-gray-800">User Satisfaction Rate</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-purple-500 mb-2">200+</h3>
                        <p className="text-gray-800">Workout Plans and Exercises</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsSection;
