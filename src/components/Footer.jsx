import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        {/* About */}
        <div className="footer-about">
          <h2>Sarve Electronic</h2>

          <p>
            Your trusted electronics, electrical, CCTV, Arduino & IoT store in
            Rampaili. We provide quality products, innovative solutions and
            reliable repair services.
          </p>
        </div>


        {/* Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>


        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>📍 Gujri Chowk, Rampaili, Madhya Pradesh</p>

          <p>
            📞 
            <a href="tel:+918234002449">
              +91 8234002449
            </a>
          </p>

          <p>
            📧 
            <a href="mailto:sarveelectronic@gmail.com">
              sarveelectronic@gmail.com
            </a>
          </p>


          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">LinkedIn</a>
          </div>

        </div>

      </div>


      <div className="footer-bottom">
        © 2026 Sarve Electronic | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;