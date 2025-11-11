import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
     {/*==================== FOOTER ====================*/}
  <footer className="footer">
    <div className="footer_bg">
      <div className="footer_container container grid">
        <div>
          <h2 className="footer_title">Harsh</h2>
          <span className="footer_subtitle">Full stack Developer</span>
        </div>
        <ul className="footer_links">
          
          <li>
            <a href="#portfolio" className="footer-link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="footer-link">
              Contactme
            </a>
          </li>
        </ul>
        <div className="footer_socials">
          <a
            href="https://www.linkedin.com/in/harsh-saini-1875ba339/"
            target="_blank" rel="noopener noreferrer"
            className="footer_social"
          >
         <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
            <a
                    href="https://github.com/Harsh-Builds"
                   target="_blank" rel="noopener noreferrer"
                    className="home_social-icon"
                  >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
        </div>
        <p className="footer_copy">© Harsh Saini. All rights reserved.</p>
      </div>
    </div>
  </footer>
  </>
  )
}
