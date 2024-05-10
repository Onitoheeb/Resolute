import React from 'react';
import './testimonial.css'
import {Img} from '/src/singles/image/Img.jsx'
export const Testimonial = () => {
  return(
    <div className="testimonial-section">
      <h3>Join Our Language Learning Community: Hear What Our Users Say</h3>
      <div className="testimonial">
        <div className="testimonial-card">
          <div className="testimonial-head">
            <div className="testimonial-img" style={{ backgroundImage: `url(/assets/testimonial/woman-597173_1280.jpg)`}}>
            </div>
          </div>
          <div className="testimonial-body">
            <h4>Jane Doe</h4>
            <p>"I've tried several language learning apps, but Resonate stands out! The interactive lessons and supportive community have made my language journey enjoyable and effective."</p>
            <div className="rating">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-head">
            <div className="testimonial-img" style={{ backgroundImage: `url(/assets/testimonial/portrait-3157821_1280.jpg)`}}>
            </div>
          </div>
          <div className="testimonial-body">
            <h4>John Smith</h4>
            <p>"As a busy professional, Resonate fits seamlessly into my schedule. The structured courses and engaging exercises have significantly improved my language skills. Highly recommended!"</p>
            <div className="rating">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-head">
            <div className="testimonial-img" style={{ backgroundImage: `url(/assets/testimonial/girl-5662873_1280.jpg)`}}>
            </div>
          </div>
          <div className="testimonial-body">
            <h4>Maria Rodriguez</h4>
            <p>"Being part of Resonate community has been amazing. I've made friends while practicing languages, and the diverse range of courses ensures there's always something new to learn."</p>
            <div className="rating">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-head">
            <div className="testimonial-img" style={{ backgroundImage: `url(/assets/testimonial/man-1690965_1280.jpg)`}}>
            </div>
          </div>
          <div className="testimonial-body">
            <h4>David Chen</h4>
            <p>"The personalized approach at Resonate helped me overcome language learning challenges. The intuitive interface and supportive instructors create a positive learning environment."</p>
            <div className="rating">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-head">
            <div className="testimonial-img" style={{ backgroundImage: `url(/assets/testimonial/business-woman-2756210_1280.jpg)`}}>
            </div>
          </div>
          <div className="testimonial-body">
            <h4>Emily Turner</h4>
            <p>"I was hesitant to learn a new language, but Resonate made it fun and accessible. The intuitive interface and supportive instructors create a positive learning environment."</p>
            <div className="rating">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}