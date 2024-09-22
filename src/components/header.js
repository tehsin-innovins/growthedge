import { Outlet, Link } from "react-router-dom";
import logo from '../assets/home/logo.svg'; // Import the SVG file
import call from '../assets/home/call.svg'; // Import the SVG file
import whatsapp from '../assets/home/whatsapp.svg'; // Import the SVG file
import '../App.css';

function Header(){
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
							<Link>Home</Link>
						</li>
						<li>
							<Link>Services</Link>
						</li>
						<li>
							<Link>Case Studies / Blogs</Link>
						</li>						
						<li>
							<Link>About Us</Link>
						</li>
						<li>
							<Link>Contact Us</Link>
						</li>			
						<li>
							<Link>Free Ebook</Link>
						</li>						
					</ul>
				</div>
				<div className="col-md-1 col-6">
					<img className="whatsapp" src={whatsapp} alt="whatsapp" width={25} height={25} />
					<img className="call" src={call} alt="call" width={25} height={25} />
				</div>
			</div>
		</div>
      </nav>
    </>
  )
};

export default Header;