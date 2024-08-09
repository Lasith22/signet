import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/layout/HeroSection';
import ProductCollection from '../components/sections/ProductCollection';
import CustomerStories from '../components/layout/CustomerStories';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductCollection />
      <CustomerStories />
      <Footer />
    </>
  );
};

export default HomePage;
