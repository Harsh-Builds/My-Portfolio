import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'; 
import { useForm } from "react-hook-form"

    export default function Contact() {

      const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting},
  } = useForm()

  const delay = (d) =>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve()
      }, d*1000)
    })
  }

        const onSubmit = async (data) => {

  try {
    let r = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!r.ok) {
      throw new Error("Failed to submit form");
    }

    let res = await r.text();
    console.log(data, res);

    reset(); //  clear form after successful submission
    alert(" Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert(" Failed to submit form. Please try again.");
  }
};

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
        <form className="contact_form grid" action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label className="contact_label">Name</label>
              <input  type="text"  className="contact_input" {...register("name", { required: true })}  />
            </div>

            <div className="contact_content">
              <label className="contact_label">Email</label>
              <input  type="email"  className="contact_input" {...register("email", { required: true })} />
               {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}
            </div>
          </div>

          <div className="contact_content">
            <label className="contact_label">Message</label>
            <textarea  className="contact_input" rows="5"   {...register("message", { required: true })} ></textarea>
          </div>

 

        {isSubmitting && <span>Loading...</span>}
     
          <div>
            <button type="submit"   disabled={isSubmitting} className="button button--flex">
              Send Message
             <FontAwesomeIcon icon={faPaperPlane} className="contact-icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  
  
      )
    }
    