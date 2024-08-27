import React from 'react';
import Navbar from './Navbar'; // Ensure this path is correct

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />

      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>
          <div className="imageBox">
            <img src="/hero1.png" alt="hero1" />
          </div>
          <div className="textAndLogo">
            <div className="textwithSvg">
              <h1 className="title">Food</h1>
              <h1 className="title dishes-title">Dishes</h1> {/* Ensure this is consistent */}
              <img src="/threelines.svg" alt="three" />
            </div>
            <img src="/logo.svg" alt="logo" className="logo" />
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/hero2.png" alt="hero2" />
          </div>
          <h1 className="title dishes-title">Dishes</h1> {/* Ensure this is consistent */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
