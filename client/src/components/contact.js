import React, { useState } from "react";

export default function Contact() {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
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
            <i className="fa-solid fa-phone contact-icon"></i>
            <div>
              <h3 className="contact_title">Call Me</h3>
              <span className="contact_subtitle">+91 9917569572</span>
            </div>
          </div>

          <div className="contact_information">
            <i className="fa-solid fa-envelope contact-icon"></i>
            <div>
              <h3 className="contact_title">E-mail</h3>
              <span className="contact_subtitle">
                harshsaini888555@gmail.com
              </span>
            </div>
          </div>

          <div className="contact_information">
            <i className="fa-solid fa-location-dot contact-icon"></i>
            <div>
              <h3 className="contact_title">Location</h3>
              <span className="contact_subtitle">
                Moradabad, Uttar Pradesh
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
