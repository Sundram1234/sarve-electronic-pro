import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <h1>
          Welcome to <span>Sarve Electronic</span>
        </h1>

        <p>
          Your One Stop Shop for Electronics, Electrical Products,
          CCTV Cameras, LED TV Repair, Arduino & IoT Components,
          Solar Solutions and Mobile Accessories.
        </p>

        <div className="hero-buttons">

          <a
            href="#products"
            className="btn explore"
          >
            🛒 Explore Products
          </a>

          <a
            href="tel:+918234002449"
            className="btn call"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/918234002449"
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;