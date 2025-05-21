import React from "react";
import "../css/popularCars.css";

const CarCard = ({ car }) => {
  return (
    <div className="car-card-container">
      <div className="car-card">
        <h2 className="car-name">{car.name}</h2>
        <p className="car-type">{car.type}</p>

        <h2 className="like">
          <span>
          <i class="ri-heart-line"></i>
          </span>
        </h2>

        <img src={car.image} alt={car.name} className="car-image" />

        <div className="car-specs">
          <span>
            <i className="ri-gas-station-fill"></i> {car.fuel}L
          </span>
          <span>
            <i className="ri-car-fill"></i> {car.transmission}
          </span>
          <span>
              <i className="ri-group-fill"></i> {car.capacity}  People
          </span>
        </div>

        <div className="car-price">
          ${car.price }/day{" "}
          <button className="rent-button">Rent Now</button>
        </div>
        
      </div>

      
    </div>
  );
};
const CarSection = ({ title, cars, className }) => (
  <div className={`car-section ${className}`}>
    <h1 className="section-title">{title}</h1>

    <div className="car-list">
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  </div>
);


const PopularCars = () => {

  const popularCars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      fuel: 90,
      like: '',
      transmission: "Manual",
      capacity: 2,
      price: 99.0,
      image: "/images/pop car1.png",
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      fuel: 80,
      like: '',
      transmission: "Manual",
      capacity: 2,
      price: 80.0,
      image: "/images/pop car2.png",
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      fuel: 70,
      like: '',
      transmission: "Manual",
      capacity: 4,
      price: 96.0,
      image: "/images/pop car3.png",
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      fuel: 90,
      like: '',
      transmission: "Manual",
      capacity: 2,
      price: 90.0,
      image: "/images/pop car4.png",
    },
  ];

  const recommendedCars = [
    {
      name: "All New Rush",
      type: "SUV",
      fuel: 70,
      transmission: "Manual",
      capacity: 6,
      price: 72.0,
      image: "/images/recar1.png",
    },
    {
      name: "All CR - V",
      type: "SUV",
      fuel: 80,
      transmission: "Manual",
      capacity: 6,
      price: 80.0,
      image: "/images/recar2.png",
    },
    {
      name: "All New Terios",
      type: "SUV",
      fuel: 90,
      transmission: "Manual",
      capacity: 6,
      price: 74.0,
      image: "/images/recar3.png",
    },
    {
      name: "MGZX Excite",
      type: "Hatchback",
      fuel: 90,
      transmission: "Manual",
      capacity: 4,
      price: 74.0,
      image: "/images/recar4.png",
    },
    {
      name: "MGZX Exclusive",
      type: "Hatchback",
      fuel: 70,
      transmission: "Manual",
      capacity: 4,
      price: 76.0,
      image: "/images/recar5.png",
    },
    {
      name: "New MGXZS",
      type: "SUV",
      fuel: 80,
      transmission: "Manual",
      capacity: 6,
      price: 80.0,
      image: "/images/recar6.png",
    },
    {
      name: "MGZX Excite",
      type: "Hatchback",
      fuel: 90,
      transmission: "Manual",
      capacity: 4,
      price: 74.0,
      image: "/images/recar5.png",
    },
    {
      name: "New MGZS",
      type: "SUV",
      fuel: 80,
      transmission: "Manual",
      capacity: 6,
      price: 80.0,
      image: "/images/recar6.png",
    },
  ];

  return (
    <div className="car-rental-ui">
      <h5>View All</h5>
      <CarSection title="Popular Cars" cars={popularCars} className='popular' />
    <h5>View All</h5>

     <  CarSection title="Recommended Cars" cars={recommendedCars} className="recommended-section" />
     <button className="showcar">Show More Car</button>
    </div>
  );
};

export default PopularCars;
