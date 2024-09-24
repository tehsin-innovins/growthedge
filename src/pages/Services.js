import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faPlus, faMinus,faChevronLeft,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import goal from '../assets/home/goal.png'; // Import the PNG file
import trending from '../assets/home/trending.svg'; // Import the SVG file
import trending_dark from '../assets/home/trending_dark.svg'; // Import the SVG file
import hero_circle from '../assets/home/hero-circle.png'; // Import the PNG file
import hero_introduction from '../assets/home/hero-introduction.png'; // Import the PNG file
import solution1 from '../assets/home/solution1.png'; // Import the PNG file
import solution2 from '../assets/home/solution2.png'; // Import the PNG file
import solution3 from '../assets/home/solution3.png'; // Import the PNG file
import solution4 from '../assets/home/solution4.png'; // Import the PNG file
import solution5 from '../assets/home/solution5.png'; // Import the PNG file
import solution6 from '../assets/home/solution6.png'; // Import the PNG file
import process from '../assets/home/process.png'; // Import the PNG file
import process1 from '../assets/home/process1.svg'; // Import the PNG file
import process2 from '../assets/home/process2.svg'; // Import the PNG file
import process3 from '../assets/home/process3.svg'; // Import the PNG file
import process4 from '../assets/home/process4.svg'; // Import the PNG file
import excel_bg1 from '../assets/home/excel-bg1.png'; // Import the PNG file
import excel_bg2 from '../assets/home/excel-bg2.png'; // Import the PNG file
import excel1 from '../assets/home/excel1.png'; // Import the PNG file
import excel2 from '../assets/home/excel2.png'; // Import the PNG file
import excel3 from '../assets/home/excel3.png'; // Import the PNG file
import keyboard_double_arrow_right from '../assets/home/keyboard_double_arrow_right.png'; // Import the PNG file
import circle_btn from '../assets/home/circle-btn.svg'; // Import the SVG file
import arrow_right from '../assets/home/arrow_right.svg'; // Import the SVG file
import sunrise from '../assets/home/sunrise.svg'; // Import the SVG file
import sunrise_dark from '../assets/home/sunrise_dark.svg'; // Import the SVG file
import zap from '../assets/home/zap.svg'; // Import the SVG file
import deliver1 from '../assets/home/deliver1.png'; // Import the PNG file
import deliver2 from '../assets/home/deliver2.png'; // Import the PNG file
import deliver3 from '../assets/home/deliver3.png'; // Import the PNG file
import deliver4 from '../assets/home/deliver4.png'; // Import the PNG file
import deliver5 from '../assets/home/deliver5.png'; // Import the PNG file
import work1 from '../assets/home/work1.png'; // Import the PNG file
import work2 from '../assets/home/work2.png'; // Import the PNG file
import work3 from '../assets/home/work3.png'; // Import the PNG file
import work4 from '../assets/home/work4.png'; // Import the PNG file
import work5 from '../assets/home/work5.png'; // Import the PNG file
import work6 from '../assets/home/work6.png'; // Import the PNG file
import user_circle from '../assets/home/user-circle.png'; // Import the PNG file
import hoomans from '../assets/home/hoomans.svg'; // Import the svg file
import blog from '../assets/home/blog.png'; // Import the png file
import starbucks from '../assets/home/starbucks.png'; // Import the png file
import testimonials from '../assets/home/testimonials.png'; // Import the png file
import circlelt from '../assets/home/circlelt.png'; // Import the PNG file
import circlert from '../assets/home/circlert.png'; // Import the PNG file
import circlelb from '../assets/home/circlelb.png'; // Import the PNG file
import circlerb from '../assets/home/circlerb.png'; // Import the PNG file
import sun from '../assets/home/sun.svg'; // Import the PNG file
import user from '../assets/home/user.svg'; // Import the PNG file
import services from '../assets/services/data.png'; // Import the PNG file
import analytics from '../assets/services/analytics.png'; // Import the PNG file
import $ from 'jquery';
import './Pages.css';
import CustomSwiper from '../components/CustomSwiper';

function Services() {

  const AccordionItem = ({ title, content, isOpen, onToggle }) => (
	<div className="accordion-item">
		<div className="accordion-header d-flex justify-content-between" onClick={onToggle}>
		<h5><span>01.</span> {title}</h5>
		<span><FontAwesomeIcon icon={isOpen ? faMinus : faPlus} /></span>
		</div>
		{isOpen && <div className="accordion-content" dangerouslySetInnerHTML={{ __html: content }}></div>}
	</div>
  );
	

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const [showBottomsheet_two, setshowBottomsheet_two] = useState(false);

  const handleClose_two = () => setshowBottomsheet_two(false);
  const handleShow_two = () => setshowBottomsheet_two(true);
  
  	const slidesData2 = [
		{ img: excel1, title: 'growth Marketing', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: excel2, title: 'E Commerce Management', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: excel3, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: excel1, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },
		{ img: excel3, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: excel1, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },
	];	
	
	const slidesData4 = [
		{ title: 'Did you know?', content: 'Personalized Recommendations<small>could help to</small> [ Spike ] your conversion by 20% <small>Compared to traditional recommendation</small>' },	
		{ title: 'Did you know?', content: 'TruthWorthy Websites <small>tend to have healthier conversion by Using</small> <span>[ Maximum ]</span> potential of Marketing <small>Compared to traditional recommendation</small>' },	
		{ title: 'Did you know?', content: 'TruthWorthy Websites <small>tend to have healthier conversion by Using</small> <span>[ Maximum ]</span> potential of Marketing <small>Compared to traditional recommendation</small>' },	
		{ title: 'Did you know?', content: 'TruthWorthy Websites <small>tend to have healthier conversion by Using</small> <span>[ Maximum ]</span> potential of Marketing <small>Compared to traditional recommendation</small>' },
		{ title: 'Did you know?', content: 'TruthWorthy Websites <small>tend to have healthier conversion by Using</small> <span>[ Maximum ]</span> potential of Marketing <small>Compared to traditional recommendation</small>' },	
		{ title: 'Did you know?', content: 'TruthWorthy Websites <small>tend to have healthier conversion by Using</small> <span>[ Maximum ]</span> potential of Marketing <small>Compared to traditional recommendation</small>' },
	];	

  	const slidesData5 = [
		{ img: process1, title: 'Deep Dive', content: 'Expertise in data analytics, UI/UX design, and tech development. Through' },	
		{ img: process2, title: 'Define', content: 'Expertise in data analytics, UI/UX design, and tech development. Through' },	
		{ img: process3, title: 'Dream', content: 'Expertise in data analytics, UI/UX design, and tech development. Through' },	
		{ img: process4, title: 'Design', content: 'Expertise in data analytics, UI/UX design, and tech development. Through' },
		{ img: process1, title: 'Deploy', content: 'Expertise in data analytics, UI/UX design, and tech development. Through' },	
		{ img: process3, title: 'Dream', content: 'Expertise in data analytics, UI/UX design, and tech development. Through' },
	];	
  
  const accordionItems = [
    { title: 'Accordion Item 1', content: '<b>How will it help us determine the pointers</b><br/><b>How will it help us determine the pointers</b><br/>Indulge in the assurance of authenticity with our collection of BIS Hallmarked Jewellery, a testament to trust, proudly offered by Kalyan Jewellers.' },
    { title: 'Accordion Item 2', content: '<b>How will it help us determine the pointers</b><br/><b>How will it help us determine the pointers</b><br/>Indulge in the assurance of authenticity with our collection of BIS Hallmarked Jewellery, a testament to trust, proudly offered by Kalyan Jewellers.' },
    { title: 'Accordion Item 3', content: '<b>How will it help us determine the pointers</b><br/>Indulge in the assurance of authenticity with our collection of BIS Hallmarked Jewellery, a testament to trust, proudly offered by Kalyan Jewellers.<b>How will it help us determine the pointers</b><br/>Indulge in the assurance of authenticity with our collection of BIS Hallmarked Jewellery, a testament to trust, proudly offered by Kalyan Jewellers.' },	
  ];
  
  	const renderCustomSlide_second = (slide, index) => (
		<div className="slider_2_card_2">
		<img
		className="bgi1"
		src={index % 2 === 0 ? excel_bg1 : excel_bg2} // Alternates between excel_bg1 and excel_bg2
		alt="Background"
		/>
		<img className="bgi2" src={slide.img}/>
		<div className="contentbox">
			<p className="title">{slide.title}</p>
			<p className="content" dangerouslySetInnerHTML={{ __html: slide.content }}></p>
		</div>
		<div className="imgbox">
			<img className="btn_img" src={circle_btn}/>
			<img className="arrow_right_btn" src={arrow_right}/>
		</div>
		</div>
	);
	
	const renderCustomSlide_three = (slide, index) => (
		<div className={`slider_3_card_3 card card-body ${index % 2 === 0 ? 'cardbg3' : ''}`}>
			<div className="d-flex justify-content-between">
			<p className="ct">{slide.title}</p>
			{/* Conditionally rendering image source */}
			<img src={index % 2 === 0 ? trending : trending_dark} width={15} height={15} alt="Trending Icon" />
			</div>
			<p className="content" dangerouslySetInnerHTML={{ __html: slide.content }}></p>
			<a href="#">Read case Studies</a>
		</div>
	);  
	
	const renderCustomSlide_five = (slide, index) => (
		<>
		<h5 className="child_title_ mt-3">{slide.title} <img src={slide.img} width={20} height={20} /></h5>
		<p className="cp_">{slide.content}</p>
		<div className="circle_"></div>
		</>
	);  
  
  
	return(
		<>
	
	<section className="services_1">
	
		<div className="container">
			
			<div className="row align-items-center">
				<div className="col-12 col-md-1 col-lg-1">
					<a href="/growthedge/"><FontAwesomeIcon icon={faChevronLeft} /> Back</a>
				</div>
				<div className="col-12 col-md-9 col-lg-9"></div>
				<div className="col-12 col-md-2 col-lg-2 position-relative">
			        <FontAwesomeIcon icon={faChevronDown} className="position-absolute text-white" style={{ top: '50%', right: '20px', transform: 'translateY(-50%)' }} />

					<select className="form-select">
					<option>Services 1</option>
					<option>Services 2</option>
					<option>Services 3</option>
					<option>Services 4</option>
					</select>					
				</div>
				
				<div className="col-12 col-lg-6 col-md-6">
					
					<h4>See Through<img src={trending} width={50} height={50} /></h4>
					<h5>Business with advanced analytics</h5>
					<h3>[ DATA ANALYTICS ]</h3>
					<p>Indulge in the assurance of authenticity with our collection of BIS Hallmarked Jewellery, a testament to trust, proudly offered by Kalyan Jewellers. Indulge in the assurance of authenticity with our collection of BIS </p>
					<a href="/" className="btn shadow-sm">Subscribe for service</a>
					
				</div>
				
				<div className="col-12 col-lg-6 col-md-6">
					<img src={services}/>
				</div>				
				
			</div>
			
		</div>
	
	</section>
	
	<section className="services_2">
	
		<div className="container">
			<div className="row align-items-center">
				<div className="col-12 col-lg-6 col-md-6">
					<h4>Introduction</h4>
					<h5>Solution for <span>performance</span></h5>
					<div className="card p-2">
						<img src={analytics}/>
						<h5>Figures will help you figure out!</h5>
						<p>was said by a Wise man Once -</p>
					</div>
					<p>Create data sets that drive your organization desired directions. Set up a flow to visualize you business into one. daily check points that will help you stay guided on your path of Success</p>
				</div>
				<div className="col-12 col-lg-6 col-md-6">
					<h4>Why <span>Anaytics</span></h4>
					<h5>A Bird eye view of your business!</h5>
					<p><span>How will it help us determine the pointers?</span></p>
					<p>Indulge in the assurance of authenticity with our collection of BIS Hallmarked Jewellery, a testament to trust, proudly offered by Kalyan Jewellers. Indulge in the assurance of authenticity with our collection of BIS </p>
					<a href="/">Read more</a>
					<p><span>Why would an Business needs data visualization?</span></p>
					<p>We recognize that decisions can evolve. If you find the need to reconsider, rest assured you can easily return your jewellery within 15 days of purchase.</p>
					<a href="/">Read more</a>
					<p><span>100% Refund?</span></p>
					<p>We recognize that decisions can evolve. If you find the need to reconsider, rest assured you can easily return your jewellery within 15 days of purchase.</p>
					<a href="/">Read more</a>
					<p><span>100% Refund?</span></p>
					<p>We recognize that decisions can evolve. If you find the need to reconsider, rest assured you can easily return your jewellery within 15 days of purchase.</p>
					<a href="/">Read more</a>
				</div>
				
			</div>
		</div>
	
	</section>

	<section className="homepage_4 mt-0 pt-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_4_title_1">Read <span>Use Cases</span></h4>
			<p className="homepage_4_sub_title_1">Based on Real incidents</p>
		
			<div className="rightbox">
				<a className="mt-0 text-white">View All Use Cases</a> <img src={keyboard_double_arrow_right} width={20} height={20} />
			</div>
			
		</div>
		
		<CustomSwiper 
		slides={slidesData4}
		spaceBetween={10}
		slidesPerView={6}
		renderSlide={renderCustomSlide_three}
		swiperClassName="swiper1"
		swiperClassChildName="swipe_slider_1"
		swiper_navClass="custom-navigation1"
		swiperContainer=""
		/>
	
	</section>

	<section className="services_3 mb-4">
	
		<div className="container">
		
			<div className="row">
			
				<div className="col-12 col-md-6 col-lg-6">
					
					<h4 className="h4_title">Our <span>Deliverables</span></h4>
					<h5 className="h5_title">Coz we believe in delivering the best</h5>
					
<div className="accordion">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
</div>					
					
				</div>
				
				<div className="col-12 col-md-6 col-lg-6">
					<div className="row">
					<div className="col-lg-4 col-md-4 col-12">
						<h4 className="services_3_h4__">What Sets Us</h4>
						<h3 className="services_3_h3__">Apart</h3>
					</div>
					<div className="col-lg-4 col-md-4 col-12">
						
						<div className="sb_card5__ p-2">
								<img src={user} width={50} height={50} />
								<h4>user centric</h4>
								<p>Our mission is to harness the power of data analytic</p>
						</div>
						
					</div>
					<div className="col-lg-4 col-md-4 col-12">
						<div className="sb_card6_ p-2">
								<img src={zap} width={50} height={50} />
								<h4>user centric</h4>
								<p>Our mission is to harness the power of data analytic</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-12">
						<div className="sb_card3 p-2">
								<img src={sun} width={50} height={50} />
								<h4>VALUES</h4>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-12">
						<div className="sb_card4 p-2">
								<img src={sunrise} width={50} height={50} />
								<h4 className="h4">SCALEABILITY</h4>
								<p>Our mission is to harness the power of data analytic</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-12">
						<div className="sb_card5_ p-2">
								<img src={zap} width={50} height={50} />
								<h4>SCALEABILITY</h4>
								<p>Our mission is to harness the power of data analytic</p>
						</div>
					</div>					

					</div>
				
				</div>
				
			</div>
			
		</div>
	
	</section>

	<section className="homepage_4 mt-0 pt-0 mb-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_4_title_1">How We</h4>
				
		</div>
		
		<CustomSwiper 
		slides={slidesData5}
		spaceBetween={15}
		slidesPerView={4}
		renderSlide={renderCustomSlide_five}
		swiperClassName="swiper1"
		swiperClassChildName="swipe_slider_1"
		swiper_navClass="custom-navigation"
		swiperContainer=""
		/>
	
	</section>	

	<section className="homepage_4 mt-0 pt-0">
	
		<div className="container mt-0">
			<br/>
			<h4 className="homepage_4_title_1">Our Services</h4>
			<p className="homepage_4_sub_title_1">Complete Solution for your D2C sector</p>
		
			<div className="rightbox">
				<a className="mt-0 text-white" onClick={handleShow_two}>View All Services</a> <img src={keyboard_double_arrow_right} width={20} height={20} />
			</div>
			
		</div>
		
		<CustomSwiper 
		slides={slidesData2}
		spaceBetween={15}
		slidesPerView={5}
		renderSlide={renderCustomSlide_second}
		swiperClassName="swiper1"
		swiperClassChildName=""
		swiper_navClass="custom-navigation1"
		swiperContainer=""
		/>
	
	</section>

      <div
        className={`modal fade ${showBottomsheet_two ? 'show' : ''}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showBottomsheet_two ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog modal-dialog-scrollable modal-fullscreen modal-bottom-sheet  modal-bottom-sheet1" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title text-center">All Services (11)</h5>
              <span type="button" className="btn-close1" onClick={handleClose_two}>
				<FontAwesomeIcon icon={faXmark} />
			  </span>
            </div>

            <div className="modal-body p-0">
	
			<div className="container">
			
				<div className="row pb-4">
					
					{slidesData2.map((slide, index) => (
						<div className="col-12 col-lg-4 col-md-4 p-2">
						<div className="slider_2_card_2_services">
						<img
						className="bgi1"
						src={index % 2 === 0 ? excel_bg1 : excel_bg2} // Alternates between excel_bg1 and excel_bg2
						alt="Background"
						/>
						<img className="bgi2" src={slide.img}/>
						<div className="contentbox">
							<p className="title">{slide.title}</p>
							<p className="content" dangerouslySetInnerHTML={{ __html: slide.content }}></p>
						</div>
						</div>
						</div>
					))}
					
				</div>
				
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
	);
};

export default Services;