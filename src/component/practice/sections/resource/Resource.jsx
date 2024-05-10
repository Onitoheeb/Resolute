import React from 'react';
import './resource.css';
import {Img} from '/src/singles/image/Img.jsx';

export const Resource = () => {
  return(
    <div className="resources">
      <h3>Resources</h3>
      <div className="material">
        <div className="material-box">
          <Img img="/assets/download.png" />
          <p>Spanish practice</p>
          <a href="" download><i class='bx bx-download'></i></a>
        </div>
        <div className="material-box">
          <Img img="/assets/download.png" />
          <p>Russia practice</p>
          <a href="" download><i class='bx bx-download'></i></a>
        </div>
        <div className="material-box">
          <Img img="/assets/download.png" />
          <p>Chinese practice</p>
          <a href="" download><i class='bx bx-download'></i></a>
        </div>
        <div className="material-box">
          <Img img="/assets/download.png" />
          <p>Japanese practice</p>
          <a href="" download><i class='bx bx-download'></i></a>
        </div>
        <div className="material-box">
          <Img img="/assets/download.png" />
          <p>American practice</p>
          <a href="" download><i class='bx bx-download'></i></a>
        </div>
        <div className="material-box">
          <Img img="/assets/download.png" />
          <p>Indian practice</p>
          <a href="" download><i class='bx bx-download'></i></a>
        </div>
      </div>
    </div>
  )
}