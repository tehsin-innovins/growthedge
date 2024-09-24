import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import '../App.css';
import contact_logo from '../assets/home/contact_logo.svg'; // Import the PNG file

function Preloader() {
	return (
		<>
		<div className="preloader">
		<img 
  src={contact_logo} 
  alt="Loading" 
  className="animate__animated animate__fadeIn animate__infinite"
/>
    </div>
		</>
	);
}

export default Preloader;
