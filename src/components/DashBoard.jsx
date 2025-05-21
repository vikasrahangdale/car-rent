import React from "react";
import DashBoardSideNavbar from "../components/DashBoardSideNavbar";
import "../css/Dashboard.css";

const DashBoard = () => {
  return (
    <div className="dri-rental-dashboard2">
      <div className="dri-none">
        <DashBoardSideNavbar />
      </div>

      <div className="dri-left-section2">
        <div className="dri-details-rental2">
          <div className="dri-map-placeholder">
            <img
              src="https://i.pinimg.com/736x/37/b2/f2/37b2f293c0b851bfaf332c7b4ef072d7.jpg"
              alt=""
            />
          </div>

          <div className="dri-car-info1">

            <div className="dri-car-header">
              <img
                src="/images/pop car2.png"
                alt="Nissan GT-R"
                className="dri-car-img"
              />
              <div>
                <h3>Nissan GT – R</h3>
                <p className="dri-car-type1">Sport Car</p>
              </div>
              <span className="dri-car-id">#9761</span>
            </div>


            <div className="dri-dashboard-booking-form">
              {/* Pick-Up Section */}
              <div className="dri-dashboard-section">
                <div className="dri-dashboard-section-header1">
                  <input type="radio" name="type" checked />
                  <h5>Pick - Up</h5>
                </div>

                <div className="dri-dashboard-input-row">
                  <div className="dri-dashboard-input-group">
                    <label>Locations</label>
                    <select>
                      <option>Kota Semarang</option>
                    </select>
                  </div>
                  <div className="dri-dashboard-input-group">
                    <label>Date</label>
                    <input type="date" />
                  </div>
                  <div className="dri-dashboard-input-group">
                    <label>Time</label>
                    <input type="time" />
                  </div>
                </div>
              </div>
              

              {/* Drop-Off Section */}
              <div className="dri-dashboard-section1">
                <div className="dri-dashboard-section-header">
                  <input type="radio" name="type" />
                  <h5>Drop - Off</h5>
                </div>
                <div className="dri-dashboard-input-row1">
                  <div className="dri-dashboard-input-group">
                    <label>Locations</label>
                    <select>
                      <option>Kota Semarang</option>
                    </select>
                  </div>
                  <div className="dri-dashboard-input-group">
                    <label>Date</label>
                    <input type="date" />
                  </div>
                  <div className="dri-dashboard-input-group">
                    <label>Time</label>
                    <input type="time" />
                  </div>
                </div>
              </div>
              
            </div>








            <div className="dri-total-price2">
              <h1>Total Rental Price</h1>
              <p className="dri-subtext">
                Overall price and includes rental discount
              </p>
              <h6>$80.00</h6>
            </div>
          </div>
        </div>
        ' '
      </div>

      <div className="dri-right-section2">
        <div className="dri-top-cars">
          <h4>Top 5 Car Rental</h4>
          <div className="dri-donut-chart">
            <div className="dri-hello">
              <h1>
                72,030 <br /> Rent Cars
              </h1>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="220"
              height="220"
              viewBox="0 0 220 220"
              fill="none"
            >
              <path
                d="M13.0097 78.4267C10.3648 77.5657 9.0423 77.1352 7.80403 77.3584C6.76488 77.5457 5.69012 78.1427 4.98203 78.926C4.13821 79.8593 3.82709 81.1199 3.20483 83.641C-0.718887 99.5379 -1.05199 116.146 2.27318 132.247C5.59836 148.349 12.4831 163.466 22.3831 176.508C23.9532 178.576 24.7382 179.61 25.8827 180.133C26.8431 180.572 28.0665 180.694 29.0948 180.455C30.3202 180.169 31.3639 179.25 33.4514 177.412L37.7462 173.629C39.8469 171.779 40.8973 170.854 41.3417 169.817C41.7575 168.846 41.8549 167.954 41.6582 166.917C41.448 165.808 40.5459 164.574 38.7418 162.107C31.3023 151.933 26.1086 140.257 23.5471 127.854C20.9855 115.45 21.1292 102.672 23.9299 90.3835C24.6091 87.4034 24.9487 85.9134 24.7024 84.8119C24.472 83.7814 24.0293 83.0009 23.263 82.2744C22.4439 81.4978 21.1131 81.0646 18.4514 80.1981L13.0097 78.4267Z"
                fill="#63A9E8"
              />
              <path
                d="M37.8751 182.125C35.9082 184.092 34.9248 185.075 34.5622 186.28C34.2579 187.291 34.3026 188.52 34.6795 189.506C35.1287 190.681 36.1111 191.53 38.0759 193.228C57.0981 209.668 81.2548 219.151 106.545 219.946C131.835 220.74 156.539 212.793 176.556 197.58C178.624 196.009 179.658 195.223 180.18 194.079C180.618 193.118 180.74 191.894 180.499 190.866C180.213 189.641 179.293 188.598 177.454 186.511L173.669 182.219C171.818 180.119 170.893 179.069 169.855 178.625C168.884 178.21 167.992 178.113 166.955 178.31C165.846 178.521 164.613 179.424 162.146 181.23C146.313 192.822 126.993 198.855 107.227 198.234C87.4615 197.612 68.5585 190.378 53.4841 177.815C51.1361 175.858 49.9621 174.879 48.8686 174.599C47.8457 174.337 46.9492 174.378 45.9543 174.732C44.8906 175.109 43.901 176.099 41.9217 178.078L37.8751 182.125Z"
                fill="#2185DE"
              />
              <path
                d="M182.125 182.125C184.092 184.092 185.075 185.075 186.28 185.438C187.291 185.742 188.52 185.697 189.506 185.32C190.681 184.871 191.53 183.889 193.228 181.924C200.904 173.041 207.121 162.973 211.627 152.095C216.133 141.217 218.856 129.702 219.709 117.993C219.898 115.403 219.992 114.108 219.479 112.96C219.048 111.996 218.211 111.095 217.281 110.596C216.172 110 214.782 110 212 110H206.277C203.478 110 202.078 110 201.059 110.485C200.106 110.939 199.443 111.544 198.905 112.452C198.33 113.423 198.192 114.945 197.915 117.989C197.11 126.843 194.971 135.54 191.557 143.782C188.144 152.024 183.506 159.686 177.814 166.516C175.858 168.864 174.879 170.038 174.599 171.131C174.337 172.154 174.378 173.051 174.731 174.046C175.109 175.109 176.099 176.099 178.078 178.078L182.125 182.125Z"
                fill="#175D9C"
              />
              <path
                d="M211.746 102.803C214.52 102.607 215.908 102.508 216.971 101.836C217.864 101.272 218.635 100.315 218.997 99.3229C219.428 98.1409 219.243 96.8557 218.872 94.2854C215.449 70.566 204.355 48.5306 187.174 31.6149C169.993 14.6993 147.787 3.94985 124.017 0.896602C121.441 0.56574 120.154 0.400309 118.978 0.849781C117.992 1.22698 117.047 2.01332 116.497 2.91455C115.841 3.98846 115.765 5.37714 115.612 8.15449L115.297 13.8686C115.143 16.6635 115.066 18.0609 115.494 19.1054C115.894 20.0824 116.462 20.7773 117.34 21.3645C118.278 21.9922 119.79 22.214 122.814 22.6576C141.298 25.369 158.523 33.8912 171.933 47.0944C185.344 60.2977 194.133 77.3876 197.132 95.8274C197.623 98.8441 197.868 100.352 198.51 101.281C199.111 102.149 199.815 102.706 200.798 103.091C201.849 103.503 203.245 103.404 206.037 103.207L211.746 102.803Z"
                fill="#0D3559"
              />
              <path
                d="M110 8.00001C110 5.21847 110 3.8277 109.404 2.71934C108.905 1.78921 108.004 0.952046 107.04 0.521171C105.892 0.00772927 104.597 0.102064 102.007 0.290735C82.7746 1.69179 64.197 8.12976 48.1708 19.0211C32.1446 29.9125 19.3199 44.8155 10.9374 62.1814C9.80858 64.52 9.24417 65.6893 9.29869 66.9463C9.34444 68.0012 9.79137 69.1465 10.4722 69.9536C11.2835 70.9154 12.5766 71.4273 15.1628 72.4513L20.4837 74.558C23.0863 75.5884 24.3876 76.1037 25.5138 76.028C26.5673 75.9573 27.4062 75.6385 28.2409 74.9919C29.1332 74.3006 29.822 72.9364 31.1998 70.2081C37.9312 56.8775 47.9574 45.4306 60.3809 36.9876C72.8043 28.5447 87.1382 23.4365 102.011 22.085C105.055 21.8084 106.577 21.6701 107.548 21.0949C108.456 20.5569 109.061 19.8943 109.515 18.9408C110 17.9215 110 16.5219 110 13.7228V8.00001Z"
                fill="#A6CEF2"
              />
            </svg>
          </div>

          <ul className="dri-car-list">
            <li>
              <span className="dri-dot dri-sport"></span> Sport Car - 17,439
            </li>
            <li>
              <span className="dri-dot dri-suv"></span> SUV - 9,478
            </li>
            <li>
              <span className="dri-dot dri-coupe"></span> Coupe - 18,197
            </li>
            <li>
              <span className="dri-dot dri-hatch"></span> Hatchback - 12,510
            </li>
            <li>
              <span className="dri-dot dri-mpv"></span> MPV - 14,406
            </li>
          </ul>
        </div>

        <div className="dri-recent-transactions">
          <div className="dri-transactions-header">
            <h4>Recent Transaction</h4>
            <a href="#">View All</a>
          </div>
          <ul className="dri-transaction-list">
            <li>
              <img src="/images/pop car3.png" alt="Nissan" />
              <div>
                <p>Nissan GT – R</p>
                <span>Sport Car</span>
              </div>

              <p className="dri-date1">20 July</p>
              <p className="dri-price1">$80.00</p>
            </li>
            <li>
              <img src="/images/pop car1.png" alt="Koenigsegg" />
              <div>
                <p>Koenigsegg</p>
                <span>Sport Car</span>
              </div>
              <p className="dri-date1">19 July</p>
              <p className="dri-price1">$99.00</p>
            </li>
            <li>
              <img src="/images/pop car2.png" alt="Rolls Royce" />
              <div>
                <p>Rolls - Royce</p>
                <span>Luxury</span>
              </div>
              <p className="dri-date1">18 July</p>
              <p className="dri-price1">$96.00</p>
            </li>
            <li>
              <img src="/images/pop car1.png" alt="CR-V" />
              <div>
                <p>CR – V</p>
                <span>SUV</span>
              </div>
              <p className="dri-date1">17 July</p>
              <p className="dri-price1">$80.00</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
