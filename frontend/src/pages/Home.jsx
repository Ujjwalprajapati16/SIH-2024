import React from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center py-24 text-center text-white"
        style={{
          backgroundImage: "url('https://example.com/disaster-image.jpg')",
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-4">
            Stay Informed About Disasters
          </h2>
          <p className="text-xl mb-8">
            Get real-time updates from news websites and social media all in one
            place.
          </p>
          <a href="#" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-6">What We Do</h2>
        <p className="text-center max-w-2xl mx-auto">
          Our platform aggregates information from various sources including
          news websites, Twitter, Facebook, and more. We aim to provide you with
          the most accurate and up-to-date information during critical times.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
