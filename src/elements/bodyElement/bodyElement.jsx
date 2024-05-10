import React, { useState, useEffect } from 'react';
import './bodyElement.css';
import { Img } from '/src/singles/image/Img.jsx'
import { NavLink, Outlet } from 'react-router-dom';
export const BodyElement = () => {
  const [bar, setBar] = useState(false);
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const userBar = document.querySelector(".nav-item ul");
    const overlay = document.querySelector(".overlay");
    if (bar) {
      userBar.style.right = "0";
      overlay.style.scale = "1";
    } else {
      userBar.style.right = "-100vw";
      overlay.style.scale = "0";
    }
  }, [bar])
  const toggleBar = () => {
    if (bar) {
      setBar(false)
    } else {
      setBar(true)
      setMobile(true)
    }
  }
  return (
    <div>
      <nav>
        <div className="brand-logo">
          <NavLink to="/dist/index.html">
            <Img img="/assets/resoluteLogo.png"/>
            <h1>Resolute</h1>
          </NavLink>
        </div>
        <div className="nav-item">
          <ul>
            <li><NavLink to="courses" onClick={mobile ? toggleBar : null}>Courses</NavLink></li>
            <li><NavLink to="practice" onClick={mobile ? toggleBar : null}>Practice</NavLink></li>
            <li><NavLink to="community" onClick={mobile ? toggleBar : null}>Community</NavLink></li>
          </ul>
        </div>
        <i className='bx bx-menu' onClick={toggleBar}></i>
        {
          bar 
          ? (
            null
          )
          : (
            <div className="overlay" onClick={toggleBar}></div>
          )
        }
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}