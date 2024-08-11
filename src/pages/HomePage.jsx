import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/layout/HeroSection';
import ProductCollection from '../components/sections/ProductCollection';
import CustomerStories from '../components/layout/CustomerStories';
import Footer from '../components/layout/Footer';
import PromoSection from '../components/sections/PromoSection';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductCollection />
      <CustomerStories />
      <Footer />
      <PromoSection />
    </>
  );
};

export default HomePage;
