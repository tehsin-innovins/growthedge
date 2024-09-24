import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import trending from '../assets/home/trending.svg'; // Import the SVG file
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/home/logo.svg'; // Import the SVG file
import call from '../assets/home/call.svg'; // Import the SVG file
import whatsapp from '../assets/home/whatsapp.svg'; // Import the SVG file
import contact_logo from '../assets/home/contact_logo.svg'; // Import the PNG file
import contact from '../assets/home/contact.png'; // Import the PNG file
import life from '../assets/about/life.png'; // Import the PNG file
import '../App.css';
import '../pages/Pages.css';
import CustomSwiper from '../components/CustomSwiper';


function Header(){
	
  const [showBottomsheet_two, setshowBottomsheet_two] = useState(false);

  const handleClose_two = () => setshowBottomsheet_two(false);
  const handleShow_two = () => setshowBottomsheet_two(true);

  const slidesData1 = [
		{ img:life,count:"1",title:"Enthusiams & Cheerful is how we could define",content:"lifelong learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech."},
		{ img:life,count:"2",title:"Enthusiams & Cheerful is how we could define",content:"lifelong learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech."},
		{ img:life,count:"3",title:"Enthusiams & Cheerful is how we could define",content:"lifelong learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech."},
		{ img:life,count:"4",title:"Enthusiams & Cheerful is how we could define",content:"lifelong learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech."},
		{ img:life,count:"5",title:"Enthusiams & Cheerful is how we could define",content:"lifelong learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech."},
		{ img:life,count:"6",title:"Enthusiams & Cheerful is how we could define",content:"lifelong learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech."},		
	];
	
	const renderCustomSlide_card = (slide, index) => (
		<div className="slider_7_card_7">
			<div className="row align-items-center p-0">
				<div className="col-6 col-lg-1 col-md-1">
					<h3>{slide.count}</h3>
				</div>
				<div className="col-6 col-lg-3 col-md-3">
					<img src={slide.img} />
				</div>
				<div className="col-12 col-lg-8 col-md-8 p-0">
					<h5>{slide.title}</h5>
				</div>						
				<div className="col-12 col-lg-12 col-md-12">
					<p>{slide.content}</p>
					<a>Read More</a>
				</div>
			</div>
		</div>
	);	
	
	const renderCustomSlide_card_ = (slide, index) => (
		<div className="slider_7_card_7">
			<div className="row align-items-center p-0">
				<div className="col-6 col-lg-2ssss col-md-2">
					<h3>{slide.count}</h3>
				</div>
				<div className="col-12 col-lg-10 col-md-10 p-0">
					<h5>{slide.title}</h5>
				</div>						
				<div className="col-12 col-lg-12 col-md-12">
					<p>{slide.content}</p>
					<a>Read More</a>
				</div>
			</div>
		</div>
	);		
  
  return (
    <>
      <nav className="dasktop-menu">
		<div className="container">
			<div className="row">
				<div className="col-md-1 col-6">
					<img src={logo} alt="Logo" width={130} height={60} />
				</div>
				<div className="col-md-10 col-12">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/services">Services</Link>
						</li>
						<li>
							<Link to="/projects">Case Studies / Blogs</Link>
						</li>						
						<li>
							<Link to="/about-us">About Us</Link>
						</li>
						<li>
							<Link onClick={handleShow_two}>Contact Us</Link>
						</li>			
						<li>
							<Link>Free Ebook</Link>
						</li>						
					</ul>
				</div>
				<div className="col-md-1 col-6">
					<img className="whatsapp" src={whatsapp} alt="whatsapp" width={25} height={25} />
					<img className="call" src={call} alt="call" width={25} height={25} />
				</div>
			</div>
		</div>
      </nav>

      <div
        className={`modal fade ${showBottomsheet_two ? 'show' : ''}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showBottomsheet_two ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog modal-dialog-scrollable modal-fullscreen modal-bottom-sheet  modal-bottom-sheet1_" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title title text-center">Contact us</h5>
              <span type="button" className="btn-close1" onClick={handleClose_two}>
				<FontAwesomeIcon icon={faXmark} />
			  </span>
            </div>

            <div className="modal-body p-0">
	
			<div className="container pb-4">
			
				<div className="row">
				
					<div className="col-12 col-md-6 col-lg-6">
						<div className="row">
							<div className="col-12 col-lg-4 col-md-4">
								<img src={contact_logo} className="contact_img"/>
							</div>
							<div className="col-12 col-lg-8 col-md-8">
							</div>
						</div>	
						<h4 className="h4">One Stop <img src={trending} width={20} height={20} /></h4>
						<h5 className="h5">Solution for Performance</h5>
						<h3 className="h3">[ THE VIOLET JOURNAL ]</h3>
						<div className="row">
						
								<div className="col-6 col-md-3 col-lg-3">
									<h4 className="h4_">12</h4>
									<p className="p_">Chapters</p>
								</div>
								<div className="col-6 col-md-3 col-lg-3">
									<h4 className="h4_">46</h4>
									<p className="p_">Articles</p>
								</div>
								<div className="col-6 col-md-3 col-lg-3 m-0 p-0">
									<h4 className="h4_">21</h4>
									<p className="p_">Uses Cases</p>
								</div>
								<div className="col-6 col-md-3 col-lg-3 m-0 p-0">
									<h4 className="h4_">312+</h4>
									<p className="p_">Downloads</p>
								</div>								

						
						</div>
					</div>
					
					<div className="col-12 col-md-6 col-lg-6">
							<h5 className="form_h5 text-left mt-4">Drop your Queries</h5>
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

<section className="homepage_4 mt-0 pt-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_4_title_1">Projects <span>@D2c</span></h4>
			
		</div>
		
		<CustomSwiper 
		slides={slidesData1}
		spaceBetween={20}
		slidesPerView={2}
		renderSlide={renderCustomSlide_card}
		swiperClassName="swiper"
		swiperClassChildName=""
		swiper_navClass="custom-navigation"
		swiperContainer="container"
		/>
	
</section>

<section className="homepage_4 mt-0 pt-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_4_title_1">Reimagine the Process <img src={trending} width={20} height={20} /></h4>
			
		</div>
		
		<CustomSwiper 
		slides={slidesData1}
		spaceBetween={20}
		slidesPerView={2}
		renderSlide={renderCustomSlide_card_}
		swiperClassName="swiper"
		swiperClassChildName=""
		swiper_navClass="custom-navigation"
		swiperContainer="container"
		/>
	
</section>

<div className="container mb-4">
	
	<div className="mb-4 mb-4 forminlinecard card card-body shadow-sm border-0 rounded4">
	
		<img src={contact}/>
		<h5>Core to Ideology</h5>
		<p>Program with from understanding the goals of stakeholders, market product fit generation.</p>
		
		<form className="row">
			
			<div className="col-12 col-lg-6 col-md-6">
				<div class="mb-3 mt-3">
					<input type="text" className="custom-input form-control" id="fname" placeholder="Your Full Name" name="fname"/>
				</div>
			</div>	
			<div className="col-12 col-lg-6 col-md-6">
				<div class="mb-3 mt-3">
					<input type="text" className="custom-input form-control" id="email" placeholder="Your Email Address" name="email"/>
				</div>
			</div>	
			<div className="col-12 col-lg-4 col-md-4">
			
			</div>
		
			<div className="col-12 col-lg-4 col-md-4">
				<button type="submit" className="btn mb-4">DOWNLOAD FREE COPY</button>
			</div>
			
			<div className="col-12 col-lg-4 col-md-4">
			
			</div>
			
			
		</form>
	
	</div>
	<br/>
	
</div>			
			
			<div className="highlighted_">
				<div className="imgbox">
				<h5>its time for a</h5>
				<h4>level up!</h4>
				</div>
			</div>
	
            </div>

          </div>
        </div>
      </div>	
	
    </>
  )
};

export default Header;