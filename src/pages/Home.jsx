import React from 'react';
import BannerSection from "../components/Banner/BannerSection";
import Services from "../components/services/Services";
import Feature from "../components/Features/Features";
import Footer from "../components/footer/footer";



const Home = () => {
    return (
        <>
        {/*Importing Banner section */}
        <BannerSection />
        {/*Importing Services section */}
        <Services />
        {/* Importing Ask Question section */}
        <Feature />
        {/* Importing Footer */}
        <Footer />
      </>
    );
}

export default Home;
