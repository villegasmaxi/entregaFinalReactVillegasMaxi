import React from "react";
import { FaFacebookSquare,FaInstagramSquare,FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <div className="container-fluid bg-gradient bg-secondary text-light align-items-center d-flex justify-content-evenly p-3 mb-1">
      <img src="https://i.postimg.cc/7YLvmt5F/Logo.png" alt="" />
      <h1>footer</h1>
      <div >
      <FaFacebookSquare size={30}/>
       <FaInstagramSquare size={30}/>
       <FaGithub size={30}/>
      </div>
      
    </div>
  );
}
export default Footer;
