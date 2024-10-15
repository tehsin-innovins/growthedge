import React, { useState,useEffect } from 'react';
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
import abouti from '../assets/about/about.png'; // Import the PNG file
import aprove from '../assets/about/aprove.png'; // Import the PNG file
import team1 from '../assets/about/team1.png'; // Import the PNG file
import team2 from '../assets/about/team2.png'; // Import the PNG file
import team3 from '../assets/about/team3.png'; // Import the PNG file
import life from '../assets/about/life.png'; // Import the PNG file
import $ from 'jquery';
import './Pages.css';
import CustomSwiper from '../components/CustomSwiper';

function AboutUs() {
  const [about,setAbout] = useState([]);
  const [SERdata,setSERdata] = useState([]);
  const [Udata,setUdata] = useState([]);
  const [Teams,setTeams] = useState([]);  
  const [lifedata,setLifedata] = useState([]);
  const folderPath = 'https://shareittofriends.com/demo/growthedge/uploads/';  
  
  useEffect(() => {
    // Fetch data from API
    fetch('https://shareittofriends.com/demo/growthedge/aboutus.php')  // Replace with your actual API URL
      .then((response) => response.json())  // Parse JSON
      .then((data) => {
        setAbout(data.aboutdata);  // Store the fetched data
		setSERdata(data.serdata);
		setUdata(data.usecase);
		setTeams(data.teams);	
		setLifedata(data.lifedata);	
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);  // Empty array means this runs once when the component mounts
  
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

  	const slidesData5 = [
		{ img: process1, title: 'Deep Dive', content: 'Expertise in data analytics, UI/UX design, and tech development. Through' },	
		{ img: process2, title: 'Define', content: 'Expertise in data analytics, UI/UX design, and tech development. Through' },	
		{ img: process3, title: 'Dream', content: 'Expertise in data analytics, UI/UX design, and tech development. Through' },	
		{ img: process4, title: 'Design', content: 'Expertise in data analytics, UI/UX design, and tech development. Through' },
		{ img: process1, title: 'Deploy', content: 'Expertise in data analytics, UI/UX design, and tech development. Through' },	
		{ img: process3, title: 'Dream', content: 'Expertise in data analytics, UI/UX design, and tech development. Through' },
	];	
  
  const slidesData6 = [
		{ img: team1,position: 'Data Scientist',department:'Data Sci', title: 'mudit gupta', content: 'Our Vision is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to enable' },	
		{ img: team2,position: 'Data Scientist',department:'Data Sci', title: 'mudit gupta', content: 'Our Vision is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to enable' },	
		{ img: team3,position: 'Data Scientist',department:'Data Sci', title: 'mudit gupta', content: 'Our Vision is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to enable' },
		{ img: team1,position: 'Data Scientist',department:'Data Sci', title: 'mudit gupta', content: 'Our Vision is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to enable' },	
		{ img: team2,position: 'Data Scientist',department:'Data Sci', title: 'mudit gupta', content: 'Our Vision is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to enable' },	
		{ img: team3,position: 'Data Scientist',department:'Data Sci', title: 'mudit gupta', content: 'Our Vision is to harness the power of data analytics, elevate user experiences through intuitive UI/UX design, and drive technological advancements to enable our clients to enable' },		
	];
  
  	const renderCustomSlide_second = (slide, index) => (
		<div className="slider_2_card_2">
		<img
		className="bgi1"
		src={index % 2 === 0 ? excel_bg1 : excel_bg2} // Alternates between excel_bg1 and excel_bg2
		alt="Background"
		/>
		<img className="bgi2" src={`https://shareittofriends.com/demo/growthedge/uploads/services/${slide.slider_img}`}/>
		<div className="contentbox">
			<p className="title">{slide.service_name}</p>
			<p className="content" dangerouslySetInnerHTML={{ __html: slide.slider_desc }}></p>
		</div>
		<a href={`services/${slide.slug}`} className="imgbox">
			<img className="btn_img" src={circle_btn}/>
			<img className="arrow_right_btn" src={arrow_right}/>
		</a>
		</div>
	);	
	
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
	
	const renderCustomSlide_five = (slide, index) => (
		<>
		<h5 className="child_title_ mt-3">{slide.title} <img src={slide.img} width={20} height={20} /></h5>
		<p className="cp_">{slide.content}</p>
		<div className="circle_"></div>
		</>
	);

	const renderCustomSlide_team = (slide, index) => (
		<div className="slider_6_card_6">
			<div className="contentbox align-items-center justify-content-between d-flex">
				{slide.name}
				<a>{slide.position}</a>
			</div>
			<img src={`${folderPath}teams/${slide.pic}`}/>
			<p><span>{slide.department}</span></p>
			<p>{slide.content}</p>
		</div>
	);	
	
	return(
		<>
	<br/>
	<section className="services_2 mt-4 mt-4">
	
		<div className="container">
			<div className="row">
				<div className="col-12 col-lg-6 col-md-6">
					<h4>{about.section_2_title}</h4>
					<h5>{about.section_2_subtitle}</h5>
					<div className="card p-2">
						<img src={`${folderPath}aboutus_page/${about.section_2_card_img}`}/>
						<h5>{about.section_2_card_title}</h5>
						<p>{about.section_2_card_content}</p>
					</div>
				</div>
				<div className="col-12 col-lg-6 col-md-6 mt-2">
					<br/>
					<br/>
					<p className="abpt"><span>{about.section_2_m_title1}</span></p>
					<p className="abpb">{about.section_2_m_subtitle1}</p>
					<p>{about.section_2_m_content1}</p>
					<p className="abpt"><span>{about.section_2_m_title2}</span></p>
					<p className="abpb">{about.section_2_m_subtitle2}</p>
					<p>{about.section_2_m_content2}</p>
					<p className="abpt"><span>{about.section_2_m_title3}</span></p>
					<p className="abpb">{about.section_2_m_subtitle3}</p>
					<p>{about.section_2_m_content3}</p>

				</div>
				
			</div>
		</div>
	
	</section>
	
	<section className="services_1 pt-2">
	
		<div className="container">
			
			<div className="row align-items-center">
				
				<div className="col-12 col-lg-6 col-md-6">
					
					<h4>{about.section_1_title} <img src={`${folderPath}aboutus_page/${about.section_1_title_img}`} width={50} height={50} /></h4>
					<h5>{about.section_1_subtitle}</h5>
					<h3>{about.section_1_childtitle}</h3>
					<p>{about.section_1_content}</p>
					<a href="/" className="btn shadow-sm">Subscribe for service</a>
					
				</div>
				
				<div className="col-12 col-lg-6 col-md-6">
					<img src={`${folderPath}aboutus_page/${about.section_1_sideimg}`}/>
				</div>				
				
			</div>
			
		</div>
	
	</section>
	

	
	<section className="homepage_4 mt-0 pt-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_4_title_1">Read <span>Use Cases</span></h4>
			<p className="homepage_4_sub_title_1">Based on Real incidents</p>
		
			<div className="rightbox">
				<a href="projects" className="mt-0 text-white">View All Use Cases</a> <img src={keyboard_double_arrow_right} width={20} height={20} />
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
		
			<h4 className="homepage_4_title_1">Meet <span>Our Team</span></h4>
			<p className="homepage_4_sub_title_1">Pioneers in D2C Platforms</p>
			
		</div>
		
		<CustomSwiper 
		slides={Teams}
		spaceBetween={20}
		slidesPerView={3}
		renderSlide={renderCustomSlide_team}
		swiperClassName="swiper"
		swiperClassChildName=""
		swiper_navClass="custom-navigation"
		swiperContainer="container"
		/>
	
	</section>

	<section className="services_4">

		<div className="container">
			<h4>Life<span>@ D2c</span></h4>
			
			<div className="row">
				{lifedata.map((slide, index) => (
				<div className="col-lg-3 col-md-3 col-12 p-2">
					<div className="row align-items-center p-0">
						<div className="col-6 col-lg-1 col-md-1">
							<h3>{slide.title}</h3>
						</div>
						<div className="col-6 col-lg-3 col-md-3">
							<img src={`${folderPath}common-sliders/${slide.img}`} />
						</div>
						<div className="col-12 col-lg-8 col-md-8 p-0">
							<h5>{slide.subtitle}</h5>
						</div>						
						<div className="col-12 col-lg-12 col-md-12">
							<p>{slide.content}</p>
						</div>
					</div>
				</div>
				))}
				
			</div>
			
		</div>

	</section>
	
	<section className="services_5">
		
		<div className="container">
		
			<div className="col-lg-12 col-md-12 col-12 mt-4 mb-4">
					
					<h4 className="h4__" dangerouslySetInnerHTML={{ __html: about.section_5_title }} ></h4>
					<h5 className="h5__">{about.section_5_subtitle}</h5>
					
					<div className="row row-cols-1 row-cols-md-5 g-4">
						
						<div className="col">
							<div className="sb_card3 p-2">
									<img src={`${folderPath}aboutus_page/${about.section_5_card1_img}`} width={50} height={50} />
									<h4>{about.section_5_card1_title}</h4>
							</div>							
						</div>	

						<div className="col">
							<div className="sb_card4_ p-2">
								<img src={`${folderPath}aboutus_page/${about.section_5_card2_img}`} width={50} height={50} />
								<h4 className="h4_">{about.section_5_card2_title}</h4>
								<p>{about.section_5_card2_content}</p>
							</div>					
						</div>	
						
						<div className="col">
							<div className="sb_card6__ p-2">
									<img src={`${folderPath}aboutus_page/${about.section_5_card3_img}`} width={50} height={50} />
									<h4 className="">{about.section_5_card3_title}</h4>
									<p>{about.section_5_card3_content}</p>
							</div>		
						</div>							

						<div className="col">
							<div className="sb_card5___ p-2">
								<img src={`${folderPath}aboutus_page/${about.section_5_card4_img}`} width={50} height={50} />
								<h4>{about.section_5_card4_title}</h4>
								<p>{about.section_5_card4_content}</p>
							</div>								
						</div>	

						<div className="col">
							<div className="sb_card6___ p-2">
								<img src={`${folderPath}aboutus_page/${about.section_5_card5_img}`} width={50} height={50} />
								<h4 className="h4_">{about.section_5_card5_title}</h4>
								<p>{about.section_5_card5_content}</p>
							</div>					
						</div>	
						
					</div>
					
			</div>

		</div>
	
	</section>

	<section className="homepage_4 mt-0 pt-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_4_title_1_">Our Services</h4>
			<p className="homepage_4_sub_title_1_">Complete Solution for your D2C sector</p>
		
			<div className="rightbox">
				<a className="mt-0 text-white" onClick={handleShow_two}>View All Services</a> <img src={keyboard_double_arrow_right} width={20} height={20} />
			</div>
			
		</div>
		
		<CustomSwiper 
		slides={SERdata}
		spaceBetween={15}
		slidesPerView={5}
		renderSlide={renderCustomSlide_second}
		swiperClassName="swiper1"
		swiperClassChildName="m-1"
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
					
					{SERdata.map((slide, index) => (
						<div className="col-12 col-lg-4 col-md-4 p-2">
						<div className="slider_2_card_2_services">
						<a href={`services/${slide.slug}`}><img
						className="bgi1"
						src={index % 2 === 0 ? excel_bg1 : excel_bg2} // Alternates between excel_bg1 and excel_bg2
						alt="Background"
						/>
						<img className="bgi2" src={`${folderPath}services/${slide.slider_img}`}/>
						</a>
						<div className="contentbox">
							<p className="title">{slide.service_name}</p>
							<p className="content" dangerouslySetInnerHTML={{ __html: slide.slider_desc }}></p>
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

export default AboutUs;