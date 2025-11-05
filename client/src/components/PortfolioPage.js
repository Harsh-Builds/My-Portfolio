// src/components/PortfolioPage.js
import React from 'react'; // Make sure to import React

// Import all your components
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Qualification from "./Qualification";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

// Your portfolio.css can be imported here or in App.js/index.js
import "../portfolio.css"; // Note: the path changes to ../

// This component is just your original App component content
export default function PortfolioPage() {
  return (
    <div className="main">
        <Header />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  );
}