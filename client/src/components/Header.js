import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu (hamburger click)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    const closeMenu = () => {    // close menu whenever any menu button clicked 
    setIsOpen(false);
  };

  return (

   <header className="header" id="header">
  <nav className="nav container">
    <a href="#" className="nav_logo">
      HARSH
    </a>
    <div className={`nav_menu ${isOpen ? "show-menu" : ""}`} id="nav-menu" >
      <ul className="nav_list grid">
        <li className="nav_item">
          <a href="#home" onClick={closeMenu} className="nav_link ">
        <FontAwesomeIcon icon={faHouse} className='nav_icon' />  Home
          </a>
        </li>
        <li className="nav_item">
          <a href="#about" onClick={closeMenu} className="nav_link">
            <FontAwesomeIcon icon={faUser} className='nav_icon' /> About
          </a>
        </li>
        <li className="nav_item">
          <a href="#skills" onClick={closeMenu} className="nav_link">
           <FontAwesomeIcon icon={faFileLines}className='nav_icon' /> Skills
          </a>
        </li>
       
        <li className="nav_item">
          <a href="#portfolio" onClick={closeMenu} className="nav_link">
           <FontAwesomeIcon icon={faImage} className='nav_icon'/>Portfolio
          </a>
        </li>
        <li className="nav_item">
          <a href="#contact" onClick={closeMenu} className="nav_link">
           <FontAwesomeIcon icon={faMessage}className='nav_icon' /> Contactme
          </a>
        </li>
      </ul>
    <FontAwesomeIcon icon={faXmark} className=' nav_close' id="nav-close" onClick={() => setIsOpen(false)} />
     
    </div>
    <div className="nav_btns">
      <div className="nav_toggle" id="nav-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
       
      </div>
    </div>
  </nav>
</header>

  );
}
