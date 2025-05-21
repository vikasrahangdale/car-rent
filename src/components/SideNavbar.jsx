import React from 'react'

const SideNavbar = () => {
  return (
    <div>
      <div className="side-navbar">
        <div className="filter-section">
          <div className="filter-group">
            <h4>Type</h4>
            <label>
              <input type="checkbox" checked readOnly /> Sport (10)
            </label>
            <label>
              <input type="checkbox" checked readOnly /> SUV (12)
            </label>
            <label>
              <input type="checkbox" /> MPV (16)
            </label>
            <label>
              <input type="checkbox" /> Sedan (20)
            </label>
            <label>
              <input type="checkbox" /> Coupe (14)
            </label>
            <label>
              <input type="checkbox" /> Hatchback (14)
            </label>
          </div>

          <div className="filter-group">
            <h4>Capacity</h4>
            <label>
              <input type="checkbox" checked readOnly /> 2 Person (10)
            </label>
            <label>
              <input type="checkbox" /> 4 Person (14)
            </label>
            <label>
              <input type="checkbox" /> 6 Person (12)
            </label>
            <label>
              <input type="checkbox" checked readOnly /> 8 or More (16)
            </label>
          </div>

          <div className="filter-group">
            <h4>Price</h4>
            <input type="range" min="0" max="100" value="80" readOnly />
            <p>Max. $100.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNavbar
