import React from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faAngleDown, faServer, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";


export default function Skills() {

    const [activeIndex, setActiveIndex] = useState(0); // 0 = Frontend open by default

    const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // close if already open
    } else {
      setActiveIndex(index);
    }
  };
  
  return (
    <section className="skills section" id="skills">
  <h2 className="section_title">Skills</h2>
  <span className="section_subtitle">My technical level</span>
  <div className="skills_container container grid">
    <div>
      {/*==================== SKILLS 1 ====================*/}
      <div  className={`skills_content ${
              activeIndex === 0 ? "skills_open" : "skills_close"
            }`}>

        <div className="skills_header" onClick={() => toggleAccordion(0)} >
            <FontAwesomeIcon icon={faCode} className='skills_icon' />
       
          <div>
            <h1 className="skills_title">Frontend </h1>
            <span className="skills_subtitle">More than 2 years </span>
          </div>
          <FontAwesomeIcon icon={faAngleDown} className='skills_arrow' />
        </div>
        <div className="skills_list grid">
          <div className="skills_data">
            <div className="skills_title">
              <h3 className="skills_name">HTML</h3>
              <span className="skills_number">90%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_html" />
            </div>
          </div>
          <div className="skills_data">
            <div className="skills_title">
              <h3 className="skills_name">CSS</h3>
              <span className="skills_number">80%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_css" />
            </div>
          </div>
          <div className="skills_data">
            <div className="skills_title">
              <h3 className="skills_name">JavaScript</h3>
              <span className="skills_number">75%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_js" />
            </div>
          </div>
          <div className="skills_data">
            <div className="skills_title">
              <h3 className="skills_name">React</h3>
              <span className="skills_number">66%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_react" />
            </div>
          </div>
        </div>
      </div>

      
      {/*==================== SKILLS 2 ====================*/}
      <div className={`skills_content ${
              activeIndex === 1 ? "skills_open" : "skills_close"
            }`}>
        <div className="skills_header" onClick={() => toggleAccordion(1)} >
            <FontAwesomeIcon icon={faServer} className='skills_icon' />

          <div>
            <h1 className="skills_title">Backend </h1>
            <span className="skills_subtitle">More than 2 years </span>
          </div>
              <FontAwesomeIcon icon={faAngleDown} className='skills_arrow' />
        </div>
        <div className="skills_list grid">
          <div className="skills_data">
            <div className="skills_title">
              <h3 className="skills_name">Node js</h3>
              <span className="skills_number">90%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_nodejs" />
            </div>
          </div>
          <div className="skills_data">
            <div className="skills_title">
              <h3 className="skills_name">MongoDB</h3>
              <span className="skills_number">70%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_mongodb" />
            </div>
          </div>
          <div className="skills_data">
            <div className="skills_title">
              <h3 className="skills_name">Python</h3>
              <span className="skills_number">55%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_python" />
            </div>
          </div>
        </div>
      </div>

  <div className={`skills_content ${
              activeIndex === 2 ? "skills_open" : "skills_close"
            }`}>

        <div className="skills_header" onClick={() => toggleAccordion(2)}>
            <FontAwesomeIcon icon={faScrewdriverWrench} className='skills_icon'/>
         
          <div>
            <h1 className="skills_title">Tools</h1>
            <span className="skills_subtitle">More than 2 years </span>
          </div>
           <FontAwesomeIcon icon={faAngleDown} className='skills_arrow' />
        </div>
        <div className="skills_list grid">
          <div className="skills_data">
            <div className="skills_title">
              <h3 className="skills_name">VS Code</h3>
              <span className="skills_number">80%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_vscode" />
            </div>
          </div>
          <div className="skills_data">
            <div className="skills_title">
              <h3 className="skills_name">Git</h3>
              <span className="skills_number">50%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_git" />
            </div>
          </div>
          <div className="skills_data">
            <div className="skills_title">
              <h3 className="skills_name">GitHub</h3>
              <span className="skills_number">70%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_github" />
            </div>
          </div>
          </div>
         </div>
    </div>
  </div>
</section>

  )
}
