import React, { useState } from "react";
import "./Contact.css";
import contactImg from "../assets/contactme.jpg";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Form Submitted Successfully");
        form.reset();
      } else {
        alert("Form Submission Failed");
      }
    } catch (error) {
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="fas fa-headset"></i> Contact <span>Me</span>
      </h2>

      <div className="container">
        <div className="content">
          <div className="image-box">
            <img draggable="false" src={contactImg} alt="Contact Niraj" />
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="hidden"
                name="access_key"
                value="e44c1045-2a75-447d-ab74-5ad940502011"
              />
              <div className="field">
                <input type="text" name="name" placeholder="Name" required />
                <i className="fas fa-user"></i>
              </div>
              <div className="field">
                <input type="text" name="email" placeholder="Email" required />
                <i className="fas fa-envelope"></i>
              </div>
              <div className="field">
                <input type="text" name="phone" placeholder="Phone" />
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="message">
                <textarea placeholder="Message" name="message" required></textarea>
                <i className="fas fa-comment-dots"></i>
              </div>
            </div>
            <div className="button-area">
              <button type="submit">
                Submit <i className="fa fa-paper-plane"></i>
              </button>
            </div>
            <div id="form-status">{status}</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;