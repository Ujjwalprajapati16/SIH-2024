import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
