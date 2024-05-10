import React from 'react';
import './product.css';
import {Img} from '/src/singles/image/Img.jsx'
export const ProductCard = (props) => {
  return(
    <div className="product-card">
      <div className="card-image">
        <Img img={props.image}/>
        <div className="title">
          {props.section}
        </div>
      </div>
      <div className="card-body">
        <h4>{props.name}</h4>
        <p>{props.author}</p>
        <div className="rating">
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
        </div>
      </div>
    </div>
  )
}