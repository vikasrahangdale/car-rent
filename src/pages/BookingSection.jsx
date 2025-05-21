import React from 'react'

import "../css/bookingSection.css"
const BookingSection = () => {
  return (
    
    
  <div className="booking-form">
  <div className="booking-section">
    <div className="section-header">
      <input type="radio" name="type" checked />
      <h2>Pick - Up</h2>
    </div>
    <div className="input-row">
      <div className="input-group">
        <label>Locations</label>
        <select>
          <option>Select your city</option>
        </select>
      </div>
      <div className="input-group">
        <label>Date</label>
        <input type="date" />
      </div>
      <div className="input-group">
        <label>Time</label>
        <input type="time" />
      </div>
    </div>
  </div>

  <div className="switch-button">
    <button>↑↓</button>
  </div>

  <div className="booking-section2">
    <div className="section-header">
      <input type="radio" name="type" />
      <h2>Drop - Off</h2>
    </div>
    <div className="input-row">
      <div className="input-group">
        <label>Locations</label>
        <select>
          <option>Select your city</option>
        </select>
      </div>
      <div className="input-group">
        <label>Date</label>
        <input type="date" />
      </div>
      <div className="input-group">
        <label>Time</label>
        <input type="time" />
      </div>
    </div>
  </div>
</div>
    
  )
}

export default BookingSection
