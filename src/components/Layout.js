import { Outlet, Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Layout(){
  return (
    <>
	  <Header />
      <Outlet />
	  <Footer />
    </>
  )
};

export default Layout;