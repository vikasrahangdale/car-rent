import React, { useState } from "react";
import "../css/payment.css";
import Footer from "../pages/Footer";

export default function payment() {
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = () => {
    if (termsChecked) {
      alert("Rental Confirmed!");
    } else {
      alert("You must agree to the terms and conditions.");
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-inner-container">
        <div className="payment-summary-section">
          <h2 className="payment-section-title1">Rental Summary</h2>
          <p className="payment-subtext-rent">
            Prices may change depending on the length of the <br />
            rental and the price of your rental car.
          </p>

          <div className="payment-summary-card">
            <img
              src="/images/pop car2.png"
              alt="Car"
              className="payment-car-img"
            />
            <div>
              <h3 className="payment-car-name">Nissan GT – R</h3>
              <div className="payment-rating-rent">★★★★☆</div>
              <p className="payment-review-text">440+ Reviewer</p>
            </div>
          </div>

          <div className="payment-price-details">
            <div className="payment-price-row">
              <span>Subtotal</span>
              <span>$80.00</span>
            </div>
            <div className="payment-price-row">
              <span>Tax</span>
              <span>$0</span>
            </div>

            <div className="payment-promo">
              <input
                type="text"
                placeholder="Apply promo code"
                className="payment-promo-input"
              />
              <button className="payment-apply-btn">Apply now</button>
            </div>
            <div className="payment-total-price">
              <span>Total Rental Price</span>
              <span>$80.00</span>
            </div>
            <p className="payment-subtext">
              Overall price and includes rental discount
            </p>
          </div>
        </div>

        <div className="payment-form-wrapper">
          <div className="payment-form-section">
            <h2 className="payment-section-title">Billing Info</h2>

            <div className="payment-input-grid">
              <div className="payment-input-group">
                <label className="payment-label" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="payment-input2"
                />
              </div>

              <div className="payment-input-group">
                <label className="payment-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone number"
                  className="payment-input2"
                />
              </div>

              <div className="payment-input-group">
                <label className="payment-label" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  className="payment-input2"
                />
              </div>

              <div className="payment-input-group">
                <label className="payment-label" htmlFor="town">
                  Town or City
                </label>
                <input
                  type="text"
                  id="town"
                  placeholder="Town or city"
                  className="payment-input2"
                />
              </div>
            </div>

            <div className="payment-info-block">
              <h2 className="payment-section-title">Rental Info</h2>
              <p className="subtext-rental-date">
                Please select your rental date
              </p>

              <label className="payment-label-pick">Pick – Up</label>
              <div className="payment-input-grid-3">
                <select className="payment-input">
                  <option>Select your city</option>
                </select>

                <input type="date" className="payment-input" />

                <select className="payment-input">
                  <option>Select your time</option>
                </select>
              </div>
            </div>


            <div className="payment-info-block1">
              <label className="payment-label-drop">Drop – Off</label>
              <div className="payment-input-grid-3">
                <select className="payment-input-drop">
                  <option>Select your city</option>
                </select>
                <input type="date" className="payment-input-drop" />
                <select className="payment-input-drop">
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="payment-visa-container">
        <div className="payment-payment-header">
          <h2>Payment Method</h2>
          <span>Step 3 of 4</span>
        </div>

        <p className="payment-payment-subtext">
          Please enter your payment method
        </p>

        <div className="payment-payment-options">
          <label className="payment-payment-option">
            <input
              className="payment-credite-ratio"
              type="radio"
              name="payment"
              value="credit"
            />
            <span className="payment-credit-name">CreditCard</span>
            <div className="payment-credit-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                alt="Visa"
                className="payment-logo3"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                alt="Mastercard"
                className="payment-logo"
              />
            </div>
          </label>

          <div className="payment-credit-form">
            <div className="payment-input-row">
              <div>
                <label className="payment-label-card" htmlFor="cardNumber">
                  Card Number
                </label>
                <input type="text" id="cardNumber" placeholder="Card number" />
              </div>

              <div>
                <label className="payment-label-card" htmlFor="expiryDate">
                  Expiry Date
                </label>
                <input type="text" id="expiryDate" placeholder="DD / MM / YY" />
              </div>
            </div>

            <div className="payment-input-row1">
              <div>
                <label className="payment-label-card" htmlFor="cardHolder">
                  Card Holder
                </label>
                <input type="text" id="cardHolder" placeholder="Card holder" />
              </div>

              <div>
                <label className="payment-label-card" htmlFor="cvc">
                  CVC
                </label>
                <input type="text" id="cvc" placeholder="CVC" />
              </div>
            </div>
          </div>

          <label className="payment-payment-option">
            <input type="radio" name="payment" value="paypal" />
            <span>PayPal</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="payment-logo-large"
            />
          </label>

          <div className="payment-payment-options">
            <label className="payment-payment-option">
              <input type="radio" name="payment" value="bitcoin" />
              <span>Bitcoin</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
                alt="Bitcoin"
                className="payment-logo1"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="confirm-container">
        <h2 className="confirm-h2">Confirmation</h2>
        <p className="confirm-step">Step 4 of 4</p>
        <p className="confirm-subhed">
          We are getting to the end. Just few clicks and your rental is ready!
        </p>

        <div className="confirm-checkbox-group">
          <label className="confirm-checkbox-item">
            <input
              className="confirm-checkbox"
              type="checkbox"
              checked={marketingChecked}
              onChange={() => setMarketingChecked(!marketingChecked)}
            />
            I agree with sending an Marketing and newsletter emails. No spam,
            promised!
          </label>

          <label className="confirm-checkbox-item">
            <input
              type="checkbox"
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
            />
            I agree with our terms and conditions and privacy policy.
          </label>
        </div>

        <button className="confirm-rent-button" onClick={handleSubmit}>
          Rent Now
        </button>

        <div className="confirm-security-info">
          <span role="img" aria-label="shield">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="32"
              viewBox="0 0 30 32"
              fill="none"
            >
              <path
                d="M24.053 5.95995C23.1585 6.01107 22.2612 5.93929 21.3863 5.74662C20.3309 5.38522 19.3438 4.84885 18.4663 4.15995C17.7156 3.6278 17.0028 3.04418 16.333 2.41329C16.049 2.14803 15.6749 2.00049 15.2863 2.00049C14.8977 2.00049 14.5236 2.14803 14.2396 2.41329C13.5876 3.02423 12.9021 3.59845 12.1863 4.13329C11.3034 4.83124 10.3126 5.38066 9.25295 5.75995C8.25634 5.98514 7.23255 6.06596 6.21295 5.99995C5.37809 5.96538 4.54574 5.88526 3.71962 5.75995C3.51775 5.73003 3.31191 5.74106 3.1144 5.79239C2.91688 5.84372 2.73172 5.9343 2.56996 6.05873C2.40821 6.18316 2.27316 6.33889 2.17288 6.51663C2.0726 6.69437 2.00914 6.89049 1.98629 7.09329C1.91962 7.73329 1.74629 9.39995 1.66629 11.2533C1.55417 13.105 1.67061 14.9634 2.01295 16.7866C2.97834 19.8072 4.75388 22.5051 7.14629 24.5866C9.04787 26.3803 11.1098 27.9959 13.3063 29.4133C13.8949 29.8175 14.5922 30.0338 15.3063 30.0338C16.0203 30.0338 16.7176 29.8175 17.3063 29.4133C19.3863 27.959 21.3318 26.3213 23.1196 24.5199C25.372 22.4232 27.04 19.7765 27.9596 16.84"
                stroke="#1A202C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.6665 14.6667L17.4798 18.48C17.5036 18.5059 17.5324 18.5265 17.5645 18.5406C17.5967 18.5548 17.6314 18.5621 17.6665 18.5621C17.7016 18.5621 17.7363 18.5548 17.7685 18.5406C17.8006 18.5265 17.8294 18.5059 17.8532 18.48L28.3332 8"
                stroke="#3563E9"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <p className="confirm-safe-text">All your data are safe</p>
            <p className="confirm-info-text">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </div>
      </div>

      <br />

      <div className="confirm-privacy-footer">
  <Footer />
      </div>
    
    </div>
  );
}
