import React from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faAward } from "@fortawesome/free-solid-svg-icons";

export default function Qualification() {
  return (
    //   {/*==================== QUALIFICATION ====================*/}
  <section className="qualification section">
    <h2 className="section_title">Qualification</h2>
    <span className="section_subtitle">My personal journey</span>
    <div className="qualification_container container">
      <div className="qualification_tabs">
        <div
          className="qualification_button button--flex qualification_active"
          data-target="#education"
        >
            <FontAwesomeIcon icon={faGraduationCap} className='qualification_icon' />
          
          Education
        </div>
        <div
          className="qualification_button button--flex "
          data-target="#certificates"
        >
            <FontAwesomeIcon icon={faAward} className='qualification_icon' />
       
          Certificates
        </div>
      </div>
      <div className="qualification_section">
        {/*==================== QUALIFICATION Content 1 ====================*/}
        <div
          className="qualification_content qualification_active"
          data-content=""
          id="education"
        >
          {/*==================== QUALIFICATION 1 ====================*/}
          <div className="qualification_data">
            <div>
              <h3 className="qualification_title">
                Bachelor of Computer Applications (BCA)
              </h3>
              <span className="qualification_subtitle">
                Teerthanker Mahaveer University
              </span>
              <div className="qualification_calendar">
                <i className="fa-solid fa-calendar-days" />
                2023 - 2026
              </div>
              <p className="qualification_detail">
                <strong>Current CGPA:</strong> 8/10
              </p>
            </div>
            <div>
              <span className="qualification_rounder" />
              <span className="qualification_line" />
            </div>
          </div>
          {/*==================== QUALIFICATION 2 ====================*/}
          <div className="qualification_data">
            <div />
            <div>
              <span className="qualification_rounder" />
              {/* <span class="qualification_line"></span> */}
            </div>
            <div>
              <h3 className="qualification_title">
                Bachelor of Computer Applications (BCA)
              </h3>
              <span className="qualification_subtitle">
                Teerthanker Mahaveer University
              </span>
              <div className="qualification_calendar">
                <i className="fa-solid fa-calendar-days" />
                2023 - 2026
              </div>
              <p className="qualification_detail">
                <strong>Current CGPA:</strong> 8/10
              </p>
            </div>
          </div>
        </div>
       
               {/*==================== QUALIFICATION Content 2 ====================*/}
        <div
          className="qualification_content"
          data-content=""
          id="certificates"
        >
          {/*==================== QUALIFICATION 1 ====================*/}
          <div className="qualification_data">
            <div>
              <h3 className="qualification_title">
                Accenture Developer &amp; Technology Virtual Experience
              </h3>
              <span className="qualification_subtitle">
                Accenture Virtual Experience Program
              </span>
              <div className="qualification_calendar">
                <i className="fa-solid fa-calendar-days" />
                Nov 2024 – Dec 2024
              </div>
            </div>
            <div>
              <span className="qualification_rounder" />
              <span className="qualification_line" />
            </div>
          </div>
          {/*==================== QUALIFICATION 2 ====================*/}
          <div className="qualification_data">
            <div />
            <div>
              <span className="qualification_rounder" />
              {/* <span class="qualification_line"></span> */}
            </div>
            <div>
              <h3 className="qualification_title">
                Goldman Sachs Operations Virtual Experience
              </h3>
              <span className="qualification_subtitle">
                Operations Job Simulation Certificate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}
