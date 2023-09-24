import React from "react";
import PrivacyPolicy from "@/components/Policies/Privacy";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow container mx-auto px-4 py-12">
                <PrivacyPolicy />
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPage;
