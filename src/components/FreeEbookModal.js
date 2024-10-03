import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState,useEffect } from 'react';
import trending from '../assets/home/trending.svg'; // Import the SVG file

const FreeEbookModal = () => {
	
	const [contactus,setContactus] = useState([]);
	const folderPath = 'https://shareittofriends.com/demo/growthedge/uploads/';    
	useEffect(() => {
    // Fetch data from API
    fetch('https://shareittofriends.com/demo/growthedge/blog.php')  // Replace with your actual API URL
      .then((response) => response.json())  // Parse JSON
      .then((data) => {
        setContactus(data.contactdata);  // Store the fetched data
		
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
	}, []);  // Empty array means this runs once when the component mounts
  
  return (
    <div
      className="modal fade"
      id="FreeEbookModal"
      tabIndex="-1"
      aria-labelledby="globalModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content ebookmodal-content">
          <div className="modal-header p-0 pb-2 border-0">
            <h5 className="modal-title">
              [ Hey Fellas ]
            </h5>
			<a
              type="button"
              className="btn-close1"
              data-bs-dismiss="modal"
              aria-label="Close"
            ><FontAwesomeIcon icon={faXmark} /></a>
          </div>
          <div className="modal-body p-0">
						<h4 className="h4">The Ultimate Guide <img src={trending} width={20} height={20} /></h4>
						<h5 className="h5">60 pages for next 60 days</h5>
						<h4 className="mt-0 mb-4 h4_">[ THE VIOLET JOURNAL ]</h4>

						<ul class="nav nav-pills nav-justified">
						<li class="nav-item">
							<a class="nav-link active" data-bs-toggle="tab" href="#menu1">Summary</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-bs-toggle="tab" href="#menu2">Index</a>
						</li>
						</ul>
						
						
						<div class="tab-content mb-3">
						<div class="tab-pane container fade" id="menu1">
							<p className="mt-3 p">Indulge in the assurance of authenticity with our collection of BIS Hallmarked Jewellery, a testament to trust, proudly offered by Kalyan Jewellers. Indulge in the assurance of authenticity with our collection of BIS</p>
							
							<div className="row">
								<div className="col-lg-4">
									<div className="row">
										<div className="col-lg-3 col-md-3">
											<p className="stitle">12</p>
											<p className="scontent">Chapters</p>
										</div>
										<div className="col-lg-3 col-md-3">
											<p className="stitle">12</p>
											<p className="scontent">Chapters</p>
										</div>
										<div className="col-lg-3 col-md-3">
											<p className="stitle">12</p>
											<p className="scontent">Chapters</p>
										</div>
										<div className="col-lg-3 col-md-3">
											<p className="stitle">12</p>
											<p className="scontent">Chapters</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane container fade" id="menu2">
							<ul className="index mt-3">
								<li>Discover</li>
								<li>Discover</li>
								<li>Discover</li>
								<li>Discover</li>
								<li>Discover</li>
							</ul>
						</div>
						
						</div>
							  
            	<div className="mb-4 mb-4 mt-2 ebookcard card card-body shadow-sm border-0">
					
					<div className="row align-items-center">
						<div className="col-md-6 col-lg-6">
							<div className="d-flex flex-column align-items-center justify-content-center text-center">
								<img className="cimg mb-3" src={`${folderPath}contactus_page/${contactus.card_img}`} alt={contactus.card_title} />
								<h5>{contactus.card_title}</h5>
								<p>{contactus.card_content}</p>
							</div>
						</div>


						<div className="col-md-6 col-lg-6" >						
						<form className="row">
							
							<div className="col-12">
								<div class="mb-3 mt-3">
									<input type="text" className="custom-input form-control" id="fname" placeholder="Name (Optional)" name="fname"/>
								</div>
							</div>	
							<div className="col-12">
								<div class="mb-3 mt-3">
									<input type="text" className="custom-input form-control" id="email" placeholder="Email Address" name="email"/>
								</div>
							</div>	
							<div className="col-12">
							
							</div>
						
							<div className="col-12">
								<button type="submit" className="btn mb-4">DOWNLOAD FREE COPY</button>
							</div>
							
							<div className="col-12 col-lg-4 col-md-4">
							
							</div>
							
							
						</form>
						</div>
						
					</div>
				
				</div>
				
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FreeEbookModal;
