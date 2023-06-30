import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { useState } from 'react';
import { useRouter } from 'next/router';

const SignUp = () => {
    const router = useRouter();
    const { plan_id } = router.query;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here

        // Redirect to a success page or other appropriate destination
        router.push('/success');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow container mx-auto px-4 py-12">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Sign Up for an Exciting Fitness Experience!
                </h2>
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                    {plan_id && <input type="hidden" name="plan_id" value={plan_id} />}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-violet-700 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;
