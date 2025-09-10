
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
    </div>
  </div>
</section>

  )
}


