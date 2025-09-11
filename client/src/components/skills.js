import React from 'react'

export default function Skills() {
  return (
    <section className="skills section" id="skills">
  <h2 className="section_title">Skills</h2>
  <span className="section_subtitle">My technical level</span>
  <div className="skills_container container grid">
    <div>
      {/*==================== SKILLS 1 ====================*/}
      <div className="skills_content skills_open">
        <div className="skills_header">
          <i className="fa-solid fa-code skills_icon" />
          <div>
            <h1 className="skills_title">Frontend </h1>
            <span className="skills_subtitle">More than 2 years </span>
          </div>
          <i className="fa-solid fa-angle-down skills_arrow" />
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

    </div>
  </div>
</section>

  )
}
