import {useParams} from "react-router-dom";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faMagnifyingGlass,faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
import b4 from '../assets/use_case/b1.svg'; // Import the PNG file
import b3 from '../assets/use_case/b2.svg'; // Import the PNG file
import b2 from '../assets/use_case/b3.svg'; // Import the PNG file
import b1 from '../assets/use_case/b4.svg'; // Import the PNG file
import bl4 from '../assets/use_case/bl1.png'; // Import the PNG file
import bl3 from '../assets/use_case/bl2.png'; // Import the PNG file
import bl2 from '../assets/use_case/bl3.png'; // Import the PNG file
import bl1 from '../assets/use_case/bl4.png'; // Import the PNG file
import send from '../assets/use_case/send.svg'; // Import the PNG file
import use_case from '../assets/use_case/use_case.png'; // Import the PNG file
import sun from '../assets/home/sun.svg'; // Import the PNG file
import user from '../assets/home/user.svg'; // Import the PNG file
import $ from 'jquery';
import './Pages.css';
import CustomSwiper from '../components/CustomSwiper';
import Pagination from '../components/Pagination';


function BlogDetails() {

	const slidesData4 = [
		{ title: 'Did you know?', content: 'Personalized Recommendations<small>could help to</small> [ Spike ] your conversion by 20% <small>Compared to traditional recommendation</small>' },	
		{ title: 'Did you know?', content: 'TruthWorthy Websites <small>tend to have healthier conversion by Using</small> <span>[ Maximum ]</span> potential of Marketing <small>Compared to traditional recommendation</small>' },	
		{ title: 'Did you know?', content: 'TruthWorthy Websites <small>tend to have healthier conversion by Using</small> <span>[ Maximum ]</span> potential of Marketing <small>Compared to traditional recommendation</small>' },	
		{ title: 'Did you know?', content: 'TruthWorthy Websites <small>tend to have healthier conversion by Using</small> <span>[ Maximum ]</span> potential of Marketing <small>Compared to traditional recommendation</small>' },
		{ title: 'Did you know?', content: 'TruthWorthy Websites <small>tend to have healthier conversion by Using</small> <span>[ Maximum ]</span> potential of Marketing <small>Compared to traditional recommendation</small>' },	
		{ title: 'Did you know?', content: 'TruthWorthy Websites <small>tend to have healthier conversion by Using</small> <span>[ Maximum ]</span> potential of Marketing <small>Compared to traditional recommendation</small>' },
	];	
	
	const slidesData5 = [
		{ img: blog, uimg: starbucks, title: 'growth Marketing', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: blog, uimg: starbucks, title: 'E Commerce Management', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: blog, uimg: starbucks, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: blog, uimg: starbucks, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },
		{ img: blog, uimg: starbucks, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: blog, uimg: starbucks, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },
	];
	
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

	const renderCustomSlide_four = (slide, index) => (
		<div className="slider_4_card_4 card">
			<img src={slide.img}/>
			<div className={`content ${index % 2 === 0 ? 'cardbg4' : ''}`}>
				<img className="shadow-sm" src={starbucks} width={50} height={50} />	
				<h5>Brand Name</h5>
				<p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, Borem ipsum dolor sit amet
				</p>
				<div className="ul">
				<small className="li">#Segments</small>
				<small className="li">#Industry</small>
				<small className="li">#DataVisulization</small>
				<small className="li">#SuccessRatio</small>
				</div>
			</div>
		</div>
	);

	return(
		<>
		
	<section className="BlogDetails_1">
		
		<div className="container mt-2">
			
			<div className="row align-items-center">
				<div className="col-12 col-md-1 col-lg-1">
					<a href="/growthedge/projects" className="a"><FontAwesomeIcon icon={faChevronLeft} /> Back</a>
				</div>
				<div className="col-12 col-md-9 col-lg-9"></div>
				<div className="col-12 col-md-2 col-lg-2 position-relative"></div>
				
			</div>

			<div className="row">
				
				<div className="col-lg-6 col-md-6 mt-4">
					
					<h4>Business with advanced analytics and its perks for business cases</h4>
					
					<div className="d-flex justify-content-between table_contain">
					
						Last Updated : 07 july 2024
						
						<span>3 Min Read</span>
					
					</div>
					
					<li className="bullet_style m-1 mt-4 ml-0 mb-4">Summary</li>
					
					<p className="li_style m-1 mt-2 ml-0"><span>01.</span> Discover</p>
					<p className="li_style m-1 mt-2 ml-0"><span>02.</span> Define</p>
					<p className="li_style m-1 mt-2 ml-0"><span>03.</span> Design</p>
					<p className="li_style m-1 mt-2 ml-0"><span>04.</span> Develop</p>
					<p className="li_style m-1 mt-2 ml-0"><span>05.</span> Deliver</p>

					<p className="m-1 mt-4 ml-0">Indulge in the assurance of authenticity with our collection of BIS Hallmarked Jewellery, a testament to trust, proudly offered by Kalyan Jewellers.</p>
					
				
				</div>				

				<div className="col-lg-6 col-md-6 mt-4">
					<img src={bl4}  className="mt-0 pt-0"/>
				</div>				

				<div className="col-lg-6 col-md-6 mt-4">
					<h4 className="mt-4">Introduction</h4>
					<h5 className="mb-0">Solution for <span>performance</span></h5>
					<img src={bl3} />
				</div>				
				
				<div className="col-lg-6 col-md-6 mt-4 pt-1">

					<h5 className="mt-4"><span>Entrepreneur</span></h5>				
					<h6 className="mt-1 mb-1 m-0">Keen Enthusiasts for MAX Outputs</h6>
					<p className="mt-1 mb-1 m-0">We bring an experience from working in an agile framework dynamic yet experienced professionals moving out of traditional work flow to grow and make people grow off the Grid.</p>
					<a className="linkbtn">Read more</a>
					
					<h5 className="mt-2"><span>Engineers</span></h5>				
						<h6>The Change which we expect to see in the world</h6>
						<p>We have been in this constant evolving phase in our journeys, amazing experiences that shaped us and we took the learnings and remolded our selves. We would be a stream in river rather then a Dam of concrete.</p>
						<a className="linkbtn">Read more</a>

					<h5 className="mt-2"><span>Marketers</span></h5>				
						<h6>Deep Divers | Exactly as eager as you are</h6>
						<p>Our Cursorily has no Limits, Keen learners intend to learn you business from scratch we might build different perspectives based on case studies, but we always feel it always good to step back and have a wider look at our Art works.</p>
						<a className="linkbtn">Read more</a>

					
				</div>				

				<div className="col-lg-6 col-md-6 mt-4 mb-4">
					<h4 className="mt-4">Introduction</h4>
					<h5 className="mb-1 m-0">Solution for <span>performance</span></h5>
					<h5 className="mt-1 mb-1 m-0"><span>Entrepreneur</span></h5>				
					<h6 className="mt-1 mb-1 m-0">Keen Enthusiasts for MAX Outputs </h6>
					<p className="mt-1 mb-1 m-0">We bring an experience from working in an agile framework dynamic yet experienced professionals moving out of traditional work flow to grow and make people grow off the Grid. We bring an experience from working in an agile framework dynamic yet experienced professionals moving out of traditional work flow to grow and make people grow off the Grid.We bring an experience from working in an agile framework dynamic yet experienced professionals moving out of traditional work flow to grow and make people grow off the Grid.We bring an experience from working in an agile framework dynamic yet experienced professionals moving out of traditional work flow to grow and make people grow off the Grid.We bring an experience from working in an agile framework dynamic yet experienced professionals moving out of traditional work flow to grow and make people grow off the Grid.</p>
					<a className="linkbtn">Read more</a>					
				</div>				
				
				<div className="col-lg-6 col-md-6 mt-4 mb-4">
					<img src={bl2} className="mimg"/>
				</div>				
				
				<div className="col-lg-12 col-md-12 mt-4">
					<h4	>Introduction</h4>
					<h5 className="m-0">Solution for <span>performance</span></h5>
					<img src={bl1} />
				</div>										

				<div className="col-lg-12 col-md-12 mb-4">
					<h5 className="mt-4"><span>Entrepreneur</span></h5>				
						<h6>Keen Enthusiasts for MAX Outputs</h6>
						<p className="mt-1 mb-1 m-0">We bring an experience from working in an agile framework dynamic yet experienced professionals moving out of traditional work flow to grow and make people grow off the Grid. We bring an experience from working in an agile framework dynamic yet experienced professionals moving out of traditional work flow to grow and make people grow off the Grid.We bring an experience from working in an agile framework dynamic yet experienced professionals moving out of traditional work flow to grow and make people grow off the Grid.We bring an experience from working in an agile framework dynamic yet experienced professionals moving out of traditional work flow to grow and make people grow off the Grid.We bring an experience from working in an agile framework dynamic yet experienced professionals moving out of traditional work flow to grow and make people grow off the Grid.</p>
					<a className="linkbtn">Read more</a>
				</div>

				
				<div className="col-lg-12 col-md-12 mt-4 mb-2">
					<h4 className="mt-4"><span>Why Anaytics</span></h4>
					<h5>A Bird eye view of your business!</h5>
				</div>
				
				<div className="row">
					
					<div className="col-lg-4 col-md-4 col-12">
						<h6>How will it help us determine the pointers?</h6>
						<p>Indulge in the assurance of authenticity with our collection of BIS Hallmarked Jewellery, a testament to trust, proudly offered by Kalyan Jewellers. Indulge in the assurance of authenticity with our collection of BIS</p>
						<a className="linkbtn">Read more</a>						
					</div>

					<div className="col-lg-4 col-md-4 col-12">
						<h6>Why would an Business needs data visualization?</h6>
						<p>We recognize that decisions can evolve. If you find the need to reconsider, rest assured you can easily return your jewellery within 15 days of purchase.</p>
						<a className="linkbtn">Read more</a>						
					</div>
					
					<div className="col-lg-4 col-md-4 col-12">
						<h6>100% Refund?</h6>
						<p>We recognize that decisions can evolve. If you find the need to reconsider, rest assured you can easily return your jewellery within 15 days of purchase.</p>
						<a className="linkbtn">Read more</a>						
					</div>
					
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
	
	<section className="homepage_4 mt-0 pt-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_4_title_1">Read <span>Blogs</span></h4>
			<p className="homepage_4_sub_title_1">Based on Real incidents</p>
		
			<div className="rightbox">
				<a className="mt-0 text-white">View All Blogs</a> <img src={keyboard_double_arrow_right} width={20} height={20} />
			</div>
			
		</div>
		
		<CustomSwiper 
		slides={slidesData5}
		spaceBetween={10}
		slidesPerView={6}
		renderSlide={renderCustomSlide_four}
		swiperClassName="swiper1"
		swiperClassChildName=""
		swiper_navClass="custom-navigation1"
		swiperContainer=""
		/>
	
	</section>	

		<div className="container">
			<div className="bannerbox">
			<div className="row">
				<div className="col-md-5 col-lg-5 col-12">
				<div className="box">
				<div className="imgbox">
					<img src={b1} className="b1" />
					<img src={b2} className="b2" />
					<img src={b3} className="b3" />
					<img src={b4} className="b4" />
				</div>
				</div>
				</div>
				<div className="col-md-7 col-lg-7 col-12">
					<div className="contain mt-1">
					<p className="title">How to Analyse website performance and monitor key Parameters?</p>
					<p className="p">lifelong learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech development. Through expertise in data analytics, UI/UX design, and tech development. Through </p>
					<p className="sub_title">Upcoming Cases Study: 24/09/2024</p>
					<a className="btn d-block">Subscribe to blogs <img src={send} width={15} height={15} /></a>
					</div>
				</div>
			</div>
			</div>
		</div>
		
		</>
	);
};

export default BlogDetails;