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
import send from '../assets/use_case/send.svg'; // Import the PNG file
import use_case from '../assets/use_case/use_case.png'; // Import the PNG file
import sun from '../assets/home/sun.svg'; // Import the PNG file
import user from '../assets/home/user.svg'; // Import the PNG file
import $ from 'jquery';
import './Pages.css';
import CustomSwiper from '../components/CustomSwiper';
import Pagination from '../components/Pagination';

function UseCase() {
	const [is_blog, setIs_blog] = useState("d-none");
	const [is_Use_Cases,setis_Use_Cases] = useState("");
	const [is_blog_active, setIs_blog_active] = useState("");
	const [is_Use_Cases_active,setis_Use_Cases_active] = useState("btn-active");
	const [ucbdata,setUcbdata] = useState([]);
	const [Udata,setUdata] = useState([]);  
	const [Bdata,setBdata] = useState([]);  
  
	const folderPath = 'https://shareittofriends.com/demo/growthedge/uploads/';  
	
	useEffect(() => {
		// Fetch data from API
		fetch('https://shareittofriends.com/demo/growthedge/usecase.php')  // Replace with your actual API URL
		.then((response) => response.json())  // Parse JSON
		.then((data) => {
			setUcbdata(data.ucbdata);  // Store the fetched data
			setUdata(data.usecase);
			setBdata(data.blog);
		})
		.catch((error) => {
			console.error('Error fetching data:', error);
		});
	}, []);  // Empty array means this runs once when the component mounts

	
	const setBlog = () => {
    setIs_blog("d-none");
    setis_Use_Cases("");
	setIs_blog_active("");
	setis_Use_Cases_active("btn-active");
	};

	const setUseCase = () => {
		setIs_blog("");
		setis_Use_Cases("d-none");
		setis_Use_Cases_active("");
		setIs_blog_active("btn-active");
	};


	const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8; // Set how many items you want to show per page

    // Calculate total pages
    const totalBPages = Math.ceil(Bdata.length / postsPerPage);
	const totalUPages = Math.ceil(Udata.length / postsPerPage);

    // Get current posts based on the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentBPosts = Bdata.slice(indexOfFirstPost, indexOfLastPost);
	const currentUPosts = Udata.slice(indexOfFirstPost, indexOfLastPost);

    // Function to handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
	
	return(
		<>
		
		<section className="use_cases_1">
		
			<div className="container">
				
				<div className="row align-items-center">
		
					<div className="col-12 col-lg-7 col-md-7">
						
						<h4 className="h4">{ucbdata.section_1_title} <img src={`${folderPath}ucb_page/${ucbdata.section_1_title_img}`} width={20} height={20} /></h4>
						<h5 className="h5">{ucbdata.section_1_subtitle}</h5>
						<h3 className="h3">{ucbdata.section_1_childtitle}</h3>
						
						<ul className="ul1">
							<li>Summary</li>
							<li>Index</li>
						</ul>
						
						<div className="row">
						
							<div className="col-lg-6 col-md-6 col-12">
								<div className="row">
								<div className="col-6 col-md-3 col-lg-3">
									<h4 className="h4_">{ucbdata.section_1_m_title1}</h4>
									<p className="p_">{ucbdata.section_1_m_content1}</p>
								</div>
								<div className="col-6 col-md-3 col-lg-3">
									<h4 className="h4_">{ucbdata.section_1_m_title2}</h4>
									<p className="p_">{ucbdata.section_1_m_content2}</p>
								</div>
								<div className="col-6 col-md-3 col-lg-3 m-0 p-0">
									<h4 className="h4_">{ucbdata.section_1_m_title3}</h4>
									<p className="p_">{ucbdata.section_1_m_content3}</p>
								</div>
								<div className="col-6 col-md-3 col-lg-3 m-0 p-0">
									<h4 className="h4_">{ucbdata.section_1_m_title4}</h4>
									<p className="p_">{ucbdata.section_1_m_content4}</p>
								</div>								
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12">
							</div>							
						
						</div>
						
						<p className="p mb-4">{ucbdata.section_1_content}</p>
						
						<a className="btn btn-active mt-0">DOWNLOAD FREE COPY</a>
						
						
					</div>
					
					<div className="col-12 col-lg-5 col-md-5">
						<img src={`${folderPath}ucb_page/${ucbdata.section_1_sideimg}`} className="mainimg"/>
					</div>
		
					<div className="col-lg-4 col-md-4">
						<div className="d-flex">
						<a className={`flex-fill btn ${is_Use_Cases_active}`} onClick={setBlog}>Use Cases</a>
						<a className={`flex-fill btn ${is_blog_active}`} onClick={setUseCase}>Blog</a>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-3">
					</div>
					
					<div className="col-lg-5 col-md-5">
						<div className="input-group">
							<input type="text" className="form-control form-control-blog-usecase" placeholder="Search Blogs/ Use Cases" />
							<span className="input-group-text"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
						</div>
					</div>
					
						
				</div>
			
			</div>
		
		</section>		
		
		<section className={`use_cases mt-4 mb-4 ${is_Use_Cases}`}>

			<div className="container">
				
				<div className="row">
				
					<div className="col-md-12 col-lg-12 mt-0 mb-2">
						<h4>Read <span>Use Cases</span></h4>
						<h5>Based on Real incidents</h5>
					</div>
					
					{currentUPosts.map((slide, index) => (
					<div className="col-md-3 col-lg-3 mt-2 mb-2 pb-0">
						<div className={`slider_3_card_3_ card card-body ${index % 2 === 0 ? 'cardbg3' : ''}`}>
							<div className="d-flex justify-content-between">
							<p className="ct">{slide.slider_small_title}</p>
							{/* Conditionally rendering image source */}
							<img src={index % 2 === 0 ? trending : trending_dark} width={15} height={15} alt="Trending Icon" />
							</div>
							<p className="content" dangerouslySetInnerHTML={{ __html: slide.slider_title }}></p>
							<a href={`/usecase/${slide.slug}`}>Read case Studies</a>
						</div>		
					</div>
					 ))}
				
				</div>

			<Pagination 
				currentPage={currentPage} 
				totalPages={totalUPages} 
				paginate={paginate} 
			/>
	  
			
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

		</section>		
		
		<section className={`blogs mt-4 mb-4 ${is_blog}`}>

			<div className="container">
				
				<div className="row">
				
					<div className="col-md-12 col-lg-12 mb-2">
						<h4>Read <span>Blogs</span></h4>
						<h5 className="h5">Based on Real incidents</h5>
					</div>
					
					{currentBPosts.map((slide, index) => (
					<div className="col-md-3 col-lg-3 mt-2 mb-2 pb-0">
					<a href={`/blog/${slide.slug}`}>
						<div className="slider_4_card_4_ card">
							<img src={`${folderPath}blogs/${slide.slider_img}`}/>
							<div className={`content ${index % 2 === 0 ? 'cardbg4_' : ''}`}>
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
						</div>
					</a>
					</div>
					 ))}
				
				</div>
				
				<Pagination 
				currentPage={currentPage} 
				totalPages={totalBPages} 
				paginate={paginate} 
				/>

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
					<p className="title">{ucbdata.b_section_card_title}</p>
					<p className="p">{ucbdata.b_section_card_content}</p>
					<p className="sub_title">{ucbdata.b_section_card_subtitle}</p>
					<a className="btn d-block">Subscribe to blogs <img src={send} width={15} height={15} /></a>
					</div>
				</div>
			</div>
			</div>
			
			</div>

		</section>				
		
		</>
	);
};

export default UseCase;