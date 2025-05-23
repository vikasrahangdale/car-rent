import React from 'react'
import "../css/RecentCars.css"
import Footer  from "../pages/Footer"

const carData = {
  recent: [
    {
      name: "Koenigsegg",
      type: "Sport",
      fuel: "90L",
      transmission: "Manual",
      people: "2 People",
      rent: "$99.00",
      fav: true,
      image: "/images/pop car1.png",
    },
    {
      name: "Nissan GT – R",
      type: "Sport",
      fuel: "80L",
      transmission: "Manual",
      people: "2 People",
      rent: "$80.00",
      discount: "$100.00",
      fav: false,
      image: "/images/pop car2.png",
    },
    {
      name: "Rolls–Royce",
      type: "Sport",
      fuel: "70L",
      transmission: "Manual",
      people: "4 People",
      rent: "$96.00",
      fav: false,
     image: "/images/pop car3.png",
    },
  ],
  recommended: [
    {
      name: "All New Rush",
      type: "SUV",
      fuel: "70L",
      transmission: "Manual",
      people: "6 People",
      rent: "$72.00",
      discount: "$80.00",
      fav: false,
      image: "/images/recar1.png",
    },
    {
      name: "CR – V",
      type: "SUV",
      fuel: "80L",
      transmission: "Manual",
      people: "6 People",
      rent: "$80.00",
      fav: true,
       image: "/images/recar2.png",
    },
    {
      name: "All New Terios",
      type: "SUV",
      fuel: "90L",
      transmission: "Manual",
      people: "6 People",
      rent: "$74.00",
      fav: false,
      image: "/images/recar3.png",
    },
  ],
};

const CarCard = ({ car }) => {
  return (
    <div className="rc-car-card">
      <div className="rc-top">
        <h3>{car.name}</h3>
        <span className={`rc-fav ${car.fav ? "rc-red" : ""}`}>&hearts;</span>
      </div>
      <p className="rc-type">{car.type}</p>

       <img src={car.image} alt={car.name} className="rc-car-img" />
      <div className="rc-info">
        <span><i className="ri-gas-station-fill"></i> {car.fuel}</span>
        <span><i className="ri-car-fill"></i> {car.transmission}</span>
        <span><i className="ri-group-fill"></i> {car.people}</span>
      </div>
      <div className="rc-price-section">
        <h4>
          {car.rent}{" "}
          <span className="rc-discount">{car.discount || ""}</span>{" "}
          <small>/day</small>
        </h4>
        <button className="rc-rent-btn">Rent Now</button>
      </div>
    </div>
  );
};

const RecentCars = () => {
  return (
    <div>

  
    <div className="rc-container">
      <section>
        <div className="rc-header">
          <h2>Recent Car</h2>
          <a href="#">View All</a>
        </div>
        <div className="rc-card-row">
          {carData.recent.map((car, i) => (
            <CarCard key={i} car={car} />
          ))}
        </div>
      </section>

      <section>
        <div className="rc-header">
          <h2>Recommendation Car</h2>
          <a href="#">View All</a>
        </div>
        <div className="rc-card-row">
          {carData.recommended.map((car, i) => (
            <CarCard key={i} car={car} />
          ))}
        </div>
      </section>

     
    </div>
    <Footer/>
     </div>
   
  );
};

export default RecentCars;
