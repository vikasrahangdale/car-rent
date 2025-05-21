import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="logo">MORENT</h2>
          <p>Our vision is to provide convenience<br />and help increase your sales business.</p>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h4>About</h4>
            <ul>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>

          <div className="link-column1">
            <h4>Community</h4>
            <ul>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>

          <div className="link-column2">
            <h4>Socials</h4>
            <ul>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2022 MORENT. All rights reserved</p>
        <div className="policy-links">
          <span>Privacy & Policy</span>
          <span className='term'>Terms & Condition</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
