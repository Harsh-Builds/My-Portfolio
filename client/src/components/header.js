import React from 'react'

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
            <i className="fa-solid fa-house nav_icon" /> Home
          </a>
        </li>
        <li className="nav_item">
          <a href="#about" className="nav_link">
            <i className="fa-solid fa-user nav_icon" /> About
          </a>
        </li>
        <li className="nav_item">
          <a href="#skills" className="nav_link">
            <i className="fa-solid fa-file-lines nav_icon" /> Skills
          </a>
        </li>
        <li className="nav_item">
          <a href="#services" className="nav_link">
            <i className="fa-solid fa-briefcase nav_icon" /> Services
          </a>
        </li>
        <li className="nav_item">
          <a href="#portfolio" className="nav_link">
            <i className="fa-solid fa-image nav_icon" /> Portfolio
          </a>
        </li>
        <li className="nav_item">
          <a href="#contact" className="nav_link">
            <i className="fa-solid fa-message nav_icon" /> Contactme
          </a>
        </li>
      </ul>
      <i className="fa-solid fa-xmark nav_close" id="nav-close" />
    </div>
    <div className="nav_btns">
      <div className="nav_toggle" id="nav-toggle">
        <i className="fa-solid fa-bars" />
      </div>
    </div>
  </nav>
</header>

  )
}
