import "./Reviews.css";

function Reviews() {

  const reviews = [
    {
      name: "Rahul Verma",
      rating: "⭐⭐⭐⭐⭐",
      text: "Best electronics shop. Genuine products and excellent service."
    },
    {
      name: "Priya Sharma",
      rating: "⭐⭐⭐⭐⭐",
      text: "Fast LED TV repair and reasonable prices. Highly recommended."
    },
    {
      name: "Amit Patel",
      rating: "⭐⭐⭐⭐⭐",
      text: "Good quality Arduino and IoT components. Friendly staff."
    }
  ];

  return (

    <section className="reviews" id="reviews">

      <h2>Customer Reviews</h2>

      <p className="review-subtitle">
        What our valuable customers say about us.
      </p>

      <div className="review-grid">

        {reviews.map((review, index) => (

          <div className="review-card" key={index}>

            <div className="review-rating">
              {review.rating}
            </div>

            <p className="review-text">
              "{review.text}"
            </p>

            <h4>
              {review.name}
            </h4>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Reviews;