import "./Products.css";

function Products() {

  const products = [
    {
      name: "Arduino UNO",
      image: "/products/Aurdino.jpg",
      desc: "Original Arduino board for IoT & Electronics Projects."
    },
    {
      name: "CCTV Camera",
      image: "/products/Camera.jpg",
      desc: "HD CCTV Camera for Home & Office Security."
    },
    {
      name: "Inverter",
      image: "/products/inverter.jpg",
      desc: "Reliable inverter for home and office backup."
    },
    {
      name: "LED Board",
      image: "/products/led-board.jpg",
      desc: "Premium LED Display & Advertising Boards."
    },
    {
      name: "LED Light",
      image: "/products/led.jpg",
      desc: "Energy Saving LED Lights."
    },
    {
      name: "Mobile Charger",
      image: "/products/mobile-charger.jpg",
      desc: "Fast Charging Mobile Chargers."
    },
    {
      name: "Solar Panel",
      image: "/products/solar.jpg",
      desc: "High Efficiency Solar Panels."
    },
    {
      name: "Switch",
      image: "/products/switch.jpg",
      desc: "Electrical Switches & Accessories."
    }
  ];

  return (

    <section className="products" id="products">

      <h2>Our Products</h2>

      <p className="product-subtitle">
        Genuine Electronics, Electrical & IoT Products at Best Prices
      </p>

      <div className="product-grid">

        {products.map((item, index) => (

          <div className="product-card" key={index}>

            <img src={item.image} alt={item.name} />

            <div className="product-info">

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              <div className="product-buttons">

                <a
                  href="https://wa.me/918234002449"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-btn"
                >
                  WhatsApp
                </a>

                <button className="details-btn">
                  View Details
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Products;