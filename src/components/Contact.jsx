import "./Contact.css";
import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage =
`Hello Sarve Electronic,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;


    const whatsappURL =
    `https://wa.me/918234002449?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(whatsappURL, "_blank");
  };


  return (
    <section className="contact" id="contact">


      <h2>Contact Us</h2>


      <div className="contact-container">


        {/* Contact Information */}

        <div className="contact-info">

          <h3>Sarve Electronic</h3>


          <p>
            📍 Gujri Chowk, Ram Mandir Road,
            Rampaili, Madhya Pradesh
          </p>


          <p>
            📞
            <a href="tel:+918234002449">
              +91 8234002449
            </a>
          </p>


          <p>
            📧 sarveelectronic@gmail.com
          </p>


          <p>
            🕒 Mon - Sun : 9:00 AM - 8:00 PM
          </p>


          <div className="contact-buttons">


            <a
              href="tel:+918234002449"
              className="call-btn"
            >
              📞 Call Now
            </a>


            <a
              href="https://wa.me/918234002449"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              💬 WhatsApp
            </a>


          </div>


        </div>



        {/* Contact Form */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >


          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
          />


          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />


          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            required
          ></textarea>


          <button type="submit">
            Send Message
          </button>


        </form>


      </div>



      {/* Google Map */}

      <div className="map">

        <iframe
          src="https://www.google.com/maps?q=Sarve%20Electronic%20Rampaili%20Madhya%20Pradesh&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          title="Sarve Electronic Location"
        ></iframe>


      </div>


    </section>
  );
}


export default Contact;