import { Outlet, Link } from "react-router-dom";
import logo from '../assets/home/footer-logo.svg'; // Import the SVG file
import social1 from '../assets/home/social1.svg'; // Import the SVG file
import social2 from '../assets/home/social2.svg'; // Import the SVG file
import social3 from '../assets/home/social3.svg'; // Import the SVG file
import social4 from '../assets/home/social4.svg'; // Import the SVG file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faMagnifyingGlass,faChevronLeft,faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import trending from '../assets/home/trending.svg'; // Import the SVG file
import $ from 'jquery';
import contact_logo from '../assets/home/contact_logo.svg'; // Import the PNG file
import contact from '../assets/home/contact.png'; // Import the PNG file
import excel_bg1 from '../assets/home/excel-bg1.png'; // Import the PNG file
import excel_bg2 from '../assets/home/excel-bg2.png'; // Import the PNG file
import life from '../assets/about/life.png'; // Import the PNG files
import { useLocation } from 'react-router-dom';
import '../App.css';
import '../pages/Pages.css';
import CustomSwiper from '../components/CustomSwiper';

function Footer(){
  const [contactus,setContactus] = useState([]);
  const [slider1,setSlider1] = useState([]);
  const [SERdata,setSERdata] = useState([]);
  const [slider2,setSlider2] = useState([]);
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
                alert('Form submitted successfully!');
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
    fetch('https://shareittofriends.com/demo/growthedge/contactus.php')  // Replace with your actual API URL
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
  
  // Define text content based on the route
    let title = '';
    let subtitle = '';
	console.log(location.pathname);
    switch (location.pathname) {
        case '/':
            title = common_set.home_bottom_text;
            subtitle = common_set.home_bottom_highlight;
            break;
        case '/projects':
            title = common_set.ucb_bottom_text;
            subtitle = common_set.ucb_bottom_highlight;
            break;
		case '/about-us':
            title = common_set.aboutus_bottom_text;
            subtitle = common_set.aboutus_bottom_highlight;
            break;			
        // Add more cases as per the routes you have
        default:
			if (location.pathname.startsWith('/services/')) {
                // Handle dynamic route for /services/:param
                title = common_set.service_bottom_text;
                subtitle = common_set.service_bottom_highlight;
            }else if (location.pathname.startsWith('/blog/')) {
                // Handle dynamic route for /services/:param
                title = common_set.ucb_bottom_text;
                subtitle = common_set.ucb_bottom_highlight;
            }else if (location.pathname.startsWith('/usecase/')) {
                // Handle dynamic route for /services/:param
                title = common_set.ucb_bottom_text;
                subtitle = common_set.ucb_bottom_highlight;
            } else {
                title = 'Welcome!';
                subtitle = 'Let’s start your journey!';
            }
    }
  
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
							<Link to={common_set.facebook_link}><img src={social1} alt="social1" width={20} height={20} /></Link>
							<Link to={common_set.instagram_link}><img src={social2} alt="social2" width={20} height={20} /></Link>
							<Link to={common_set.twitter_link}><img src={social3} alt="social3" width={20} height={20} /></Link>
							<Link to={common_set.youtube_link}><img src={social4} alt="social4" width={20} height={20} /></Link>							
						</div>
						<p className="mt-4">{common_set.copy_write_text}</p>
						</div>
					</div>
					<div className="col-md-3 col-lg-3 col-12">
						<div className="links2">
							<Link to="/" className="d-flex">Home</Link>
							<Link onClick={handleShow_one} className="d-flex">Services</Link>
							<Link to="/projects" className="d-flex">Case Studies & Blogs</Link>
							<Link to="/about-us" className="d-flex">About us</Link>
							<Link onClick={handleShow_two} className="d-flex">Contact Us</Link>
							<Link to="/" className="d-flex">Free E Book</Link>
						</div>
					</div>
					<div className="col-md-4 col-lg-4 col-12 pt-4 pb-4">
							<h5 className="text-center mt-4"><span>[</span> Contact Us <span>]</span></h5>
							<p className="text-center text-white">Subscribe and be the first one to know our new updates</p>
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
			<div className={className}>
				<div className="imgbox">
				<h5>{title}</h5>
				<h4>{subtitle}</h4>
				</div>
			</div>
		</section>
		
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

export default Footer;