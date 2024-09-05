import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/DashBoard";
import SocialMediaPage from "./pages/SocialMedia";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
