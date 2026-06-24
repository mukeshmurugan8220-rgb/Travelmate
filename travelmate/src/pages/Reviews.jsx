function Reviews() {
  const reviews = [
    {
      name: "Mukesh",
      comment: "Amazing travel experience!"
    },
    {
      name: "Arun",
      comment: "Best travel website."
    }
  ];

  return (
    <div className="container">
      <h1>Traveler Reviews</h1>

      {reviews.map((review, index) => (
        <div className="review" key={index}>
          <h3>{review.name}</h3>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;