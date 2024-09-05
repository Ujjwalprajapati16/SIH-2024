import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/DashBoard";
import SocialMediaPage from "./pages/SocialMedia";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import DisasterList from "./components/Disaster/DisasterList";
import ContactUs from "./pages/ContactUs";

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/disaster/:id" element={<DisasterList />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
