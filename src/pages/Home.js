import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import goal from '../assets/home/goal.png'; // Import the PNG file
import trending from '../assets/home/trending.svg'; // Import the SVG file
import trending_dark from '../assets/home/trending_dark.svg'; // Import the SVG file
import hero_circle from '../assets/home/hero-circle.png'; // Import the PNG file
import hero_introduction from '../assets/home/hero-introduction.png'; // Import the PNG file
import process from '../assets/home/process.png'; // Import the PNG file
import excel_bg1 from '../assets/home/excel-bg1.png'; // Import the PNG file
import excel_bg2 from '../assets/home/excel-bg2.png'; // Import the PNG file
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
import user_circle from '../assets/home/user-circle.png'; // Import the PNG file
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
  const [home,setHome] = useState([]);
  const [Testimonials,setTestimonials] = useState([]);
  const [WTdata,setWTdata] = useState([]);
  const [WYdata,setWYdata] = useState([]);
  const [SERdata,setSERdata] = useState([]);
  const [Udata,setUdata] = useState([]);  
  const [Bdata,setBdata] = useState([]);  
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
	schdate: '',
	schfromtime: '',
	schtotime: '',
    schname: '',
    schmobile: '',
    schemail: '',
    schmsg: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  
	const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        // Validation
		
		if (!formData.schdate || formData.schdate.trim() === '') {
            newErrors.schdate = 'Date is required';
        }
		
		if (!formData.schfromtime || formData.schfromtime.trim() === '') {
            newErrors.schfromtime = 'From Time is required';
        }
		
		if (!formData.schtotime || formData.schtotime.trim() === '') {
            newErrors.schtotime = 'To Time is required';
        }
		
		if (!formData.schname || formData.schname.trim() === '') {
            newErrors.schname = 'Name is required';
        }

        if (!formData.schmobile || formData.schmobile.trim() === '') {
            newErrors.schmobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.schmobile)) {
            newErrors.schmobile = 'Mobile number must be 10 digits';
        }

        if (!formData.schemail || formData.schemail.trim() === '') {
            newErrors.schemail = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.schemail)) { // Basic email format validation
            newErrors.schemail = 'Invalid email format';
        }

        if (!formData.schmsg || formData.schmsg.trim() === '') {
            newErrors.schmsg = 'Message is required';
        }

        // If there are validation errors, update the error state and focus on the first error field
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            // Focus the first invalid input field
            const firstErrorKey = Object.keys(newErrors)[0];
            document.getElementById(firstErrorKey).focus();

            return; // Stop submission
        }

        // If validation passes, clear errors and proceed with the fetch request
        setErrors({});

        try {
            const response = await fetch('https://shareittofriends.com/demo/growthedge/sch_common.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            //console.log(data);

            if (data.status === 'success') {
                alert(data.message);
				setFormData({
					schdate: '',
					schfromtime: '',
					schtotime: '',
					schname: '',
					schmobile: '',
					schemail: '',
					schmsg: ''
				});
            } else {
                alert('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was a problem submitting the form.');
        }
    };
	
  const folderPath = 'https://shareittofriends.com/demo/growthedge/uploads/';  
  
  useEffect(() => {
    // Fetch data from API
    fetch('https://shareittofriends.com/demo/growthedge/home.php')  // Replace with your actual API URL
      .then((response) => response.json())  // Parse JSON
      .then((data) => {
        setHome(data.homedata);  // Store the fetched data
		setTestimonials(data.testimonials);
		setWTdata(data.wtdata);
		setWYdata(data.wydata);
		setSERdata(data.serdata);
		setUdata(data.usecase);
		setBdata(data.blog);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);  // Empty array means this runs once when the component mounts
  
  const [showBottomsheet_one, setshowBottomsheet_one] = useState(false);

  const handleClose_one = () => setshowBottomsheet_one(false);
  const handleShow_one = () => setshowBottomsheet_one(true);


  const [showBottomsheet_two, setshowBottomsheet_two] = useState(false);

  const handleClose_two = () => setshowBottomsheet_two(false);
  const handleShow_two = () => setshowBottomsheet_two(true);		

  // Function to render each slide
	const renderCustomSlide_first = (slide, index) => (
		<div className="slider_1_card_1">
		<img src={`${folderPath}what-we-thrive-on-slider/${slide.pic}`}/>
		<p className="title">{slide.title}</p>
		<p className="content" dangerouslySetInnerHTML={{ __html: slide.s_desc }}></p>
		</div>
	);
	
	const renderCustomSlide_first_ = (slide, index) => (
		<div className="slider_1_card_1">
		<img src={`${folderPath}why-work-with-us-slider/${slide.pic}`}/>
		<p className="title">{slide.title}</p>
		<p className="content" dangerouslySetInnerHTML={{ __html: slide.s_desc }}></p>
		</div>
	);
	
	const renderCustomSlide_second = (slide, index) => (
		<div className="slider_2_card_2">
		<img
		className="bgi1"
		src={index % 2 === 0 ? excel_bg1 : excel_bg2} // Alternates between excel_bg1 and excel_bg2
		alt="Background"
		/>
		<img className="bgi2" src={`${folderPath}services/${slide.slider_img}`}/>
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
	
	const renderCustomSlide_five = (slide, index) => (
		<div className="slider_5_card_5">
			<div className="row">
				<div className="col-lg-4 col-md-4">
					<img src={`${folderPath}testimonials/${slide.pic}`} className="testimonials-img"/>
				</div>
				<div className="col-lg-8 col-md-8">				
					<p className="title">{slide.name}</p>
					<p className="content" dangerouslySetInnerHTML={{ __html: slide.msg }}></p>
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
					<img src={`${folderPath}home_page/${home.section_1_sideimg}`} alt="hero_circle" className="sideimg "/>
				</div>
	
				<div className="col-md-6 col-lg-6 col-12">
				
					<div className="sidecontent">
	
						<h4>{home.section_1_title} <img src={`${folderPath}home_page/${home.section_1_title_img}`} width={20} height={20} /></h4>
						<h5>{home.section_1_subtitle}</h5>
						<h4 className="mt-0"><span>{home.section_1_childtitle}</span></h4>
						<p>{home.section_1_content}</p>
					
						<div className="row mt-4">
		
							<div className="col-lg-10">
								<p className="f16 mt-2" dangerouslySetInnerHTML={{ __html: home.sch_title }} ></p>						
							</div>
							
							<div className="col-lg-2">
								<p className="mins f4 mb-0">{home.sch_min}</p>
								<small className="mins-small f10 mt-0">Duration</small>
							</div>
							
							<div className="col-lg-12 col-md-12 col-12">
								<div className="card p-3 rounded-4 mt-3">
									<div className="row">
										<div className="col-2">
											<img src={`${folderPath}home_page/${home.sch_card_img}`} alt="hero_introduction" class="rounded-3" className="hero_introduction" />
										</div>
										<div className="col-10">
											<p className="fsp1">{home.sch_card_title}</p>
											<p className="fsp2">{home.sch_card_content}</p>
										</div>							
										<div className="col-12">
	
											<ul class="list-group mt-4">
											<li class="list-group-item d-flex justify-content-between align-items-center mt-2 mb-2">
												{home.sch_card_m_title1}
												<small className="">{home.sch_card_m_min1}</small>
											</li>
											<li class="list-group-item d-flex justify-content-between align-items-center mt-2 mb-2">
												{home.sch_card_m_title2}
												<small className="">{home.sch_card_m_min2}</small>
											</li>
											<li class="list-group-item d-flex justify-content-between align-items-center mt-2 mb-2">
												{home.sch_card_m_title3}
												<small className="">{home.sch_card_m_min3}</small>
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
		slides={WTdata}
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
					<h4 className="title text-white">{home.section_2_title1} <img src={`${folderPath}home_page/${home.section_2_title_img}`} width={20} height={20} /></h4>
					<div className="d-flex">
						<h1 className="sub_title">{home.section_2_count}</h1>
						<h4 className="child_title">{home.section_2_subtitle1}</h4>
					</div>
					<p className="pt">{home.section_2_content}</p>
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
							<h4 className="title">{home.section_2_title2}</h4>
							<h5 className="sub_title">{home.section_2_subtitle2}</h5>
						</div>
						
						<div className="col-lg-3 col-md-3">
							<h5 className="child_title_">{home.section_2_m_title1} <img src={`${folderPath}home_page/${home.section_2_m_icon1}`} width={20} height={20} /></h5>
							<p className="cp_">{home.section_2_m_content1}</p>
							<div className="circle_"></div>
						</div>

						<div className="col-lg-3 col-md-3">
							<h5 className="child_title_">{home.section_2_m_title2} <img src={`${folderPath}home_page/${home.section_2_m_icon2}`} width={20} height={20} /></h5>
							<p className="cp_">{home.section_2_m_content2}</p>
							<div className="circle_"></div>							
						</div>
						
						<div className="col-lg-3 col-md-3">
							<h5 className="child_title_">{home.section_2_m_title3} <img src={`${folderPath}home_page/${home.section_2_m_icon3}`} width={20} height={20} /></h5>
							<p className="cp_">{home.section_2_m_content3}</p>
							<div className="circle_"></div>						
						</div>

						<div className="col-lg-3 col-md-3">
							<h5 className="child_title_">{home.section_2_m_title4} <img src={`${folderPath}home_page/${home.section_2_m_icon4}`} width={20} height={20} /></h5>
							<p className="cp_">{home.section_2_m_content4}</p>
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
								<img src={`${folderPath}home_page/${home.section_3_img1}`}/>
								<h5 className="text-white">{home.section_3_title1}</h5>
								<p className="text-white">{home.section_3_content1}</p>
							</div>
						</div>
						<div className="col-lg-5 con">
							<img src={deliver2}/>
							<div className="content">
								<h5 className="text-dark-title">{home.section_3_title2}</h5>
								<p className="text-dark-content">{home.section_3_content2}</p>
							</div>
						</div>
						<div className="col-lg-5 con">
							<img src={deliver4}/>
							<div className="content">
								<img src={`${folderPath}home_page/${home.section_3_img3}`}/>
								<h5 className="text-dark-title">{home.section_3_title3}</h5>
								<p className="text-dark-content">{home.section_3_content3}</p>
							</div>
						</div>
						<div className="col-lg-5 con">
							<img src={deliver5}/>
							<div className="content">
								<img src={`${folderPath}home_page/${home.section_3_img4}`}/>
								<h5 className="text-white">{home.section_3_title4}</h5>
								<p className="text-white">{home.section_3_content4}</p>
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
							<img src={`${folderPath}home_page/${home.section_3_img5}`}/>
							<h5 className="text-white">{home.section_3_title5}</h5>
							<p className="text-white">{home.section_3_content5}</p>
					</div>
				</div>
				
			</div>
		
		</div>
	
	</section>

	<section className="homepage_6">
	
		<div className="container">
		
			<div className="row">
			
				<div className="col-lg-4 col-md-4">
					
					<h4 className="mt-4" dangerouslySetInnerHTML={{ __html: home.section_4_title1 }} ></h4>
					<p className="sub_title">{home.section_4_subtitle1}</p>
					<h5>{home.section_4_childtitle1}</h5>
					<p className="mb-0 child_title">{home.section_4_child_subtitle1}</p>
					<p>{home.section_4_child_content1}</p>
					<h5>{home.section_4_childtitle2}</h5>
					<p className="mb-0 child_title">{home.section_4_child_subtitle2}</p>
					<p>{home.section_4_child_content2}</p>
					
				</div>
				
				<div className="col-lg-8 col-md-8">
				
					<div className="cardbox">
						
						<div className="row">
							
							<div className="col-lg-7 col-md-7">
								<h4>{home.section_4_card_title}</h4>
								<img className="hoomans" src={`${folderPath}home_page/${home.section_4_card_img}`}/>
								<p>{home.section_4_card_content}</p>
								<a href={home.section_4_card_link}>know more about us</a>
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
					
					<h4 className="title" dangerouslySetInnerHTML={{ __html: home.section_5_title }}></h4>
					<h5 className="sub_title">{home.section_5_subtitle}</h5>
					
				</div>
				
				<div className="col-md-3 col-lg-3 con">
					<div className="sb_card1 card border-0 shadow-sm card-body">
						<h3 className="title1">{home.section_5_card1_title}</h3>
						<h6 className="title2">{home.section_5_card1_subtitle}</h6>		
						<p>{home.section_5_card1_content}</p>
						<ul>
						{(() => {
							// Check if home is defined and has the property section_5_card1_multiple_content
							if (home && typeof home.section_5_card1_multiple_content === 'string') {
							const section_5_card1_multiple_content = home.section_5_card1_multiple_content.split(',');
							return section_5_card1_multiple_content.map((content1, index) => (
								<li key={index}>{content1.trim()}</li> // Trim whitespace
							));
							} else {
							return <li></li>; // Fallback when content is undefined
							}
						})()}
						</ul>
						<a href={home.section_5_card1_link}>JOIN US TO BE THE ONE</a>
					</div>
				</div>
				
				<div className="col-md-3 col-lg-3 con">
					<div className="sb_card2 card border-0 shadow-sm card-body">
						<h3 className="title1">{home.section_5_card2_title}</h3>
						<h6 className="title2">{home.section_5_card2_subtitle}</h6>		
						<p>{home.section_5_card2_content}</p>
						<ul>
						{(() => {
							// Check if home is defined and has the property section_5_card1_multiple_content
							if (home && typeof home.section_5_card2_multiple_content === 'string') {
							const section_5_card2_multiple_content = home.section_5_card2_multiple_content.split(',');
							return section_5_card2_multiple_content.map((content2, index) => (
								<li key={index}>{content2.trim()}</li> // Trim whitespace
							));
							} else {
							return <li></li>; // Fallback when content is undefined
							}
						})()}
						</ul>
						<a href={home.section_5_card2_link}>JOIN US TO BE THE ONE</a>
					</div>
				</div>
				
				<div className="col-lg-3 col-md-3">
				
					<div className="row">
						
						<div className="col-12 col-lg-6 col-md-6 con">
							
							<div className="sb_card3 p-2">
								<img src={`${folderPath}home_page/${home.section_5_card3_img}`} width={50} height={50} />
								<h4>{home.section_5_card3_title}</h4>
							</div>
							
						</div>
						
						<div className="col-12 col-lg-6 col-md-6 con">
							
							<div className="sb_card4 p-2">
								<img src={`${folderPath}home_page/${home.section_5_card4_img}`} width={50} height={50} />
								<h4 className="h4_title">{home.section_5_card4_title}</h4>
								<p>{home.section_5_card4_content}c</p>
							</div>
							
						</div>

						<div className="col-12 col-lg-6 col-md-6 con">
							
							<div className="sb_card5 p-2">
								<img src={`${folderPath}home_page/${home.section_5_card5_img}`} width={50} height={50} />
								<h4>{home.section_5_card5_title}</h4>
								<p>{home.section_5_card5_content}</p>
							</div>
							
						</div>
						
						<div className="col-12 col-lg-6 col-md-6 con">
							
							<div className="sb_card6 p-2">
								<img src={`${folderPath}home_page/${home.section_5_card6_img}`} width={50} height={50} />
								<h4>{home.section_5_card6_title}</h4>
								<p>{home.section_5_card6_content}</p>
							</div>
							
						</div>
						
					</div>
				
				</div>
				
				<div className="col-12 col-lg-3 col-md-3">
				
					<div className="row">
						
						<div className="col-lg-12 col-md-12 con">
							
							<div className="sb_card7 p-2">
								<img src={`${folderPath}home_page/${home.section_5_card7_img}`}  width={50} height={50} />
								<h4>{home.section_5_card7_title}</h4>
								<p>{home.section_5_card7_content}c</p>
							</div>
							
						</div>
						
						<div className="col-12 col-lg-6 col-md-6 con">
							
							<div className="sb_card5 p-2">
								<img src={`${folderPath}home_page/${home.section_5_card8_img}`}   width={50} height={50} />
								<h4>{home.section_5_card8_title}</h4>
								<p>{home.section_5_card8_content}</p>
							</div>
							
						</div>
						
						<div className="col-12 col-lg-6 col-md-6 con">
							
							<div className="sb_card6 p-2">
								<img src={`${folderPath}home_page/${home.section_5_card9_img}`} width={50} height={50} />
								<h4>{home.section_5_card9_title}</h4>
								<p>{home.section_5_card9_content}</p>
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
		slides={WYdata}
		spaceBetween={10}
		slidesPerView={5}
		renderSlide={renderCustomSlide_first_}
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
		
			<h4 className="homepage_4_title_1">Read <span>Blogs</span></h4>
			<p className="homepage_4_sub_title_1">Based on Real incidents</p>
		
			<div className="rightbox">
				<a href="projects" className="mt-0 text-white">View All Blogs</a> <img src={keyboard_double_arrow_right} width={20} height={20} />
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

	<section className="homepage_4 mt-0 pt-0">
	
		<div className="container mt-0">
		
			<h4 className="homepage_4_title_1">Testimonials</h4>
			<p className="homepage_4_sub_title_1">Experience provides exposure, here are few of use cases</p>
	
			
		</div>
		
		<CustomSwiper 
		slides={Testimonials}
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
			<p><span>{home.section_6_childtitle1}</span></p>
			<p>{home.section_6_childcontent1}</p>
		</div>
		
		<div className="img-item2">
			<p><span>{home.section_6_childtitle2}</span></p>
			<p>{home.section_6_childcontent2}</p>
		</div>
		
		<div className="img-item3">
			<p><span>{home.section_6_childtitle3}</span></p>
			<p>{home.section_6_childcontent3}</p>
		</div>
		
		<div className="img-item4">
			<p><span>{home.section_6_childtitle4}</span></p>
			<p>{home.section_6_childcontent4}</p>
		</div>
		
		<img src={goal} alt="goal" width={180}/>
		</div>
		<h4>{home.section_6_title}</h4>
		<h5>{home.section_6_subtitle}</h5>

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
				<form onSubmit={handleSubmit}>
					<lable className="text-white">Select your preferred date</lable>
					<div className="mb-3 mt-3">
						<input type="date" value={formData.schdate} style={{ borderColor: errors.schdate ? 'red' : '' }} onChange={handleChange} className="custom-input form-control" id="schdate" placeholder="Select Date" name="schdate"/>
						{errors.schdate && <span style={{ color: 'white' }}>{errors.schdate}</span>}
					</div>
					<lable className="text-white">Select your preferred timings</lable>
					<div className="row">
						<div className="col-lg-5 col-md-5">
							<div className="mb-3 mt-3">
								
								<input type="time" value={formData.schfromtime} style={{ borderColor: errors.schfromtime ? 'red' : '' }} onChange={handleChange} className="custom-input1 form-control" id="schfromtime" placeholder="Select Date" name="schfromtime"/>
								{errors.schfromtime && <span style={{ color: 'white' }}>{errors.schfromtime}</span>}
							</div>
						</div>
						<div className="col-lg-2 col-md-2">
							<div className="mb-3 mt-3">
								<p className="text-center text-white pt-2 mt-2">to</p>
							</div>
						</div>
						<div className="col-lg-5 col-md-5">
							<div className="mb-3 mt-3">
								<input type="time" value={formData.schtotime} style={{ borderColor: errors.schtotime ? 'red' : '' }} onChange={handleChange} className="custom-input1 form-control" id="schtotime" placeholder="Select Date" name="schtotime"/>
								{errors.schtotime && <span style={{ color: 'white' }}>{errors.schtotime}</span>}
							</div>
						</div>
					</div>
					<div class="mb-3 mt-3">
						<input type="text" value={formData.schname} style={{ borderColor: errors.schname ? 'red' : '' }} onChange={handleChange} className="custom-input form-control" id="schname" placeholder="Your Full Name" name="schname"/>
						{errors.schname && <span style={{ color: 'white' }}>{errors.schname}</span>}
					</div>
					<div class="mb-3 mt-3">
						<input type="text" value={formData.schmobile} style={{ borderColor: errors.schmobile ? 'red' : '' }} onChange={handleChange} className="custom-input form-control" id="schmobile" placeholder="Your Mobile Number" name="schmobile"/>
						{errors.schmobile && <span style={{ color: 'white' }}>{errors.schmobile}</span>}
					</div>
					<div class="mb-3 mt-3">
						<input type="text" value={formData.schemail} style={{ borderColor: errors.schemail ? 'red' : '' }} onChange={handleChange} className="custom-input form-control" id="schemail" placeholder="Your Email Address" name="schemail"/>
						{errors.schemail && <span style={{ color: 'white' }}>{errors.schemail}</span>}
					</div>
					<div class="mb-3 mt-3">
						<textarea value={formData.schmsg} style={{ borderColor: errors.schmsg ? 'red' : '' }} onChange={handleChange} className="custom-textarea form-control" rows="5" id="schmsg" name="schmsg" placeholder="Put your thoughts Here!"></textarea>
						{errors.schmsg && <span style={{ color: 'white' }}>{errors.schmsg}</span>}
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

export default Home;