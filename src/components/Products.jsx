import "./Products.css";

function Products() {

  const products = [
    {
      name: "Arduino UNO",
      category: "Arduino & IoT",
      image: "/products/Aurdino.jpg",
      desc: "Arduino boards and electronics development components."
    },

    {
      name: "CCTV Camera",
      category: "Security System",
      image: "/products/Camera.jpg",
      desc: "HD CCTV camera installation and service."
    },

    {
      name: "Inverter",
      category: "Electrical",
      image: "/products/inverter.jpg",
      desc: "Home inverter and battery solutions."
    },

    {
      name: "LED Board",
      category: "LED Electronics",
      image: "/products/led-board.jpg",
      desc: "LED display boards and repairing service."
    },

    {
      name: "LED Light",
      category: "Lighting",
      image: "/products/led.jpg",
      desc: "Energy efficient LED lights."
    },

    {
      name: "Mobile Charger",
      category: "Accessories",
      image: "/products/mobile-charger.jpg",
      desc: "Quality mobile chargers and accessories."
    },

    {
      name: "Solar Panel",
      category: "Solar Energy",
      image: "/products/solar.jpg",
      desc: "Solar panel and renewable energy products."
    },

    {
      name: "Switch",
      category: "Electrical",
      image: "/products/switch.jpg",
      desc: "Electrical switches and accessories."
    }
  ];



  const enquiry = (product) => {

    const message =
    `Hello Sarve Electronic,

I want details about:
${product}`;

    window.open(
      `https://wa.me/918234002449?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  };



  return (

    <section id="products" className="products">


      <h2>Our Products</h2>


      <div className="product-grid">


        {products.map((item,index)=>(


          <div className="product-card" key={index}>


            <img 
              src={item.image} 
              alt={item.name}
            />


            <h3>
              {item.name}
            </h3>


            <span>
              {item.category}
            </span>


            <p>
              {item.desc}
            </p>


            <button
              onClick={()=>enquiry(item.name)}
            >
              View Details
            </button>


          </div>


        ))}


      </div>


    </section>

  );

}


export default Products;