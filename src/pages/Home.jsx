import React from "react";
import "../css/Home.css";
import BookingSection from "./BookingSection";
import PopularCars from "../components/PopularCars";
import Footer from "./Footer";

const Home = () => {
  return (

    <div className="car-rental-container">
      <div className="section">
        <div className="card ">
          <h2>The Best Platform <br /> for Car Rental</h2>
          <p>
            Ease of doing a car rental safely and <br /> reliably. Of course at a low price.
          </p>
          <button className="rental-btn">Rental Car</button>
          <img src="/images/image 7.png" alt="White Car" />
        </div>

        <div className="card2">
          
          <h2>Easy way to rent a <br /> car at a low price</h2>
          <p>
            Providing cheap car rental services <br /> and safe and comfortable facilities.
          </p>
          <button className="rental-btn1">Rental Car</button>
          <img src="/images/image 8.png" alt="Gray Car" />
        </div>
      </div>

      <BookingSection/>
      <PopularCars />
      <Footer/>







    </div>
  );
};

export default Home;
