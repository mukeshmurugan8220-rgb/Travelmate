import DestinationCard from "../components/DestinationCard";

function Home() {
  const destinations = [
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Maldives",
      description: "Beautiful beaches"
    },
    {
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      title: "Dubai",
      description: "Luxury destination"
    },
    {
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      title: "Paris",
      description: "City of Love"
    }
  ];

  return (
    <div className="container">
      <h1>Explore The World</h1>

      <div className="card-container">
        {destinations.map((place, index) => (
          <DestinationCard
            key={index}
            image={place.image}
            title={place.title}
            description={place.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;