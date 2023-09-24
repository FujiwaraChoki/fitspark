import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'react-hot-toast';

import { useState } from 'react';
import { auth } from '../../../firebase/config';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword, updateCurrentUser } from 'firebase/auth';

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

    const getCurrentTimestamp = () => {
        return Math.floor(Date.now() / 1000).toString();
    };

    const register = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await createUserWithEmailAndPassword(auth, email, password);
                console.log(response);

                // If the user was successfully created, set their display name
                if (response.user) {
                    await updateCurrentUser(auth, {
                        displayName: name,
                        metadata: {
                            plan_id: plan_id,
                            created_at: getCurrentTimestamp(),
                        }
                    });
                }

                resolve(response);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    };


    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow container mx-auto px-4 py-12">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Sign Up for an Exciting Fitness Experience!
                </h2>
                <p className="text-gray-600 text-center mb-6">
                    Get started with Fitspark today and enjoy personalized workout plans
                    tailored to your fitness goals.
                </p>
                <div className="max-w-md mx-auto">
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
                    <div className="mb-4">
                        <label htmlFor="privacy" className="flex items-center">
                            <input
                                type="checkbox"
                                id="privacy"
                                name="privacy"
                                className="form-checkbox"
                                required
                            />
                            <span className="ml-2 text-gray-700 text-sm font-bold">
                                I agree to the <a href="/policy/privacy" className="underline">Privacy Policy</a>
                            </span>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => toast.promise(register(), {
                                loading: "Signing up...",
                                success: "Signed up!",
                                error: "Something went wrong!",
                            })}
                            className="bg-violet-700 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300"
                        >
                            Sign Up
                        </button>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default SignUp;
