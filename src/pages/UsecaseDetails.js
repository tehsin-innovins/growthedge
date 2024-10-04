import {useParams,useNavigate } from "react-router-dom";
import React, { useState,useEffect } from 'react';
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


function UsecaseDetails() {
	
	const { slug } = useParams();
	const [usdata,setUsdata] = useState([]);
	const [ucbdata,setUcbdata] = useState([]);	
	const [Udata,setUdata] = useState([]);  
	const [Bdata,setBdata] = useState([]);  
	const navigate = useNavigate(); // Hook to navigate programmatically
	
	const folderPath = 'https://shareittofriends.com/demo/growthedge/uploads/';  
	
	useEffect(() => {
    // Fetch data from API with the slug parameter
    fetch(`https://shareittofriends.com/demo/growthedge/usecase-single.php?slug=${slug}`)  // API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Handle HTTP errors
        }
        return response.json();  // Parse JSON
      })
      .then((data) => {
        setUsdata(data.usdata);  // Store the fetched data
        setUcbdata(data.ucbdata);
        setUdata(data.usecase);
        setBdata(data.blog);
		if (!data.usdata) {
          navigate('/projects');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error); // Handle any errors
      });
	}, [slug,navigate]);  // Runs whenever slug changes	
	
		const renderCustomSlide_three = (slide, index) => (
		<div className={`slider_3_card_3 card card-body ${index % 2 === 0 ? 'cardbg3' : ''}`}>
			<div className="d-flex justify-content-between">
			<p className="ct">{slide.slider_small_title}</p>
			{/* Conditionally rendering image source */}
			<img src={index % 2 === 0 ? trending : trending_dark} width={15} height={15} alt="Trending Icon" />
			</div>
			<p className="content" dangerouslySetInnerHTML={{ __html: slide.slider_title }}></p>
			<a href={`usecase/${slide.slug}`} >Read case Studies</a>
		</div>
	);

	const renderCustomSlide_four = (slide, index) => (
		<a style={{ textDecoration: 'none' }} href={`blog/${slide.slug}`} className="slider_4_card_4 card">
			<img src={`${folderPath}blogs/${slide.slider_img}`}/>
			<div className={`content ${index % 2 === 0 ? 'cardbg4' : ''}`}>
				<img className="shadow-sm" src={`${folderPath}blogs/${slide.slider_icon}`} width={50} height={50} />	
				<h5>{slide.slider_title}</h5>
				<p>{slide.slider_desc}
				</p>
				<div className="ul">
				
				{(() => {
							// Check if home is defined and has the property section_5_card1_multiple_content
							if (typeof slide.slider_tags === 'string') {
							const slider_tags = slide.slider_tags.split(',');
							return slider_tags.map((content2, index) => (
								<small className="li" key={index}>{content2.trim()}</small> // Trim whitespace
							));
							} else {
							return <small></small>; // Fallback when content is undefined
							}
				})()}
				</div>
			</div>
		</a>
	);

	return(
		<>
		
	<section className="BlogDetails_1">
		
		<div className="container mt-2">
			
			<div className="row align-items-center">
				<div className="col-12 col-md-1 col-lg-1">
					<a href="/projects" className="a"><FontAwesomeIcon icon={faChevronLeft} /> Back</a>
				</div>
				<div className="col-12 col-md-9 col-lg-9"></div>
				<div className="col-12 col-md-2 col-lg-2 position-relative"></div>
				
			</div>

			<div className="row">
				
				<div className="col-lg-6 col-md-6 mt-4">
					
					<h4>{usdata.section_1_title}</h4>
					
					<div className="d-flex justify-content-between table_contain">
					
						Last Updated : {usdata.created}
						
						<span>{usdata.section_1_read_time}</span>
					
					</div>
					
					<li className="bullet_style m-1 mt-4 ml-0 mb-4">Summary</li>
					
					<p className="li_style m-1 mt-2 ml-0" dangerouslySetInnerHTML={{ __html: usdata.section_1_summary_text_1 }}></p>
					<p className="li_style m-1 mt-2 ml-0" dangerouslySetInnerHTML={{ __html: usdata.section_1_summary_text_2 }}></p>
					<p className="li_style m-1 mt-2 ml-0" dangerouslySetInnerHTML={{ __html: usdata.section_1_summary_text_3 }}></p>
					<p className="li_style m-1 mt-2 ml-0" dangerouslySetInnerHTML={{ __html: usdata.section_1_summary_text_4 }}></p>
					<p className="li_style m-1 mt-2 ml-0" dangerouslySetInnerHTML={{ __html: usdata.section_1_summary_text_5 }}></p>

					<p className="m-1 mt-4 ml-0">{usdata.section_1_content}</p>
					
				
				</div>				

				<div className="col-lg-6 col-md-6 mt-4">
					<img src={`${folderPath}usecases/${usdata.section_1_sideimg}`}  className="mt-0 pt-0"/>
				</div>				

				<div className="col-lg-6 col-md-6 mt-4">
					<h4 className="mt-4">{usdata.section_2_title}</h4>
					<h5 className="mb-0"  dangerouslySetInnerHTML={{ __html: usdata.section_2_subtitle }}></h5>
					<img src={`${folderPath}usecases/${usdata.section_2_sideimg}`} />
				</div>				
				
				<div className="col-lg-6 col-md-6 mt-4 pt-1">
					<br/>
					<br/>
					<br/>
					<h5 className="mt-4"><span>{usdata.section_2_multiple_title_1}</span></h5>				
					<h6 className="mt-1 mb-1 m-0">{usdata.section_2_multiple_subtitle_1}</h6>
					<p className="mt-1 mb-1 m-0">{usdata.section_2_multiple_content_1}</p>
					<a href="{usdata.section_2_multiple_link_1}" className="linkbtn">Read more</a>

					<h5 className="mt-4"><span>{usdata.section_2_multiple_title_2}</span></h5>				
					<h6 className="mt-1 mb-1 m-0">{usdata.section_2_multiple_subtitle_2}</h6>
					<p className="mt-1 mb-1 m-0">{usdata.section_2_multiple_content_2}</p>
					<a href="{usdata.section_2_multiple_link_2}" className="linkbtn">Read more</a>

					<h5 className="mt-4"><span>{usdata.section_2_multiple_title_3}</span></h5>				
					<h6 className="mt-1 mb-1 m-0">{usdata.section_2_multiple_subtitle_3}</h6>
					<p className="mt-1 mb-1 m-0">{usdata.section_2_multiple_content_3}</p>
					<a href="{usdata.section_2_multiple_link_3}" className="linkbtn">Read more</a>
					
				</div>				

				<div className="col-lg-6 col-md-6 mt-4 mb-4">
					<h4 className="mt-4">{usdata.section_3_title1}</h4>
					<h5 className="mb-1 m-0" dangerouslySetInnerHTML={{ __html: usdata.section_3_subtitle1 }}></h5>
					<h5 className="mt-1 mb-1 m-0"><span>{usdata.section_3_title2}</span></h5>				
					<h6 className="mt-1 mb-1 m-0">{usdata.section_3_subtitle2}</h6>
					<p className="mt-1 mb-1 m-0">{usdata.section_3_content}</p>
					<a href={usdata.section_3_link} className="linkbtn">Read more</a>					
				</div>				
				
				<div className="col-lg-6 col-md-6 mt-4 mb-4">
					<img src={`${folderPath}usecases/${usdata.section_3_sideimg}`} className="mimg"/>
				</div>				
				
				<div className="col-lg-12 col-md-12 mt-4">
					<h4	>{usdata.section_4_title1}</h4>
					<h5 className="m-0"  dangerouslySetInnerHTML={{ __html: usdata.section_4_subtitle1 }}></h5>
					<img src={`${folderPath}usecases/${usdata.section_4_sideimg}`} />
				</div>										

				<div className="col-lg-12 col-md-12 mb-4">
					<h5 className="mt-4"><span>{usdata.section_4_title2}</span></h5>				
						<h6>{usdata.section_4_subtitle2}</h6>
						<p className="mt-1 mb-1 m-0">{usdata.section_4_content}</p>
					<a href={usdata.section_4_link} className="linkbtn">Read more</a>
				</div>

				
				<div className="col-lg-12 col-md-12 mt-4 mb-2">
					<h4 className="mt-4"><span>{usdata.section_5_title}</span></h4>
					<h5>{usdata.section_5_subtitle}</h5>
				</div>
				
				<div className="row">
					
					<div className="col-lg-4 col-md-4 col-12">
						<h6>{usdata.section_5_multiple_title_1}</h6>
						<p>{usdata.section_5_multiple_content_1}</p>
						<a href={usdata.section_5_multiple_link_1} className="linkbtn">Read more</a>						
					</div>

					<div className="col-lg-4 col-md-4 col-12">
						<h6>{usdata.section_5_multiple_title_2}</h6>
						<p>{usdata.section_5_multiple_content_2}</p>
						<a href={usdata.section_5_multiple_link_2} className="linkbtn">Read more</a>						
					</div>
					
					<div className="col-lg-4 col-md-4 col-12">
						<h6>{usdata.section_5_multiple_title_3}</h6>
						<p>{usdata.section_5_multiple_content_3}</p>
						<a href={usdata.section_5_multiple_link_3} className="linkbtn">Read more</a>						
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
				<a href="/projects" className="mt-0 text-white">View All Use Cases</a> <img src={keyboard_double_arrow_right} width={20} height={20} />
			</div>
			
		</div>
		
		<CustomSwiper 
		slides={Udata}
		spaceBetween={10}
		slidesPerView={4}
		renderSlide={renderCustomSlide_three}
		swiperClassName="swiper1"
		swiperClassChildName=""
		swiper_navClass="custom-navigation1"
		swiperContainer=""
		/>
	
	</section>	
	
	<section className="homepage_4 mt-0 pt-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_4_title_1">Read <span>Blogs</span></h4>
			<p className="homepage_4_sub_title_1">Based on Real incidents</p>
		
			<div className="rightbox">
				<a href="/projects" className="mt-0 text-white">View All Blogs</a> <img src={keyboard_double_arrow_right} width={20} height={20} />
			</div>
			
		</div>
		
		<CustomSwiper 
		slides={Bdata}
		spaceBetween={10}
		slidesPerView={4}
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
					<p className="title">{ucbdata.uc_section_card_title}</p>
					<p className="p">{ucbdata.uc_section_card_content}</p>
					<p className="sub_title">{ucbdata.uc_section_card_subtitle}</p>
					<a className="btn d-block">Subscribe to blogs <img src={send} width={15} height={15} /></a>
					</div>
				</div>
			</div>
			</div>
		</div>
		
		</>
	);
};

export default UsecaseDetails;