import React from "react";
import Navbar from "../Components/Navbar";
import Herosection from "../Components/Herosection";
import Courses from "../Components/Course";
import Features from "../Components/cards";
import Services from "../Components/Services";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Footer from "../Components/Footer";
const LandingPage = () => {
    return (
        <div className="bg-[#f7f7f7]">
            <Navbar />
            <Herosection />
            <Courses />
            <Features />
            <Services />
            <Banner />
            <About />
            <Footer />
        </div>
    );
}
export default LandingPage;