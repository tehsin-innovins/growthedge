import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState,useEffect } from 'react';
import trending from '../assets/home/trending.svg'; // Import the SVG file

const FreeEbookModal = () => {
	
	const [contactus,setContactus] = useState([]);
	const [pop,setPop] = useState([]);
	const folderPath = 'https://shareittofriends.com/demo/growthedge/uploads/';    
	useEffect(() => {
    // Fetch data from API
    fetch('https://shareittofriends.com/demo/growthedge/view_popup.php')  // Replace with your actual API URL
      .then((response) => response.json())  // Parse JSON
      .then((data) => {
        setContactus(data.contactdata);  // Store the fetched data
		setPop(data.popdata);  // Store the fetched data
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
			{pop.title_1}
            </h5>
			<a
              type="button"
              className="btn-close1"
              data-bs-dismiss="modal"
              aria-label="Close"
            ><FontAwesomeIcon icon={faXmark} /></a>
          </div>
          <div className="modal-body p-0">
						<h4 className="h4">{pop.title_2} <img src={trending} width={20} height={20} /></h4>
						<h5 className="h5">{pop.title_3}</h5>
						<h4 className="mt-0 mb-4 h4_">{pop.title_4}</h4>

						<ul className="nav nav-pills nav-justified">
						<li className="nav-item">
							<a className="nav-link active" data-bs-toggle="tab" href="#menu1">Summary</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" data-bs-toggle="tab" href="#menu2">Index</a>
						</li>
						</ul>
						
						
						<div className="tab-content mb-3">
						<div className="tab-pane container fade" id="menu1">
							<p className="mt-3 p">{pop.summary_content}</p>
							
							<div className="row">
								<div className="col-lg-4">
									<div className="row">
										<div className="col-lg-3 col-md-3">
											<p className="stitle">{pop.summary_multiple_count_1}</p>
											<p className="scontent">{pop.summary_multiple_content_1}</p>
										</div>
										<div className="col-lg-3 col-md-3">
											<p className="stitle">{pop.summary_multiple_count_2}</p>
											<p className="scontent">{pop.summary_multiple_content_2}</p>
										</div>
										<div className="col-lg-3 col-md-3">
											<p className="stitle">{pop.summary_multiple_count_3}</p>
											<p className="scontent">{pop.summary_multiple_content_3}</p>
										</div>
										<div className="col-lg-3 col-md-3">
											<p className="stitle">{pop.summary_multiple_count_4}</p>
											<p className="scontent">{pop.summary_multiple_content_4}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="tab-pane container fade" id="menu2">
							<ul className="index mt-3">
  {(() => {
    // Check if pop.index_multiple_content is defined and is a string
    if (typeof pop.index_multiple_content === 'string') {
      // Split the string by commas to create an array of content
      const index_multiple_content = pop.index_multiple_content.split(',');
      // Map over the array to create list items
      return index_multiple_content.map((content2, index) => (
        <li key={index}>{content2.trim()}</li> // Trim whitespace and add unique key
      ));
    } else {
      return <small></small>; // Fallback when content is undefined
    }
  })()}
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
