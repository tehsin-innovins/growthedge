import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BlogDetails from "./pages/BlogDetails";
import UsecaseDetails from "./pages/UsecaseDetails";
import Services from "./pages/Services";
import UseCase from "./pages/UseCase";
import ContactUs from "./pages/ContactUs";
import NoPage from "./pages/NoPage";
import FreeEbookModal from "./components/FreeEbookModal";

function App() {
  return (
    <BrowserRouter>
      <AppContent />  {/* Ensure AppContent is inside BrowserRouter */}
    </BrowserRouter>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const isFirstLoad = useRef(true); // Ref to track if it's the first load

  useEffect(() => {
		window.scrollTo({
		top: 0,
		behavior: 'smooth' // Smooth scrolling effect
		});
    // Show preloader only on initial load and when location changes
    if (isFirstLoad.current) {
      setLoading(true); // Show loading on first load
      isFirstLoad.current = false; // Mark as loaded
      const timer = setTimeout(() => {
        setLoading(false); // Hide preloader after 
		
      }, 1000); // Adjust the timeout for desired loading time

      return () => clearTimeout(timer); // Clean up the timer
    } else {
      // Show preloader only on route change, not on modal interaction
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false); // Hide preloader after timeout
      }, 1000); // Adjust the timeout for desired loading time

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [location]);

  return (
    <>
      {/* Preloader is only shown during the first load and on route change */}
      {loading && <Preloader />}

      {/* Main content of the app */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<UseCase />} />
          <Route path="services/:tslug" element={<Services />} />
          <Route path="blog/:slug" element={<BlogDetails />} />
          <Route path="usecase/:slug" element={<UsecaseDetails />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

      {/* Global modal, always available */}
      <FreeEbookModal />
    </>
  );
}

export default App;
