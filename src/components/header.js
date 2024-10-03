import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import trending from '../assets/home/trending.svg'; // Import the SVG file
import $ from 'jquery';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/home/logo.svg'; // Import the SVG file
import call from '../assets/home/call.svg'; // Import the SVG file
import whatsapp from '../assets/home/whatsapp.svg'; // Import the SVG file
import contact_logo from '../assets/home/contact_logo.svg'; // Import the PNG file
import contact from '../assets/home/contact.png'; // Import the PNG file
import excel_bg1 from '../assets/home/excel-bg1.png'; // Import the PNG file
import excel_bg2 from '../assets/home/excel-bg2.png'; // Import the PNG file
import life from '../assets/about/life.png'; // Import the PNG file
import '../App.css';
import '../pages/Pages.css';
import CustomSwiper from '../components/CustomSwiper';


function Header(){
  const location = useLocation();
  
  const [contactus,setContactus] = useState([]);
  const [slider1,setSlider1] = useState([]);
  const [slider2,setSlider2] = useState([]);
  const [SERdata,setSERdata] = useState([]);
  const [common_set,setCommon_set] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    msg: ''
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
        if (!formData.name || formData.name.trim() === '') {
            newErrors.name = 'Name is required';
        }

        if (!formData.mobile || formData.mobile.trim() === '') {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number must be 10 digits';
        }

        if (!formData.email || formData.email.trim() === '') {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) { // Basic email format validation
            newErrors.email = 'Invalid email format';
        }

        if (!formData.msg || formData.msg.trim() === '') {
            newErrors.msg = 'Message is required';
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
            const response = await fetch('https://shareittofriends.com/demo/growthedge/common.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            //console.log(data);

            if (data.status === 'success') {
                alert( data.message);
				setFormData({
					name: '',
					mobile: '',
					email: '',
					msg: ''
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
    fetch('https://shareittofriends.com/demo/growthedge/blog.php')  // Replace with your actual API URL
      .then((response) => response.json())  // Parse JSON
      .then((data) => {
        setContactus(data.contactdata);  // Store the fetched data
		setCommon_set(data.common_settings);
		setSlider1(data.slider1);
		setSlider2(data.slider2);
		setSERdata(data.serdata);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);  // Empty array means this runs once when the component mounts
  
  
  const [showBottomsheet_two, setshowBottomsheet_two] = useState(false);
  const [showBottomsheet_one, setshowBottomsheet_one] = useState(false);
  
  const handleClose_two = () => setshowBottomsheet_two(false);
  const handleShow_two = () => setshowBottomsheet_two(true);
  
  const handleClose_one = () => setshowBottomsheet_one(false);
  const handleShow_one = () => setshowBottomsheet_one(true);

	const renderCustomSlide_card = (slide, index) => (
		<div className="slider_7_card_7">
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
					<a href={slide.slider_link}>Read More</a>
				</div>
			</div>
		</div>
	);	
	
	const renderCustomSlide_card_ = (slide, index) => (
		<div className="slider_7_card_7">
			<div className="row align-items-center p-0">
				<div className="col-6 col-lg-2ssss col-md-2">
					<h3>{slide.title}</h3>
				</div>
				<div className="col-12 col-lg-10 col-md-10 p-0">
					<h5>{slide.subtitle}</h5>
				</div>						
				<div className="col-12 col-lg-12 col-md-12">
					<p>{slide.content}</p>
					<a href={slide.slider_link}>Read More</a>
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
							<Link onClick={handleShow_one}>Services</Link>
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
					<a href={`https://wa.me/${common_set.whatsapp_no}`}><img className="whatsapp" src={whatsapp} alt="whatsapp" width={25} height={25} /></a>
					<a href={`tel:+${common_set.contact_no}`}><img className="call" src={call} alt="call" width={25} height={25} /></a>
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
								<img src={`${folderPath}contactus_page/${contactus.section_1_img}`} className="contact_img"/>
							</div>
							<div className="col-12 col-lg-8 col-md-8">
							</div>
						</div>	
						<h4 className="h4">{contactus.section_1_title} <img src={`${folderPath}contactus_page/${contactus.section_1_titleicon}`} width={20} height={20} /></h4>
						<h5 className="h5">{contactus.section_1_subtitle}</h5>
						<h3 className="h3">{contactus.section_1_childtitle}</h3>
						<div className="row">
						
								<div className="col-6 col-md-3 col-lg-3">
									<h4 className="h4_">{contactus.m_title1}</h4>
									<p className="p_">{contactus.m_content1}</p>
								</div>
								<div className="col-6 col-md-3 col-lg-3">
									<h4 className="h4_">{contactus.m_title2}</h4>
									<p className="p_">{contactus.m_content2}</p>
								</div>
								<div className="col-6 col-md-3 col-lg-3 m-0 p-0">
									<h4 className="h4_">{contactus.m_title3}</h4>
									<p className="p_">{contactus.m_content3}</p>
								</div>
								<div className="col-6 col-md-3 col-lg-3 m-0 p-0">
									<h4 className="h4_">{contactus.m_title4}</h4>
									<p className="p_">{contactus.m_content4}</p>
								</div>								

						
						</div>
					</div>
					
					<div className="col-12 col-md-6 col-lg-6">
							<h5 className="form_h5 text-left mt-4">Drop your Queries</h5>
							<form onSubmit={handleSubmit}>
							<div class="mb-3 mt-3">
								<input type="text" value={formData.name} style={{ borderColor: errors.name ? 'red' : '' }} onChange={handleChange} className="custom-input form-control" id="name" placeholder="Your Full Name" name="name"/>
								{errors.name && <span style={{ color: 'white' }}>{errors.name}</span>}
							</div>
							<div class="mb-3 mt-3">
								<input type="text" value={formData.mobile} style={{ borderColor: errors.mobile ? 'red' : '' }} onChange={handleChange} className="custom-input form-control" id="mobile" placeholder="Your Mobile Number" name="mobile"/>
								{errors.mobile && <span style={{ color: 'white' }}>{errors.mobile}</span>}
							</div>
							<div class="mb-3 mt-3">
								<input type="text" value={formData.email} style={{ borderColor: errors.email ? 'red' : '' }} onChange={handleChange} className="custom-input form-control" id="email" placeholder="Your Email Address" name="email"/>
								{errors.email && <span style={{ color: 'white' }}>{errors.email}</span>}
							</div>
							<div class="mb-3 mt-3">
								<textarea className="custom-textarea form-control" value={formData.msg} style={{ borderColor: errors.msg ? 'red' : '' }} onChange={handleChange} rows="5" id="msg" name="msg" placeholder="Put your thoughts Here!"></textarea>
								{errors.msg && <span style={{ color: 'white' }}>{errors.msg}</span>}
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
		slides={slider1}
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
		slides={slider2}
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
	
		<img src={`${folderPath}contactus_page/${contactus.card_img}`}/>
		<h5>{contactus.card_title}</h5>
		<p>{contactus.card_content}</p>
		
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
				<h5>{common_set.contactus_bottom_text}</h5>
				<h4>{common_set.contactus_bottom_highlight}</h4>
				</div>
			</div>
	
            </div>

          </div>
        </div>
      </div>	
	
      <div
        className={`modal fade ${showBottomsheet_one ? 'show' : ''}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showBottomsheet_one ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog modal-dialog-scrollable modal-fullscreen modal-bottom-sheet  modal-bottom-sheet1" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title text-center">All Services </h5>
              <span type="button" className="btn-close1" onClick={handleClose_one}>
				<FontAwesomeIcon icon={faXmark} />
			  </span>
            </div>

            <div className="modal-body p-0">
	
			<div className="container">
			
				<div className="row pb-4">
					
					{SERdata.map((slide, index) => (
						<div className="col-12 col-lg-4 col-md-4 p-2">
						<div className="slider_2_card_2_services">
						<a href={`/services/${slide.slug}`}><img
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
  )
};

export default Header;