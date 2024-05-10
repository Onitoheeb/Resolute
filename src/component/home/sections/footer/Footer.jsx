import React from 'react';
import './footer.css';

export const Footer = () => {
  return(
  <div className="footer">
    <div className="footer-header">
      <div className="brand-logo">
        Resonate
      </div>
      <div className="phone">
        <i className='bx bxs-phone' ></i>
        <p>+1 (123) 456-7890</p>
      </div>
      <div className="email">
        <i className='bx bxs-envelope' ></i>
        <p>onitoheeb08@gmail.com</p>
      </div>
    </div>
    <div className="body-two">
      <h4>Connect with us</h4>
      <ul>
        <li><i className='bx bxl-facebook-circle'></i><p>Facebook</p></li>
        <li><i className='bx bxl-twitter' ></i><p>Twitter</p></li>
        <li><i className='bx bxl-instagram-alt' ></i><p>Instagram</p></li>
        <li><i className='bx bxl-linkedin-square' ></i><p>LinkedIn</p></li>
      </ul>
    </div>
    <div className="footer-body">
      <div className="body-one">
        <div className="bx-header">
          <h4>Quick Links</h4>
          <i className='bx bx-link' ></i>
        </div>
        <ul>
          <li>About Us</li>
          <li>Courses</li>
          <li>Blog/Articles</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="newsletter">
        <div className="bx-header">
          <h4>Newsletter</h4>
          <i className='bx bx-news' ></i>
        </div>
        <p>Stay up-to-date with the latest news, courses, and promotions. Sign up for our newsletter!</p>
        <div className="input-box">
          <input 
          type="text"
          placeholder="Input email"
          />
          <button>Join now</button>
        </div>
      </div>
    </div>
    <div className="footer-footer">
      <p>Privacy Policy</p>
      <p>Copyright &copy;  2024 Resonate. All rights reserved.</p>
      <p>Terms & Conditions</p>
    </div>
  </div>
  )
}