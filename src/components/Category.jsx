import React from "react";
import "../css/Category.css";
import BookingSection from "../pages/BookingSection";
import SideNavbar from '../components/SideNavbar';
import Footer from "../pages/Footer"
import { Link } from "react-router-dom";


const Category = () => {
const carData = [
  {
    name: 'Koenigsegg',
    type: 'Sport',
    price: '$99.00',
    people: 2,
    fuel: '90L',
    gear: 'Manual',
    discount: null,
image: "/images/pop car1.png",
  liked: false
  },
  {
    name: 'Nissan GT - R',
    type: 'Sport',
    price: '$80.00',
    people: 2,
    fuel: '80L',
    gear: 'Manual',
    discount: '$100.00',
    image: "/images/pop car2.png",
      liked: true
    
    
  },
  {
    name: 'Rolls-Royce',
    type: 'Sport',
    price: '$96.00',
    people: 4,
    fuel: '70L',
    gear: 'Manual',
    discount: null,
    image: "/images/pop car3.png",
      liked: false
  },
  {
    name: 'All New Rush',
    type: 'SUV',
    price: '$72.00',
    people: 6,
    fuel: '70L',
    gear: 'Manual',
    discount: '$80.00',
    image: "/images/pop car3.png",
      liked: false
  },
  {
    name: 'CR - V',
    type: 'SUV',
    price: '$80.00',
    people: 6,
    fuel: '80L',
    gear: 'Manual',
    discount: null,
    image: "/images/recar1.png",
     liked: true
  },
  {
    name: 'All New Terios',
    type: 'SUV',
    price: '$74.00',
    people: 6,
    fuel: '70L',
    gear: 'Manual',
    discount: null,
    image: "/images/recar2.png",
      liked: false
  },
  {
    name: 'MG ZX Exclusive',
    type: 'Hatchback',
    price: '$76.00',
    people: 4,
    fuel: '80L',
    gear: 'Manual',
    discount: '$86.00',
    image: "/images/recar3.png",
     liked: true
  },
  {
    name: 'New MG ZS',
    type: 'SUV',
    price: '$80.00',
    people: 6,
    fuel: '80L',
    gear: 'Manual',
    discount: null,
    image: "/images/recar4.png",
      liked: false
  },
  {
    name: 'MG ZX Excite',
    type: 'Hatchback',
    price: '$74.00',
    people: 4,
    fuel: '80L',
    gear: 'Electric',
    discount: null,
    image: "/images/recar5.png",
     liked: true
  }
];


 const CarCard = ({ car }) => (
  <div className="cat-card">
    <div className="rowcar-3">
      
      <div className="like-icon">
        <i className={`ri-heart-3-fill ${car.liked ? 'liked' : ''}`}></i>
      </div>

      <div className="cat-card-header">
        <h3 className="cat-card-title">{car.name}</h3>
        <span className="cat-card-type">{car.type}</span>
      </div>

      <div className="cat-card-img">
        <img src={car.image} alt={car.name} className="car-image" />
      </div>

      <div className="cat-card-specs">
        <span><i className="ri-gas-station-fill"></i> {car.fuel}</span>
        <span><i className="ri-car-fill"></i> {car.gear}</span>
        <span><i className="ri-group-fill"></i> {car.people} People</span>
      </div>

      <div className="cat-card-price">
        <span className="cat-card-cost">{car.price} <small>/ day</small></span>
        {car.discount && <span className="cat-card-discount">{car.discount}</span>}


       <Link to="/payment">
  <button className="cat-card-btn">Rent Now</button>
</Link>

      </div>

    </div>
  </div>
);


  const CarRental = () => (
    <div className="cat-container">
      {carData.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
      <div className="cat-show-more">Show More Car</div>
    </div>
  );

  return (

    <div>

    
    <div className="category-page1">
      <SideNavbar />
      <div className="category-carrent">

        
  <div className="cat-booking-form">
  {/* Pick-Up Section */}
  <div className="cat-booking-section1">
    <div className="cat-section-header">
      <input type="radio" name="type" checked />
      <h2>Pick - Up</h2>
    </div>
    <div className="cat-input-row">
      <div className="cat-input-group">
        <label>Locations</label>
        <select>
          <option>Select your city</option>
        </select>
      </div>
      <div className="cat-input-group">
        <label>Date</label>
        <input type="date" />
      </div>
      <div className="cat-input-group">
        <label>Time</label>
        <input type="time" />
      </div>
    </div>
  </div>

  {/* Switch Button */}
  <div className="cat-switch-button">
    <button>↑↓</button>
  </div>

  {/* Drop-Off Section */}
  <div className="cat-booking-section2">
    <div className="cat-section-header">
      <input type="radio" name="type" />
      <h2>Drop - Off</h2>
    </div>
    <div className="cat-input-row">
      <div className="cat-input-group">
        <label>Locations</label>
        <select>
          <option>Select your city</option>
        </select>
      </div>
      <div className="cat-input-group">
        <label>Date</label>
        <input type="date" />
      </div>
      <div className="cat-input-group">
        <label>Time</label>
        <input type="time" />
      </div>
    </div>
  </div>
</div>


        <CarRental />
      </div>
     

    </div>
    <Footer/>
    </div>
  );
};

export default Category;
