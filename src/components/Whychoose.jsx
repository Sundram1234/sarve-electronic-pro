import "./WhyChoose.css";

function WhyChoose() {
  const features = [
    {
      icon: "🛡️",
      title: "Genuine Products",
      desc: "100% Original Electronics, Electrical & IoT Products."
    },
    {
      icon: "💰",
      title: "Best Price",
      desc: "Quality products at affordable and competitive prices."
    },
    {
      icon: "🛠️",
      title: "Expert Repair",
      desc: "Professional repair service for LED TV & Electronics."
    },
    {
      icon: "⚡",
      title: "Fast Service",
      desc: "Quick installation, repair and customer support."
    }
  ];

  return (
    <section className="whychoose">
      <h2>Why Choose Sarve Electronic?</h2>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;