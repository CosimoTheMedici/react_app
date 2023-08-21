import React, { useState } from "react";
import { Link ,useLocation } from "react-router-dom";
import { menuItemsAgent, menuItemsAgentOwner } from './SidebarData';


const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const pathname = useLocation().pathname;
  let menuItems ="owner" ==="owner" ? menuItemsAgentOwner : menuItemsAgent;




  const handleMenuClick = (event, index) => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);

    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };



  const renderMenuItem = (menuItem,index) => {
    if (menuItem.subMenuItems) {
      return (
        
        <li  key={index} className={  openMenuIndex === index? ' sidebar-dropdown active' : 'sidebar-dropdown'} >
          <a href="#" onClick={(event) => handleMenuClick(event, index)} className={ openMenuIndex === index? "subdrop" : ""}>
            {menuItem.icon} <span>{menuItem.name}</span>{" "}
            <span className="menu-arrow"></span>
          </a>
          <div class="sidebar-submenu">
          <ul className={openMenuIndex === index ? "show" : ""} style={{ display: openMenuIndex === index ? "block" : "none" }}>

          {/* <ul className={isMenuOpen  && index ? "show" : ""} style={{ display: isMenuOpen ? "block" : "none" }}> */}
            {menuItem.subMenuItems.map((subMenuItem,index) => (
              <li key={index} className={`${pathname === subMenuItem.path ? 'active' : ''}`}>
                <Link to={subMenuItem.path}>{subMenuItem.name}</Link>
              </li>
            ))}
          </ul>
          </div>
        </li>


      );
    } else {
      return (
        <li key={menuItem.name} className={`${pathname === menuItem.path ? 'active' : ''}`}>
          <Link
            to={menuItem.path}
            exact={menuItem.exact}
            //activeClassName="active"
          >
            {menuItem.icon}
            {/* {menuItem.icon} */}
             <span className="menu-text">{menuItem.name}</span>
            
          </Link>
        </li>
      );
    }
  };

   return (
    <nav className="sidebar-wrapper" id="sidebar">
      <div className="sidebar-content slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="header-menu">
              <span>Main</span>
            </li>
            {menuItems.map((menuItem,index) => renderMenuItem(menuItem,index))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
