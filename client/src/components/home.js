
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section className="home section" id="home">
  <div className="home_container container grid">
    <div className="home_content grid">
      <div className="home_social">
        <a
          href="https://www.linkedin.com/in/harsh-saini-1875ba339/"
          target="_blank"
          className="home_social-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </a>
        <a
          href="https://github.com/Harsh-Builds"
          target="_blank"
          className="home_social-icon"
        >
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
         <div className="home_image">
        <svg
          className="home_blob"
          viewBox="0 0 200 187"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask id="mask0" mask-type="alpha">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
          </mask>
          <g mask="url(#mask0)">
            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
            <image
              className="home_blob-img"
              x={-140}
              y={-200}
                
                // height="1000" 
              xlinkHref="/images/myPhoto.jpeg"
            />
          </g>
        </svg>
      </div>
      <div className="home_data">
        <h1 className="home_title">Hi, I'am Harsh</h1>
        <h3 className="home_subtitle">Web Developer</h3>
        <p className="home_description">
          I am a full stack web developer skilled in both front-end and back-end
          technologies. I build complete, responsive web applications from
          concept to deployment
        </p>
        <a href="#Contactme" className="button button--flex">
          Contact Me <FontAwesomeIcon icon={faMessage} className='button_icon' />
        </a>
      </div>
    </div>
    <div className="home_scroll">
      <a href="#About" className="home_scroll-button button--flex">
        <FontAwesomeIcon icon={faComputerMouse} className='home_scroll-mouse'/>
       
        <span className="home_scroll-name">Scroll Down</span>
        <FontAwesomeIcon icon={faArrowDown} className='home_scroll-arrow'/>
       
      </a>
    </div>
    
  </div>
</section>

  )
}


