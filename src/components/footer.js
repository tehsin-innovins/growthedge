import { Outlet, Link } from "react-router-dom";
import logo from '../assets/home/footer-logo.svg'; // Import the SVG file
import social1 from '../assets/home/social1.svg'; // Import the SVG file
import social2 from '../assets/home/social2.svg'; // Import the SVG file
import social3 from '../assets/home/social3.svg'; // Import the SVG file
import social4 from '../assets/home/social4.svg'; // Import the SVG file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faMagnifyingGlass,faChevronLeft,faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

function Footer(){
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  
  // Conditional class name
  const className = isHomePage ? 'highlighted' : 'highlighted_';
  
    const [isVisible, setIsVisible] = useState(false); // State to track visibility

  const handleScroll = () => {
    // Show button when scrolled down 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
		<section className="dasktop-footer">
		<a  
		onClick={scrollToTop}
      className={`btn go-to-top ${isVisible ? 'visible' : ''}`} // Conditional class for visibility
      style={{ display: isVisible ? 'block' : 'none' }} // Show/hide based on state
		>
		&#8679;
		</a>
			<div className="container">
				<div className="row">
					<div className="col-md-1 col-lg-1 col-12"></div>
					<div className="col-md-4 col-lg-4 col-12">
						<div className="links1">
						<img src={logo} alt="Logo" width={130} height={60} />
						<p className="mt-3 mb-3">FOLLOW US</p>
						<div className="d-flex social-icon">
							<Link><img src={social1} alt="social1" width={20} height={20} /></Link>
							<Link><img src={social2} alt="social2" width={20} height={20} /></Link>
							<Link><img src={social3} alt="social3" width={20} height={20} /></Link>
							<Link><img src={social4} alt="social4" width={20} height={20} /></Link>							
						</div>
						<p className="mt-4">© 2024 WEBSITE.COM ALL RIGHTS RESERVED.</p>
						</div>
					</div>
					<div className="col-md-3 col-lg-3 col-12">
						<div className="links2">
							<Link to="/" className="d-flex">Home</Link>
							<Link to="/services" className="d-flex">Services</Link>
							<Link to="/projects" className="d-flex">Case Studies & Blogs</Link>
							<Link to="/about-us" className="d-flex">About us</Link>
							<Link to="/" className="d-flex">Contact Us</Link>
							<Link to="/" className="d-flex">Free E Book</Link>
						</div>
					</div>
					<div className="col-md-4 col-lg-4 col-12 pt-4 pb-4">
							<h5 className="text-center mt-4"><span>[</span> Contact Us <span>]</span></h5>
							<p className="text-center text-white">Subscribe and be the first one to know our new updates</p>
							<form action="">
							<div class="mb-3 mt-3">
								<input type="text" className="custom-input form-control" id="fname" placeholder="Your Full Name" name="fname"/>
							</div>
							<div class="mb-3 mt-3">
								<input type="text" className="custom-input form-control" id="mobile" placeholder="Your Mobile Number" name="mobile"/>
							</div>
							<div class="mb-3 mt-3">
								<input type="text" className="custom-input form-control" id="email" placeholder="Your Email Address" name="email"/>
							</div>
							<div class="mb-3 mt-3">
								<textarea className="custom-textarea form-control" rows="5" id="msg" name="msg" placeholder="Put your thoughts Here!"></textarea>
							</div>  
							<button type="submit" className="btn mb-4">CONNECT NOW</button>
							</form>							
					</div>					
				</div>
			</div>
			<div className={className}>
				<div className="imgbox">
				<h5>its time for a</h5>
				<h4>level up!</h4>
				</div>
			</div>
		</section>
    </>
  )
};

export default Footer;