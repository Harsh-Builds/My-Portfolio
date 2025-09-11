import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portfolio() {
useEffect(() => {
    // Initialize Swiper with your config
    new Swiper(".mySwiper", {
      modules: [Navigation, Pagination],
      loop: true,
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []); // run once when component mounts

  return (
    <>
      {/*==================== PORTFOLIO ====================*/}
      <section className="portfolio section" id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most recent work</span>

        <div className="portfolio_container container swiper mySwiper">
          <div className="swiper-wrapper">
            {/*==================== PORTFOLIO 1 ====================*/}
            <div className="portfolio_content grid swiper-slide">
              <img
                src="/images/portfolio3.jpg"
                alt="Calculator Project"
                className="portfolio_img"
              />
              <div className="portfolio_data">
                <h3 className="portfolio_title">My Calculator</h3>
                <p className="portfolio_description">
                  A responsive calculator that performs basic math operations
                  using HTML, CSS, and JavaScript. Built from scratch as a
                  self-practice project.
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio_button"
                >
                  Live Demo
                  <i className="fa-solid fa-arrow-right button_icon" />
                </a>
              </div>
            </div>

            {/*==================== PORTFOLIO 2 ====================*/}
            <div className="portfolio_content grid swiper-slide">
              <img
                src="/images/portfolio1.jpg"
                alt="Portfolio Website Project"
                className="portfolio_img"
              />
              <div className="portfolio_data">
                <h3 className="portfolio_title">Personal Portfolio Website</h3>
                <p className="portfolio_description">
                  A fully responsive and interactive personal portfolio website
                  designed and developed from scratch using HTML, CSS, and
                  JavaScript. It includes sections like About Me, Skills,
                  Services, Projects, Contact, and Qualifications.
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio_button"
                >
                  Live Demo
                  <i className="fa-solid fa-arrow-right button_icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="swiper-button-next">
            <i className="fa-solid fa-angle-right swiper-portfolio-icon" />
          </div>
          <div className="swiper-button-prev">
            <i className="fa-solid fa-angle-left swiper-portfolio-icon" />
          </div>

          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
}
