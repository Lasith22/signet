import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/layout/HeroSection';
import ProductCollection from '../components/sections/ProductCollection';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductCollection />
    </>
  );
};

export default HomePage;
