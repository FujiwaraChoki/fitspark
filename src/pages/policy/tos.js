import React from "react";
import TermsOfService from "@/components/Policies/TermsOfService";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfServicePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow container mx-auto px-4 py-12">
                <TermsOfService />
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfServicePage;
