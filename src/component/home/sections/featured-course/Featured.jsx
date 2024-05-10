import React from 'react';
import './featured.css';
import { ProductCard } from '/src/singles/procard/Product.jsx';
import data from './data.js';

export const Featured = () => {
  return (
    <div className="featured-courses">
      <div className="featured-header">
        <h3>Embark on Your Language Journey: Explore Our Featured Courses</h3>
      </div>
      <div className="featured-card-containers">
        {
          data ? data.map((languageData, index) => (
            <ProductCard
              key={index}
              name={languageData.name}
              image={languageData.image}
              author={languageData.author}
              section={languageData.section}
            />
          )) : <div>No data found</div>
        }
      </div>
    </div>
  );
};
