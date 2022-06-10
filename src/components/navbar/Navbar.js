import "./Navbar.css";
import logo from "../../assets/logo.svg";
import React from 'react'

const Navbar = ({sidebarOpen, openSidebar}) => {
  return (
    <nav className="navbar">
        <div className="nav-icon" onClick={ ()=> openSidebar()}>
            <i className="fa fa-bars"></i>
        </div>
       

        <div className="navbar__right">
            <a href="#">
                <i className="fa fa-search"></i>
            </a>
            <a href="#">
                <i className="fa fa-clock-o"></i>
            </a>
            <a href="#">
               <img width="30" src={logo} alt="logo" />
            </a>
           
        </div>
    </nav>
  )
}

export default Navbar