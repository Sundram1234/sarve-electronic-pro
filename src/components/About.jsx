import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-image">
          <img src="/shop.jpg" alt="Sarve Electronic Shop" />
        </div>

        <div className="about-content">

          <h2>About Sarve Electronic</h2>

          <p>
            Sarve Electronic is a trusted electronics and electrical store
            located at Gujri Chowk, Ram Mandir Road, Rampaili,
            Madhya Pradesh.
          </p>

          <p>
            We provide LED TV Repair, CCTV Installation, Electrical
            Products, Arduino & IoT Components, Solar Solutions,
            Mobile Accessories and Electronics Repair Services.
          </p>

          <div className="about-features">

            <div>✅ Quality Products</div>

            <div>✅ Professional Service</div>

            <div>✅ Affordable Price</div>

            <div>✅ Customer Satisfaction</div>

          </div>

          <div className="about-buttons">

            <a
              href="tel:+918234002449"
              className="about-btn"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/918234002449"
              target="_blank"
              rel="noreferrer"
              className="about-btn whatsapp"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;