import React from 'react';
import './tutors.css';
import {Img} from '/src/singles/image/Img.jsx';
export const Tutors = () => {
  return(
    <div className="tutors-secton">
      <div className="tutors-header">
        <h3>Top Tutors</h3>
      </div>
      <div className="tutors-body">
        <div className="tutors-child">
          <div className="tutor-img" style={{
            backgroundImage: `url(/assets/tutors/fashion-1623091_1280.jpg)`
          }}>
          </div>
          <p>Julian Chan</p>
        </div>
        <div className="tutors-child">
          <div className="tutor-img" style={{
            backgroundImage: `url(/assets/tutors/costume-1515965_1280-removebg-preview.png)`
          }}>
          </div>
          <p>Mikel Gray</p>
        </div>
        <div className="tutors-child">
          <div className="tutor-img" style={{
            backgroundImage: `url(/assets/tutors/fashion-1623092_1280.jpg)`
          }}>
          </div>
          <p>Lilian Grace</p>
        </div>
        <div className="tutors-child">
          <div className="tutor-img" style={{
            backgroundImage: `url(/assets/tutors/male-1525673_1280.jpg)`
          }}>
          </div>
          <p>Jeremy cole</p>
        </div>
        <div className="tutors-child">
          <div className="tutor-img" style={{
            backgroundImage: `url(/assets/tutors/man-5415573_1280.jpg)`
          }}>
          </div>
          <p>Pual Mason</p>
        </div>
      </div>
    </div>
  )
}