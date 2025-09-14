import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


export default function About() {
  return (
   <section className="about section" id="about">
  <h2 className="section_title">About Me</h2>
  <sapn className="section_subtitle">My Introduction</sapn>
  <div className="about_container container grid">
    <img  src="/images/aboutMe.jpg" alt="" className="about_img" />
    <div className="about_data">
      <p className="about_description">
        I am a full stack web developer skilled in both front-end and back-end
        technologies. I build complete, responsive web applications from concept
        to deployment
      </p>
      <div className="about_info">
        <div>
          <span className="about_info-title">02+</span>
          <sapn className="about_info-name">
            Years <br /> Experience
          </sapn>
        </div>
        <div>
          <span className="about_info-title">4+</span>
          <sapn className="about_info-name">
            Completed <br /> projects
          </sapn>
        </div>
        <div>
          <span className="about_info-title">01</span>
          <sapn className="about_info-name">
            Internships <br /> completed
          </sapn>
        </div>

      </div>
        <div className="about_buttons">
        <a
          download=""
          href="/pdf\Harsh Saini Resume.pdf"
          className="button button--flex"
        >
          Download Resume
         <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
    
    </div>
  </div>
</section>

  )
}
