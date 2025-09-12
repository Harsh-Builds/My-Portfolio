import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";


    
    export default function Contact() {
      return (
     
    <section className="contact section" id="contact">
      <h2 className="section_title">Contact Me</h2>
      <span className="section_subtitle">Get in touch</span>

      <div className="contact_container container grid">
        {/* Contact Info */}
        <div>
          <div className="contact_information">
            <FontAwesomeIcon icon={faPhone} className="contact-icon"/>
          
            <div>
              <h3 className="contact_title">Call Me</h3>
              <span className="contact_subtitle">+91 9917569572</span>
            </div>
          </div>

          <div className="contact_information">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
         
            <div>
              <h3 className="contact_title">E-mail</h3>
              <span className="contact_subtitle">
                harshsaini888555@gmail.com
              </span>
            </div>
          </div>

          <div className="contact_information">
            <FontAwesomeIcon icon={faLocationDot} className="contact-icon"/>
            
            <div>
              <h3 className="contact_title">Location</h3>
              <span className="contact_subtitle">
                Moradabad, Uttar Pradesh
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact_form grid" >
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label className="contact_label">Name</label>
              <input
                type="text"
                name="name"
                className="contact_input"
              
                required
              />
            </div>

            <div className="contact_content">
              <label className="contact_label">Email</label>
              <input
                type="email"
                name="email"
                className="contact_input"
               
                required
              />
            </div>
          </div>

          <div className="contact_content">
            <label className="contact_label">Message</label>
            <textarea
              name="message"
              className="contact_input"
              rows="5"
             
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" className="button button--flex">
              Send Message
             <FontAwesomeIcon icon={faPaperPlane} className="contact-icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  
  
      )
    }
    