import "./Services.css";

function Services() {

  const services = [
    {
      icon: "📺",
      title: "LED TV Repair",
      desc: "Professional LED TV repair and installation."
    },
    {
      icon: "📷",
      title: "CCTV Installation",
      desc: "Home & Office CCTV setup with support."
    },
    {
      icon: "⚡",
      title: "Electrical Services",
      desc: "Wiring, switches and electrical solutions."
    },
    {
      icon: "☀️",
      title: "Solar Installation",
      desc: "Solar panels, inverter and complete setup."
    },
    {
      icon: "🤖",
      title: "Arduino & IoT",
      desc: "Arduino projects, sensors and automation."
    },
    {
      icon: "🛠️",
      title: "Electronics Repair",
      desc: "Repairing of electronic products and accessories."
    }
  ];

  const bookService = (service) => {
    const message = `Hello Sarve Electronic,

I want to book this service:

${service}`;

    window.open(
      `https://wa.me/918234002449?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="services" id="services">

      <h2>Our Services</h2>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <button
              onClick={() => bookService(service.title)}
            >
              Book Service
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;