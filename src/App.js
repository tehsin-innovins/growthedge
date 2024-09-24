import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Layout from "./components/Layout";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BlogDetails from "./pages/BlogDetails";
import Services from "./pages/Services";
import UseCase from "./pages/UseCase";
import ContactUs from "./pages/ContactUs";
import NoPage from "./pages/NoPage";

// Preloader logic needs to be inside the router
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

// The actual content of the app where location is tracked
function AppContent() {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // useLocation is valid here because it's inside BrowserRouter

  useEffect(() => {
    // Show preloader on route change
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time

    return () => clearTimeout(timer); // Clean up
  }, [location]); // Effect runs on route change

  return (
    <>
      {loading && <Preloader />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<UseCase />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<BlogDetails />} />
          <Route path="usecase" element={<BlogDetails />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
