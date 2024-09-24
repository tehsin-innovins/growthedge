import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import './App.css';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BlogDetails from "./pages/BlogDetails";
import Services from "./pages/Services";
import UseCase from "./pages/UseCase";
import ContactUs from "./pages/ContactUs";
import NoPage from "./pages/NoPage";

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Routes>
			<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="projects" element={<UseCase />} />
			<Route path="services" element={<Services />} />
			<Route path="blog/:slug" element={<BlogDetails />} />
			<Route path="usecase/:slug" element={<BlogDetails />} />			
			<Route path="about-us" element={<AboutUs />} />
			<Route path="contact-us" element={<ContactUs />} />
			<Route path="*" element={<NoPage />} />
			</Route>
		</Routes>
		</BrowserRouter>
	);
}

export default App;
