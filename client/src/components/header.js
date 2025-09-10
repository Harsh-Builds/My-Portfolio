import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
   <header className="header" id="header">
  <nav className="nav container">
    <a href="#" className="nav_logo">
      HARSH
    </a>
    <div className="nav_menu" id="nav-menu">
      <ul className="nav_list grid">
        <li className="nav_item">
          <a href="#home" className="nav_link">
        <FontAwesomeIcon icon={faHouse} />  Home
          </a>
        </li>
        <li className="nav_item">
          <a href="#about" className="nav_link">
            <FontAwesomeIcon icon={faUser} /> About
          </a>
        </li>
        <li className="nav_item">
          <a href="#skills" className="nav_link">
           <FontAwesomeIcon icon={faFileLines} /> Skills
          </a>
        </li>
        <li className="nav_item">
          <a href="#services" className="nav_link">
           <FontAwesomeIcon icon={faBriefcase} /> Services
          </a>
        </li>
        <li className="nav_item">
          <a href="#portfolio" className="nav_link">
           <FontAwesomeIcon icon={faImage} />Portfolio
          </a>
        </li>
        <li className="nav_item">
          <a href="#contact" className="nav_link">
           <FontAwesomeIcon icon={faMessage} /> Contactme
          </a>
        </li>
      </ul>
    <FontAwesomeIcon icon={faXmark} id="nav-close" />
     
    </div>
    <div className="nav_btns">
      <div className="nav_toggle" id="nav-toggle">
        <FontAwesomeIcon icon={faBars} />
       
      </div>
    </div>
  </nav>
</header>

  )
}
