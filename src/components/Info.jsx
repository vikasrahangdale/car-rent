import React from "react";
import SideNavbar from "./SideNavbar";
import "../css/Sidenavbar.css";
import "../css/info.css";
import RecentCars from "./RecentCars";

const Info = () => {
  return (
    <div className="cars-details">
      <SideNavbar />

      <div className="show-details-cars">
        <div className="flex-div">
          <div className="left-section">
            <h2>
              Sports car with the best <br /> design and acceleration
            </h2>
            <p>
              Safety and comfort while driving a <br />
              futuristic and elegant sports car
            </p>
            <img
              src="/images/pop car2.png"
              alt="Nissan GT-R"
              className="main-car-img"
            />

            <div className="thumbnails">
              <div className="thumb1">
                <img
                  src="/images/pop car3.png"
                  alt="thumb1"
                  className="thumb selected"
                />
              </div>
              <div className="thumb2">
                <img
                  src="/images/Look 3.png"
                  alt="thumb1"
                  className="thumb selected"
                />
              </div>

              <div className="thumb3">
                <img
                  src="/images/View 2.png"
                  alt="thumb1"
                  className="thumb selected"
                />
              </div>
            </div>
          </div>

          <div className="right-section">
            <h3>Nissan GT – R</h3>
            <div className="rating">⭐⭐⭐⭐☆ 440+ Reviewer</div>
            <p className="description">
              NISMO has become the embodiment of Nissan’s outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </p>

            <div className="specs">
              <div>
                Type Car <strong> Sport</strong>
              </div>
              <div>
                Capacity <strong>2 Person</strong>
              </div>
              <div>
                Steering <strong> Manual</strong>
              </div>
              <div>
                Gasoline <strong> 70L</strong>
              </div>
            </div>

            <div className="price-section">
              <span className="discounted">$80.00</span>/days{" "}
              <span className="original">$100.00</span>
              <button className="rent-button1">Rent Now</button>
            </div>
          </div>
        </div>

        <div className="reviews-section">
          <h4>
            Reviews <span>13</span>
          </h4>
          <div className="review">
            <div className="reviewer">
              <img
                src="https://imgs.search.brave.com/wnMlgmBm2ByxL9yiR1JpQsfjsDyPVxQAgFUox8Ee4mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hZHVsdC1tYW4t/aXMtd29ya2luZy1t/b2Rlcm4tb2ZmaWNl/XzM2MjM4OS03ODgu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA"
                alt="Skylar Dias"
              />
              <div>
                <strong>Alex Stanton</strong>
                <div className="role">CEO at Bukalapak</div>
                <div className="date">21 July 2022</div>
              </div>
            </div>
            <div className="review-text">
              We are very happy with the service from the MORENT App. Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the
              officers is also very friendly and very polite.
            </div>
            <div className="rating1">⭐⭐⭐⭐☆</div>
          </div>

          <div className="review">
            <div className="reviewer">
              <img
                src="https://imgs.search.brave.com/wnMlgmBm2ByxL9yiR1JpQsfjsDyPVxQAgFUox8Ee4mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hZHVsdC1tYW4t/aXMtd29ya2luZy1t/b2Rlcm4tb2ZmaWNl/XzM2MjM4OS03ODgu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA"
                alt="Skylar Dias"
              />
              <div>
                <strong>Skylar Dias</strong>
                <div className="role">CEO at Amazon</div>
                <div className="date">20 July 2022</div>
              </div>
            </div>
            <div className="review-text">
              We are greatly helped by the services of the MORENT Application.
              Morent has low prices and also a wide variety of cars with good
              and comfortable facilities. In addition, the service provided by
              the officers is also very friendly and very polite.
            </div>
            <div className="rating1">⭐⭐⭐⭐☆</div>
          </div>

          <button className="show-all1">
            Show All <i class="ri-arrow-drop-down-line"></i>{" "}
          </button>
        </div>
      </div>

      <RecentCars />
    </div>
  );
};

export default Info;
