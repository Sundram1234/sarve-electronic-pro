import "./Gallery.css";

function Gallery() {

  const images = [
    "/gallery/shop.jpg",
    "/gallery/cctv.jpg",
    "/gallery/ledtv.jpg",
    "/gallery/arduino.jpg",
    "/gallery/solar.jpg",
    "/gallery/electrical.jpg"
  ];

  return (
    <section className="gallery" id="gallery">

      <h2>Our Gallery</h2>

      <p>
        Explore our shop, products and recent installation work.
      </p>

      <div className="gallery-grid">

        {images.map((img, index) => (

          <div className="gallery-card" key={index}>
            <img src={img} alt="Gallery" />
          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;