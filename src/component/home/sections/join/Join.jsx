import React from 'react';
import './join.css';

export const Join = () => {
  return(
    <div className="join-section">
      <h3>Start Your Language Learning Journey Today: Sign Up for Free!</h3>
      <p>Join thousands of learners worldwide who are mastering new languages with our immersive and effective courses. Whether you're a beginner or looking to enhance your skills, our platform offers personalized learning paths tailored to your goals. Don't miss out on the chance to communicate confidently in another language. Sign up now for a free trial!</p>
      <div className="input-box">
        <input 
        type="text"
        placeholder="Input email"
        />
        <button>Join now</button>
      </div>
    </div>
  )
}