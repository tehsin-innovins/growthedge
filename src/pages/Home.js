import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
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
import $ from 'jquery';
import './Pages.css';
import CustomSwiper from '../components/CustomSwiper';


function Home() {

  const [showBottomsheet_one, setshowBottomsheet_one] = useState(false);

  const handleClose_one = () => setshowBottomsheet_one(false);
  const handleShow_one = () => setshowBottomsheet_one(true);


  const [showBottomsheet_two, setshowBottomsheet_two] = useState(false);

  const handleClose_two = () => setshowBottomsheet_two(false);
  const handleShow_two = () => setshowBottomsheet_two(true);

	const slidesData1 = [
		{ img: solution1, title: 'BREAKTHROUGHS', content: '<span>lifelong</span> learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, a' },	
		{ img: solution2, title: 'BUSINESS INSIGHTS', content: '<span>lifelong</span> learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech development. Through ongoing ' },	
		{ img: solution3, title: 'SHIFT FROM THE ODDS', content: '<span>lifelong</span> learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech development. Through ongoing ' },	
		{ img: solution4, title: 'USE CASES', content: '<span>lifelong</span> learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech development. Through ongoing ' },
		{ img: solution5, title: 'OUT OF THE BOX', content: '<span>lifelong</span> learners, continuously seeking to expand our knowledge, sion, training, and personal development initiative' },	
		{ img: solution6, title: 'SUSTAINABILITY', content: '<span>lifelong</span> learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, training, and personal development initiative' },	
	];
	
	const slidesData2 = [
		{ img: excel1, title: 'growth Marketing', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: excel2, title: 'E Commerce Management', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: excel3, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: excel1, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },
		{ img: excel3, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: excel1, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },
	];	
	
	const slidesData3 = [
		{ img: work1, title: 'Adaptive approach', content: '<span>lifelong</span> learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech development. Through ongoing' },	
		{ img: work2, title: 'into the zone', content: '<span>lifelong</span> learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech development. Through ongoing' },	
		{ img: work3, title: 'TRANSPARENCY', content: '<span>lifelong</span> learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech development. Through ongoing' },	
		{ img: work4, title: 'PRO ACTIVE', content: '<span>lifelong</span> learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech development. Through ongoing' },
		{ img: work5, title: 'REAL LIFE EXPOSURE', content: '<span>lifelong</span> learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech development. Through ongoing' },	
		{ img: work6, title: 'REAL LIFE EXPOSURE', content: '<span>lifelong</span> learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech development. Through ongoing' },
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
		{ img: blog, uimg: starbucks, title: 'growth Marketing', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: blog, uimg: starbucks, title: 'E Commerce Management', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: blog, uimg: starbucks, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: blog, uimg: starbucks, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },
		{ img: blog, uimg: starbucks, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },	
		{ img: blog, uimg: starbucks, title: 'Market Product FiT', content: 'All scope of work to deployment marketing strategies included' },
	];		
	
	const slidesData6 = [
		{ img: testimonials, title: 'mudit gupta', content: 'Our Vision is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to enable' },	
		{ img: testimonials, title: 'mudit gupta', content: 'Our Vision is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to enable' },	
		{ img: testimonials, title: 'mudit gupta', content: 'Our Vision is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to enable' },	
		{ img: testimonials, title: 'mudit gupta', content: 'Our Vision is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to enable' },
		{ img: testimonials, title: 'mudit gupta', content: 'Our Vision is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to enable' },	
		{ img: testimonials, title: 'mudit gupta', content: 'Our Vision is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to enable' },
	];		

  // Function to render each slide
	const renderCustomSlide_first = (slide, index) => (
		<div className="slider_1_card_1">
		<img src={slide.img}/>
		<p className="title">{slide.title}</p>
		<p className="content" dangerouslySetInnerHTML={{ __html: slide.content }}></p>
		</div>
	);
	
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
	
	const renderCustomSlide_five = (slide, index) => (
		<div className="slider_5_card_5">
			<div className="row">
				<div className="col-lg-4 col-md-4">
					<img src={slide.img}/>
				</div>
				<div className="col-lg-8 col-md-8">				
					<p className="title">{slide.title}</p>
					<p className="content" dangerouslySetInnerHTML={{ __html: slide.content }}></p>
				</div>
			</div>
		</div>
	);	

	return(
		<>

	<section className="homepage_1">
	
		<div className="container">
			
			<div className="row">
				
				<div className="col-md-6 col-lg-6 col-12">
					<img src={hero_circle} alt="hero_circle" className="sideimg "/>
				</div>
	
				<div className="col-md-6 col-lg-6 col-12">
				
					<div className="sidecontent">
	
						<h4>One Stop <img src={trending} width={20} height={20} /></h4>
						<h5>Solution for performance</h5>
						<h4 className="mt-0"><span>[ On the Go ]</span></h4>
						<p>Indulge in the assurance of authenticity with our collection of BIS Hallmarked Jewellery, a testament to trust, proudly offered by Kalyan Jewellers. Indulge in the assurance of authenticity with our collection of BIS</p>
					
						<div className="row mt-4">
		
							<div className="col-lg-10">
								<p className="f16 mt-2"><b>Schedule a <span>Free</span> Session with the think tank</b></p>						
							</div>
							
							<div className="col-lg-2">
								<p className="mins f4 mb-0">30:00Mins</p>
								<small className="mins-small f10 mt-0">Duration</small>
							</div>
							
							<div className="col-lg-12 col-md-12 col-12">
								<div className="card p-3 rounded-4 mt-3">
									<div className="row">
										<div className="col-2">
											<img src={hero_introduction} alt="hero_introduction" class="rounded-3" className="hero_introduction" />
										</div>
										<div className="col-10">
											<p className="fsp1">Introduction : Chai pe Charcha</p>
											<p className="fsp2">Meet the founder and let us know about your D2C ventures</p>
										</div>							
										<div className="col-12">
	
											<ul class="list-group mt-4">
											<li class="list-group-item d-flex justify-content-between align-items-center mt-2 mb-2">
												Meeting the Individuals
												<small className="">15 mins</small>
											</li>
											<li class="list-group-item d-flex justify-content-between align-items-center mt-2 mb-2">
												Ice Breakers
												<small className="">15 mins</small>
											</li>
											<li class="list-group-item d-flex justify-content-between align-items-center mt-2 mb-2">
												Client Briefing 
												<small className="">30 mins</small>
											</li>  
											<li class="list-group-item d-flex justify-content-end border-0 align-items-right">
												<button className="btn btn-light rounded-4" onClick={handleShow_one}>Schedule a Call</button>
											</li>    
											</ul>
										
										</div>
									</div>
								</div>
							</div>
						
						</div>
					
					</div>
				
				</div>
				
			</div>
		
		</div>
	
	</section>
	
	
	<section className="homepage_2 mt-0 pt-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_2_title_1">What We <span>Thrive On</span></h4>
			<p className="homepage_2_sub_title_1">Solution for performance</p>
			
		</div>
		
		<CustomSwiper 
		slides={slidesData1}
		spaceBetween={10}
		slidesPerView={5}
		renderSlide={renderCustomSlide_first}
		swiperClassName="swiper1"
		swiperClassChildName="swipe_slider_1"
		swiper_navClass="custom-navigation"
		swiperContainer=""
		/>
	
	</section>
	
	<section className="homepage_3">
	
		<div className="container">
		
			<div className="row">
				
				<div className="col-md-4 col-lg-4">
					<h4 className="title text-white">Reimagine the Process <img src={trending} width={20} height={20} /></h4>
					<div className="d-flex">
						<h1 className="sub_title">3+</h1>
						<h4 className="child_title">Experience</h4>
					</div>
					<p className="pt">lifelong learners, continuously seeking to expand our knowledge, skills, and expertise in data analytics, UI/UX design, and tech development. Through</p>
				</div>

				<div className="col-md-4 col-lg-4">
					<img src={process} className="imgbox"/>
				</div>

				<div className="col-md-4 col-lg-4">
					<img src={process} className="imgbox"/>
				</div>
				
			</div>
			
			<div className="contentbox">
			
				<div className="container">
					
					<div className="row">
					
						<div className="col-12">
							<h4 className="title">Industry proven Approach</h4>
							<h5 className="sub_title">Conversion Driven approaches</h5>
						</div>
						
						<div className="col-lg-3 col-md-3">
							<h5 className="child_title_">Discover <img src={process1} width={20} height={20} /></h5>
							<p className="cp_">Expertise in data analytics, UI/UX design, and tech development. Through</p>
							<div className="circle_"></div>
						</div>

						<div className="col-lg-3 col-md-3">
							<h5 className="child_title_">Define <img src={process2} width={20} height={20} /></h5>
							<p className="cp_">Expertise in data analytics, UI/UX design, and tech Expertise in data analytics,</p>
							<div className="circle_"></div>							
						</div>
						
						<div className="col-lg-3 col-md-3">
							<h5 className="child_title_">Dream <img src={process3} width={20} height={20} /></h5>
							<p className="cp_">Expertise in data analytics Expertise in data analytics,Expertise in data analytics,</p>
							<div className="circle_"></div>						
						</div>

						<div className="col-lg-3 col-md-3">
							<h5 className="child_title_">Dream <img src={process4} width={20} height={20} /></h5>
							<p className="cp_">Expertise in data analytics, UI/UX design, and tech development. Through</p>
							<div className="circle_"></div>						
						</div>						
						
					</div>
				
				</div>
			
			</div>
			
		</div>
	
	</section>	

	<section className="homepage_4 mt-0 pt-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_4_title_1">We Excel in</h4>
			<p className="homepage_4_sub_title_1">Conversion Driven approaches</p>
		
			<div className="rightbox align-items-center">
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
	
	<section className="homepage_5">
	
		<div className="container">
			
			<div className="row">
				
				<div className="col-lg-10">
					<div className="row">
						<div className="col-lg-2">
							<h4>What <br/> we </h4>
							<h3 className="h3">Deliver</h3>
						</div>
						<div className="col-lg-5 con">
							<img src={deliver1}/>
							<div className="content">
								<img src={sunrise}/>
								<h5 className="text-white">Concrete findings</h5>
								<p className="text-white">Our mission is to harness the power of data analytic</p>
							</div>
						</div>
						<div className="col-lg-5 con">
							<img src={deliver2}/>
							<div className="content">
								<h5 className="text-dark-title">DATA VISULIZATION</h5>
								<p className="text-dark-content">our mission is to harness the power of data analytic</p>
							</div>
						</div>
						<div className="col-lg-5 con">
							<img src={deliver4}/>
							<div className="content">
								<img src={zap}/>
								<h5 className="text-dark-title">OPTIMISED SOLUTION</h5>
								<p className="text-dark-content">Our mission is to harness the power of data analytic</p>
							</div>
						</div>
						<div className="col-lg-5 con">
							<img src={deliver5}/>
							<div className="content">
								<img src={sunrise}/>
								<h5 className="text-white">AMPILIFIEd OUTPUTS</h5>
								<p className="text-white">Our mission is to harness the power of data analytic</p>
							</div>
						</div>
						<div className="col-lg-2">
							<h4>Conversion driven</h4>
							<h3>Solutions</h3>
						</div>	
					</div>						
				</div>
				<div className="col-lg-2 con">
					<img src={deliver3}/>
					<div className="content">
							<img src={sunrise}/>
							<h5 className="text-white">SCALEABILITY</h5>
							<p className="text-white">Our mission is to harness the power of data analytic</p>
					</div>
				</div>
				
			</div>
		
		</div>
	
	</section>

	<section className="homepage_6">
	
		<div className="container">
		
			<div className="row">
			
				<div className="col-lg-4 col-md-4">
					
					<h4 className="mt-4">How do we <span>Collaborate</span></h4>
					<p className="sub_title">Opposite minds attracts, Like minds Amplify</p>
					<h5>client meets</h5>
					<p className="mb-0 child_title">weekly kt & whenever you needs us</p>
					<p>Program with from understanding the goals of stakeholders, market product fit, data visualizations setups to end guaranteed conversions</p>
					<h5>remote</h5>
					<p className="mb-0 child_title">5 days a week</p>
					<p>Program with from understanding the goals of stakeholders, market product fit, data visualizations setups to end guaranteed conversions</p>
					
				</div>
				
				<div className="col-lg-8 col-md-8">
				
					<div className="cardbox">
						
						<div className="row">
							
							<div className="col-lg-7 col-md-7">
								<h4>Meet our Creative</h4>
								<img className="hoomans" src={hoomans}/>
								<p>Robust Team with Agile workflow, updated on trends, filled with enthusiasm, seeking for daily challenges with a goal to provide intuitive Customer Experience and with enough potential to turn ideas into reality</p>
								<a href="#">know more about us</a>
							</div>

							<div className="col-lg-5 col-md-5">
							</div>
							
						</div>
						
						<div className="cardbox_img">
							<img className="user_circle" src={user_circle}/>
						</div>
					</div>
					
				</div>
			
			</div>
		
		</div>
	
	</section>

	<section className="same_boat">
	
		<div className="container">
			
			<div className="row">
				
				<div className="col-lg-12">
					
					<h4 className="title">Are we on the <span>Same Boat</span></h4>
					<h5 className="sub_title">To continue this Journey together?</h5>
					
				</div>
				
				<div className="col-md-3 col-lg-3 con">
					<div className="sb_card1 card border-0 shadow-sm card-body">
						<h3 className="title1">Mission</h3>
						<h6 className="title2">INITILAISED : 2024</h6>		
						<p>Our Mission is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to thrive in a rapidly evolving digital landscape.</p>
						<ul>
							<li>RAPID TECH DEVELOPMENT</li>
							<li>AGILE FUNCTIONALITY</li>
							<li>STRATEGIC MANAGEMENT</li>
						</ul>
						<a href="#">JOIN US TO BE THE ONE</a>
					</div>
				</div>
				
				<div className="col-md-3 col-lg-3 con">
					<div className="sb_card2 card border-0 shadow-sm card-body">
						<h3 className="title1">Mission</h3>
						<h6 className="title2">INITILAISED : 2024</h6>		
						<p>Our Mission is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to thrive in a rapidly evolving digital landscape.</p>
						<ul>
							<li>RAPID TECH DEVELOPMENT</li>
							<li>AGILE FUNCTIONALITY</li>
							<li>STRATEGIC MANAGEMENT</li>
						</ul>
						<a href="#">JOIN US TO BE THE ONE</a>
					</div>
				</div>
				
				<div className="col-lg-3 col-md-3">
				
					<div className="row">
						
						<div className="col-12 col-lg-6 col-md-6 con">
							
							<div className="sb_card3 p-2">
								<img src={sun} width={50} height={50} />
								<h4>VALUES</h4>
							</div>
							
						</div>
						
						<div className="col-12 col-lg-6 col-md-6 con">
							
							<div className="sb_card4 p-2">
								<img src={sunrise} width={50} height={50} />
								<h4 className="h4_title">SCALEABILITY</h4>
								<p>Our mission is to harness the power of data analytic</p>
							</div>
							
						</div>

						<div className="col-12 col-lg-6 col-md-6 con">
							
							<div className="sb_card5 p-2">
								<img src={user} width={50} height={50} />
								<h4>user centric</h4>
								<p>Our mission is to harness the power of data analytic</p>
							</div>
							
						</div>
						
						<div className="col-12 col-lg-6 col-md-6 con">
							
							<div className="sb_card6 p-2">
								<img src={zap} width={50} height={50} />
								<h4>SCALEABILITY</h4>
								<p>Our mission is to harness the power of data analytic</p>
							</div>
							
						</div>
						
					</div>
				
				</div>
				
				<div className="col-12 col-lg-3 col-md-3">
				
					<div className="row">
						
						<div className="col-lg-12 col-md-12 con">
							
							<div className="sb_card7 p-2">
								<img src={sunrise_dark} width={50} height={50} />
								<h4>SCALEABILITY</h4>
								<p>Our mission is to harness the power of data analytic</p>
							</div>
							
						</div>
						
						<div className="col-12 col-lg-6 col-md-6 con">
							
							<div className="sb_card5 p-2">
								<img src={user} width={50} height={50} />
								<h4>user centric</h4>
								<p>Our mission is to harness the power of data analytic</p>
							</div>
							
						</div>
						
						<div className="col-12 col-lg-6 col-md-6 con">
							
							<div className="sb_card6 p-2">
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

	<section className="homepage_2 mt-0 pt-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_2_title_1">Why Work  <span>With us</span></h4>
			<p className="homepage_2_sub_title_1">Experience the Impeccable progress</p>
			
		</div>
		
		<CustomSwiper 
		slides={slidesData3}
		spaceBetween={10}
		slidesPerView={5}
		renderSlide={renderCustomSlide_first}
		swiperClassName="swiper1"
		swiperClassChildName="swipe_slider_1"
		swiper_navClass="custom-navigation"
		swiperContainer=""
		/>
	
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

	<section className="homepage_4 mt-0 pt-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_4_title_1">Testimonials</h4>
			<p className="homepage_4_sub_title_1">Experience provides exposure, here are few of use cases</p>
	
			
		</div>
		
		<CustomSwiper 
		slides={slidesData6}
		spaceBetween={20}
		slidesPerView={3}
		renderSlide={renderCustomSlide_five}
		swiperClassName="swiper"
		swiperClassChildName=""
		swiper_navClass="custom-navigation"
		swiperContainer="container"
		/>
	
	</section>
	
	<section className="goal_section">
		<div className="imgbox">
		<div className="img-item1">
			<p><span>Entrepreneur</span></p>
			<p>Keen Enthusiasts for MAX Outputs</p>
		</div>
		
		<div className="img-item2">
			<p><span>Marketers</span></p>
			<p>Keen Enthusiasts for MAX Outputs</p>
		</div>
		
		<div className="img-item3">
			<p><span>Engineers</span></p>
			<p>Keen Enthusiasts for MAX Outputs</p>
		</div>
		
		<div className="img-item4">
			<p><span>Marketers</span></p>
			<p>Keen Enthusiasts for MAX Outputs</p>
		</div>
		
		<img src={goal} alt="goal" width={180}/>
		</div>
		<h4>ONE GOAL</h4>
		<h5>CONVERSION</h5>

	</section>

      <div
        className={`modal fade ${showBottomsheet_one ? 'show' : ''}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showBottomsheet_one ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog modal-dialog-scrollable modal-bottom-sheet  modal-bottom-sheet1" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title text-center">Set up <span>Free Session</span></h5>
              <span type="button" className="btn-close1" onClick={handleClose_one}>
				<FontAwesomeIcon icon={faXmark} />
			  </span>
            </div>

            <div className="modal-body">
				<form action="">
					<lable className="text-white">Drop your Queries</lable>
					<div className="mb-3 mt-3">
						<input type="date" className="custom-input form-control" id="sdate" placeholder="Select Date" name="sdate"/>
					</div>
					<lable className="text-white">Select your preferred timings</lable>
					<div className="row">
						<div className="col-lg-5 col-md-5">
							<div className="mb-3 mt-3">
								
								<input type="time" className="custom-input1 form-control" id="sdate" placeholder="Select Date" name="sdate"/>
							</div>
						</div>
						<div className="col-lg-2 col-md-2">
							<div className="mb-3 mt-3">
								<p className="text-center text-white pt-2 mt-2">to</p>
							</div>
						</div>
						<div className="col-lg-5 col-md-5">
							<div className="mb-3 mt-3">
								<input type="time" className="custom-input1 form-control" id="sdate" placeholder="Select Date" name="sdate"/>
							</div>
						</div>
					</div>
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
					<button type="submit" className="btn mb-4">Submit</button>
				</form>
            </div>

          </div>
        </div>
      </div>

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

export default Home;