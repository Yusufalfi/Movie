import React from 'react';
import "./Sidebar.css";
import logo from "../../assets/logo.svg"

const Sidebar = ({sidebarOpen, closeSidebar}) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
        <div className='sidebar__title'>
            <div className='sidebar__img'>
                <img src={logo} alt="logo" />
                <h2>Movie</h2>
            </div>
            <i className='fa fa-times' id="sidebarIcon" onClick={() => closeSidebar()}></i>
        </div>

        <div className='sidebar__menu'>
            <div className='sidebar__link active_menu_link'>
                <i className='fa fa-home'></i>
                <a href='#'>Dashboard</a>
            </div>
        
          
                
        </div>

    </div>
  )
}

export default Sidebar