import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// --- ADDED: Import your api instance ---
import api from '../api';

export default function Portfolio() {
  
  // --- ADDED: State to hold your dynamic projects ---
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // --- MODIFIED: This useEffect now fetches your projects ---
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Call the PUBLIC API route (make sure this path is correct!)
        const response = await api.get('/api/projects'); 
        setProjects(response.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Could not load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // The empty array [] means "run this only once"

  // --- ADDED: A new useEffect to initialize Swiper ---
  // This hook *waits* for the 'projects' state to update.
  useEffect(() => {
    if (projects.length > 0) {
      // Initialize Swiper only when there are projects
      new Swiper(".mySwiper", {
        modules: [Navigation, Pagination],
        loop: true,

        // --- ADD THESE 3 LINES ---
        observer: true,
        observeParents: true,
        // loopAdditionalSlides: 1,
        // --- END OF ADDITION ---
        
        // cssMode: true, // REMOVED! This option is known to cause click/event issues.
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }, [projects]); // This is the dependency: run when 'projects' changes

  
  // --- ADDED: Loading state ---
  if (loading) {
    return (
      <section className="portfolio section" id="portfolio">
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">Loading recent work...</span>
      </section>
    );
  }

  // --- ADDED: Error state ---
  if (error) {
    return (
      <section className="portfolio section" id="portfolio">
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle" style={{ color: 'red' }}>{error}</span>
      </section>
    );
  }

  // --- THIS IS THE FIX ---
  // This new function will handle the click and bypass Swiper
  const handleLinkClick = (e, url) => {
    // Stop Swiper from interfering
    e.stopPropagation(); 
    // Force the link to open in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  // --- MODIFIED: This JSX is now dynamic ---
  return (
    <>
      {/*==================== PORTFOLIO ====================*/}
      <section className="portfolio section" id="portfolio">
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">Most recent work</span>

        <div className="portfolio_container container swiper mySwiper">
          <div className="swiper-wrapper">

            {/* --- DYNAMIC CONTENT: Loop over the 'projects' state --- */}
            {projects.map(project => (
              
              // --- THIS IS THE FIX ---
              // The 'swiper-slide' is now the PARENT div.
              // Your 'portfolio_content grid' is INSIDE it.
              // This stops the CSS conflict.
              <div className="swiper-slide" key={project._id}>
                <div className="portfolio_content grid">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="portfolio_img"
                  />
                  <div className="portfolio_data">
                    <h3 className="portfolio_title">{project.title}</h3>
                    <p className="portfolio_description">
                      {project.description}
                    </p>
                    
                    {/* --- THIS IS THE FIX --- */}
                    {/* We are now using <button> tags instead of <a> tags */}
                    {/* This prevents Swiper from treating it as a "drag" */}

                    <div className="portfolio_buttons_container">
                      {/* --- GitHub Link Button --- */}
                      <button
                        className="button button--flex button--small portfolio_button"
                        onClick={(e) => handleLinkClick(e, project.githubLink)}
                      >
                        GitHub
                        <FontAwesomeIcon icon={faArrowRight} className="button_icon" />
                      </button>

                      {/* --- Live Demo Button (only if link exists) --- */}
                      {project.liveLink && (
                        <button
                          className="button button--flex button--small portfolio_button"
                          onClick={(e) => handleLinkClick(e, project.liveLink)}
                        >
                          Live Demo
                          <FontAwesomeIcon icon={faArrowRight} className="button_icon" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* --- END of dynamic content --- */}

          </div>

          {/* Arrows */}
          <div className="swiper-button-next">
            <FontAwesomeIcon icon={faAngleRight} className="swiper-portfolio-icon" />
          </div>
          <div className="swiper-button-prev">
            <FontAwesomeIcon icon={faAngleLeft} className="swiper-portfolio-icon" />
          </div>

          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
}